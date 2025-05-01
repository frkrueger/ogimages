import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Default Title';
    const category = searchParams.get('category') || 'Bitcoin';
    const chance = Number(searchParams.get('chance')) || 50;

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '1200px',
            height: '630px',
            padding: '48px',
            backgroundColor: '#121212',
            color: 'white',
            fontFamily: 'system-ui',
          }}
        >
          <div style={{ display: 'flex', gap: '24px', marginBottom: '40px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 40px',
                fontSize: '36px',
                fontWeight: 700,
                borderRadius: '16px',
                backgroundColor: 'rgba(22, 163, 74, 0.5)',
                color: '#4ade80',
                boxShadow: '0 0 0 1px rgba(74, 222, 128, 0.2)',
              }}
            >
              Active
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 40px',
                fontSize: '36px',
                fontWeight: 700,
                borderRadius: '16px',
                backgroundColor: 'rgba(29, 78, 216, 0.3)',
                color: '#60a5fa',
                boxShadow: '0 0 0 1px rgba(96, 165, 250, 0.2)',
              }}
            >
              #{category}
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                fontSize: '48px',
                fontWeight: 700,
                lineHeight: 1.2,
                maxWidth: '100%',
                wordWrap: 'break-word',
              }}
            >
              {title}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '32px' }}>
            <div
              style={{
                fontSize: '24px',
                fontWeight: 500,
                color: '#9ca3af',
                marginBottom: '8px',
              }}
            >
              CHANCE
            </div>
            <div
              style={{
                fontSize: '60px',
                fontWeight: 700,
              }}
            >
              {chance}%
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div
              style={{
                fontSize: '48px',
                fontWeight: 700,
                background: 'linear-gradient(90deg, #a855f7 0%, #3b82f6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                letterSpacing: '-0.02em',
              }}
            >
              DegenPredict.ai
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px 40px',
                fontSize: '32px',
                fontWeight: 600,
                backgroundColor: '#2563eb',
                color: 'white',
                borderRadius: '16px',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.5)',
              }}
            >
              Trade now
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error: any) {
    console.error('Error generating image:', error);
    return new Response(`Failed to generate image: ${error.message || 'Unknown error'}`, { status: 500 });
  }
} 