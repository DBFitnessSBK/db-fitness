export default function Marquee() {
  const text = (
    <span>
      NEVER GIVE UP <span className="star" /> YOU vs YOU <span className="star" /> BEAST MODE{' '}
      <span className="star" /> NO PAIN NO GAIN <span className="star" /> TRAIN HARD STAY HUMBLE{' '}
      <span className="star" />
    </span>
  )

  return (
    <div className="db-marquee" aria-hidden="true">
      <div className="db-marquee-track">
        {text}
        {text}
      </div>
    </div>
  )
}
