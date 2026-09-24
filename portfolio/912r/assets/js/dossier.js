/* ============================================================
   De Caires Classics: Vehicle Dossier engine
   Fetches the markdown sections for one car, renders them once as
   HTML, and mounts that same HTML either into the responsive web
   page (#dossier-root) or, on request, into a Paged.js pagination
   pass (#print-root) for a print-quality PDF. One render, two
   destinations. See README for how car #2 reuses this file as-is.
   ============================================================ */

(function () {
  'use strict';

  // Canonical section order. Files that don't exist yet are
  // skipped silently, so this list can be filled in ahead of the
  // content being written without breaking the build.
  var SECTION_FILES = [
    '01-cover', '02-brief', '03-as-found', '04-philosophy',
    '05-the-work', '06-choices', '07-materials', '08-specification',
    '09-gallery', '10-colophon'
  ];

  var CAR_LABEL = 'De Caires Classics · 912R';

  var params = new URLSearchParams(window.location.search);
  var PRINT_MODE = params.get('print') === '1';
  var EDITION = params.get('edition') === 'press' ? 'press' : 'full';

  document.documentElement.classList.add(PRINT_MODE ? 'mode-print' : 'mode-web');
  document.documentElement.classList.add('edition-' + EDITION);

  /* --- tiny frontmatter parser --------------------------------- */
  // Body markdown is handled by marked.js; the leading --- block is
  // simple key: value pairs only (no nesting), enough for section
  // metadata (title, running head, press-cut inclusion).
  function splitFrontmatter(raw) {
    var meta = {};
    var body = raw;
    if (raw.slice(0, 3) === '---') {
      var end = raw.indexOf('\n---', 3);
      if (end !== -1) {
        var block = raw.slice(3, end).trim();
        body = raw.slice(end + 4).replace(/^\r?\n/, '');
        block.split('\n').forEach(function (line) {
          var m = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
          if (m) meta[m[1].trim()] = m[2].trim();
        });
      }
    }
    return { meta: meta, body: body };
  }

  /* --- image slot hydration ------------------------------------ */
  var SLOT_ROLE_LABEL = { HERO: 'Hero', DETAIL: 'Detail', PROCESS: 'Process' };

  function renderSlot(el, manifest) {
    var id = el.getAttribute('data-slot');
    var role = (el.getAttribute('data-role') || 'DETAIL').toUpperCase();
    var subject = el.getAttribute('data-subject') || id;
    var entry = manifest && manifest[id];
    el.classList.add('slot');
    el.setAttribute('data-role', role);

    if (entry && entry.filled) {
      el.classList.remove('slot--empty');
      el.innerHTML =
        '<picture class="screen-only">' +
          '<source srcset="images/web/' + entry.file + '.webp" type="image/webp">' +
          '<img src="images/web/' + entry.file + '.jpg" alt="' + escapeAttr(subject) + '" loading="lazy">' +
        '</picture>' +
        '<img class="print-only" src="images/print/' + entry.file + '.jpg" alt="' + escapeAttr(subject) + '">';
    } else {
      el.classList.add('slot--empty');
      el.innerHTML =
        '<span class="slot__label">' +
          '<span class="slot__role">' + (SLOT_ROLE_LABEL[role] || role) + ': ' + escapeHtml(id) + '</span>' +
          '<span class="slot__subject">' + escapeHtml(subject) + '</span>' +
        '</span>';
    }
  }

  function escapeHtml(s) { return String(s).replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); }
  function escapeAttr(s) { return escapeHtml(s).replace(/"/g, '&quot;'); }

  /* --- section renderers ----------------------------------------- */
  function renderCover(meta, bodyHtml) {
    return (
      '<section class="dossier-section section--cover" data-section="01">' +
        '<div class="cover__hero">' + extractSlotMarkup(bodyHtml) + '</div>' +
        '<div class="cover__scrim"></div>' +
        '<div class="cover__content">' +
          '<img class="cover__mark" src="../../images/mini-logo.png" alt="">' +
          '<p class="cover__identity-eyebrow">' + escapeHtml(meta.marque || 'Porsche') + ' · ' + escapeHtml(meta.subtitle || 'Restoration Dossier') + '</p>' +
          '<h1 class="cover__title">' + escapeHtml(meta.model || '912') + '</h1>' +
          '<p class="cover__year">' + escapeHtml(meta.year || '') + '</p>' +
        '</div>' +
      '</section>'
    );
  }

  // Cover markdown only contains the hero slot div; pull it out of
  // the parsed body so it can sit in the absolutely-positioned
  // background layer instead of normal document flow.
  function extractSlotMarkup(bodyHtml) {
    var wrap = document.createElement('div');
    wrap.innerHTML = bodyHtml;
    var slot = wrap.querySelector('[data-slot]');
    return slot ? slot.outerHTML : bodyHtml;
  }

  function renderStandardSection(num, slug, meta, bodyHtml) {
    var noHeader = meta.hide_header === 'true';
    return (
      '<section class="dossier-section section--' + slug + '" data-section="' + num + '">' +
        (meta.running_head && meta.running_head !== 'none'
          ? '<div class="running-head--section">' + escapeHtml(meta.running_head) + '</div>' : '') +
        (noHeader ? '' :
          '<header class="dossier-section__header">' +
            '<p class="dossier-section__eyebrow">' + num + '</p>' +
            '<h2 class="dossier-section__title">' + escapeHtml(meta.title || '') + '</h2>' +
            '<div class="dossier-section__rule"></div>' +
          '</header>') +
        '<div class="prose">' + bodyHtml + '</div>' +
      '</section>'
    );
  }

  /* --- boot --------------------------------------------------------- */
  fetch('images/manifest.json')
    .then(function (r) { return r.ok ? r.json() : {}; })
    .catch(function () { return {}; })
    .then(loadSections);

  function loadSections(imageManifest) {
    var fetches = SECTION_FILES.map(function (name, idx) {
      var num = String(idx + 1).padStart(2, '0');
      return fetch('content/' + name + '.md').then(function (r) {
        return r.ok ? r.text() : null;
      }).catch(function () { return null; }).then(function (raw) {
        return raw === null ? null : { num: num, slug: name.replace(/^\d+-/, ''), raw: raw };
      });
    });

    return Promise.all(fetches).then(function (results) {
      var html = '';
      var chromeInjected = false;

      // The running-head/folio "running" elements must live inside the
      // first page-numbered section, not before it: Paged.js allocates
      // a page for any content preceding a named-page (@page cover)
      // break, and the `.section--cover + .dossier-section` counter
      // reset relies on cover and section 02 being adjacent siblings.
      var globalChrome =
        '<div class="running-head--brand">' + escapeHtml(CAR_LABEL) + '</div>' +
        '<div class="print-folio"><span class="print-folio__num"></span></div>';

      results.filter(Boolean).forEach(function (section) {
        var parsed = splitFrontmatter(section.raw);
        var meta = parsed.meta;
        if (EDITION === 'press' && meta.press !== 'true') return;
        var bodyHtml = window.marked ? window.marked.parse(parsed.body) : parsed.body;

        var wrap = document.createElement('div');
        wrap.innerHTML = bodyHtml;
        wrap.querySelectorAll('[data-slot]').forEach(function (el) { renderSlot(el, imageManifest); });
        bodyHtml = wrap.innerHTML;

        if (section.slug === 'cover') {
          html += renderCover(meta, bodyHtml);
        } else {
          var sectionHtml = renderStandardSection(section.num, section.slug, meta, bodyHtml);
          if (!chromeInjected) {
            sectionHtml = sectionHtml.replace('>', '>' + globalChrome, 1);
            chromeInjected = true;
          }
          html += sectionHtml;
        }
      });

      mount(html);
    });
  }

  function mount(html) {
    var root = document.getElementById('dossier-root');
    root.innerHTML = html;

    if (!PRINT_MODE) return;
    runPrintPass(html);
  }

  /* --- Paged.js pass -------------------------------------------------- */
  function runPrintPass(html) {
    document.getElementById('dossier-root').style.display = 'none';
    var printRoot = document.getElementById('print-root');
    printRoot.style.display = 'block';

    // The core build (not the polyfill) is used deliberately: the
    // polyfill build unconditionally constructs a throwaway
    // Previewer/Chunker at load time, even with PagedConfig.auto
    // false, and that side effect injects a stray default
    // @page{size:letter} rule that fights with the A4 page size
    // declared in dossier-print.css, silently inflating the PDF
    // with a near-blank extra page. The core build exposes the same
    // classes with no auto-run behaviour.
    var script = document.createElement('script');
    script.src = 'https://unpkg.com/pagedjs@0.4.3/dist/paged.js';
    script.onload = function () {
      var previewer = new window.Paged.Previewer();
      previewer.preview(html, ['../../css/style.css', 'assets/css/dossier-print.css'], printRoot)
        .then(function () {
          document.body.setAttribute('data-paged-ready', 'true');
        })
        .catch(function (err) {
          console.error('Paged.js pagination failed:', err);
        });
    };
    document.head.appendChild(script);
  }
})();
