import React, { useEffect, useRef, useState } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

import { CgProfile } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import ImageCarosal from "./ImageCarosal";

const Navbar = () => {

  const [movieOrCinema, setmovieOrCinema] = useState("Movie");

  const cinemas = [
    'INOX Megaplex, Inorbit Mall, Malad(W) Mumbai',
    'INOX Raghuleela Mega Mall, Kandivali (W) Mumbai',
    'INOX Nakshatra Mall, Dadar (W) Mumbai',
    'INOX Thakur Mall, Dahisar (E) Mumbai',
    'INOX Thakur Movie, Kandivali (E) Mumbai',
    'INOX Raghuleela Mall, Vashi Navi Mumbai',
    'INOX Neelyog Square Mall, Ghatkopar (E) Mumbai',
    'INOX Metro Junction Mall Kalyan',
    'INOX Laserplex, CR2, Nariman Point Mumbai',
    'INOX Korum Mall, Eastern Express Highway Thane',
    'INOX R-City Ghatkopar Mumbai',
    'METRO INOX Cinemas, Marine Lines Mumbai',
    'INOX Palm Beach Galleria Mall, Mumbai',
    'INOX Insignia at Atria Mall, Worli Mumbai',
    'INOX Insignia at R Mall, Thane',
    'Maison INOX Jio World Plaza BKC Mumbai',
    'PVR: Growel, Kandivali (E) Mumbai',
    'PVR: Odeon Mall, Ghatkopar (E) Mumbai',
    'PVR: Citi Mall, Andheri (W) Mumbai',
    'PVR Market City Kurla Mumbai',
    'Maison PVR, Library Hall, Jio World Drive, BKC',
    'PVR ICON Phoenix Palladium Lower Parel Mumbai',
    'PVR ICON Infiniti Andheri (W) Mumbai',
    'PVR Dynamix, Juhu Mumbai',
    'PVR Infiniti, Malad Mumbai',
    'PVR Le Reve-Globus Mall, Bandra West, Mumbai',
    'PVR ICON: Oberoi Mall, Goregaon [East] Mumbai',
    'PVR Milap, Kandivali (W) Mumbai',
    'PVR Orion Mall, Panvel Mumbai',
    'PVR Lodha Xperia, Palava Kalyan',
    'PVR Haseen, Bhiwandi Thane',
    'PVR The Capital Mall, Nalasopara [E] Mumbai',
    'EROS INOX IMAX Cinema, Churchgate Mumbai'
  ];
  

  // console.log(cinemas);
  const [selectedCinema, setselectedCinema] = useState("Select Cinema")
  // console.log( selectedCinema);
  const [isSelectCinemaOpen, setisSelectCinemaOpen] = useState(false);
  // console.log( isSelectCinemaOpen);
  // const images = [
  //   "https://originserver-static1-uat.pvrcinemas.com/pvrcms/banners/INOXItalianFoodFest_99039_LjShs4To.jpg",

  //   "https://originserver-static1-uat.pvrcinemas.com/pvrcms/banners/Kotak-banners_1440x340_41227_gp9mZ7EE.jpg",
  //   "https://originserver-static1-uat.pvrcinemas.com/pvrcms/banners/EROSLaunchweb_4611_mTAOyumR.jpg",
  // ];

  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const intervalRef = useRef(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => {
  //       if (prevIndex === images.length - 1) {
  //         setTimeout(() => setCurrentImageIndex(0), 1000);
  //         return prevIndex;
  //       }
  //       return prevIndex + 1;
  //     });
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [images.length]);

  const [colour, setcolour] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 340) {
      setcolour(true);
    } else {
      setcolour(false);
    }
  });

  return (
    <>
      <nav className=" fixed z-20 sm:bg-white font-Poppins w-full h-full  sm:h-14 sm:p-2 sm:text-[13px] text-[9px] ">
        <div className=" relative    sm:flex justify-between h-full items-center w-full">
          <div className=" absolute bottom-0  bg-white w-full lg:w-auto ">
          <ul className="  font-semibold flex gap-1 lg:gap-4 items-center justify-evenly sm:justify-start">
            <li>
              <img
                src="https://www.pvrcinemas.com/static/media/pvr-logo.8d413a0b52b7bfb9edec295ce860e93d.svg"
                className=" h-10 hidden   sm:flex"
                alt=""
              />
            </li>
            <li className=" flex sm:flex-row flex-col items-center gap-1 sm:bg-[#ffcb05]  px-2 rounded-full py-1.5">
              <img
                src="https://www.pvrcinemas.com/static/media/home_black.1b55c68611f81a4445b8976c8be163b7.svg"
                className=" h-3"
                alt=""
              />
              Home
            </li>
            <li className=" flex sm:flex-row flex-col items-center gap-1  hover:bg-slate-100 px-2 rounded-full py-1.5">
              <img
                src="https://www.pvrcinemas.com/static/media/showtime.c9abd530c412ea9c527fda4293d783a0.svg"
                className=" h-3"
                alt=""
              />
              Showtime
            </li>
            <li className="  flex sm:flex-row flex-col items-center gap-1  hover:bg-slate-100 px-2 rounded-full py-1.5">
              <img
                src="https://www.pvrcinemas.com/static/media/Cinema.db712541e30b9375768459b834183365.svg"
                className=" h-3"
                alt=""
              />
              Cinemas
            </li>
            <li className="  flex sm:flex-row flex-col items-center gap-1  hover:bg-slate-100 px-2 rounded-full py-1.5">
              <img
                src="https://www.pvrcinemas.com/static/media/offer_black.13990334b27ef9226629be21c14841ed.svg"
                className=" h-3"
                alt=""
              />
              Offers
            </li>
            <li className="  flex sm:flex-row flex-col items-center gap-2  hover:bg-slate-100 px-2 rounded-full py-1.5">
              <img
                src="https://www.pvrcinemas.com/static/media/menubar.4007478a6a0c5caf8cc9f7f3e6cbbf15.svg"
                className=" h-2"
                alt=""
              />
              More <IoIosArrowDown className=" hidden sm:flex"/>
            </li>
          </ul>
          </div>

          <div className=" relative sm:static bg-white">
          <div className="  w-full lg:w-auto p-2  bg-white h-14  flex gap-3 items-center sm:mr-4">
            <div className=" absolute sm:flex right-12 top-2 gap-2 sm:top-0 sm:right-28 lg:right-56 sm:border sm:w-24  lg:w-auto w-10 p-2 rounded-md">

              <button>
                <FaSearch className=" text-slate-600 text-xl" />
              </button>
              <input
                type="text"
                placeholder="Search..."
                className=" bg-transparent focus:outline-none sm:w-10 lg:w-40 hidden sm:flex sm:text-[10px] lg:text-[12px]"
              />
            </div>

            <button className=" absolute sm:flex md:py-2.5 lg:py-2  top-2 sm:top-0 sm:right-10 md:right-12 lg:right-[104px] sm:bg-[#f1f1f1] sm:text-[10px] lg:text-[12px] flex gap-2 sm:border  p-2 rounded-md items-center text-[14px]">
              <IoLocationOutline className=" text-lg hidden lg:flex " /> Location
              <IoIosArrowDown className=" hidden lg:flex"/>
            </button>
            <button className=" lg:bg-[#fff0d6] sm:text-[10px] lg:text-[12px] absolute sm:flex  right-2 top-2 sm:top-0 sm:right-0 gap-2 lg:border sm:px-2 lg:px-4 font-semibold  p-2 rounded-md items-center">
              <img
                src="https://www.pvrcinemas.com/static/media/profile-icon.ee2c867123ca009a119b2a8c3923da85.svg"
                alt=""
              />
              <span className=" hidden lg:flex">Login</span>
            </button>
          </div>
          </div>
        </div>
      </nav>

      
        <ImageCarosal />

      <div
        className={`${
          colour ? "fixed top-[56px] " : "top-[396px] absolute"
        }  z-20 bg-[#fff0d6] text-[13px] w-full font-Poppins hidden lg:flex`}
      >
        <div className="py-3  lg:w-[80%] mx-auto   flex  justify-between lg:gap-1 items-center ">
          <p className=" font-bold xl:text-[12px] ">Quick Start</p>
          <button className=" bg-[#ffffff] flex gap-1 border font-medium px-1.5 p-1.5 rounded-md items-center ">
            <p onClick={()=>(setmovieOrCinema("Movie"))} className={`  py-0.5 px-1 rounded-[4px] ${movieOrCinema === "Movie" ? " border border-[#ffcb05] bg-[#fff0d6]" : "" }`}>
              Movies
            </p>
            <button onClick={()=>(setmovieOrCinema("Cinema"))} className={` py-0.5 px-1 rounded-[4px] ${movieOrCinema === "Cinema" ? " border border-[#ffcb05] bg-[#fff0d6]" : "" }`}>
            Cinemas
            </button>
            
          </button>
          <div className=" relative  flex justify-between bg-[#ffffff] xl:w-[20%] lg:w-32 items-center  border   rounded-md">
            <button
              type="text"
              placeholder="Select Movie"
              className="inline-flex justify-between items-center  w-full p-2 rounded-md shadow-sm text-gray-400 truncate"
              onClick={()=>{setisSelectCinemaOpen(!isSelectCinemaOpen);}}
            >
             {selectedCinema} 

            <IoIosArrowDown className=" text-black" />
            </button>

            {isSelectCinemaOpen && (
              <div className=" absolute top-8  scrollbar-thin h-40 overflow-y-scroll z-30  mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setselectedCinema("All Cinemas");
                          setisSelectCinemaOpen(false);
                        }}
                      >
                        All Cinemas
                      </div>
                      {cinemas.map((cinemas, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setselectedCinema(cinemas);
                            setisSelectCinemaOpen(false);
                          }}
                        >
                          {cinemas}
                        </div>
                      ))}
                    </div>
              </div>
            )}
          </div>
          <div className=" flex justify-between bg-[#ffffff] items-center  border xl:w-[20%] lg:w-32 p-2 rounded-md">
            <button
              type="text"
              placeholder="Select Date"
              className=" bg-transparent focus:outline-none w-auto "
            >
              Slected Date
            </button>
            <IoIosArrowDown />
          </div>
          <div className=" flex justify-between bg-[#ffffff] items-center  border xl:w-[20%] lg:w-32 p-2 rounded-md">
            <button
              type="text"
              placeholder="Select Cinema"
              className=" bg-transparent focus:outline-none w-auto "
            >
              Select Cinema
            </button>
            <IoIosArrowDown />
          </div>
          <div className=" flex justify-between bg-[#ffffff] items-center  border xl:w-[20%] lg:w-32 p-2 rounded-md">
            <button
              type="text"
              placeholder="Select Timing"
              className=" bg-transparent focus:outline-none w-auto "
            >
              Select Timing
            </button>
            <IoIosArrowDown />
          </div>
          <button className=" bg-[#ffcb05] flex gap-2 border p-2  px-6 rounded-md items-center font-bold text-[12px]">
            Book
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
