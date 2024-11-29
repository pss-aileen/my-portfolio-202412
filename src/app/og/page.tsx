// 'use client';
import Image from 'next/image';
import img from './img-profile.png';
import React from 'react';

export default function page() {
  const image = (
    <div
      style={{
        width: '1200px',
        height: '630px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className='bg-neutral-100 p-8 border'
    >
      <div className='bg-white w-full h-full rounded-xl py-16 px-16 '>
        <div className='relative h-full w-full'>
          <div className='text-5xl leading-loose tracking-wide'>compass 参加メモ: フロントからバックエンドまで、TypeScriptでシームレスな開発エクスペリエンスを</div>
          <div className='absolute bottom-0 right-0 text-center flex items-center gap-4'>
            <p className='text-2xl'>@pss-aileen</p>
            <Image src={img} alt='gazou' className='size-20 rounded-full block' />
          </div>
        </div>
      </div>
    </div>
  );
  return <div className='flex items-center justify-center min-h-svh'>{image}</div>;
}
