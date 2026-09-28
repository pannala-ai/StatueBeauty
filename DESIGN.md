# Statue Beauty · design decision

**Mood:** a gallery after hours. Warm plaster and travertine under one raking light; the
name and the menu surface out of deep shadow. Her idea is that the beauty is already there
and the treatment uncovers it, so the page is mostly empty wall and a single lit column.

**Type:** Marcellus for headings: flared Roman inscriptional letters, the kind cut into a
statue's plinth. Hanken Grotesk for everything else: plain, exact museum-label text, so
prices and hours read like a placard. Both self-hosted in `public/fonts` (49KB).

**Accent:** raw sienna `#845530`, the warm vein in travertine. It's used for booking
buttons, step numerals and today's hours, and nothing else. `#cfa57f` is the same hue,
used only on dark backgrounds.

**Not this:** blush pink, rose gold, script fonts, arches, towel-turban stock photos.

## Where things live

- `src/content.ts`: every word on the page. Edit copy here.
- `src/hours.ts`: hours and the open/closed line (always Issaquah time).
- `src/Column.tsx`: the fluted column in the hero, drawn in SVG.

## Before sending

- [ ] Add reviewer first names in `content.ts` → `proof.reviews[].name`
- [ ] Remove `hero.seasonal` and `makeup.highSchool` when high school pricing ends
- [ ] On my phone: tap Book, tap the phone number
