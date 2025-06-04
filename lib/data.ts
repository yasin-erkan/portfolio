import React from 'react';
import {CgWorkAlt} from 'react-icons/cg';
import {FaLanguage, FaReact} from 'react-icons/fa';
import {LuBriefcase, LuGraduationCap} from 'react-icons/lu';
import angular from '@/public/angular.png';
import carRental from '@/public/carRental.png';
import sportsMarket from '@/public/sportsMarket.png';
import hotel from '@/public/hotel.png';
import foodDelivery from '@/public/foodDelivery.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Full-stack Developer',
    location: 'Didiyos, Sweeden',
    description:
      'Currently working as a full-stack developer , I am responsible for the development of websites and web applications in a startup company.',
    icon: React.createElement(LuBriefcase),
    date: '2024 - present',
  },

  {
    title: 'Backend Developer',
    location: 'France',
    description:
      'Here, I built and optimized the backend of the applications using Node.js, Express, and MongoDB. I also developed the frontend of the applications using Angular',
    icon: React.createElement(LuGraduationCap),
    date: '2023 - 2024',
  },
  {
    title: 'Mobile App Developer',
    location: 'Remote, Turkey ',
    description:
      'In EmaarTechs, I developed cross-platform mobile applications for Android and iOS using React Native and Expo. I also developed the backend of the applications using Node.js and MongoDB.',
    icon: React.createElement(CgWorkAlt),
    date: '2022 - 2023',
  },
  {
    title: 'Web Developer',
    location: 'Istanbul, Turkey',
    description:
      "I worked in Mimcode as a web developer for 2 years. I was responsible for the development of the company's website and the development of the company's web applications.",
    icon: React.createElement(FaReact),
    date: '2020 - 2022',
  },
  {
    title: 'Language Teacher',
    location: 'Turkey',
    description:
      'After my graduation, I started to try to help my students to learn English and information technologies in 7-14 age group in Ministry of Education in Antalya',
    icon: React.createElement(FaLanguage),
    date: '2009 - 2018',
  },
] as const;

export const projectsData = [
  {
    title: 'Car Rental System',
    description:
      'A car rental system with a user-friendly interface and a modern design. It allows users to rent a car and manage their reservations.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: carRental,
  },
  {
    title: 'Online Marketplace',
    description:
      'Built with Angular 17, Clothing presents you a very simple and clean online marketplace for clothing items. ',
    tags: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
    imageUrl: angular,
  },
  {
    title: 'Hotel Reservation System',
    description:
      'A full-stack hotel reservation system  allows users browsing hotels and choose their beloved hotel,  reserve and manage their reservations.',
    tags: ['React', 'Tailwind', 'Redux', 'MongoDB', 'Express', 'Node.js'],
    imageUrl: hotel,
  },
  {
    title: 'Online Sports Store',
    description:
      'I built this project to learn about the basics of e-commerce system. It allows users to browse products, add them to cart, and checkout.',
    tags: ['TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: sportsMarket,
  },
  {
    title: 'Mobile Delivery',
    description:
      'This is an online food delivery application built with nextjs and redux. It allows users to browse restaurants, choose their favorite food, and order it.',
    tags: ['React', 'Next.js', 'Redux'],
    imageUrl: foodDelivery,
  },
] as const;

export const skillsData = [
  'JavaScript',
  'CSS/Sass',
  'TypeScript',
  'React',
  'Next.js',
  'Angular',
  'Unit Test',
  'React Native',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Express',
  'PostgreSQL',
  'Docker',
  'Nest.js',
  'Axios',
  'SqlLite',
  'FireBase',
  'CI/CD',
] as const;
