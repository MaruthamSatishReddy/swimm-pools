import React from 'react';

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto">
      <h3 className="absolute uppercase tracking-[2px] text-gray-500 text-xl items-center sm:p-10">
        Services
      </h3>
    </div>
  );
};

export default Services;
