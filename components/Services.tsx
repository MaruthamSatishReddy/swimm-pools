import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type Props = {};

const Services = (props: Props) => {
  return (
    <AnimatePresence>
      <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto">
        <h3 className="absolute uppercase tracking-[2px] text-gray-500 text-xl items-center sm:p-10">
          Pool Maintenance
        </h3>
        <div className="max-h-[500px] flex max-w-[1000px] shadow-lg rounded-lg overflow-hidden mt-[90px] mr-50">
          <div className="w-1/2 bg-cover bg-landscape mr-10">
            <motion.img
              whileHover={{ scale: [null, 1.5, 1.4] }}
              animate={{ x: 50 }}
              transition={{ type: 'spring', stiffness: 100, duration: 0.3 }}
              src="/images/swimpool/pool-maintenacnce.jpg"
              className="w-full shadow-lg rounded-md"
            />
          </div>
          <div className="text-lg w-2/3 p-4">
            <p className="text-md mt-2 ml-10">
              Swimming pools require timely maintenance and cleaning. Swimm
              Pools offers cost effective maintenance support to provide the
              best look and experience.
            </p>
            <div className="flex item-center mt-2"></div>

            <motion.button
              whileTap={{ scale: 0.5 }}
              className="bg-[#F7AB0A]/70 py-2 px-5 text-black font-bold text-lg uppercase rounded-sm"
            >
              GET A QUOTE
            </motion.button>
          </div>{' '}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Services;
