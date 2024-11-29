import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import PageTransitionMotion from './components/common/PageTransitionMotion';

export default function Home() {
  return (
    <>
      <section className='lg:text-center'>
        {/* <div className='lg:fixed lg:top-1/2 lg:left-0 lg:w-full lg:-translate-y-1/2'> */}
        <div className='min-h-screen p-6 flex justify-center items-center'>
          <PageTransitionMotion>
            <p className='text-5xl font-bold tracking-tighter text-neutral-800 lg:text-7xl'>Hi, I&apos;m Aileen.</p>
            <p className='mt-4'>I am a freelance web developer aspiring to become a frontend developer.</p>
            <div className='mt-8 text-2xl'>
              <a href='https://github.com/pss-aileen' className=''>
                <FaGithub className='inline-block' />
              </a>
              <a href='https://x.com/pss_aileen' className='ml-2'>
                <FaXTwitter className='inline-block' />
              </a>
            </div>
          </PageTransitionMotion>
        </div>
      </section>
    </>
  );
}

// <img src='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Hearts.png' width='48' height='48' alt='Smile' className='' />
