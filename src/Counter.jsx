import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const [textColor, settextColor] = useState("text-gray-500");
  const [bgColor, setbgColor] = useState("text-gray-500");

  const handleCount = (e) => {
    let TitleText = e.target.innerText;
    if (TitleText == "Increase") {
      setcount(count + 1);
      settextColor("text-green-800");
      setbgColor("bg-pink-800");
    } else if (TitleText == "Reset") {
      setcount(0);
      settextColor("text-red-900");
      setbgColor("bg-purple-900");
    } else {
      setcount(count - 1);
      settextColor("text-blue-900");
      setbgColor("bg-red-900");
    }
  };
  return (
    <>
      <div
        className={`container text-center  ${bgColor} transition-all duration-300  h-[700px] mx-auto`}
      >
        <h1
          className={`text-9xl text-gradient-to-r from-gray-300 to-pink-600 ${textColor}`}
        >
          {count}
        </h1>
        <div className="flex justify-center gap-3 items-center">
          <button
            onClick={handleCount}
            className="bg-gradient-to-r from-purple-500 to-pink-500 to-gray-800 px-4 py-1 rounded-md outline-0"
          >
            Increase
          </button>
          <button
            onClick={handleCount}
            className="bg-gradient-to-r from-purple-500 to-pink-500 to-gray-800 px-4 py-1 rounded-md outline-0"
          >
            Reset
          </button>
          <button
            onClick={handleCount}
            className="bg-gradient-to-r from-purple-500 to-pink-500 to-gray-800 px-4 py-1 rounded-md outline-0"
          >
            Decrese
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
