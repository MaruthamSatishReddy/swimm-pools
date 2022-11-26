import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

type Props = {};

const CarouselScreen = (props: Props) => {
  return (
    <motion.div>
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showThumbs={false}
        dynamicHeight
      >
        <div className="relative group rounded-sm overflow-hidden ">
          <img src="images/swimpool/pool-7.jpg" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide transition "
          >
            <p className="text-md text-white-300 hover:text-gray-200 uppercase animate-bounce">
              Build a Pool
            </p>
          </a>
        </div>
        <div className="relative group rounded-sm overflow-hidden ">
          <img src="images/swimpool/pool-7.jpg" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide transition "
          >
            <p className="text-md text-white-300 hover:text-gray-200 uppercase animate-bounce">
              Build a Pool
            </p>
          </a>
        </div>
        <div className="relative group rounded-sm overflow-hidden ">
          <img src="images/swimpool/pool-7.jpg" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide transition "
          >
            <p className="text-md text-white-300 hover:text-gray-200 uppercase animate-bounce">
              Build a Pool
            </p>
          </a>
        </div>
        <div className="relative group rounded-sm overflow-hidden ">
          <img src="images/swimpool/pool-7.jpg" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide transition "
          >
            <p className="text-md text-white-300 hover:text-gray-200 uppercase animate-bounce">
              Build a Pool
            </p>
          </a>
        </div>
      </Carousel>
    </motion.div>
  );
};

export default CarouselScreen;
