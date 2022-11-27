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
            src="/images/swimpool/iPanelLinerPools.jpg"
            className="max-h-[300px] w-full"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide"
          >
            <div className="grid grid-flow-row auto-rows-max">
              <p className="text-center transition-shadow animate-bounce">
                iPanel Liner Pools
              </p>

              <motion.button className="rounded hover:rounded-lg text-gray-200 font-bold text-lg bg-gray-400 uppercase mt-10">
                know more
              </motion.button>
            </div>
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          className="relative group rounded-sm overflow-hidden "
        >
          <img
            src="/images/swimpool/CompositePools.jpg"
            className="max-h-[300px] w-full"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide"
          >
            <div className="grid grid-flow-row auto-rows-max">
              <p className="text-center transition-shadow animate-bounce">
                Composite Pools
              </p>

              <motion.button className="rounded hover:rounded-lg text-gray-200 font-bold text-lg bg-gray-400 uppercase mt-10">
                know more
              </motion.button>
            </div>
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          className="relative group rounded-sm overflow-hidden"
        >
          <img
            src="/images/swimpool/conventional-concrete-tile-pool.jpg"
            className="max-h-[300px] w-full"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide"
          >
            <div className="grid grid-flow-row auto-rows-max">
              <p className="text-center transition-shadow animate-bounce">
                Conventional Concrete Tile Pools
              </p>

              <motion.button className="rounded hover:rounded-lg text-gray-200 font-bold text-lg bg-gray-400 uppercase mt-10">
                know more
              </motion.button>
            </div>
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
            <div className="grid grid-flow-row auto-rows-max">
              <p className="text-center transition-shadow animate-bounce">
                Cardio Pools
              </p>

              <motion.button className="rounded hover:rounded-lg text-gray-200 font-bold text-lg bg-gray-400 uppercase mt-10">
                know more
              </motion.button>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default PoolTypes;
