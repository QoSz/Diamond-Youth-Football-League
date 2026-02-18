import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Diamond Youth Football League — Youth Football in Nairobi, Kenya';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #2a1000 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circle top-left */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-80px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,69,0,0.25) 0%, transparent 70%)',
          }}
        />
        {/* Decorative circle bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            right: '-80px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,69,0,0.2) 0%, transparent 70%)',
          }}
        />
        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '6px',
            background: 'linear-gradient(90deg, #FF4500, #FF6B00, #FF4500)',
          }}
        />
        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '6px',
            background: 'linear-gradient(90deg, #FF4500, #FF6B00, #FF4500)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,69,0,0.15)',
            border: '1px solid rgba(255,69,0,0.4)',
            borderRadius: '999px',
            padding: '8px 24px',
            marginBottom: '28px',
          }}
        >
          <span
            style={{
              color: '#FF6B00',
              fontSize: '18px',
              fontWeight: '600',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Nairobi, Kenya
          </span>
        </div>

        {/* DYFL abbreviation */}
        <div
          style={{
            fontSize: '96px',
            fontWeight: '900',
            color: '#FF4500',
            lineHeight: '1',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}
        >
          DYFL
        </div>

        {/* Full name */}
        <div
          style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '20px',
            letterSpacing: '0.02em',
            textAlign: 'center',
          }}
        >
          Diamond Youth Football League
        </div>

        {/* Divider */}
        <div
          style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #FF4500, #FF6B00)',
            borderRadius: '99px',
            marginBottom: '20px',
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: '22px',
            color: 'rgba(255,255,255,0.7)',
            fontWeight: '400',
            textAlign: 'center',
            maxWidth: '700px',
          }}
        >
          Competitive Youth Football · Under 12 · Under 14 · Under 16
        </div>
      </div>
    ),
    { ...size }
  );
}
