import calabasas_country_club from "../assets/img.png";
import React from "react";
import Apply from "./Apply";


const Home = () => {
  return (
      <div className="w-screen h-[705px] ">

          <div className="w-full h-full absolute top-0 left-0">
              <img className="w-full h-[719px] left-0 top-[-14px] absolute"
                  src={calabasas_country_club}
                  alt={"image"}
              />
          </div>
          <div className="z-12 absolute top-0 left-0 w-full h-full">
              <div className="bg-gradient-botleft-to-topright from-[#C1DDCC] via-[#C1DDCC] via-[#C1DDCC] to-[#C1DDCC]/30 w-full h-full"></div>
          </div>
          <div className="z-11 w-[592px] h-[87px] left-[34px] top-[111px] absolute text-green-900 text-7xl font-bold font-['Libre Franklin']">
              CS Country Club
          </div>
          <div
              className="w-[932px] h-[130px] left-[33px] top-[226px] absolute text-neutral-700 text-[54px] font-light font-['Libre Franklin']">
              An active discord community with members from top companies
          </div>

          <button className="w-[342.77px] h-[74.35px] bg-green-700 rounded-[15px] border border-green-700"> Apply </button>
          <div
              className="w-[738px] h-[72px] left-[34px] top-[546px] absolute text-black text-3xl font-light font-['Libre Franklin']">
              With a rapidly changing hiring landscape, it's more important than
              ever that we help each other succeed.
          </div>
      </div>
  );
};
export default Home;
