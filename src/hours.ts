type Day = { name: string; open: [number, number] | null }

// Index matches Date#getDay(): 0 = Sunday. Hours are 24h, shop-local.
export const week: Day[] = [
  { name: 'Sunday', open: null },
  { name: 'Monday', open: null },
  { name: 'Tuesday', open: null },
  { name: 'Wednesday', open: [10, 18] },
  { name: 'Thursday', open: [11, 19] },
  { name: 'Friday', open: [10, 18] },
  { name: 'Saturday', open: [9, 17] },
]

// Monday first, the way people read a week.
export const displayOrder = [1, 2, 3, 4, 5, 6, 0]

export function formatHour(h: number) {
  return `${h % 12 || 12}${h < 12 ? 'am' : 'pm'}`
}

export function formatRange([from, to]: [number, number]) {
  return `${formatHour(from)}–${formatHour(to)}`
}

const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// The visitor's clock may not be in Issaquah; the shop's is.
export function nowInIssaquah(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(date)
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
  return {
    day: shortDays.indexOf(get('weekday')),
    minutes: Number(get('hour')) * 60 + Number(get('minute')),
  }
}

export function openStatus({ day, minutes }: { day: number; minutes: number }) {
  const today = week[day].open
  if (today && minutes < today[0] * 60) {
    return { open: false, text: `Opens today at ${formatHour(today[0])}` }
  }
  if (today && minutes < today[1] * 60) {
    return { open: true, text: `Open now until ${formatHour(today[1])}` }
  }
  for (let ahead = 1; ahead <= 7; ahead++) {
    const next = week[(day + ahead) % 7]
    if (next.open) {
      const when = ahead === 1 ? 'tomorrow' : next.name
      return { open: false, text: `Closed now · opens ${when} at ${formatHour(next.open[0])}` }
    }
  }
  return { open: false, text: 'Closed now' }
}
