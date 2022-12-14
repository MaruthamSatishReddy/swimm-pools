import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
type Props = {};

const Header = (props: Props) => {
  return (
    <AnimatePresence>
      <div className="max-w-max max-h-max relative">
        <video autoPlay loop muted className="object-cover">
          <source src="images/swimpool/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute max-w-max max-h-full top-0 flex flex-col items-center py-8 px-7">
          <nav className="rounded-lg hover:text-gray-400">
            <div className="relative text-2xl text-white">
              <div className="flex justify-between">
                <div className="flex space-x-7">
                  <a className="flex items-center px-0" href="#">
                    <motion.img
                      src="images/swimpool/pool-1.jpg"
                      alt=""
                      className="w-10 h-10 rounded-md shadow-lg animate-bounce"
                    />
                    <span className="font-serif text-lg tracking-normal text-[#F7AB0A]/80">
                      Swimm Pools
                    </span>
                  </a>
                  <div className="hidden md:flex space-x-10">
                    <Link
                      className="uppercase tracking-normal py-4 px-5 hover:border-white hover:text-white-500 hover:text-white font-light text-semibold animate-pulse hover:text"
                      href="#pdas"
                    >
                      <motion.button whileTap={{ scale: 0.5 }}>
                        POOL DESIGN AND STYLE
                      </motion.button>
                    </Link>
                    <Link
                      className="uppercase tracking-normal py-4 px-5 hover:border-white hover:text-white-500 hover:text-white font-light text-semibold animate-pulse"
                      href="#pt"
                    >
                      <motion.button whileTap={{ scale: 0.5 }}>
                        POOL TYPE
                      </motion.button>
                    </Link>
                    <Link
                      className="uppercase tracking-normal py-4 px-5 hover:border-white hover:text-white-500 hover:text-white font-light text-semibold animate-pulse"
                      href="#pf"
                    >
                      <motion.button whileTap={{ scale: 0.5 }}>
                        POOL FUTURE{' '}
                      </motion.button>
                    </Link>
                    <Link
                      className="uppercase tracking-normal py-4 px-5 hover:border-white hover:text-white-500 hover:text-white font-light text-semibold animate-pulse"
                      href="#pdas"
                    >
                      <motion.button whileTap={{ scale: 0.5 }}>
                        ABOUT{' '}
                      </motion.button>
                    </Link>
                    <Link
                      className="uppercase tracking-normal py-4 px-5 hover:border-white hover:text-white-500 hover:text-white font-light text-semibold animate-pulse"
                      href="#service"
                    >
                      <motion.button whileTap={{ scale: 0.5 }}>
                        SERVICES{' '}
                      </motion.button>
                    </Link>
                    <Link
                      className="uppercase tracking-normal py-4 px-5 hover:border-white hover:text-white-500 hover:text-white font-light text-semibold animate-pulse"
                      href="#contact"
                    >
                      <motion.button whileTap={{ scale: 0.5 }}>
                        CONTACT US{' '}
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-max mt-[17.5rem] transition-opacity">
              <h1 className="text-3xl py-100 ml-100 animate-pulse text-opacity-10">
                THE ULTIMATE OUTDOOR LIVING RESOURCE
              </h1>
            </div>
          </nav>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Header;
