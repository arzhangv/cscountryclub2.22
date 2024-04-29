import Home from "./Home";
import Companies from "./Companies";

const Page = () => {
  return (
    <>

      <div className="w-screen h-screen">
        <Home />

      </div>
        <div className="w-screen h-screen absolute bg-green-tertiary ">
            <Companies/>
        </div>
    </>
  );
};

export default Page;
