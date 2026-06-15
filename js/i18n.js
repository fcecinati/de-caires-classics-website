/* De Caires Classics — i18n (i18next) */
(function () {
  'use strict';

  var resources = {
    en: {
      translation: {
        nav: {
          home: 'Home',
          services: 'Services',
          portfolio: 'Portfolio',
          about: 'About',
          contact: 'Contact'
        },
        footer: {
          copy: 'De Caires Classics — Maremma, Tuscany — <a href="mailto:info@decairesclassics.com" style="color: inherit;">info@decairesclassics.com</a>'
        },
        home: {
          meta: {
            title: 'De Caires Classics — Classic Car Restoration, Maremma, Tuscany',
            description: 'Classic car restoration studio based in the Maremma, Tuscany. Mechanical rebuilds, bodywork, interior retrimming and bespoke engineering. Every car has a story. We make sure it continues.'
          },
          scroll: 'Scroll',
          tagline: 'Every car has a story. We make sure it continues.',
          intro: 'De Caires Classics is a restoration studio based in the Maremma, Tuscany. We work on classic cars of all origins: complete mechanical rebuilds, bodywork, interior retrimming, and bespoke engineering. Each project begins with a conversation.',
          services: { eyebrow: 'What we do', heading: 'Services', link: 'Full services' },
          service: {
            mechanical: { title: 'Mechanical Restoration', body: 'Engine rebuilds, gearboxes, brakes, suspension, electrical systems. Every component inspected. Rebuilt or replaced where necessary.' },
            bodywork:   { title: 'Bodywork & Paint',      body: 'Panel repair, rust treatment, preparation and paint matching. The correct colour, applied correctly. Not approximated.' },
            interior:   { title: 'Interior Retrimming',   body: 'Upholstery, door cards, carpeting, dashboard restoration. Period-correct materials where possible. No shortcuts on the finishing.' },
            bespoke:    { title: 'Bespoke Projects',      body: 'Custom modifications, sympathetic upgrades, one-off engineering work. If you have a specific project in mind, the first step is a conversation.' },
            cad:        { title: 'CAD Design & 3D Printing', body: 'Parts that went out of production decades ago, reproduced in-house. Exact measurements, tested and refined until they are right.' }
          },
          portfolio: {
            eyebrow: 'Selected work',
            heading: 'Portfolio',
            link: 'View all work',
            tag: { inprogress: 'In Progress', custom: 'Custom Build', restoration: 'Restoration' }
          },
          about: {
            eyebrow: 'About',
            heading: 'Umberto De Caires',
            p1: 'Trained in Venezuela on racing mechanics. Bodywork and paint in Italy. Years on British classics in Bristol: Jaguars above all, but also Porsche, Alfa Romeo, Maserati, Triumph, MG, Aston Martin.',
            p2: 'Now based in the Maremma. The same attention to detail. A longer list of experience behind it.',
            link: 'Full story'
          },
          cta: {
            heading: 'Start with a conversation.',
            body: 'Every restoration begins the same way. Tell us about the car, its history, and what you have in mind.',
            link: 'Get in touch'
          }
        },
        services: {
          meta: {
            title: 'Services — De Caires Classics',
            description: 'Classic car restoration services in Tuscany: mechanical rebuilds, bodywork and paint, interior retrimming, and bespoke engineering projects. Based in the Maremma.'
          },
          eyebrow: 'What we do',
          heading: 'Services',
          intro: 'Each restoration begins with a conversation. We need to understand the car’s history, its condition, and what the owner is hoping to achieve, before any work begins.',
          mechanical: {
            heading: 'Mechanical Restoration',
            p1: 'We cover the full range of mechanical work: routine maintenance and servicing, fault diagnosis and repair, engine rebuilds, gearbox rebuilds, and suspension rebuilds.',
            p2: 'For owners who want more from their cars, we carry out tune-ups, performance upgrades, and racing modifications. Road use or track use, we set the car up for how it will actually be driven.'
          },
          bodywork: {
            heading: 'Bodywork & Paint',
            p1: 'We strip the body to bare metal, re-preparing chassis and panels from scratch before any work builds up. Structural repairs, fabrication, and metalworking correct whatever the car needs at foundation level.',
            p2: 'Re-chroming restores the brightwork. Body panels and accessories are refitted with care for fit and alignment.',
            p3: 'The paintwork is the result of all that preparation. We carry out full resprays and paint repairs, matched to period colours where required. When it is done, the finish is indistinguishable from new.'
          },
          interior: {
            heading: 'Interior Retrimming',
            p1: 'Upholstery, door cards, carpeting, headlining, and dashboard restoration. We work with period-correct materials where possible: the right leather, the right cloth, the right finish for the car and its era.',
            p2: 'An interior tells you as much about a restoration’s quality as the paint does. It is not a detail to address at the end, but a discipline in itself.'
          },
          bespoke: {
            heading: 'Bespoke Projects',
            p1: 'Custom modifications, sympathetic upgrades, one-off engineering work. We have worked on motorcycles as well as cars: custom builds, engine swaps, and modifications that require fabrication from scratch.',
            p2: 'If you have a project that does not fit a standard category, bring it to us. The first conversation costs nothing. If we can help, we will tell you how. If we cannot, we will tell you that too.'
          },
          cad: {
            heading: 'CAD Design & 3D Printing',
            p1: 'Parts for classic cars go out of production. A rubber grommet, a trim clip, a bracket: components that held a car together in 1968 and have not been manufactured since. Sourcing them through specialists takes months and costs disproportionately. Sometimes they do not exist at any price.',
            p2: 'Umberto designs replacements in CAD, working from original drawings where they exist or from physical measurement where they do not, and produces them in-house on a 3D printer. The results are tested and refined until they are right.',
            p3: 'Small components, exactly reproduced. A problem that used to stop a restoration cold, solved.'
          },
          cta: { heading: 'Discuss your project', body: 'Consultations by appointment. Based in the Maremma, available across Tuscany and beyond.', link: 'Get in touch' }
        },
        portfolio: {
          meta: {
            title: 'Portfolio — De Caires Classics',
            description: 'Classic car and motorbike restoration portfolio. Complete rebuilds, bodywork, and bespoke projects. De Caires Classics, Maremma, Tuscany.'
          },
          eyebrow: 'Selected work',
          heading: 'Portfolio',
          intro: 'Each project documented from the first assessment to the final drive. The process is the story.',
          label: { vehicle: 'Vehicle', scope: 'Scope', status: 'Status' },
          status: { inprogress: 'In Progress', completed: 'Completed' },
          scope: { full: 'Full Restoration', custom: 'Restoration & Custom Build' },
          p912r: {
            desc1: 'R is for Ruggine: Italian for rust. The car arrived heavily corroded and long neglected. The scope of the restoration expanded as the work progressed, and eventually it covered everything: chassis, engine, gearbox, brakes, suspension, bodywork, interior, every fitting and detail.',
            desc2: 'The 912 has been rebuilt with fidelity to its 1960s character, with considered improvements to performance. The goal was not a concours reconstruction but a car built to be driven, perhaps better than it ever was.',
            desc3: 'Work is ongoing. Expected completion: 2026.',
            phase2019: '2019 — Arrival',
            phase2023: '2023 — Work in Progress',
            phase2025: '2025 — Current'
          },
          harley:   { desc: 'A homage to where it all started. Umberto began his career working on motorcycles, and this Harley restoration and custom build draws on those early years. The paintwork and detailing represent the standard we hold on every project, whatever the vehicle.' },
          etype:    { desc: 'A Jaguar E-Type 4.2. Mechanical work and restoration. Full documentation to follow.' },
          bmw:      { desc: 'A BMW 325i. Mechanical and service work. Full documentation to follow.' },
          cortina:  { desc: 'A Lotus Cortina. Documentation in preparation.' },
          elise:    { desc: 'A Lotus Elise. Documentation in preparation.' },
          mgb:      { desc: 'An MGB GT. Documentation in preparation.' },
          wolseley: { desc: 'A Wolseley Hornet Special. Documentation in preparation.' },
          cta: { heading: 'Have a project in mind?', body: 'The first step is a conversation. Tell us about the car.', link: 'Get in touch' }
        },
        about: {
          meta: {
            title: 'About — De Caires Classics',
            description: 'Umberto De Caires — classic car restoration specialist based in the Maremma, Tuscany. Trained in Venezuela, experienced in Italy and Bristol, now working across Tuscany.'
          },
          eyebrow: 'The studio',
          heading: 'Umberto De Caires',
          p1: 'Umberto De Caires grew up in his father’s workshop. His father, an aerospace engineer with a precise mind and hands that could build anything, brought him into projects from an early age. Scale models, engines, mechanisms. The habit of taking things apart and understanding them properly formed early.',
          p2: 'He trained as a mechanic in Venezuela, through a course focused on racing, where tolerances matter and shortcuts cost races. He moved into custom motorbike work, then to Italy for bodywork and paintwork. Each discipline added a layer: engine, chassis, surface, finish.',
          p3: 'Bristol came next. Years working on classic vehicles: Jaguars above all, but also Porsche, Alfa Romeo, Maserati, Triumph, MG, Aston Martin. Working independently, for people who cared about what they drove.',
          p4: 'De Caires Classics is now based in the Maremma, Tuscany. The same approach. A longer list of experience behind it.',
          exp: { eyebrow: 'Experience', heading: 'Marques worked on' },
          british:     { title: 'British Classics', body: 'Jaguar, Triumph, MG, Aston Martin, Land Rover. Particular depth of experience with Jaguar: XK, E-Type, XJ, and Mk series.' },
          italian:     { title: 'Italian Classics', body: 'Alfa Romeo, Fiat, Maserati, Lancia. Cars that reward careful work with a character no modern vehicle replicates.' },
          european:    { title: 'European & Other', body: 'Porsche, Mercedes, and others. The approach is the same regardless of nationality: understand the car, work to its standard, not beneath it.' },
          motorcycles: { title: 'Motorcycles', body: 'Custom builds and modifications. Mechanical and cosmetic work. A different discipline. The same attention to detail.' },
          philo: {
            eyebrow: 'Philosophy',
            heading: 'How we work',
            p1: 'Every restoration begins with a conversation. Before any work starts, we need to understand the car: its history, its condition, what it has been through, and what the owner hopes to achieve. That conversation shapes everything that follows.',
            p2: 'We do not promise timelines we cannot keep, or quote prices without understanding the scope. A car that looks presentable may be concealing significant structural work. We assess honestly and report honestly. The conversation after the assessment is as important as the assessment itself.',
            p3: 'The work is done to a standard we would accept on our own vehicles. That is the only measure that makes sense.'
          },
          cta: { heading: 'Consultations by appointment.', body: 'Based in the Maremma. Available across Tuscany and beyond.', link: 'Get in touch' }
        },
        contact: {
          meta: {
            title: 'Contact — De Caires Classics',
            description: 'Contact De Caires Classics. Classic car restoration studio in the Maremma, Tuscany. Consultations by appointment.'
          },
          eyebrow: 'Get in touch',
          heading: 'Contact',
          intro: 'Every restoration begins with a conversation. Tell us about the car: its make, model, history, and what you have in mind. We will respond to arrange a consultation.',
          note: 'Consultations by appointment — Maremma, Tuscany',
          form: {
            eyebrow: 'Write to us directly',
            heading: 'Message via WhatsApp',
            intro: 'Fill in the details below and we will open WhatsApp with your message pre-written. You review it and send.',
            name:    { label: 'Your name',    placeholder: 'First name' },
            car:     { label: 'The vehicle',  placeholder: 'Make, model, year' },
            message: { label: 'What you need', placeholder: 'Tell us about the car and what you have in mind' },
            submit: 'Open WhatsApp',
            waGreeting: 'Hello',
            waName: 'my name is',
            waCar:  'I am interested in work on my'
          },
          help: {
            eyebrow: 'When you write',
            heading: 'What helps us respond well',
            p1: 'The more we know about the car before the first conversation, the more useful that conversation will be. If you can, include: the make, model, and year; a brief history of what you know about it; the current condition as you understand it; and what outcome you are hoping for.',
            p2: 'Photographs are always useful. Engine bay, underside, bodywork, interior: whatever you have. We do not need professional photographs; honest ones are more useful.',
            p3: 'There is no standard quote we can give without seeing the car. But the first conversation will give us both a clearer picture of whether this is the right project for us.'
          }
        }
      }
    },

    it: {
      translation: {
        nav: {
          home: 'Home',
          services: 'Servizi',
          portfolio: 'Portfolio',
          about: 'Chi siamo',
          contact: 'Contatti'
        },
        footer: {
          copy: 'De Caires Classics — Maremma, Toscana — <a href="mailto:info@decairesclassics.com" style="color: inherit;">info@decairesclassics.com</a>'
        },
        home: {
          meta: {
            title: 'De Caires Classics — Restauro Auto d’Epoca, Maremma, Toscana',
            description: 'Atelier di restauro auto d’epoca in Maremma, Toscana. Revisioni meccaniche, carrozzeria, rivestimenti interni e progettazioni su misura. Ogni vettura ha una storia. Noi ci assicuriamo che continui.'
          },
          scroll: 'Scorri',
          tagline: 'Ogni vettura ha una storia. Noi ci assicuriamo che continui.',
          intro: 'De Caires Classics è un atelier di restauro situato in Maremma, in Toscana. Lavoriamo su auto d’epoca di ogni provenienza: restauri meccanici completi, carrozzeria, rivestimenti interni e progettazioni su misura. Ogni progetto inizia con una conversazione.',
          services: { eyebrow: 'Cosa facciamo', heading: 'Servizi', link: 'Tutti i servizi' },
          service: {
            mechanical: { title: 'Restauro Meccanico',          body: 'Revisione motori, cambi, freni, sospensioni, impianti elettrici. Ogni componente ispezionato. Ricostruito o sostituito dove necessario.' },
            bodywork:   { title: 'Carrozzeria e Verniciatura',   body: 'Riparazione pannelli, trattamento ruggine, preparazione e abbinamento colore. Il colore giusto, applicato correttamente. Senza approssimazioni.' },
            interior:   { title: 'Rivestimenti Interni',         body: 'Tappezzeria, pannelli porta, moquette, restauro cruscotto. Materiali d’epoca dove possibile. Nessuna scorciatoia nelle finiture.' },
            bespoke:    { title: 'Progetti Su Misura',           body: 'Modifiche personalizzate, migliorie mirate, lavori ingegneristici unici. Se hai un progetto specifico in mente, il primo passo è una conversazione.' },
            cad:        { title: 'Progettazione CAD e Stampa 3D', body: 'Componenti fuori produzione da decenni, riprodotti internamente. Misure esatte, testati e perfezionati finché non sono corretti.' }
          },
          portfolio: {
            eyebrow: 'Lavori selezionati',
            heading: 'Portfolio',
            link: 'Vedi tutti i lavori',
            tag: { inprogress: 'In Corso', custom: 'Build Personalizzato', restoration: 'Restauro' }
          },
          about: {
            eyebrow: 'Chi siamo',
            heading: 'Umberto De Caires',
            p1: 'Formatosi in Venezuela nella meccanica da corsa. Carrozzeria e verniciatura in Italia. Anni sulle classiche britanniche a Bristol: Jaguar soprattutto, ma anche Porsche, Alfa Romeo, Maserati, Triumph, MG, Aston Martin.',
            p2: 'Ora in Maremma. La stessa attenzione al dettaglio. Una lista di esperienze ancora più lunga alle spalle.',
            link: 'La storia completa'
          },
          cta: {
            heading: 'Inizia con una conversazione.',
            body: 'Ogni restauro inizia allo stesso modo. Parlaci della vettura, della sua storia e di ciò che hai in mente.',
            link: 'Contattaci'
          }
        },
        services: {
          meta: {
            title: 'Servizi — De Caires Classics',
            description: 'Servizi di restauro auto d’epoca in Toscana: revisioni meccaniche, carrozzeria e verniciatura, rivestimenti interni e progetti su misura. In Maremma.'
          },
          eyebrow: 'Cosa facciamo',
          heading: 'Servizi',
          intro: 'Ogni restauro inizia con una conversazione. Prima di iniziare qualsiasi lavoro, dobbiamo comprendere la storia della vettura, le sue condizioni e gli obiettivi del proprietario.',
          mechanical: {
            heading: 'Restauro Meccanico',
            p1: 'Copriamo l’intera gamma dei lavori meccanici: manutenzione ordinaria, diagnosi e riparazione guasti, revisione motori, revisione cambi e sospensioni.',
            p2: 'Per i proprietari che vogliono di più dalle loro vetture, eseguiamo messe a punto, aggiornamenti prestazionali e modifiche da competizione. Per uso su strada o in pista, prepariamo l’auto per come verrà effettivamente guidata.'
          },
          bodywork: {
            heading: 'Carrozzeria e Verniciatura',
            p1: 'Portiamo la scocca al metallo vivo, ripreparando telaio e pannelli da zero prima di procedere. Riparazioni strutturali, lavorazione e costruzione metallica correggono ciò di cui la vettura ha bisogno alle fondamenta.',
            p2: 'La ricromatura ripristina le parti lucide. Pannelli e accessori vengono rimontati con cura per adattamento e allineamento.',
            p3: 'La verniciatura è il risultato di tutta quella preparazione. Eseguiamo riverniciature complete e riparazioni, abbinate ai colori d’epoca dove richiesto. Quando è finita, la finitura è indistinguibile dal nuovo.'
          },
          interior: {
            heading: 'Rivestimenti Interni',
            p1: 'Tappezzeria, pannelli porta, moquette, cielo e restauro cruscotto. Lavoriamo con materiali d’epoca dove possibile: il cuoio giusto, il tessuto giusto, la finitura giusta per la vettura e la sua epoca.',
            p2: 'Un interno racconta tanto sulla qualità di un restauro quanto la verniciatura. Non è un dettaglio da affrontare alla fine, ma una disciplina a sé stante.'
          },
          bespoke: {
            heading: 'Progetti Su Misura',
            p1: 'Modifiche personalizzate, migliorie mirate, lavori ingegneristici unici. Abbiamo lavorato sia su motociclette che su automobili: build personalizzati, sostituzioni di motori e modifiche che richiedono costruzione da zero.',
            p2: 'Se hai un progetto che non rientra in una categoria standard, portalo da noi. La prima conversazione non costa nulla. Se possiamo aiutarti, ti diremo come. Se non possiamo, te lo diremo ugualmente.'
          },
          cad: {
            heading: 'Progettazione CAD e Stampa 3D',
            p1: 'I ricambi per auto classiche cessano la produzione. Un gommino di gomma, una clip di rivestimento, una staffa: componenti che tenevano insieme un’auto nel 1968 e che non vengono più prodotti. Reperirli tramite specialisti richiede mesi e ha costi sproporzionati. A volte non esistono a nessun prezzo.',
            p2: 'Umberto progetta i sostituti in CAD, lavorando dai disegni originali dove esistono o dalle misure fisiche dove non esistono, e li produce internamente con una stampante 3D. I risultati vengono testati e perfezionati finché non sono corretti.',
            p3: 'Componenti piccoli, riprodotti con precisione. Un problema che fermava il restauro, risolto.'
          },
          cta: { heading: 'Parla del tuo progetto', body: 'Consulenze su appuntamento. In Maremma, disponibili in tutta la Toscana e oltre.', link: 'Contattaci' }
        },
        portfolio: {
          meta: {
            title: 'Portfolio — De Caires Classics',
            description: 'Portfolio di restauro auto d’epoca e motociclette. Ricostruzioni complete, carrozzeria e progetti su misura. De Caires Classics, Maremma, Toscana.'
          },
          eyebrow: 'Lavori selezionati',
          heading: 'Portfolio',
          intro: 'Ogni progetto documentato dalla prima valutazione al collaudo finale. Il processo è la storia.',
          label: { vehicle: 'Vettura', scope: 'Ambito', status: 'Stato' },
          status: { inprogress: 'In Corso', completed: 'Completato' },
          scope: { full: 'Restauro Completo', custom: 'Restauro e Build Personalizzato' },
          p912r: {
            desc1: 'R sta per Ruggine. La vettura è arrivata pesantemente corrosa e a lungo trascurata. Il campo di intervento del restauro si è ampliato man mano che i lavori procedevano, finendo per coprire tutto: telaio, motore, cambio, freni, sospensioni, carrozzeria, interni, ogni raccordo e dettaglio.',
            desc2: 'La 912 è stata ricostruita con fedeltà al carattere degli anni ’60, con miglioramenti ragionati alle prestazioni. L’obiettivo non era una ricostruzione da concorso ma un’auto costruita per essere guidata, forse meglio di quanto non sia mai stata.',
            desc3: 'I lavori sono in corso. Completamento previsto: 2026.',
            phase2019: '2019 — Arrivo',
            phase2023: '2023 — Lavori in Corso',
            phase2025: '2025 — Attuale'
          },
          harley:   { desc: 'Un omaggio alle origini. Umberto ha iniziato la sua carriera lavorando sulle motociclette, e questo restauro e build personalizzato della Harley attinge a quegli anni iniziali. La verniciatura e i dettagli rappresentano lo standard che manteniamo su ogni progetto, qualunque sia il veicolo.' },
          etype:    { desc: 'Una Jaguar E-Type 4.2. Lavori meccanici e restauro. Documentazione completa in preparazione.' },
          bmw:      { desc: 'Una BMW 325i. Lavori meccanici e di manutenzione. Documentazione completa in preparazione.' },
          cortina:  { desc: 'Una Lotus Cortina. Documentazione in preparazione.' },
          elise:    { desc: 'Una Lotus Elise. Documentazione in preparazione.' },
          mgb:      { desc: 'Una MGB GT. Documentazione in preparazione.' },
          wolseley: { desc: 'Una Wolseley Hornet Special. Documentazione in preparazione.' },
          cta: { heading: 'Hai un progetto in mente?', body: 'Il primo passo è una conversazione. Parlaci della vettura.', link: 'Contattaci' }
        },
        about: {
          meta: {
            title: 'Chi siamo — De Caires Classics',
            description: 'Umberto De Caires — specialista nel restauro di auto d’epoca in Maremma, Toscana. Formatosi in Venezuela, con esperienza in Italia e a Bristol, ora lavora in tutta la Toscana.'
          },
          eyebrow: 'Il laboratorio',
          heading: 'Umberto De Caires',
          p1: 'Umberto De Caires è cresciuto nell’officina di suo padre. Suo padre, un ingegnere aerospaziale con una mente precisa e mani capaci di costruire qualsiasi cosa, lo ha introdotto ai progetti fin da piccolo. Modellini, motori, meccanismi. L’abitudine di smontare le cose e capirle a fondo si è formata presto.',
          p2: 'Si è formato come meccanico in Venezuela, attraverso un corso orientato alle competizioni, dove le tolleranze contano e le scorciatoie costano gare. È poi passato al lavoro su motociclette personalizzate, poi in Italia per la carrozzeria e la verniciatura. Ogni disciplina ha aggiunto uno strato: motore, telaio, superficie, finitura.',
          p3: 'Poi Bristol. Anni di lavoro su veicoli classici: Jaguar soprattutto, ma anche Porsche, Alfa Romeo, Maserati, Triumph, MG, Aston Martin. Lavorando in autonomia, per persone che si preoccupavano di ciò che guidavano.',
          p4: 'De Caires Classics è ora in Maremma, Toscana. Lo stesso approccio. Una lista di esperienze ancora più lunga alle spalle.',
          exp: { eyebrow: 'Esperienza', heading: 'Marchi lavorati' },
          british:     { title: 'Classiche Britanniche', body: 'Jaguar, Triumph, MG, Aston Martin, Land Rover. Particolare profondità di esperienza con Jaguar: serie XK, E-Type, XJ e Mk.' },
          italian:     { title: 'Classiche Italiane',    body: 'Alfa Romeo, Fiat, Maserati, Lancia. Vetture che ricompensano il lavoro accurato con un carattere che nessun veicolo moderno riesce a replicare.' },
          european:    { title: 'Europee e altre',        body: 'Porsche, Mercedes e altre. L’approccio è lo stesso indipendentemente dalla nazionalità: capire la vettura, lavorare al suo standard, non al di sotto.' },
          motorcycles: { title: 'Motociclette',           body: 'Build personalizzati e modifiche. Lavori meccanici ed estetici. Una disciplina diversa. La stessa attenzione al dettaglio.' },
          philo: {
            eyebrow: 'Filosofia',
            heading: 'Come lavoriamo',
            p1: 'Ogni restauro inizia con una conversazione. Prima che inizi qualsiasi lavoro, dobbiamo capire la vettura: la sua storia, le sue condizioni, ciò che ha attraversato e ciò che il proprietario spera di ottenere. Quella conversazione definisce tutto ciò che segue.',
            p2: 'Non promettiamo tempistiche che non possiamo rispettare, né offriamo prezzi senza capire il campo di intervento. Un’auto dall’aspetto presentabile potrebbe nascondere lavori strutturali significativi. Valutiamo onestamente e riferiamo onestamente. La conversazione dopo la valutazione è importante quanto la valutazione stessa.',
            p3: 'Il lavoro viene eseguito secondo uno standard che accetteremmo sulle nostre stesse vetture. Questa è l’unica misura che abbia senso.'
          },
          cta: { heading: 'Consulenze su appuntamento.', body: 'In Maremma. Disponibili in tutta la Toscana e oltre.', link: 'Contattaci' }
        },
        contact: {
          meta: {
            title: 'Contatti — De Caires Classics',
            description: 'Contatta De Caires Classics. Atelier di restauro auto d’epoca in Maremma, Toscana. Consulenze su appuntamento.'
          },
          eyebrow: 'Contattaci',
          heading: 'Contatti',
          intro: 'Ogni restauro inizia con una conversazione. Parlaci della vettura: marca, modello, storia e cosa hai in mente. Ti risponderemo per concordare una consulenza.',
          note: 'Consulenze su appuntamento — Maremma, Toscana',
          form: {
            eyebrow: 'Scrivici direttamente',
            heading: 'Messaggio via WhatsApp',
            intro: 'Compila i campi qui sotto e apriremo WhatsApp con il tuo messaggio già scritto. Controllalo e invialo.',
            name:    { label: 'Il tuo nome',         placeholder: 'Nome' },
            car:     { label: 'Il veicolo',           placeholder: 'Marca, modello, anno' },
            message: { label: 'Di cosa hai bisogno',  placeholder: 'Raccontaci della vettura e di cosa hai in mente' },
            submit: 'Apri WhatsApp',
            waGreeting: 'Salve',
            waName: 'mi chiamo',
            waCar:  'Sono interessato a un lavoro sulla mia'
          },
          help: {
            eyebrow: 'Quando scrivi',
            heading: 'Cosa ci aiuta a rispondere meglio',
            p1: 'Più sappiamo della vettura prima della prima conversazione, più utile sarà quella conversazione. Se puoi, includi: marca, modello e anno; una breve storia di ciò che ne sai; le condizioni attuali come le intendi; e il risultato che speri di ottenere.',
            p2: 'Le fotografie sono sempre utili. Vano motore, fondo scocca, carrozzeria, interni: qualsiasi cosa tu abbia. Non ci servono fotografie professionali; quelle oneste sono più utili.',
            p3: 'Non esiste un preventivo standard che possiamo dare senza vedere la vettura. Ma la prima conversazione darà a entrambi un quadro più chiaro se questo sia il progetto giusto per noi.'
          }
        }
      }
    }
  };

  // Detect language: localStorage override > domain > default 'en'
  var saved = localStorage.getItem('dcc-lang');
  var isItDomain = /(?:^|\.)decairesclassics\.it$/.test(window.location.hostname);
  var lang = (saved === 'en' || saved === 'it') ? saved : (isItDomain ? 'it' : 'en');

  i18next.init({
    lng: lang,
    fallbackLng: 'en',
    resources: resources
  }, function (err, t) {
    applyTranslations(t);
    updateToggle(lang);
    wireForm(t);
  });

  function applyTranslations(t) {
    document.documentElement.lang = i18next.language;

    var page = document.documentElement.getAttribute('data-page');
    if (page) {
      var title = t(page + '.meta.title');
      if (title) document.title = title;
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        var desc = t(page + '.meta.description');
        if (desc) metaDesc.setAttribute('content', desc);
      }
    }

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (val && val !== key) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var val = t(key);
      if (val && val !== key) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var val = t(key);
      if (val && val !== key) el.placeholder = val;
    });
  }

  function updateToggle(lang) {
    var toggle = document.getElementById('lang-toggle');
    if (!toggle) return;
    toggle.querySelectorAll('.lang-toggle__option').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  function wireForm(t) {
    var form = document.getElementById('wa-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('wa-name').value.trim();
      var car  = document.getElementById('wa-car').value.trim();
      var msg  = document.getElementById('wa-message').value.trim();
      var text = t('contact.form.waGreeting');
      if (name) text += ', ' + t('contact.form.waName') + ' ' + name;
      text += '.';
      if (car)  text += ' ' + t('contact.form.waCar') + ' ' + car + '.';
      if (msg)  text += ' ' + msg;
      window.open('https://wa.me/447305892987?text=' + encodeURIComponent(text), '_blank');
    });
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.lang-toggle__option');
    if (!btn) return;
    var newLang = btn.getAttribute('data-lang');
    if (!newLang || newLang === i18next.language) return;
    localStorage.setItem('dcc-lang', newLang);
    location.reload();
  });

})();
