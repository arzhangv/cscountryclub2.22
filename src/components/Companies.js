import react from "react";
import App from "../App";
const Companies = () => {
  const companyLogos = [
    { src: "bloomberg.svg", alt: "Company Logo", height: "h-12 md:h-16"},
    { src: "snowflake2.png", alt: "Company Logo", height: "h-12 md:h-16"},
    { src: "coinbase.svg", alt: "Company Logo", height: "h-12 md:h-16"},
    { src: "tiktok.svg", alt: "Company Logo", height:"h-12 md:h-16"},
    { src: "tesla.svg", alt: "Company Logo", height: "h-12 md:h-16" },
    { src: "roblox.svg", alt: "Company Logo", height: "h-12 md:h-16"},
    { src: "microsoft.svg", alt: "Company Logo", height: "h-12 md:h-16"},
    { src: "meta.svg", alt: "Company Logo", height: "h-12 md:h-16"},
    { src: "google.svg", alt: "Company Logo", height: "h-12 md:h-16" },
    { src: "datadog.svg", alt: "Company Logo", height: "h-16 md:h-16" },
    { src: "amazon.svg", alt: "Company Logo", height: "h-12 md:h-16" },
    { src: "palantir.svg", alt: "Company Logo", height: "h-12 md:h-16" },
  ];

  return (
    <div className="flex flex-col items-center w-full p-4">
      <div className="flex items-center gap-4 flex-col">
        <div>
          <h3 className="md:text-4xl text-2xl font-light text-primary uppercase">
            Members have gotten jobs at
          </h3>
        </div>
      </div>
      <div className="mt-16 w-full max-w-screen-lg px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16 bg-red-100">
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="h-16 md:h-20 flex items-center justify-center"
            >
              <img src={logo.src} alt={logo.alt} className={logo.height} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
