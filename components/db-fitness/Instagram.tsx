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

const GYM_WIDE = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gym-wide-vKH4V1F9tRfAX148kpOo22SceKXbkb.jpeg'
const GYM_BEAST = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gym-beastmode-CDSuVQtKSeFMRrmKZOhoXSkUdZLABn.jpeg'

export default function Instagram() {
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
            <div className="item">
              <strong>2.4K</strong>Follower
            </div>
            <div className="item">
              <strong>318</strong>Beiträge
            </div>
            <a className="db-btn db-btn-primary" href="https://www.instagram.com/db_fitness86/" target="_blank" rel="noopener noreferrer">
              Folgen
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="db-insta-grid">
          {/* Post 1 */}
          <a className="db-insta-post" href="https://www.instagram.com/db_fitness86/" target="_blank" rel="noopener noreferrer">
            <span className="db-insta-type live">● LIVE REEL</span>
            <span className="db-insta-corner"><VideoIcon /></span>
            <img src={GYM_BEAST} alt="Beast Mode Workout" />
            <div className="db-insta-overlay">
              <div className="caption">Mittwoch Abend = Schlingentraining. Wer kommt?</div>
              <div className="meta">
                <span><HeartIcon />184</span>
                <span><CommentIcon />22</span>
              </div>
            </div>
          </a>

          {/* Post 2 */}
          <a className="db-insta-post" href="https://www.instagram.com/db_fitness86/" target="_blank" rel="noopener noreferrer">
            <span className="db-insta-type">POST</span>
            <span className="db-insta-corner"><PhotoIcon /></span>
            <div className="db-insta-placeholder">
              <div className="title">never<br />give up</div>
            </div>
            <div className="db-insta-overlay">
              <div className="caption">Tag 47/90. Form über Ego. Immer.</div>
              <div className="meta">
                <span><HeartIcon />241</span>
                <span><CommentIcon />18</span>
              </div>
            </div>
          </a>

          {/* Post 3 */}
          <a className="db-insta-post" href="https://www.instagram.com/db_fitness86/" target="_blank" rel="noopener noreferrer">
            <span className="db-insta-type">REEL</span>
            <span className="db-insta-corner"><VideoIcon /></span>
            <img src={GYM_WIDE} alt="Studio Tour" />
            <div className="db-insta-overlay">
              <div className="caption">Mein zweites Zuhause. Studiotour 60 Sek →</div>
              <div className="meta">
                <span><HeartIcon />362</span>
                <span><CommentIcon />41</span>
              </div>
            </div>
          </a>

          {/* Post 4 */}
          <a className="db-insta-post" href="https://www.instagram.com/db_fitness86/" target="_blank" rel="noopener noreferrer">
            <span className="db-insta-type">POST</span>
            <span className="db-insta-corner"><PhotoIcon /></span>
            <div className="db-insta-placeholder alt2">
              <div className="title">you<br />vs<br />you</div>
            </div>
            <div className="db-insta-overlay">
              <div className="caption">Der einzige Gegner, der zählt. Immer.</div>
              <div className="meta">
                <span><HeartIcon />512</span>
                <span><CommentIcon />33</span>
              </div>
            </div>
          </a>

          {/* Post 5 */}
          <a className="db-insta-post" href="https://www.instagram.com/db_fitness86/" target="_blank" rel="noopener noreferrer">
            <span className="db-insta-type">POST</span>
            <span className="db-insta-corner"><PhotoIcon /></span>
            <div className="db-insta-placeholder alt3">
              <div className="title">PUMP<br />&amp; RUN<br />↗</div>
            </div>
            <div className="db-insta-overlay">
              <div className="caption">Samstag 9:00 · vier Plätze frei.</div>
              <div className="meta">
                <span><HeartIcon />129</span>
                <span><CommentIcon />12</span>
              </div>
            </div>
          </a>

          {/* Post 6 */}
          <a className="db-insta-post" href="https://www.instagram.com/db_fitness86/" target="_blank" rel="noopener noreferrer">
            <span className="db-insta-type">REEL</span>
            <span className="db-insta-corner"><VideoIcon /></span>
            <img src={GYM_BEAST} alt="Functional" />
            <div className="db-insta-overlay">
              <div className="caption">Functional Flow · voller Body in 7 Sätzen.</div>
              <div className="meta">
                <span><HeartIcon />289</span>
                <span><CommentIcon />27</span>
              </div>
            </div>
          </a>

          {/* Post 7 */}
          <a className="db-insta-post" href="https://www.instagram.com/db_fitness86/" target="_blank" rel="noopener noreferrer">
            <span className="db-insta-type">POST</span>
            <span className="db-insta-corner"><PhotoIcon /></span>
            <div className="db-insta-placeholder alt">
              <div className="title">beast<br />mode</div>
            </div>
            <div className="db-insta-overlay">
              <div className="caption">5 Uhr Trainings-Crew, ihr seid Tier.</div>
              <div className="meta">
                <span><HeartIcon />198</span>
                <span><CommentIcon />15</span>
              </div>
            </div>
          </a>

          {/* Post 8 */}
          <a className="db-insta-post" href="https://www.instagram.com/db_fitness86/" target="_blank" rel="noopener noreferrer">
            <span className="db-insta-type">POST</span>
            <span className="db-insta-corner"><PhotoIcon /></span>
            <img src={GYM_WIDE} alt="Studio" />
            <div className="db-insta-overlay">
              <div className="caption">Sonntag offen ab 10:00. Open Floor.</div>
              <div className="meta">
                <span><HeartIcon />156</span>
                <span><CommentIcon />9</span>
              </div>
            </div>
          </a>
        </div>

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
