// A fluted column lit from the upper left. Flutes are placed by projecting
// equal angles around a cylinder, so they narrow toward the edges the way a
// real column does. Pure SVG, no image request.

const FLUTES = 20
const LIGHT_ANGLE = -0.8 // radians; negative = light from the left
const LIT = [192, 182, 168]
const SHADOW = [20, 17, 14]

function shade(t: number) {
  const [r, g, b] = LIT.map((lit, i) => Math.round(SHADOW[i] + (lit - SHADOW[i]) * t))
  return `rgb(${r},${g},${b})`
}

const flutes = Array.from({ length: FLUTES }, (_, i) => {
  const a0 = -Math.PI / 2 + (Math.PI * i) / FLUTES
  const a1 = -Math.PI / 2 + (Math.PI * (i + 1)) / FLUTES
  const x0 = (1 + Math.sin(a0)) * 500
  const x1 = (1 + Math.sin(a1)) * 500
  const light = Math.max(0, Math.cos((a0 + a1) / 2 - LIGHT_ANGLE))
  return { x: x0, w: x1 - x0, fill: shade(0.06 + 0.94 * light ** 1.6) }
})

export function Column({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* One concave groove: shadowed wall on the left, lit wall on the right, then the ridge. */}
        <linearGradient id="flute">
          <stop offset="0" stopColor="#000" stopOpacity="0.5" />
          <stop offset="0.3" stopColor="#000" stopOpacity="0.14" />
          <stop offset="0.78" stopColor="#fff" stopOpacity="0.07" />
          <stop offset="0.9" stopColor="#fff" stopOpacity="0.16" />
          <stop offset="1" stopColor="#000" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {flutes.map((f) => (
        <rect key={f.x} x={f.x} width={f.w + 0.5} y="0" height="100" fill={f.fill} />
      ))}
      {flutes.map((f) => (
        <rect key={`g${f.x}`} x={f.x} width={f.w} y="0" height="100" fill="url(#flute)" />
      ))}
    </svg>
  )
}
