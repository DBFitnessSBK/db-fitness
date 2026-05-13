'use client'

import { useState } from 'react'

const REVIEWS = [
  {
    name: 'Insa',
    rating: 5,
    date: 'Mai 2026',
    link: 'https://maps.app.goo.gl/nQmW3ioZCAAAuBn99',
    text: 'Ein tolles Trainerteam, es gibt viele verschiedene Kurse zu verschiedenen Zeiten, somit gibt es keine Ausrede keinen Sport zu machen 😉. Auch als Anfänger ist man bei DB Fitness sehr gut aufgehoben. Ich kann es nur empfehlen, es macht süchtig !! …',
  },
  {
    name: 'Melina',
    rating: 5,
    date: 'Mai 2026',
    link: 'https://maps.app.goo.gl/wsXkxGXxeJWwXwFUA',
    text: 'Seit inzwischen drei Jahren besuche ich die Kurse und bin nach wie vor sehr zufrieden. Die Übungen sind zwar oft anstrengend und fordernd, aber genau das macht das Training effektiv – und gleichzeitig macht es auch wirklich Spaß. Besonders positiv finde ich, dass immer auf die Teilnehmer eingegangen wird. Übungen werden bei Bedarf individuell angepasst, sodass wirklich jeder mitmachen kann, unabhängig vom Fitnesslevel. Die Atmosphäre ist außerdem sehr angenehm, alle sind freundlich und motivierend. Ein großes Lob an Daniel und Steffi – man fühlt sich bei euch einfach gut aufgehoben. Absolute Empfehlung!',
  },
  {
    name: 'Silke',
    rating: 5,
    date: 'August 2024',
    link: 'https://maps.app.goo.gl/B8LT784UVpg2e76w9',
    text: 'Super Training, super Kommunikation – leistungsgerecht und herausfordernd zugleich. Tolles Trainerteam, seit 3,5 Jahren dabei.',
  },
]

const CLAMP_LINES = 4

function ReviewCard({ review }: { review: typeof REVIEWS[number] }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="db-review-card">
      <header className="db-review-card-header">
        <div className="db-review-avatar" aria-hidden="true">
          {review.name.charAt(0)}
        </div>
        <div className="db-review-meta">
          <div className="db-review-name">{review.name}</div>
          <div className="db-review-date">{review.date}</div>
        </div>
        <a
          href={review.link}
          target="_blank"
          rel="noopener noreferrer"
          className="db-review-google-link"
          aria-label="Auf Google ansehen"
          onClick={e => e.stopPropagation()}
        >
          <svg className="db-review-google" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </a>
      </header>
      <Stars count={review.rating} />
      <div className={`db-review-text-wrap${expanded ? ' expanded' : ''}`}>
        <p className="db-review-text">{review.text}</p>
      </div>
      <button
        className="db-review-toggle"
        onClick={() => setExpanded(e => !e)}
        aria-expanded={expanded}
      >
        {expanded ? 'Weniger anzeigen' : 'Mehr lesen'}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d={expanded ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'} />
        </svg>
      </button>
    </article>
  )
}

function Stars({ count }: { count: number }) {
  return (
    <div className="db-review-stars" aria-label={`${count} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill={i < count ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="db-reviews" id="reviews" aria-label="Kundenbewertungen">
      <div className="db-container">
        <div className="db-reviews-head">
          <div>
            <div className="db-eyebrow">Bewertungen</div>
            <h2 className="db-reviews-title">
              Was unsere<br />
              <span className="db-graff">Kunden sagen.</span>
            </h2>
          </div>
          <div className="db-reviews-summary">
            <div className="db-reviews-score">4.9</div>
            <div className="db-reviews-summary-right">
              <Stars count={5} />
              <div className="db-reviews-source">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Basierend auf Google Reviews
              </div>
            </div>
          </div>
        </div>

        <div className="db-reviews-grid">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
