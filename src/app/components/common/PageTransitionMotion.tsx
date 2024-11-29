'use client';
import animationConfig from '@/app/config/animationConfig';
import { motion } from 'motion/react';

export default function pageTransitionMotion({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ y: 32, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: animationConfig.pageTransitionDuration } }}>
      {children}
    </motion.div>
  );
}
