import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" sm:flex hidden bg-black font-Poppins">
      <div className=" py-6 px-5 lg:px-0 mx-auto max-w-7xl lg:max-w-[80%]  text-[9px] lg:text-[14px]  w-full text-gray-600">
        <div className=" flex flex-col sm:flex-row justify-between">
          <div className=" flex items-center gap-1">
            <h1 className="  ">Certification by:</h1>
            <img
              src="https://www.pvrcinemas.com/static/media/certificate1.49f8d51c71a183d28841.png"
              alt=""
              className="  h-8 lg:h-12"
            />
            <img
              src="https://www.pvrcinemas.com/static/media/certificate2.22ac0739f8e8e5be4641.png"
              alt=""
              className=" h-8 lg:h-12"
            />
          </div>
          <div className=" flex items-center gap-2 text-[16px]  lg:text-3xl ">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaSquareXTwitter />
            <FaLinkedin />
          </div>
          <div className=" flex items-center gap-2">
            <img
              src="https://www.pvrcinemas.com/static/media/Google%20Play.c5689d4f9b55e58a8076b39af11d5ab9.svg"
              alt=""
              className=" h-8 lg:h-12"
            />
            <img
              src="https://www.pvrcinemas.com/static/media/App%20Store.537219f079dde0437e2c8e0e3ec2162d.svg"
              alt=""
              className=" h-8 lg:h-12"
            />
          </div>
        </div>
        <div className=" flex justify-between items-center pt-6">
          <span> © 2024 All rights reserved</span>
          <div className=" flex gap-2">
            <span>Privacy Policy</span>
            <span>Terms & Conditions </span>
            <span>Terms of Use</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
