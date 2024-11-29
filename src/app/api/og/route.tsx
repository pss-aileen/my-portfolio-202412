import { ImageResponse } from 'next/og';

export const runtime = 'edge'; // 必須: Edge Runtimeを使用

// http://localhost:3000/api/og?title=Hello+WorldNaNaNA

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const title = searchParams.get('title') || 'Default Title';

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          width: '1200px',
          height: '630px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        tw='bg-gray-400 p-8'
      >
        {title}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
