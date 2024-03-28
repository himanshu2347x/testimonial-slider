import Card from "./Card"
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Testimonal = ({ reviews }) => {
    const [cardNo, setCardNo] = useState(0);

    function leftchangeHandler() {
      if (cardNo - 1 === 0) {
        setCardNo(reviews.length - 1);
      } else {
        setCardNo(cardNo - 1);
      }
    }
    function rightchangeHandler() {
      if (cardNo + 1 >= reviews.length) {
        setCardNo(0);
      } else {
        setCardNo(cardNo + 1);
      }
    }
    function SurpriseHandler() {
      let newCardNo = Math.floor(Math.random() * reviews.length);
      setCardNo(newCardNo);
    }
    return (
      <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
        <Card reviews={reviews} cardNo={cardNo} />
        <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto text-center">
          <button
            onClick={() => {
              leftchangeHandler();
            }}
            className="cursor-pointer hover:text-violet-500"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={() => {
              rightchangeHandler();
            }}
            className="cursor-pointer hover:text-violet-500"
          >
            <FiChevronRight />
          </button>
        </div>
        <div className="mt-6 mx-auto">
          <button
            onClick={() => {
              SurpriseHandler();
            }}
            className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
          >
            Surprise Me
          </button>
        </div>
      </div>
    );
}
export default Testimonal;