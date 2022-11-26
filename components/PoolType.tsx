import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const PoolTypes = (props: Props) => {
  return (
    <div className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto">
      <h3 className="absolute uppercase tracking-[2px] text-gray-500 text-xl items-center sm:p-10">
        Choose Your Swimming Pool Type
      </h3>

      <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-2">
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          className="relative group rounded-sm overflow-hidden transition-shadow"
        >
          <img
            src="/images/swimpool/Infinity-Pool.jpg"
            className="max-h-[300px] w-full"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide"
          >
            Infinity Pool
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          className="relative group rounded-sm overflow-hidden "
        >
          <img
            src="/images/swimpool/Overflow-Pools.jpg"
            className="max-h-[300px] w-full"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide"
          >
            Overflow Pools
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          className="relative group rounded-sm overflow-hidden"
        >
          <img
            src="/images/swimpool/Skimmer-Pools.jpg"
            className="max-h-[300px] w-full"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide"
          >
            Skimmer Pools
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          className="relative group rounded-sm overflow-hidden "
        >
          <img
            src="/images/swimpool/cardio.jpg"
            className="max-h-[300px] w-full"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide"
          >
            Cardio Pools
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default PoolTypes;
