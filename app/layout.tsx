import Header from '@/components/header';
import './globals.css';
import {Inter} from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import {Toaster} from 'react-hot-toast';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Yasin Erkan | Personal Portfolio',
  description:
    'Yasin is a full-stack web & mobile developer in Javascript technologies.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-to-br from-gray-50 to-gray-100 text-gray-950 relative pt-28 sm:pt-36 dark:from-[#0f172a] dark:to-[#1e293b] dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:from-indigo-500/20 dark:to-cyan-500/20"></div>
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:from-violet-500/20 dark:to-fuchsia-500/20"></div>
        <div className="bg-gradient-to-r from-emerald-100 to-teal-100 absolute bottom-[-1rem] -z-10 right-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem] dark:from-emerald-500/20 dark:to-teal-500/20"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
