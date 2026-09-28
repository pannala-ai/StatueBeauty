// Every word on the page lives here. Source: the owner's Google listing,
// booking page, and reviews. Nothing invented; UI labels only.

export const business = {
  name: 'Statue Beauty',
  owner: 'Tamanda',
  credential: 'Licensed esthetician and makeup artist',
  years: '15+ years',
  address: {
    street: '160 NW Gilman Blvd #330',
    city: 'Issaquah, WA 98027',
  },
  phone: { display: '(425) 533-4856', href: 'tel:+14255334856' },
  email: 'info@statuebeauty.com',
  booking: 'https://statuebeautyservicescheduling.as.me/',
  maps:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Statue Beauty, 160 NW Gilman Blvd #330, Issaquah, WA 98027'),
  rating: { score: '5.0', count: 29 },
}

export const hero = {
  line: 'Personalized facials and makeup in Issaquah. She explains what she’s doing and why, and tells you the cost and timing up front.',
  // Seasonal. Remove this block when high school pricing ends.
  seasonal: {
    tag: 'Live now',
    text: 'Homecoming and senior portrait makeup. Special pricing for high school students.',
  },
}

export const unveiling = {
  kicker: 'Signature facials',
  title: 'The Unveiling',
  lead: 'Good skin isn’t something you buy. It’s already there, under the surface.',
  body: 'These treatments clear away what’s covering it: environmental stress, dullness and time.',
  o2: {
    name: 'O² Facial',
    price: 120,
    formula: 'Oxygen · plant stem cell peptides · enzymatic botanicals',
    body: 'Her “red carpet” facial. Luminous, refreshed.',
  },
  peels: {
    title: 'The peel series',
    intro: 'Three steps, lightest to deepest. New to peels? Start with the Refresher.',
    steps: [
      {
        numeral: 'I',
        name: 'The Refresher',
        price: 130,
        startHere: true,
        body: 'The light, introductory peel. Brightens, balances, hydrates and smooths.',
      },
      {
        numeral: 'II',
        name: 'The Resurface',
        price: 150,
        body: 'For texture, acne scarring, congestion, uneven tone and fine lines.',
      },
      {
        numeral: 'III',
        name: 'The Rebirth',
        price: 175,
        body: 'The deepest peel. For fine lines, clarity and blemishes, including aging skin and moderate to severe acne.',
        formula: '5% lactic · 5% salicylic · 5% resorcinol',
      },
    ],
  },
  cta: 'Book a facial',
}

export const makeup = {
  title: 'Makeup',
  hours: 'Thursday to Saturday, 9am–7pm',
  occasions: 'Special occasion, photoshoots, maternity, bridal and headshots.',
  highSchool: {
    tag: 'Live now',
    title: 'Homecoming & senior portraits',
    body: 'Special pricing for high school students.',
    cta: 'Book online',
  },
  studio: {
    title: 'In the studio',
    body: 'Booked online.',
    cta: 'Book studio makeup',
  },
  onLocation: {
    title: 'On location',
    body: 'Bridal, events and video. These aren’t booked online. Email her directly.',
    subject: 'On-location makeup',
  },
}

export const waxing = {
  title: 'Waxing',
  body: 'Face, torso and lower body. Booked by area.',
  intake: 'You’ll fill out an intake form as part of booking.',
  cta: 'Book waxing',
}

export const giftCertificates = {
  title: 'Gift certificates',
  amounts: [25, 50, 75, 100, 125],
}

export const proof = {
  title: 'Reviews',
  source: 'Google reviews',
  summary:
    'Reviewers say she puts first-timers at ease. They mention competitive pricing, a clean studio and good music.',
  // Paraphrased from real 5-star Google reviews. Add each reviewer's first name
  // to `name` and it replaces the "Google review" label.
  reviews: [
    {
      name: '',
      context: 'Event makeup',
      body: 'Makeup for an event that lasted all night. She worked quickly and is clearly passionate about it.',
    },
    {
      name: '',
      context: 'Makeup before a gala',
      body: 'Unexpected bruising before a fundraising gala. She covered and blended it so well it barely showed in photos.',
    },
    {
      name: '',
      context: 'Brow stain & lash lift',
      body: 'Clear booking, cost and timing explained up front, and it lasted weeks longer than expected.',
    },
  ],
}

export const visit = {
  title: 'Hours & location',
  makeupHours: 'Makeup: Thursday to Saturday, 9am–7pm.',
  mapsCta: 'Open in Google Maps',
  cancellation: 'Need to cancel? Please give 24 hours’ notice.',
}

export const bookCta = 'Book an appointment'
