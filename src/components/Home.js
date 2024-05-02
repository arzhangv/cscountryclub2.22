import calabasas_country_club from "../assets/img.png";
import React from "react";
import Apply from "./Apply";
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import Companies from "./Companies";
const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () =>{
    navigate('/apply');
  }
  return (
      <>
          <div className="flex flex-wrap">
              <div className="flex relative justify-between p-4">
                  <div className="w-screen h-full absolute top-0 left-0">
                      <img className="w-screen lg:h-[719px]"
                           src={calabasas_country_club}
                           alt={"image"}
                      />
                  </div>
                  <div className="z-12 flex absolute top-0 left-0 h-full">
                      <div
                          className="bg-gradient-botleft-to-topright from-[#C1DDCC] via-[#C1DDCC] via-[#C1DDCC] to-[#C1DDCC]/30 w-screen h-screen"></div>
                  </div>

                  <div className="z-10 relative flex flex-col p-4 gap-4">
                    <h1 className="w-1/2 p-8 text-7xl font-bold text-green-900">CS Country Club</h1>
                    <p className="w-2/3 px-8 text-[54px] font-extralight text-neutral-700">
                          An active discord community with members from top companies
                    </p>
                    <div className="px-8">
                    <a href="/apply" className="flex items-center justify-center font-sans uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 w-[400px] h-[78px] bg-gradient-to-tr shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-md bg-green-button text-white font-light text-2xl">
                            Apply
                    </a>
                      {/* <Button
                          variant="gradient"
                          className=" rounded-md bg-green-button text-white font-light text-2xl"
                          style={{ width: '400px', height: '78px', left: '58px', top: '415px', paddingLeft:'10px'}}
                          onClick={handleNavigate}
                      >
                          Apply
                      </Button> */}
                      </div>
                      <p className="p-8 text-3xl font-extralight text-black">
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
