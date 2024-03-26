import React from "react";
import Beauty from "../assets/Beautymakeup.png"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="w-24 h-24">
        <img className="w-24 h-24 ml-4" src={Beauty} alt="" srcset="" />
      </div>
      <div>
        <ul className="flex flex-row list-nonef">
          <Link to="/">
          <li className="px-[12px] text-2xl font-bold text-white">Home</li>
          </Link>
          <Link to="/about">
          <li className="px-[12px] text-2xl font-bold text-white">About</li>
          </Link>
          <li className="px-[12px] text-2xl font-bold text-white">Contact</li>
          <li className="px-[12px] text-2xl font-bold text-white">More</li>
        </ul>
      </div>
      <div className="mr-4 bg-cyan-400 text-white h-[40px] px-4 text-center justify-center text-xl font-bold rounded-lg">Join us now</div>
    </div>
  );
};

export default Header;
