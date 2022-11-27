import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type Props = {};

const Services = (props: Props) => {
  return (
    <AnimatePresence>
      <div className="h-screen flex relative flex-col text-center md:text-left md:md:flex-row max-w-7xl justify-evenly mx-auto">
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
              className="bg-[#F7AB0A]/70 py-2 px-5 font-bold text-lg uppercase rounded-sm hover:bg-[#F7AB0A]/40 text-white tracking-[2px]"
            >
              GET A QUOTE
            </motion.button>
          </div>{' '}
        </div>
      </div>

      <div className="mt-[-365px] ml-[78px]">
        <h1 className="text-lg font-semibold font-sans">
          Why is Swimming Pool Maintenance Important?{' '}
        </h1>
        <span className="text-sm font-sans">
          Your pool is an investment. Just like other big purchases in your
          life, like a house or car, your pool requires maintenance to ensure
          that it works properly. In the same way that you have your gutters
          cleaned to prevent unnecessary damage to your home, or get the brakes
          serviced on your car, owning a pool requires regular maintenance and
          upkeep. One of the most important factors of pool maintenance is
          keeping your water chemistry properly balanced. When your water is not
          balanced, a number of issues can arise including damage to your pool
          equipment and handrails, irritation to your skin and eyes while
          swimming, reducing the life of your pool liner and more.Over time, a
          lack of maintenance can cause you to spend more money than would
          otherwise be needed to replace parts.
        </span>

        <h1 className="text-lg font-semibold font-sans p-2 break-normal">
          What kind of Swimming Pool maintenance is needed?
        </h1>
        <span className="text-sm font-sans">
          It’s important to maintain your water chemistry and ensure that your
          pH, chlorine and calcium levels are accurate. How do you know if your
          water is balanced? Our Drop and Go water testing program is one of the
          easiest ways to get an analysis of your water and a chemical
          recommendation plan. You’ll also need to remove any debris, bacteria
          and algae that have formed in your pool to keep it safe for swimming.
          Updating pool parts, like your filter is also important for keeping
          your pool functioning. It’s easy to remember maintenance for the
          interior of your pool, but you can’t forget about cleaning the
          exterior of your pool area to prevent build-up from forming that can
          cause damage over time.
        </span>
        <h1 className="text-lg font-semibold font-sans p-2 break-normal">
          Do I need a professional for Swimming pool maintenance?
        </h1>
        <span className="text-sm font-sans">
          While there are certain things you can do yourself, we always
          recommend working with a professional to extend the life of your pool.
        </span>
      </div>
    </AnimatePresence>
  );
};

export default Services;
