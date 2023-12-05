import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const links = ["Home", "Course", "Monitor", "Pricing", "Blog"];

const Header = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="bg-gray-900 w-full h-14 px-2 flex items-center justify-between border-b border-gray-700">
        <div className="grid grid-cols-12 items-center  justify-between gap-8 ">
          <div className="col-span-3">
            <span className="font-bold text-gray-300 pr-6">UiXSHUVO</span>
          </div>
          <div className="col-span-5 ">
            <div className="flex justify-between items-center ">
              {links.map((link) => {
                return <div className="text-gray-300">{link}</div>;
              })}
            </div>
          </div>
          <div className="col-span-3 ">
            <input
              className="py-1 px-4 rounded-2xl bg-transparent border"
              placeholder="Search"
            />
          </div>
         
        </div>
            <div className="flex justify-between gap-2">
              <button className="text-gray-300  px-3 rounded-2xl py-1 bg-transparent hover:bg-btn" onClick={()=>{navigate("/login" )}}>Login</button>
              <button className="text-gray-300 border px-3 rounded-2xl py-1 bg-btn hover:bg-transparent    " onClick={()=>{navigate("/signup")}}>Register</button>
            </div>
          </div>
    </>
  );
};

export default Header;
