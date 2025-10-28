import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const handleCLick = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText == "incarese") {
      setcount(count + 1);
    } else if (e.target.innerText == "Reset") {
      setcount(0);
    } else {
      setcount(count - 1);
    }
  };
  return (
    <>
      <div className="container text-center">
        <h1 className="text-9xl ">{count}</h1>
        <div className="  flex   justify-center text-center items-center gap-5 mx-auto  ">
          <button
            onClick={handleCLick}
            className="bg-gradient-to-l block  mx-3  text-green-700  rounded-md  px-4 py-1   from-red-500 to-blue-500"
          >
            incarese
          </button>
          <button
            onClick={handleCLick}
            className=" bg-gradient-to-r from-pink-500 to-red-500 px-5 py-1 rounded-md  active:hover:bg-pink-100 block"
          >
            Reset
          </button>
          <button
            onClick={handleCLick}
            className="block bg-purple-900 px-7 py-1 rounded-md  hover:bg-purple-400"
          >
            dicrease
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
