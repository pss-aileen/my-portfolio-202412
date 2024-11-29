// 'use client';
import React from 'react';
import { notFound } from 'next/navigation';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import rehypeShiki from '@shikijs/rehype';
import { getBlogPosts } from '@/app/utils/getBlogPosts';
import PageTransitionMotion from '@/app/components/common/PageTransitionMotion';
import TitleMotion from '@/app/components/common/TitleMotion';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { visit } from 'unist-util-visit';
import remarkGfm from 'remark-gfm';
import { Root, Element } from 'hast'; // hastの型をインポート

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, publishedAt: publishedAt, summary: description } = post.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedAt,
      // url: `${baseUrl}/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

type PageParams = {
  slug: string;
};

export default async function page({ params }: { params: PageParams }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  const postContent = await contentParser(post.content);
  return (
    <PageTransitionMotion>
      <section className='lg:max-w-screen-sm lg:mx-auto'>
        <h1 className='text-3xl font-bold tracking-tighter text-neutral-800'>
          <TitleMotion>{post.metadata.title}</TitleMotion>
        </h1>
        <p className='mt-4'>{post.metadata.publishedAt}</p>

        <section dangerouslySetInnerHTML={{ __html: postContent }} className='prose prose-img:rounded mt-8 prose-h2:text-xl prose-h3:text-lg leading-normal prose-headings:tracking-tighter prose-li:my-1 prose-blockquote:font-normal prose-blockquote:not-italic prose-ul:pl-5 prose-ol:pl-5 max-w-none' />
      </section>
    </PageTransitionMotion>
  );
}

async function contentParser(content: string) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(rehypeExternalLinks)
    .use(rehypeShiki, {
      themes: {
        light: 'laserwave',
        dark: 'laserwave',
      },
    })
    .use(rehypeStringify);

  const file = await processor.process(content);

  return String(file);
}

const rehypeExternalLinks = () => {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      if (node.tagName === 'a' && node.properties?.href) {
        const url = node.properties.href;
        if (typeof url === 'string' && url.startsWith('http')) {
          node.properties.target = '_blank';
          node.properties.rel = 'noopener noreferrer';
        }
      }
    });
  };
};
