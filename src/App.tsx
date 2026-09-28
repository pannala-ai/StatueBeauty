import { useMemo } from 'react'
import { Column } from './Column'
import {
  bookCta,
  business,
  giftCertificates,
  hero,
  makeup,
  proof,
  unveiling,
  visit,
  waxing,
} from './content'
import { displayOrder, formatRange, nowInIssaquah, openStatus, week } from './hours'

const wrap = 'mx-auto w-full max-w-6xl px-6 sm:px-10'
const split = 'lg:grid lg:grid-cols-12 lg:gap-x-16'
const sectionTitle = 'font-display text-[3rem] leading-none tracking-[-0.01em] sm:text-6xl'

export default function App() {
  const now = useMemo(() => nowInIssaquah(), [])
  const status = openStatus(now)

  return (
    <main>
      <Hero status={status} />
      <Unveiling />
      <Makeup />
      <Waxing />
      <Proof />
      <Visit today={now.day} status={status} />
      <Footer />
    </main>
  )
}

type Status = ReturnType<typeof openStatus>

function Hero({ status }: { status: Status }) {
  return (
    <header className="on-dark relative isolate overflow-hidden bg-shadow text-marble">
      <div aria-hidden="true" className="hero-light absolute inset-0 -z-20" />
      {/* On phones only a sliver of the column shows (12vw); the text keeps clear of it. */}
      <Column className="column-fade absolute inset-y-0 -right-[28vw] -z-10 h-full w-[40vw] sm:-right-[14vw] sm:w-[30vw] lg:right-[6vw] lg:w-[24vw] xl:w-[21vw]" />

      <div className={`${wrap} pt-10 pb-12 short:pt-7 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32`}>
        <div className="pr-[calc(12vw-0.875rem)] sm:pr-0">
          <h1 className="font-display text-[clamp(4.5rem,20.5vw,10rem)] leading-[0.9] short:text-[clamp(3.75rem,16vw,4.5rem)] tracking-[-0.015em]">
            Statue
            <br />
            Beauty
          </h1>

          <p className="mt-6 text-[1.1875rem] leading-[1.45] text-plaster short:mt-4 short:text-[1.0625rem] sm:max-w-[24em] sm:text-xl">
            {hero.line}
          </p>
          <p className="mt-4 text-[0.875rem] leading-snug text-dim short:mt-3">
            {business.owner} · {business.credential} · {business.years}
          </p>

          <div className="mt-7 max-w-[22em] short:mt-5 border-l-2 border-sienna-light pl-4">
            <p className="eyebrow text-sienna-light">{hero.seasonal.tag}</p>
            <p className="mt-1.5 text-[0.9375rem] leading-snug text-plaster">{hero.seasonal.text}</p>
          </div>
        </div>

        <div className="mt-8 flex max-w-md flex-col gap-3 short:mt-5 short:gap-2.5 sm:max-w-none sm:flex-row">
          <a className="btn btn-solid" href={business.booking}>
            {bookCta}
          </a>
          <a className="btn btn-line-dark" href={business.phone.href}>
            Call {business.phone.display}
          </a>
        </div>

        <StatusLine status={status} className="mt-5 text-dim" />
      </div>
    </header>
  )
}

function StatusLine({ status, className = '' }: { status: Status; className?: string }) {
  return (
    <p className={`flex items-center gap-2.5 text-sm ${className}`}>
      <span
        aria-hidden="true"
        className={`size-1.5 shrink-0 rounded-full ${status.open ? 'bg-sienna-light' : 'bg-current opacity-60'}`}
      />
      {status.text}
    </p>
  )
}

function Price({ amount }: { amount: number }) {
  return <p className="shrink-0 text-[1.125rem] font-semibold tabular-nums">${amount}</p>
}

const strata = ['bg-limestone/70', 'bg-limestone', 'bg-travertine']

function Unveiling() {
  const { o2, peels } = unveiling
  return (
    <section aria-labelledby="facials-title" className="bg-plaster">
      <div className={`${wrap} ${split} py-20 sm:py-28 lg:py-36`}>
        <div className="lg:col-span-5">
          <p className="eyebrow text-sienna">{unveiling.kicker}</p>
          <h2 id="facials-title" className={`mt-4 ${sectionTitle}`}>
            {unveiling.title}
          </h2>
          <p className="mt-8 max-w-[18em] font-display text-[1.625rem] leading-[1.25] sm:text-[1.875rem]">
            {unveiling.lead}
          </p>
          <p className="mt-4 max-w-[34ch] text-muted">{unveiling.body}</p>
        </div>

        <div className="mt-14 lg:col-span-7 lg:mt-1">
          <article className="border-t border-ink/20 pt-6">
            <div className="flex items-baseline justify-between gap-6">
              <h3 className="font-display text-[1.875rem] leading-tight">{o2.name}</h3>
              <Price amount={o2.price} />
            </div>
            <p className="mt-2 text-[0.8125rem] leading-relaxed tracking-[0.04em] text-muted">
              {o2.formula}
            </p>
            <p className="mt-3">{o2.body}</p>
          </article>

          <div className="mt-14">
            <h3 className="font-display text-[1.875rem] leading-tight">{peels.title}</h3>
            <p className="mt-2 max-w-[38ch] text-muted">{peels.intro}</p>

            <ol className="mt-6">
              {peels.steps.map((step, i) => (
                <li
                  key={step.name}
                  className={`grid grid-cols-[2.5rem_1fr] gap-x-3 px-4 py-6 sm:grid-cols-[3.5rem_1fr] sm:px-6 ${strata[i]}`}
                >
                  <span aria-hidden="true" className="pt-1 font-display text-[1.5rem] leading-none text-sienna">
                    {step.numeral}
                  </span>
                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="font-display text-[1.5rem] leading-tight">
                        <span className="sr-only">Step {i + 1}: </span>
                        {step.name}
                      </h4>
                      <Price amount={step.price} />
                    </div>
                    {step.startHere && (
                      <p className="eyebrow mt-2 text-sienna">Start here</p>
                    )}
                    <p className="mt-2">{step.body}</p>
                    {step.formula && (
                      <p className="mt-3 text-[0.8125rem] tracking-[0.04em] text-muted">{step.formula}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <a className="btn btn-solid mt-10 w-full sm:w-auto" href={business.booking}>
            {unveiling.cta}
          </a>
        </div>
      </div>
    </section>
  )
}

function Makeup() {
  const { highSchool, studio, onLocation } = makeup
  return (
    <section aria-labelledby="makeup-title" className="bg-marble">
      <div className={`${wrap} ${split} py-20 sm:py-28 lg:py-36`}>
        <div className="lg:col-span-5">
          <p className="eyebrow text-sienna">{makeup.hours}</p>
          <h2 id="makeup-title" className={`mt-4 ${sectionTitle}`}>
            {makeup.title}
          </h2>
          <p className="mt-8 max-w-[22em] text-[1.1875rem] leading-relaxed">{makeup.occasions}</p>
        </div>

        <div className="mt-12 lg:col-span-7 lg:mt-1">
          <div className="on-dark bg-shadow px-6 py-7 text-marble sm:px-8 sm:py-9">
            <p className="eyebrow text-sienna-light">{highSchool.tag}</p>
            <h3 className="mt-3 font-display text-[1.75rem] leading-tight">{highSchool.title}</h3>
            <p className="mt-2 text-plaster">{highSchool.body}</p>
            <a className="link mt-3 text-marble" href={business.booking}>
              {highSchool.cta} <Arrow />
            </a>
          </div>

          <dl className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-8">
            <div className="border-t border-ink/20 pt-5">
              <dt className="font-display text-[1.5rem] leading-tight">{studio.title}</dt>
              <dd className="mt-2 text-muted">{studio.body}</dd>
              <dd className="mt-3">
                <a className="link" href={business.booking}>
                  {studio.cta} <Arrow />
                </a>
              </dd>
            </div>
            <div className="border-t border-ink/20 pt-5">
              <dt className="font-display text-[1.5rem] leading-tight">{onLocation.title}</dt>
              <dd className="mt-2 text-muted">{onLocation.body}</dd>
              <dd className="mt-3">
                <a
                  className="link break-all"
                  href={`mailto:${business.email}?subject=${encodeURIComponent(onLocation.subject)}`}
                >
                  {business.email} <Arrow />
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

function Waxing() {
  return (
    <section aria-labelledby="waxing-title" className="border-t border-ink/10 bg-marble">
      <div className={`${wrap} ${split} py-16 sm:py-24 lg:py-28`}>
        <div className="lg:col-span-5">
          <h2 id="waxing-title" className={sectionTitle}>
            {waxing.title}
          </h2>
        </div>
        <div className="mt-6 lg:col-span-7 lg:mt-1">
          <p className="text-[1.1875rem] leading-relaxed">{waxing.body}</p>
          <p className="mt-2 text-muted">{waxing.intake}</p>
          <a className="btn btn-line mt-7 w-full sm:w-auto" href={business.booking}>
            {waxing.cta}
          </a>

          <div className="mt-14 flex flex-col gap-2 border-t border-ink/20 pt-5 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-display text-[1.5rem] leading-tight">{giftCertificates.title}</h3>
            <p className="tabular-nums text-muted">
              {giftCertificates.amounts.map((a) => `$${a}`).join(' · ')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Proof() {
  return (
    <section aria-labelledby="reviews-title" className="on-dark bg-umber text-marble">
      <div className={`${wrap} py-20 sm:py-28 lg:py-36`}>
        <h2 id="reviews-title" className="eyebrow text-sienna-light">
          {proof.source}
        </h2>
        <div className="mt-6 flex items-end gap-5">
          <p className="font-display text-[5.5rem] leading-[0.78] sm:text-[7rem]">{business.rating.score}</p>
          <div className="pb-0.5">
            <Stars className="h-4 text-sienna-light" />
            <p className="mt-2 text-sm text-dim">from {business.rating.count} Google reviews</p>
          </div>
        </div>
        <p className="mt-8 max-w-[34em] text-[1.1875rem] leading-relaxed text-plaster">{proof.summary}</p>

        <ul className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {proof.reviews.map((r) => (
            <li key={r.context} className="flex flex-col border-t border-marble/15 pt-6">
              <p className="eyebrow text-dim">{r.context}</p>
              <p className="mt-4 font-display text-[1.375rem] leading-snug">{r.body}</p>
              <p className="mt-auto flex items-center gap-3 pt-5 text-sm text-dim">
                <Stars className="h-3 text-sienna-light" />
                {r.name || 'Google review'}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Visit({ today, status }: { today: number; status: Status }) {
  return (
    <section aria-labelledby="visit-title" className="bg-plaster">
      <div className={`${wrap} ${split} py-20 sm:py-28 lg:py-36`}>
        <div className="lg:col-span-5">
          <h2 id="visit-title" className={sectionTitle}>
            {visit.title}
          </h2>
          <StatusLine status={status} className="mt-6 text-muted" />
        </div>

        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:col-span-7 lg:mt-1">
          <div>
            <h3 className="eyebrow text-sienna">Hours</h3>
            <ul className="-mx-3 mt-4 border-t border-ink/15">
              {displayOrder.map((d) => {
                const isToday = d === today
                const open = week[d].open
                return (
                  <li
                    key={d}
                    aria-current={isToday ? 'date' : undefined}
                    className={`flex items-baseline justify-between gap-4 border-b border-ink/15 px-3 py-2.5 ${
                      isToday ? 'bg-limestone font-semibold shadow-[inset_2px_0_0_var(--color-sienna)]' : ''
                    }`}
                  >
                    <span>
                      {week[d].name}
                      {isToday && <span className="eyebrow ml-2.5 text-sienna">Today</span>}
                    </span>
                    <span className={`tabular-nums ${open ? '' : 'text-muted'}`}>
                      {open ? formatRange(open) : 'Closed'}
                    </span>
                  </li>
                )
              })}
            </ul>
            <p className="mt-4 text-sm text-muted">{visit.makeupHours}</p>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h3 className="eyebrow text-sienna">Address</h3>
              <address className="mt-4 text-[1.125rem] not-italic leading-relaxed">
                {business.address.street}
                <br />
                {business.address.city}
              </address>
              <a className="link mt-1" href={business.maps}>
                {visit.mapsCta} <ArrowOut />
              </a>
            </div>
            <div>
              <h3 className="eyebrow text-sienna">Contact</h3>
              <ul className="mt-3">
                <li>
                  <a className="link text-[1.125rem]" href={business.phone.href}>
                    {business.phone.display}
                  </a>
                </li>
                <li>
                  <a className="link break-all text-[1.125rem]" href={`mailto:${business.email}`}>
                    {business.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p className="border-t border-ink/15 pt-6 text-muted sm:col-span-2">{visit.cancellation}</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="on-dark bg-shadow">
      <div className={`${wrap} flex justify-center py-16 sm:py-20`}>
        <a className="btn btn-solid w-full sm:w-auto sm:px-12" href={business.booking}>
          {bookCta}
        </a>
      </div>
    </footer>
  )
}

function Stars({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[0.2em] ${className}`}>
      <span className="sr-only">5 out of 5 stars</span>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-full w-auto" aria-hidden="true" fill="currentColor">
          <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9L4.7 18l1.1-6L1.4 7.8l6-.8z" />
        </svg>
      ))}
    </span>
  )
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="size-4 shrink-0" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2.5 8h11M9.5 4l4 4-4 4" />
    </svg>
  )
}

function ArrowOut() {
  return (
    <svg viewBox="0 0 16 16" className="size-4 shrink-0" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" />
    </svg>
  )
}
