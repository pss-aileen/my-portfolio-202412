import React from 'react';
import experienceAndHistory from '../database/experience-and-history';
import { RiHeart3Line, RiPencilRulerLine, RiSpeakLine } from 'react-icons/ri';
import PageTransitionMotion from '../components/common/PageTransitionMotion';
import TitleMotion from '../components/common/TitleMotion';
import profileImage from './../components/common/img-profile.png';
import Image from 'next/image';

export default function Page() {
  return (
    <PageTransitionMotion>
      <section>
        <h2 className='text-4xl font-bold tracking-tighter text-neutral-800'>
          <TitleMotion>About me</TitleMotion>
        </h2>

        <div className='lg:flex lg:gap-6 mt-4 lg:items-start'>
          <div className='lg:min-w-80 p-2 border rounded lg:order-1'>
            <Image src={profileImage} alt='Aileen' className='w-[100%] rounded' />
          </div>
          <div className='lg:flex-1 mt-4 lg:mt-0'>
            <p className='text-neutral-600'>I am Aileen. I work as a Freelance Web Developer in Japan. I am focusing on learning frontend technologies, particularly TypeScript, React, and Next.js, to prepare for the next step.</p>
            <p className='mt-2'>I would be grateful for the opportunity to work in Malaysia or Japan.</p>
            <p className='mt-4'>
              <RiSpeakLine className='inline size-4 mb-[3px] mr-2' />
              Japanese: Native, English: Basic conversation
            </p>
            <p className='mt-2'>
              <RiPencilRulerLine className='inline size-4 mb-[3px] mr-2' />
              Tools: VS Code, Figma, Illustrator, Photoshop, Dreamweaver
            </p>
            <p className='mt-2'>
              <RiHeart3Line className='inline size-4 mb-[3px] mr-2' />
              Like: Pizza(margherita), Pixel art, Take photos
            </p>
          </div>
        </div>

        <section>
          <h3 className='text-3xl font-bold tracking-tighter mt-16 text-neutral-800 '>Experience and History</h3>

          <p className='mt-4'>
            Please ask more information(resume) from{' '}
            <a href='https://forms.gle/rthU4xsiSiw9NmSBA' className='underline'>
              here
            </a>
            .
          </p>

          {experienceAndHistory.map((item, index) => (
            <List key={item.title} title={item.title} dateStart={item.date.start} dateEnd={item.date.end} description={item.description} index={index} />
          ))}
        </section>
      </section>
    </PageTransitionMotion>
  );
}

type ListProps = {
  dateStart: string;
  dateEnd: string;
  title: string;
  description: string;
  index: number;
};

function List({ dateStart, dateEnd, title, description, index }: ListProps) {
  return (
    <section className={`pt-6 pb-6 border-b lg:grid lg:grid-cols-12 ${index === 0 && 'border-t mt-6'}`}>
      <p className='lg:col-span-3'>
        {dateStart} - {dateEnd}
      </p>
      <div className='lg:col-span-9 mt-1 lg:mt-0'>
        <h4 className='text-neutral-800 font-bold text-lg tracking-tighter'>{title}</h4>
        <p className='mt-1'>{description}</p>
      </div>
    </section>
  );
}
