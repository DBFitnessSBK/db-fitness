import InstagramGrid, { type BeholdPost } from './InstagramGrid'

const InstaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
)

async function fetchBeholdFeed(): Promise<BeholdPost[]> {
  try {
    const feedUrl = process.env.BEHOLD_FEED_URL || 'https://feeds.behold.so/6fFgPMYwFd9rXURNkXME'

    const response = await fetch(feedUrl, {
      next: { revalidate: 3600 },
      headers: { 'Accept': 'application/json' }
    })

    if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`)

    const data = await response.json()

    let posts = []
    if (Array.isArray(data)) {
      posts = data
    } else if (data.feed && Array.isArray(data.feed)) {
      posts = data.feed
    } else if (data.posts && Array.isArray(data.posts)) {
      posts = data.posts
    } else if (data.data && Array.isArray(data.data)) {
      posts = data.data
    }

    return posts
      .map((post: any) => ({
        id: post.id || post.permalink || post.url || Math.random().toString(),
        link: post.permalink || post.url || post.link || 'https://instagram.com/db_fitness86',
        image:
          post.sizes?.medium?.mediaUrl ||
          post.sizes?.large?.mediaUrl ||
          post.sizes?.small?.mediaUrl ||
          post.sizes?.full?.mediaUrl ||
          post.mediaUrl ||
          post.image ||
          post.media_url ||
          post.src ||
          post.thumbnail ||
          '',
        caption: post.caption || post.prunedCaption || post.text || post.title || post.description || '',
      }))
      .filter((post: BeholdPost) => post.image)
      .slice(0, 6)
  } catch (error) {
    console.error('[v0] Error fetching Behold feed:', error)
    return []
  }
}

export default async function Instagram() {
  const posts = await fetchBeholdFeed()

  return (
    <section className="db-insta" id="insta" aria-label="Instagram · @db_fitness86">
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

        <InstagramGrid posts={posts} />

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
