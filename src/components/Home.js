import calabasas_country_club from "../assets/img.png";
import React from "react";
import Apply from "./Apply";
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import Companies from "./Companies";
const Home = () => {
  return (
      <>
          <div className="flex flex-wrap">
              <div className="flex relative justify-between p-4">
                  <div className="w-full  sm:h-[400px] lg:h-[719px] absolute top-0 left-0">
                      <img className="w-screen lg:h-[719px]"
                           src={calabasas_country_club}
                           alt={"image"}
                      />
                  </div>
                  <div className="z-12 flex absolute top-0 left-0 h-full">
                      <div
                          className="bg-gradient-botleft-to-topright from-[#C1DDCC] via-[#C1DDCC] via-[#C1DDCC] to-[#C1DDCC]/30 w-screen sm:h-[400px] lg:h-[719px]"></div>
                  </div>

                  <div className="z-10 relative flex flex-col p-4 gap-4">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-green-900 p-4">CS Country Club</h1>
                    <p className="text-lg sm:text-lg lg:text-4xl font-extralight text-neutral-700 px-4">
                          An active discord community with members from top companies
                    </p>
                    <div className="px-4">
                    <a href="/apply" className="flex items-center justify-center block sm:w-auto sm:h-[36px] bg-green-button text-white font-light text-lg sm:text-xl lg:w-[400px] lg:h-[78px]  rounded-md py-3 px-2 transition-all hover:shadow-lg active:opacity-85">
                            Apply
                    </a>
                        {/*<Button
                          variant="gradient"
                          className=" rounded-md bg-green-button text-white font-light text-2xl"
                          style={{ width: '400px', height: '78px', left: '58px', top: '415px', paddingLeft:'10px'}}
                          onClick={handleNavigate}
                      >
                          Apply
                      </Button> */}
                      </div>
                      <p className="sm:text-md lg:text-3xl font-extralight text-neutral-700 p-4">
                          With a rapidly changing hiring landscape, it's more important than ever that we help each
                          other succeed.
                      </p>
                  </div>
              </div>
          </div>
      </>
  );
};
export default Home;
