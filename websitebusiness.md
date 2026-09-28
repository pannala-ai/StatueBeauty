# websitebusiness.md

Rules for building spec sites for local Issaquah businesses. Drop this in the repo root
so Claude Code reads it before every build.

---

## What this is

I build a finished website for a local business **before** they ask for one, then show it
to them. $400 flat. They own the domain. I am 18 and local.

The site is not a portfolio piece. It is a sales tool. Every decision below serves one
goal: the owner looks at their phone for ten seconds and thinks *that's my shop*.

---

## Who actually visits these sites

Not the owner. Not other designers. **A person standing on a sidewalk, on a phone, with
one of three questions:**

1. Are they open right now?
2. How much / do they do the thing I need?
3. How do I book?

Everything else on the page is decoration. If a section doesn't serve one of those three,
cut it.

---

## Hard rules

**Never rebuild their booking.** Every one of these businesses already pays for
GlossGenius, Square, or similar, and they like it. The site links out to their existing
booking page with a big button. Touching their booking system kills the sale — it turns a
$400 gift into a migration project they have to think about.

**Never invent content.** Services, prices, and hours come from their real Google listing
or their existing booking page. No lorem ipsum, no made-up service menu, no placeholder
"Our Story." If I don't have a real photo, I use their Google photos or a solid color —
never a stock photo of a different shop.

**Copy comes from their reviews.** Read their top ten Google reviews before writing a
single line. If five people say "quick, no fuss, great fade," the hero says something like
that. Their customers already wrote the marketing; I'm just moving it.

**Mobile first, and I mean actually first.** Design the 390px view, then widen. Most of
these owners will only ever see the site on their own phone.

**Under 2 seconds on 4G.** If it isn't fast it doesn't exist. Budget: under 500KB total,
images compressed and lazy-loaded below the fold.

---

## What NOT to build

These are the things that make a site look AI-generated or waste the client's goodwill:

- **No 3D landing pages for these clients.** My personal site can have them. A barbershop
  cannot — it's heavy on mobile, it delays the one thing the visitor came for, and it
  signals "designer showing off" instead of "this is your shop."
- No purple gradients. No gradient text. No glassmorphism.
- No hero carousel. No parallax. No fade-in-on-scroll for every section.
- No cookie banner, no chat bubble, no newsletter popup, no "we use cookies" for a site
  with no cookies.
- No stock photos of models. A real photo of their actual shop beats a beautiful photo of
  someone else's.
- No "Welcome to our website." No "Your journey starts here." No em-dash-heavy AI copy.
- No animated counters, no "trusted by 500+ clients" unless it's literally true.

---

## Page structure — one page, five blocks

Do not build multi-page sites. One scroll.

1. **Hero** — business name, one line of what they do in their customers' words, the
   booking button, and the phone number as a `tel:` link. Visible without scrolling on a
   phone.
2. **Services + prices** — real prices from their booking page. A plain list, not cards
   in a grid.
3. **Proof** — three real Google reviews, attributed, with the star count and total review
   number. This is the highest-converting block on the page.
4. **Practical** — hours, address with a map link, parking note if relevant, phone.
   Today's hours highlighted.
5. **Footer** — booking button again, social links, nothing else.

---

## Design direction

Before building, spend five minutes deciding the mood from their actual shop and reviews.
Write the decision down at the top of the project. Then commit to it.

- **Two typefaces maximum.** Never Inter, Poppins, Montserrat, or Open Sans — those read as
  default. Pick something with a point of view that matches the shop.
- **One accent color**, pulled from their real interior or their logo if they have one.
  Everything else is a neutral scale.
- **Space over decoration.** The most expensive-looking thing I can do is leave room.
- **Motion only on tap or click.** Respect `prefers-reduced-motion`.
- Accessible contrast, real focus states, `alt` text on every image. Some of these clients
  serve older customers.

A premium barbershop, a mobile detailer, and a dog groomer should not come out looking like
the same template with the colors swapped. If they do, I didn't do step one.

---

## Build workflow

**Before writing code (10 minutes):**

- [ ] Open their Google Maps listing. Save name, address, phone, hours, photos.
- [ ] Read the top 10 reviews. Note repeated phrases.
- [ ] Open their current site (GlossGenius / Square / none). Screenshot it — that's the
      "before."
- [ ] Copy their real service list and prices.
- [ ] Find their Instagram handle. Write it down; I need it to send the DM.
- [ ] Decide the mood in one sentence.

**Build:** one hour, one business. If it takes longer than 90 minutes I'm overbuilding.

**Deploy:** Vercel free tier. Project name = `businessname-issaquah`. Never deploy with
"spec", "demo", "sample", or "mockup" in the URL — it tells them it isn't real.

**Check before sending:** open it on my own phone. Tap the booking button. Tap the phone
number. If either doesn't work, fix it before anything else.

---

## Tech

React + Vite + TypeScript + Tailwind. Static, no backend, no database, no CMS. Deploy to
Vercel. That's it. No new dependencies for a five-block page.

---

## When they say yes

1. Take payment **before leaving the room or ending the chat.** Stripe link or Zelle.
   Not an invoice sent later.
2. Register their domain (~$12, comes out of the $400) and point it.
3. Hand over: the domain login, the Vercel project, a two-line text file on how to reach me.
4. Then, and only then, mention maintenance: "$95/month and I keep it updated and fix
   anything that breaks — totally optional."

## When they say no

Ask one question: **"What would've made it a yes?"** Write down their exact words. That
sentence is worth more than the site was.

Leave the site up for a week in case they change their mind. Then take it down.

---

## Schedule

**Every weeknight, about an hour. One business a night. Never build and DM the same
business the same night.**

| | |
|---|---|
| Monday | Build site 1 |
| Tuesday | DM site 1 · Build site 2 |
| Wednesday | DM site 2 · Build site 3 |
| Thursday | DM site 3 · Build site 4 |
| Friday | DM site 4 · One follow-up to anyone silent 4+ days |
| Saturday | Off |
| Sunday | One ride to one cluster. Show the sites in person. |

**Clusters — one trip covers many:**

- **1011 NE High St** (Sola Salons): Mary's, Monarch, Rebels, Neighborhood Barber,
  Cedar & Blade, Being Salon
- **160 NW Gilman Blvd**: KAY Hair, Maeve Massage, eTherapy, Eastern Massage,
  Pinto Portrait, Last Forever Images
- **Downtown Front St**: Quick Trim, The Vault
- **No trip needed**: Washington Mobile Detailing, Dirtless Dog Grooms — no storefront
  exists, so the DM is the only channel

**Skip entirely** (phone-first, no Instagram, no storefront): handymen, cleaners,
landscapers, painters, pressure washers.

---

## The DM

Send the night **after** the build.

```
hey — i'm naitik, 18, i live in issaquah. i built a website for [shop] as practice: [link]

it's live right now. no catch, it's yours if you want it. if not no worries
```

No price. No "when's a good time to talk." The link does the work.

**Follow up once, four days later, then stop:**

```
hey, just checking you saw this — [link]. happy to change anything on it or take it down, whatever you want
```

---

## Scoreboard

The only numbers that matter:

- **Sites built** — the one I control
- **DMs sent** — should equal sites built
- **Replies** — expect 2 to 3 out of every 12
- **Paid** — target: **one by the end of October**

No reply is not a no. Only a typed "no thanks" is a no.
