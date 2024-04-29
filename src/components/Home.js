import calabasas_country_club from "../assets/img.png";
import React from "react";
import Apply from "./Apply";
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

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
            <div className="bg-gradient-botleft-to-topright from-[#C1DDCC] via-[#C1DDCC] via-[#C1DDCC] to-[#C1DDCC]/30 w-screen h-screen"></div>
          </div>

          <div className="z-11 w-[592px] h-[87px] left-[34px] top-[111px] flex absolute text-green-900 text-7xl font-bold font-fontFamily"> CS Country Club
          </div>

          <div className="w-[932px] h-[130px] left-[33px] top-[226px] flex absolute text-neutral-700 text-[54px] font-extralight font-['Libre Franklin']">
            An active discord community with members from top companies
          </div>

          <div className="w-[738px] h-[72px] left-[34px] top-[546px] flex absolute text-black text-3xl font-extralight font-['Libre Franklin']">
         With a rapidly changing hiring landscape, it's more important than ever that we help each other succeed.
          </div>
          <Button
            variant="gradient"
            className="w-[400px] h-[78px] left-[58px] top-[415px] absolute rounded-md bg-green-button text-white font-light font-['Libre Franklin'] text-2xl"
            onClick={handleNavigate}
          >
            Apply
          </Button>
        </div>
    </div>
    </>
  );
};
export default Home;
