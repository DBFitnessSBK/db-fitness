import { ImageResponse } from 'next/og'

export const alt = 'DB Fitness · Personal Training in Sonsbeck'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0a0a0a',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            color: '#fafafa',
            fontSize: 34,
            letterSpacing: '0.18em',
          }}
        >
          <div style={{ width: 56, height: 6, background: '#FF5A1F', display: 'flex' }} />
          SONSBECK · NIEDERRHEIN
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', color: '#fafafa', fontSize: 128, fontWeight: 800, lineHeight: 1 }}>
            DB FITNESS
          </div>
          <div style={{ display: 'flex', color: '#FF5A1F', fontSize: 56, fontWeight: 700, marginTop: 24 }}>
            Personal Training
          </div>
        </div>

        <div style={{ display: 'flex', color: '#a3a3a3', fontSize: 32 }}>
          Lizensierter Personal Trainer Daniel van der Bij · seit 2019
        </div>
      </div>
    ),
    { ...size },
  )
}
