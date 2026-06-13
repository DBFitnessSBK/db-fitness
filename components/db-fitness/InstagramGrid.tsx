'use client'

import { useState } from 'react'

const PhotoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" />
    <circle cx="12" cy="12" r="4" />
  </svg>
)

export interface BeholdPost {
  id: string
  link: string
  image: string
  caption?: string
}

const MAX_CAPTION_LENGTH = 140

function truncateCaption(caption: string): string {
  if (caption.length <= MAX_CAPTION_LENGTH) return caption
  return caption.slice(0, MAX_CAPTION_LENGTH).trimEnd() + '…'
}

export default function InstagramGrid({ posts }: { posts: BeholdPost[] }) {
  const [consent, setConsent] = useState(false)

  if (!consent) {
    return (
      <div className="db-insta-consent">
        <svg className="db-insta-consent-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
        <h3>Instagram-Feed laden?</h3>
        <p>
          Beim Anzeigen der Beiträge werden Daten an Behold und Instagram übertragen. Mit einem Klick erlaubst du das Laden der Inhalte.
        </p>
        <button type="button" className="db-btn db-btn-primary" onClick={() => setConsent(true)}>
          Beiträge anzeigen
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
        <a
          className="db-insta-consent-fallback"
          href="https://www.instagram.com/db_fitness86/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stattdessen auf Instagram öffnen
        </a>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <p style={{ color: 'var(--ink-dim)', textAlign: 'center', padding: '40px 0' }}>
        Instagram Feed wird geladen...
      </p>
    )
  }

  return (
    <div className="db-insta-grid">
      {posts.map((post) => (
        <a
          key={post.id}
          className="db-insta-post"
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="db-insta-corner"><PhotoIcon /></span>
          <img src={post.image} alt={post.caption || 'Instagram Post'} />
          <div className="db-insta-overlay">
            {post.caption && <div className="caption">{truncateCaption(post.caption)}</div>}
          </div>
        </a>
      ))}
    </div>
  )
}
