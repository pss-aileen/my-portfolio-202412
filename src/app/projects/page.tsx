import React from 'react';
import { projects, tags } from '../database/projects';
import { FaGithub } from 'react-icons/fa';
import { GoLink } from 'react-icons/go';
import { IoIosConstruct } from 'react-icons/io';
import { Metadata } from 'next';
import PageTransitionMotion from '../components/common/PageTransitionMotion';
import TitleMotion from '../components/common/TitleMotion';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'by Aileen',
};

export default function Page() {
  return (
    <PageTransitionMotion>
      <div>
        <h2 className='text-4xl font-bold tracking-tighter text-neutral-800'>
          <TitleMotion>Projects</TitleMotion>
        </h2>

        <p className='mt-4'>For professional projects that cannot be shared here, please feel free to contact me.</p>

        <div className='lg:grid lg:grid-cols-3 lg:gap-8 mt-6'>
          {projects.map((item, index) => (
            <List imgeUrl={item.imageUrl.src} title={item.title} websiteUrl={item.url.website} githubUrl={item.url.github} tags={item.tags} overview={item.overview} key={item.id} index={index} isUnderConstruction={item.isUnderConstruction} />
          ))}
        </div>
      </div>
    </PageTransitionMotion>
  );
}

type ListProps = {
  imgeUrl: string;
  title: string;
  websiteUrl: string;
  githubUrl: string;
  tags: string[];
  overview: string;
  index: number;
  isUnderConstruction?: boolean;
};

function List({ imgeUrl, title, websiteUrl, githubUrl, tags, overview, index, isUnderConstruction }: ListProps) {
  return (
    <section className={`pt-6 pb-6 border-b ${index === 0 && 'border-t mt-6 lg:mt-0'} lg:border-none lg:p-0 lg:flex lg:flex-col`}>
      <div className='relative overflow-hidden'>
        <Image src={imgeUrl} alt={title} className='aspect-video object-cover rounded border' sizes='100vw' width={1600} height={900} />
        {isUnderConstruction && (
          <div className='bg-yellow-400 text-yellow-600 absolute z-10 rotate-45 right-4 top-4 w-24 h-6  flex justify-center items-center translate-x-1/2 -translate-y-1/2'>
            <IoIosConstruct className='-rotate-45' />
          </div>
        )}
      </div>
      <h3 className='font-bold text-neutral-800 tracking-tighter mt-4 text-lg'>{title}</h3>
      <ul className='flex flex-wrap gap-1 mt-2'>
        {tags.map((tag, index) => (
          <Tag tag={tag} key={index} />
        ))}
      </ul>
      <p className='mt-2 mb-auto'>{overview}</p>
      <ul className='mt-4 grid grid-cols-2 gap-2'>
        <li className={!githubUrl ? 'opacity-40 pointer-events-none' : ''}>
          <a href={githubUrl} className='bg-neutral-50 border flex items-center justify-center gap-2 py-2 px-4 text-center rounded lg:hover:bg-neutral-100 lg:transition-colors lg:duration-300' target='_blank'>
            <FaGithub className='' />
            GitHub
          </a>
        </li>
        <li className={!websiteUrl ? 'opacity-40 pointer-events-none' : ''}>
          <a href={websiteUrl} className='bg-neutral-50 border flex items-center justify-center gap-2 py-2 px-4 text-center rounded lg:hover:bg-neutral-100 lg:transition-colors lg:duration-300' target='_blank'>
            <GoLink />
            Website
          </a>
        </li>
      </ul>
    </section>
  );
}

function Tag({ tag }: { tag: string }) {
  const tagInfo = tags.find((tagInfo) => tagInfo.id === tag);
  // tagInfo = tagInfo[0];
  if (!tagInfo) {
    return;
  }
  const IconCompontnt = tagInfo.icon;
  return (
    <li className='text-xs border py-1 px-2 rounded'>
      <div className='flex items-center gap-1'>
        <IconCompontnt style={{ color: tagInfo.color }} />
        {/* <IconCompontnt /> */}

        {tagInfo.name}
      </div>
    </li>
  );
}
