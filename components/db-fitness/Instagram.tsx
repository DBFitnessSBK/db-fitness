const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21l-1.5-1.4C5.4 15 2 11.9 2 8.1 2 5.4 4.4 3 7.5 3c1.7 0 3.4.8 4.5 2.1A6 6 0 0 1 16.5 3C19.6 3 22 5.4 22 8.1c0 3.8-3.4 6.9-8.5 11.5L12 21z" />
  </svg>
)
const CommentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" />
  </svg>
)
const VideoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m23 7-7 5 7 5V7zM2 6h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
  </svg>
)
const PhotoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" />
    <circle cx="12" cy="12" r="4" />
  </svg>
)
const InstaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
)

interface BeholdPost {
  id: string
  link: string
  image: string
  caption?: string
}

async function fetchBeholdFeed(): Promise<BeholdPost[]> {
  try {
    const feedUrl = process.env.BEHOLD_FEED_URL || 'https://feeds.behold.so/zFgp2Jbbk23Ovf1ZUOhq'
    const response = await fetch(feedUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) throw new Error('Failed to fetch Behold feed')

    const data = await response.json()

    // Behold returns an object with posts array
    const posts = Array.isArray(data) ? data : (data.posts || [])
    return posts
      .slice(0, 6)
      .map((post: any) => ({
        id: post.id || post.url || Math.random().toString(),
        link: post.url || post.link || 'https://instagram.com/db_fitness86',
        image: post.image || post.src || '',
        caption: post.caption || post.title || '',
      }))
  } catch (error) {
    console.error('Error fetching Behold feed:', error)
    return []
  }
}

export default async function Instagram() {
  const posts = await fetchBeholdFeed()

  return (
    <section className="db-insta" id="insta">
      <div className="db-container">
        <div className="db-insta-head">
          <div>
            <div className="db-eyebrow">Social</div>
            <h2>
              <span className="at">@</span>db_fitness86
            </h2>
          </div>
          <div className="db-insta-meta">
            <a className="db-btn db-btn-primary" href="https://www.instagram.com/db_fitness86/" target="_blank" rel="noopener noreferrer">
              Folgen
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        {posts.length > 0 ? (
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
        ) : (
          <p style={{ color: 'var(--ink-dim)', textAlign: 'center', padding: '40px 0' }}>
            Instagram Feed wird geladen...
          </p>
        )}

        <div className="db-insta-cta">
          <a className="db-btn db-btn-ghost" href="https://www.instagram.com/db_fitness86/" target="_blank" rel="noopener noreferrer">
            Auf Instagram folgen
            <InstaIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
