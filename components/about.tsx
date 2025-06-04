'use client';

import React from 'react';
import SectionHeading from './section-heading';
import {motion} from 'framer-motion';
import {useSectionInView} from '@/lib/hooks';

export default function About() {
  const {ref} = useSectionInView('About');

  return (
    <motion.section
  ref={ref}
  className="mb-24 max-w-2xl text-center leading-relaxed sm:mb-36 scroll-mt-28 px-4"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  id="about"
>
  <SectionHeading>About Me</SectionHeading>

  <p className="mb-6 text-gray-700 dark:text-gray-300">
    After earning a degree in <span className="font-semibold">Language Teaching (ELT)</span>, 
    I transitioned into <span className="font-semibold">software development</span>, driven by a deep interest in 
    technology and problem-solving. I completed a full-time coding bootcamp, gaining hands-on experience in 
    <span className="font-semibold"> full-stack web development</span>.
  </p>

  <p className="mb-6 text-gray-700 dark:text-gray-300">
    What excites me most about programming is the opportunity to solve real-world problems 
    through logical thinking and to design scalable, user-friendly digital solutions. 
    My main tech stack includes <span className="font-semibold">JavaScript, React, Next.js</span> (frontend), 
    <span className="font-semibold">Node.js, Express, MongoDB, Nest.js, PostgreSQL</span> (backend), and 
    <span className="font-semibold">React Native with Expo & CLI, SQLite</span> (mobile). 
    I’m also proficient in <span className="font-semibold">Angular and TypeScript</span>.
  </p>

  <p className="text-gray-700 dark:text-gray-300">
    Outside of tech, I enjoy <span className="italic">video gaming, film analysis</span>, and spending time with my family. 
    I’m passionate about <span className="font-semibold">lifelong learning</span>, especially in the ever-evolving field of software engineering.
  </p>
</motion.section>

  );
}
