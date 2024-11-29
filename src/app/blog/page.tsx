import Link from 'next/link';
import React from 'react';
import { getBlogPosts } from '../utils/getBlogPosts';
import { Metadata } from 'next';
import PageTransitionMotion from '../components/common/PageTransitionMotion';
import TitleMotion from '../components/common/TitleMotion';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'by Aileen',
};

export default function Page() {
  const allPosts = getBlogPosts().reverse();
  return (
    <PageTransitionMotion>
      <div>
        <h2 className='text-4xl font-bold tracking-tighter text-neutral-800'>
          <TitleMotion>Blog</TitleMotion>
        </h2>

        <p className='mt-4'>English and Japanese.</p>

        <ul className='mt-6 lg:grid lg:grid-cols-2 lg:gap-4'>
          {allPosts.map((post, index) => {
            return (
              <li key={post.slug} className={`pt-6 pb-6 border-b ${index === 0 && 'border-t mt-6 lg:mt-0'} lg:border-none lg:p-0`}>
                <Link href={'/blog/' + post.slug} className='lg:py-6 lg:px-6 lg:rounded lg:bg-neutral-50 lg:block lg:hover:bg-neutral-100 lg:transition-colors lg:duration-300 lg:h-full lg:border'>
                  <p className='text-sm'>{post.metadata.publishedAt}</p>
                  <p className='font-bold text-neutral-800 tracking-tighter mt-1 text-lg'>{post.metadata.title}</p>
                  <p className='mt-1'>{post.metadata.summary}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </PageTransitionMotion>
  );
}
