# 912R: Image Manifest / Shot List

Every image position in the dossier is a named slot. Until a photograph is
supplied, the slot renders as a placeholder (Slate Grey field, thin gold
rule, small caps label) so the document reads as deliberate even before
photography exists.

To fill a slot: drop the correctly named file into `images/masters/`, run
`scripts/process-images.*` (see the script for the exact command), and flip
`"filled": true` for that slot in `images/manifest.json`. The derivatives
land in `images/print/` and `images/web/` automatically; nothing in
`content/*.md` needs to change.

Roles and their fixed aspect ratios:

| Role    | Aspect ratio | Use                                            |
|---------|-------------|--------------------------------------------------|
| HERO    | 3:2 landscape | Cover, full-width feature images               |
| DETAIL  | 4:5 portrait  | Close, considered detail shots (max 70mm print width) |
| PROCESS | 4:3 landscape | Workshop / in-progress documentation           |

This list covers the slots that exist so far. Section 02 is a data grid by
design (one page, scannable) and carries no image. A chassis-plate detail
shot belongs in Section 03 (As Found) instead, once that section is built.
This will grow as sections 03–10 are built.

| Slot ID | Role | Section | Intended subject | Filled |
|---|---|---|---|---|
| `01-hero-cover` | HERO | 01 Cover | 912R, front three-quarter, low light, workshop or open road | No |
