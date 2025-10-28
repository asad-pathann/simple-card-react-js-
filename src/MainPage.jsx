import React from "react";
import { FaReact } from "react-icons/fa6";
import { my_daya } from "./data";
import SingleDiv from "./SingleDiv";

const MainPage = () => {
  return (
    <>
      <div className=" w-[90%] grid grid-col-3 md:grid-cols-4 overflow-hidden lg:grid-cols-5 mx-auto gap-3  p-1 rounded-md">
        {my_daya?.map((item, index) => {
          return (
            <div
              key={index}
              className="  border overflow-hidden    rounded-sm "
            >
              {" "}
              <SingleDiv {...item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MainPage;
