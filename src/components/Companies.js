import react from "react";
import bloomberg from "../assets/bloomberg.svg";
import snowflake from "../assets/snowflake2.svg";
import coinbase from "../assets/coinbase.svg";
import tiktok from "../assets/tiktok.svg";
import tesla from "../assets/tesla.svg";
import roblox from "../assets/roblox.svg";
import microsoft from "../assets/microsoft.svg";
import meta from "../assets/meta.svg";
import google from "../assets/google.svg";
import datadog from "../assets/datadog.svg";
import amazon from "../assets/amazon.svg"
import palantir from "../assets/palantir.svg"
const Companies = () => {
  return (
      <>
          <div className="bg-green-tertiary ">
              <div className="lg:py-20 sm:py-4 text-center relative  lg:text-[34px] sm:text-[16px] font-normal text-green-900 font-['Libre Franklin'] tracking-[5.44px]">MEMBERS
                  HAVE GOTTEN JOBS AT
              </div>

              <div className="mx-20 py-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-items-center items-center gap-x-2 gap-y-6 md:gap-x-2 md:gap-y-12">
                  <img className="w-[178px] h-[81px] mix-blend-darken" src={bloomberg} alt="Bloomberg"/>
                  <img className="sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[81px] mix-blend-darken" src={snowflake} alt="Snowflake"/>
                  <img className="sm:w-[60px] sm:w-[60px] lg:w-[100px] lg:h-[97.10px] mix-blend-darken" src={coinbase} alt="Coinbase"/>
                  <img className="w-[140px] h-[81px] mix-blend-darken" src={tiktok} alt="Tiktok"/>
                  <img className="w-[100px] h-[100px] mix-blend-darken" src={tesla} alt="Tesla"/>
                  <img className="w-[178px] h-[120px] mix-blend-darken" src={roblox} alt="Roblox"/>
              </div>
              <div
                  className="mx-20 py-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-items-center items-center gap-x-2 gap-y-12 md:gap-x-2 md:gap-y-16">
                  <img className="w-[130px] h-[100px] mix-blend-darken" src={microsoft} alt="Microsoft"/>
                  <img className="w-[140px] h-[140px] mix-blend-darken" src={meta} alt="Meta"/>
                  <img className="w-[80px] h-[81px] mix-blend-darken" src={google} alt="Google"/>
                  <img className="w-[100px] h-[100px] mix-blend-darken px-3" src={datadog} alt="Datadog"/>
                  <img className="w-[100px] h-[100px] mix-blend-darken" src={amazon} alt="Amazon"/>
                  <img className="w-[178px] h-[120px] mix-blend-darken" src={palantir} alt="Palantir"/>
              </div>

              <div className="relative lg:py-16 sm:py-4 "></div>
              <div className="text-center text-green-900  font-bold font-['Libre Franklin']">
                 <h1 className="sm:text[66px] md:text-2xl lg:text-[66px]">Perks </h1>
              </div>
              <div className="relative py-8 text-center"><span
                  className="sm:text-md lg:text-[30px] text-black font-semibold font-['Libre Franklin']"> 1.) </span><span
                  className="sm:text-md lg:text-[30px] text-black  font-extralight font-['Libre Franklin']">Get access to fresh and exclusive job postings sourced from the community<br/><br/></span><span
                  className="sm:text-md lg:text-[30px] text-black font-semibold font-['Libre Franklin']">2.) </span><span
                  className="sm:text-md lg:text-[30px] text-black font-extralight font-['Libre Franklin']">Engaging in a community of ambitious and knowledgeable tech enthusiasts<br/></span><span
                  className="sm:text-md lg:text-[30px] text-black font-semibold font-['Libre Franklin']"><br/>3.)</span><span
                  className="sm:text-md lg:text-[30px] text-black font-extralight font-['Libre Franklin']"> Find out about interview processes in real time and study archived questions for review</span>
              </div>
              <div className="relative lg:py-16 sm:py-8"></div>
              <div
                  className="relative sm:text-2xl md:text-2xl lg:text-[30px]   text-center text-green-900 font-bold font-['Libre Franklin']">About
              </div>
              <div className="relative  text-center text-black sm:text-2xl md:text-2xl lg:text-[30px]  font-extralight font-['Libre Franklin']">
                  <h1 className="relative  text-center text-black sm:text-2xl md:text-2xl lg:text-[30px]  font-extralight font-['Libre Franklin']">
                      We're a group of software engineers, CS majors and otherwise
                  </h1>
                  <h1 className="relative  text-center text-black sm:text-2xl md:text-2xl lg:text-[30px]  font-extralight font-['Libre Franklin']">
                      tech-enthusiastic individuals with an established community
                  </h1>
                  <h1 className="relative  text-center text-black sm:text-2xl md:text-2xl lg:text-[30px]  font-extralight font-['Libre Franklin']">
                      of like-minded individuals navigating the turbulent post-pandemic
                  </h1>
                  <h1 className="relative  text-center text-black sm:text-2xl md:text-2xl lg:text-[30px]  font-extralight font-['Libre Franklin']">
                      tech market.
                  </h1>
              </div>
              <div className="w-screen h-2/3 py-20">
              </div>
          </div>
      </>);
};

export default Companies;
