import Head from 'next/head';
import About from '../components/AboutUs';
import Header from '../components/Header';
import Services from '../components/Services';
import PoolTypes from '../components/PoolType';
import PoolDesignStyle from '../components/PoolDesignStyle';
import Contact from '../components/Contact';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="h-screen bg-black text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Swimm Pools</title>
      </Head>

      <section id="header" className="snap-start">
        <Header />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="pdas" className="snap-center">
        <PoolDesignStyle />
      </section>
      <section id="pt" className="snap-center">
        <PoolTypes />
      </section>

      <section id="service" className="snap-center">
        <Services />
      </section>
      <section id="contact" className="snap-center">
        <Contact />
      </section>
      <Link href="#header">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <ArrowUpCircleIcon
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer animate-pulse
            "
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
