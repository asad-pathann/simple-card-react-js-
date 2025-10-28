import React, { useState } from "react";

const ChangeTitle = () => {
  const [title, setitle] = useState("this is a title");

  const handleCLick = () => {
    if (title === "this is a title") {
      setitle("this is new title");
    } else {
      setitle("this is a title");
    }
  };
  console.log(title);
  return (
    <>
      <div className="container mx-auto text-center">
        <h1 className="text-center text-xl text-green-700">{title} </h1>

        <button
          onClick={handleCLick}
          className="bg-green-800 rounded-md text-white  outline-0  px-4 py-2  active:scale-95"
        >
          change
        </button>
      </div>
    </>
  );
};

export default ChangeTitle;
