import { ImageResponse } from 'next/og'
import { site } from '@/content/site'
import { hero } from '@/content/hero'

export const alt = `${site.name}: technology that helps you grow faster`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Generated at build time: ivory card, peacock type, a small feather-eye mark. No external assets or fonts.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f3ede0',
          padding: '72px 80px',
          color: '#1a4538',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 56,
              background: '#245e4e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: 26, height: 26, borderRadius: 26, background: '#1c3f94', border: '5px solid #7cc7ba' }} />
          </div>
          <div style={{ fontSize: 30, letterSpacing: 6, textTransform: 'uppercase' }}>{site.name}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 92, lineHeight: 1.05, fontFamily: 'serif' }}>
          <div>{hero.headline.lines[0]}</div>
          <div style={{ fontStyle: 'italic', color: '#245e4e' }}>{hero.headline.emphasis}</div>
        </div>
        <div style={{ fontSize: 28, color: '#476656' }}>{site.descriptor}</div>
      </div>
    ),
    size,
  )
}
