import React from "react";
import { FaReact } from "react-icons/fa6";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { GrCloudComputer } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";

const SingleDiv = ({ title, name, phap, image }) => {
  return (
    <div className="">
      <div className=" ">
        <img src={image} alt="" className="w-full  h-[200px] object-cover" />
      </div>
      <div className="relative my-4 ">
        <hr className="w-full  p-0" />
        <div className="  absolute top-1/2   -translate-y-1/2 right-5">
          <FaReact size={30} className=" text-[#61DBFB]" />
        </div>
      </div>
      {/* three div  */}
      <div className="p-2 flex flex-col  ">
        <h3 className="font-bold  capitalize">{name}</h3>
        <h3 className="text-sm font-semibold mt-2   capitalize">{title}</h3>
        <p className="text-gray-700 text-sm">{phap}</p>
      </div>
      <div className="flex justify-between p-2 items-center ">
        <div className="h-[20px] w-[20px] rounded-full bg-green-600 "></div>
        <div className="text-gray-700">
          <BsGlobeAsiaAustralia />
        </div>
        <div className="flex items-center">
          <GrCloudComputer className="text-[15px] text-gray-600" />
          <h3 className="text-[15px] text-gray-600 text-sm">MIT</h3>
        </div>
        <div>
          <FaHeart className="text-gray-500 " />
        </div>
      </div>
    </div>
  );
};

export default SingleDiv;
