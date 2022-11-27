import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
type Props = {};

const PoolDesignStyle = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto">
      <h3 className="absolute uppercase tracking-[2px] text-gray-500 text-xl items-center sm:p-10">
        PoolDesignStyle
      </h3>
      <h1 className="absolute uppercase tracking-[2px] text-gray-500 text-xl items-center sm:p-10">
        Choose Your Pool Design & Style / Concept
      </h1>

      <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
        <div className="relative group rounded-sm overflow-hidden ">
          <img
            src="images/swimpool/Overflow-Pools.jpg"
            className="w-full h-[600px]"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide transition "
          >
            <div className="text-md text-white-300 hover:text-gray-200 uppercase">
              <div className="grid grid-flow-row auto-rows-max">
                <p className="text-center transition-shadow">Overflow Pools</p>
                <p className="text-gray-500"> Scenice and Spectacular</p>
                <motion.button className="rounded hover:rounded-lg text-gray-200 font-bold text-lg bg-gray-400 uppercase mt-10">
                  know more
                </motion.button>
              </div>
            </div>
          </a>
        </div>
        <div className="relative group rounded-sm overflow-hidden ">
          <img
            src="images/swimpool/Skimmer-Pools.jpg"
            className="w-full h-[600px]"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide transition "
          >
            <div className="text-md text-white-300 hover:text-gray-200 uppercase">
              {' '}
              <div className="grid grid-flow-row auto-rows-max">
                <p className="text-center transition-shadow">Skimmer Pools</p>
                <p className="text-gray-500">
                  {' '}
                  Functional, Elegant & Cost Effective
                </p>
                <motion.button className="rounded hover:rounded-lg text-gray-200 font-bold text-lg bg-gray-400 uppercase mt-10">
                  know more
                </motion.button>
              </div>
            </div>
          </a>
        </div>
        <div className="relative group rounded-sm overflow-hidden ">
          <img
            src="images/swimpool/Infinity-Pool.jpg"
            className="w-full h-[600px]"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide transition "
          >
            <div className="text-md text-white-300 hover:text-gray-200 uppercase">
              <div className="grid grid-flow-row auto-rows-max">
                <p className="text-center transition-shadow animate-bounce">
                  Infinity Pools
                </p>
                <p className="text-gray-500">
                  {' '}
                  Luxurious & Visually Captivating
                </p>
                <motion.button className="rounded hover:rounded-lg text-gray-200 font-bold text-lg bg-gray-400 uppercase mt-10">
                  know more
                </motion.button>
              </div>
            </div>
          </a>
        </div>
        <div className="relative group rounded-sm overflow-hidden ">
          <img src="images/swimpool/cardio.jpg" className="w-full h-[600px]" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide transition "
          >
            <div className="text-md text-white-300 hover:text-gray-200 uppercase">
              <div className="grid grid-flow-row auto-rows-max">
                <p className="text-center transition-shadow animate-bounce">
                  Cardio Pool
                </p>
                <p className="text-gray-500"> Where Budget Meets Quality</p>
                <motion.button className="rounded hover:rounded-lg text-gray-200 font-bold text-lg bg-gray-400 uppercase mt-10">
                  know more
                </motion.button>
              </div>
            </div>
          </a>
        </div>
      </Carousel>
    </div>
  );
};

export default PoolDesignStyle;
