import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
type Props = {};

const PoolDesignStyle = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto">
      <h3 className="absolute uppercase tracking-[2px] text-gray-500 text-xl items-center sm:p-10">
        PoolDesignStyle
      </h3>

      <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
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
    </div>
  );
};

export default PoolDesignStyle;
