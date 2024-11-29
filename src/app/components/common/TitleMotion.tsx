'use client';
import animationConfig from '@/app/config/animationConfig';
import { AnimatePresence, motion } from 'motion/react';

export default function TitleMotion({ children }: { children: string }) {
  if (!children) return;
  const strings = children.split('').map((string) => {
    if (string === ' ') {
      string = '&nbsp;';
    }

    return string;
  });
  // console.log(strings);
  let count = 0;

  return (
    <AnimatePresence>
      {strings.map((string, index) => {
        count = count + 0.005;
        // console.log(string, index, count);
        return <motion.span key={index} initial={{ y: 8, opacity: 0, filter: 'blur(4px)' }} animate={{ y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: animationConfig.titleTransitionDuration, delay: count } }} className='inline-block' dangerouslySetInnerHTML={{ __html: string }} />;
      })}
    </AnimatePresence>
  );
}
