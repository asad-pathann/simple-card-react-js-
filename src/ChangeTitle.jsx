import React, { useState } from "react";

const ChangeTitle = () => {
  const [chanage, setchange] = useState("this is title");
  const handleChage = () => {
    if (chanage == "this is title") {
      setchange("this is new title");
    } else {
      setchange("this is title");
    }
  };
  return (
    <>
      <div className="container mb-10 text-center ">
        <h3 className="text-4xl text-gradient-to-r from-gray-300 to-pink-500">
          {chanage}
        </h3>

        <button
          onClick={handleChage}
          className="bg-purple-700 my-3  text-white px-5 py-2 rounded-md "
        >
          Change Title
        </button>
      </div>
    </>
  );
};

export default ChangeTitle;
