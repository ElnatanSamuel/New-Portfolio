import React from "react";
import { UilGithub } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import { UilEnvelope } from "@iconscout/react-unicons";

const Navbar = () => {
  return (
    <div className="w-full h-16 fixed top-0 z-50 flex items-center justify-end max-w-7xl bg-white">
      <div className="flex space-x-4 justify-center items-center mr-6">
        <UilGithub className="cursor-pointer" color="#000" size="26" />
        <UilLinkedin className="cursor-pointer" color="#000" size="26" />
        <UilEnvelope className="cursor-pointer" color="#000" size="26" />
      </div>
    </div>
  );
};

export default Navbar;
