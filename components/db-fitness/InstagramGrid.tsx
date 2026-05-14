'use client'

import { useState } from 'react'

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21l-1.5-1.4C5.4 15 2 11.9 2 8.1 2 5.4 4.4 3 7.5 3c1.7 0 3.4.8 4.5 2.1A6 6 0 0 1 16.5 3C19.6 3 22 5.4 22 8.1c0 3.8-3.4 6.9-8.5 11.5L12 21z" />
  </svg>
)
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
          title={post.caption || 'Instagram Post'}
        >
          <span className="db-insta-corner"><PhotoIcon /></span>
          <img src={post.image} alt={post.caption || 'Instagram Post'} />
          <div className="db-insta-overlay">
            {post.caption && <div className="caption">{post.caption}</div>}
            <div className="meta">
              <span><HeartIcon />—</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
