import React from "react";
import Testimonal from "./components/Testimonal";
import reviews from "./data";
import Card from "./components/Card";
const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonals</h1>
      </div>
      <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
      <Testimonal reviews={reviews} />
    </div>
    
  );
};

export default App;
