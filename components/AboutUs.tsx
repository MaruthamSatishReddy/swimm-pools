import React from 'react';

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto">
      <h3 className="absolute uppercase tracking-[2px] text-gray-500 text-xl items-center sm:p-10">
        About
      </h3>
      <div className="space-y-10 px-0 text-center top-10 py-10 p-10 text-lg">
        <h4 className="text-xl"></h4>
        <p className="text-md text-justify">
          Swimm Pools was founded to cater to the growing swimming pool market
          in India. It centers on construction, renovation and maintenance of
          swimming pools with cost effective and quality solutions. Joy Pools
          has developed key areas of strength like Domain and Technological
          Expertise, Skilled Manpower and Flawless Quality in Delivery to define
          its service. Joy Pools recognised that it must focus on strengths like
          these, combined with value for customer satisfaction, to become a
          competitive player in the market
        </p>
      </div>
    </div>
  );
};

export default About;
