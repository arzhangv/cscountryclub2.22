import Home from "./Home";
import Companies from "./Companies";

const Page = () => {
  return (
    <>

      <div className="w-screen h-1/2 bg-green-tertiary">
        <Home />

      </div>
         <div className="w-screen h-screen bg-green-tertiary">
           <Companies/>
       </div>
        <div className="w-screen h-1/2 bg-green-tertiary">

        </div>
    </>
  );
};

export default Page;
