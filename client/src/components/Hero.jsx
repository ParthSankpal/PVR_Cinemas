import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Cards from "./Cards";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";


const Hero = () => {

  const [selected, setSelected] = useState("Now Showing");

  const brands = [
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/imax_gbxHmBl8.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/4dx_w6j2hfDR.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/mx4d_S8i7GaDs.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/laser_UquHlUCP.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/pxl_nXUq7WMc.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/imax_gbxHmBl8.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/4dx_w6j2hfDR.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/mx4d_S8i7GaDs.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/laser_UquHlUCP.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/pxl_nXUq7WMc.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/imax_gbxHmBl8.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/4dx_w6j2hfDR.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/mx4d_S8i7GaDs.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/laser_UquHlUCP.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/pxl_nXUq7WMc.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/imax_gbxHmBl8.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/4dx_w6j2hfDR.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/mx4d_S8i7GaDs.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/laser_UquHlUCP.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/pxl_nXUq7WMc.png",
    
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/laser_UquHlUCP.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/pxl_nXUq7WMc.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/imax_gbxHmBl8.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/4dx_w6j2hfDR.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/mx4d_S8i7GaDs.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/laser_UquHlUCP.png",
    "https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_filter_sm/pxl_nXUq7WMc.png",
  ]

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if(scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 80;
    }
  };

  const scrollRight = () => {
    if(scrollContainerRef.current ) {
      scrollContainerRef.current.scrollLeft += 80;
    }
  };


  return (
    <div className=" font-Poppins ">
      <div className=" w-full ">
        <div className=" pt-4 lg:pt-20  lg:w-[80%] gap-6 mx-auto flex items-center text-[14px] relative ">
          <ul className=" hidden sm:flex font-medium  z-10">
            <li
              onClick={() => setSelected("Now Showing")}
              className={`${
                selected === "Now Showing"
                  ? "border-b-2 border-b-[#ffcb05] "
                  : ""
              } w-28 pb-2.5 flex items-center justify-center cursor-pointer`}
            >
              <a>Now Showing</a>
            </li>
            <li
              onClick={() => setSelected("Coming Soon")}
              className={`${
                selected === "Coming Soon"
                  ? "border-b-2 border-b-[#ffcb05]"
                  : ""
              } w-28 pb-2.5 flex items-center justify-center cursor-pointer`}
            >
              <a>Coming Soon</a>
            </li>
            <li
              onClick={() => setSelected("Experiences")}
              className={`${
                selected === "Experiences"
                  ? "border-b-2 border-b-[#ffcb05]"
                  : ""
              } w-28 pb-2.5 flex items-center justify-center cursor-pointer`}
            >
              <a>Experiences</a>
            </li>
            <li
              onClick={() => setSelected("Trailers")}
              className={`${
                selected === "Trailers" ? "border-b-2 border-b-[#ffcb05]" : ""
              } w-28 pb-2.5 flex items-center justify-center cursor-pointer`}
            >
              <a>Trailers</a>
            </li>
            <li
              onClick={() => setSelected("Offers")}
              className={`${
                selected === "Offers" ? "border-b-2 border-b-[#ffcb05]" : ""
              } w-28 pb-2.5 flex items-center justify-center cursor-pointer`}
            >
              <a>Offers</a>
            </li>
          </ul>

          <hr class="   hidden sm:absolute top-[94px] -z-0 w-full h-[3.5px]  mx-auto my-4 bg-[#ffeb9d]  "></hr>
        </div>
        <div className=" lg:w-[80%] flex items-center gap-1  mx-auto">
        <button onClick={scrollLeft}  className=" bg-slate-200 flex  items-center justify-center  rounded-full p-0 h-6 w-6 border border-slate-300">
              <IoIosArrowBack/>
        </button>
          <div className=" overflow-x-scroll no-scrollbar w-full" ref={scrollContainerRef}>
            <div className=" flex items-center gap-4 py-4">
              {brands.map((image, index)=>(
                <img
                key={index}
                src={image}
                class="aspect-square object-contain object-center w-20 overflow-hidden self-center max-w-full my-auto"
                alt={`Slide ${index + 1}`}
                className=" w-16 h-7 "
              />
              ))}
              
            </div>
          </div>
          <button onClick={scrollRight} className=" bg-slate-200 flex items-center justify-center rounded-full p-0 h-6 w-6 border border-slate-300 ">
            <IoIosArrowForward />
          </button>
        </div>
        <div className=" ">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Hero;
