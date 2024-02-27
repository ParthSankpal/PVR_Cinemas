import React, { useRef, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { MdOutlinePlayCircleFilled } from "react-icons/md";

const Experience = () => {

  const trailers = [
    {
      title: "Article 370",
      certificate: "U/A",
      image:
        "https://img.youtube.com/vi/6Pf6RUmq7S0/0.jpg",
      genre: "Drama",
      language: "Hindi",
      status: "Releasing on 23 Feb",
    },
    {
      title: "CRAKK JEETEGAA TOH JIY...",
      certificate: "U/A",
      image:
        "https://img.youtube.com/vi/h1EBXt83hIs/0.jpg",
      genre: "Drama",
      language: "Hindi",
      status: "Releasing on 23 Feb",
    },
    {
      title: "TERI BAATON MEIN AISA ULJHA JIYA",
      certificate: "U/A",
      image:
        "https://img.youtube.com/vi/w_N6d4ec79c/0.jpg",
      genre: "Drama",
      language: "Hindi",
      status: "Releasing on 23 Feb",
    },
    {
      title: "ANATOMY OF A FALL",
      certificate: "U/A",
      image:
        "https://img.youtube.com/vi/3S9pOeoGIw4/0.jpg",
      genre: "Drama",
      language: "Hindi",
      status: "Releasing on 23 Feb",
    },

    {
      title: "Fighter",
      certificate: "U/A",
      image:
        "https://img.youtube.com/vi/6amIq_mP4xM/0.jpg",
      genre: "Drama",
      language: "Hindi",
      status: "Releasing on 23 Feb",
    },
    {
      title: "Dune",
      certificate: "U/A",
      image:
        "https://img.youtube.com/vi/U2Qp5pL3ovA/0.jpg",
      genre: "Drama",
      language: "Hindi",
      status: "Releasing on 23 Feb",
    },
    {
      title: "CRAKK JEETEGAA TOH JIY...",
      certificate: "U/A",
      image:
        "https://img.youtube.com/vi/Yic36szyogs/0.jpg",
      genre: "Drama",
      language: "Hindi",
      status: "Releasing on 23 Feb",
    },
    {
      title: "CRAKK JEETEGAA TOH JIY...",
      certificate: "U/A",
      image:
        "https://img.youtube.com/vi/ahttNxGnLsQ/0.jpg",
      genre: "Drama",
      language: "Hindi",
      status: "Releasing on 23 Feb",
    },
    {
      title: "CRAKK JEETEGAA TOH JIY...",
      certificate: "U/A",
      image:
        "https://img.youtube.com/vi/r1NYnn2M4lU/0.jpg",
      genre: "Drama",
      language: "Hindi",
      status: "Releasing on 23 Feb",
    },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scrollContainerRef = useRef(null);


  const scrollLeft = () => {

    if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft -= 180;
        }
        
    const newIndex = currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const scrollRight = () => {
    if(currentImageIndex === trailers.length - 1) {
      setCurrentImageIndex(0);
    }
    if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft += 180;
        }
    
    const newIndex = currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="py-8  mx-auto max-w-7xl lg:max-w-[80%] text-[12px] font-Poppins w-full">
      {/*  Experience Start */}
      <div className="hidden lg:flex items-center justify-between">
        <p className=" font-extrabold text-[18px]">Experience</p>
        <div className=" flex ">
          <button className=" p-2.5 border  rounded-l">
            <IoMdArrowDropleft className=" text-xl" />
          </button>
          <button className=" p-2.5 border">
            <IoMdArrowDropright className=" text-xl" />
          </button>
          <button className=" items-center flex gap-3 border p-1 text-[14px]  rounded-r">
            See All <FaLongArrowAltRight className=" text-md" />
          </button>
        </div>
      </div>
      <div className=" hidden  py-4  lg:grid grid-cols-2 lg:grid-cols-4 gap-6 px-6 sm:px-0">
        <div>
          <img
            src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_sqr/IMAX_OcRnyAxX.jpg"
            alt=""
            className=""
          />
        </div>
        <div>
          <img
            src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_sqr/4DX_ZriyhTHF.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_sqr/mx4d_ClNVdlQ3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/exp_sqr/luxe_ziZV9CDp.jpg"
            alt=""
          />
        </div>
      </div>
      {/*  Experience End */}

      {/* Trailers Start */}
      <div className=" hidden lg:flex lg:flex-col">
      <p className=" hidden lg:flex py-4 font-extrabold text-[18px]">Trailers</p>
      <div class=" bg-slate-100 p-4">
        <div class="relative  h-[500px]">
          <img
            src={trailers[currentImageIndex].image}
            alt=""
            class="object-fill h-full w-full  absolute"
          />
          <div className="absolute h-[100%] w-[100%] top-0 left-0  bg-gradient-to-r from-white  via-white/85.63"></div>

          <div class="absolute top-10 px-11 py-4 w-full z-0">
            <div className="flex justify-between w-full ">
              <div>
                <span class="text-3xl font-black uppercase">{trailers[currentImageIndex].title}</span>
                <span className=" flex items-center text-[10px] font-semibold py-4">
                  {trailers[currentImageIndex].certificate}
                  <LuDot className=" text-sm" />
                  2h 40m
                  <LuDot className=" text-sm" />
                  Friday, Feb 23, 2024 <LuDot className=" text-sm" />
                  {trailers[currentImageIndex].genre} <LuDot className=" text-sm" />
                  {trailers[currentImageIndex].language}
                </span>
              </div>
              <MdOutlinePlayCircleFilled className=" text-8xl border p-0 rounded-full text-white mr-10" />
            </div>
          </div>
          <div className=" z-10 right-4 bottom-44 absolute">
            <div className=" flex gap-2">
              <button
                onClick={scrollLeft}
                className="p-2 border text-2xl bg-white rounded"
                disabled={currentImageIndex === 0} 
              >
                <IoMdArrowDropleft />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 border text-2xl bg-white rounded"
                disabled={currentImageIndex === trailers.length - 1} 
              >
                <IoMdArrowDropright />
              </button>
            </div>
          </div>
          <div
            className=" z-10 left-4 bottom-4 absolute overflow-x-scroll  no-scrollbar"
            ref={scrollContainerRef}
          >
            <div
              className=" flex gap-6 items-center  transition-transform duration-1000  "
              style={{
                width: `calc(100% * ${trailers.length})`,
                // transform: `translateX(-${
                //   (currentImageIndex * 100) / trailers.length
                // }%)`,
              }}
            >
              {trailers.map((movie, index) => (
                <div key={index} className=" relative ">
                <div className=" absolute  top-[35%] left-[43%]"><MdOutlinePlayCircleFilled className=" text-4xl  p rounded-full text-black bg-white  " /></div>
                  <img
                    src={movie.image}
                    className={`  h-[152px] w-[220px] ${
                      currentImageIndex === index
                        ? "border-yellow-500 border-4"
                        : ""
                    }`}
                    alt={`Slide ${index + 1}`}
                    onClick={() => setCurrentImageIndex(index)}
                    // style={{ width: `calc(100% / ${trailers.length})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* Trailers End */}

      {/* Offers Start */}
      <div className=" hidden pt-8 lg:flex items-center justify-between">
        <p className=" font-extrabold text-[18px] py-3">Offers for you</p>
        <div className=" flex ">
          <button className=" p-2.5 border  rounded-l">
            <IoMdArrowDropleft className=" text-xl" />
          </button>
          <button className=" p-2.5 border">
            <IoMdArrowDropright className=" text-xl" />
          </button>
          <button className=" items-center flex gap-3 border p-1 text-[14px]  rounded-r">
            See All <FaLongArrowAltRight />
          </button>
        </div>
      </div>
      <div className=" hidden  py-4 lg:grid grid-cols-2 px-6 lg:px-0  sm:grid-cols-4 gap-6">
        <div className=" border shadow-md h-auto rounded-md">
          <img
            src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/12793_Sjv0BS5G.jpg"
            alt=""
            className=" rounded-md"
          />
          <div className=" py-8 px-3 ">
            <span className=" font-bold lg:text-[13px] text-[9px] ">
              UNLIMITED REFILL OFFER
            </span>
            <div className=" text-[10px] flex justify-between items-center">
              <span>Valid till: Sat, Mar 30, 2024</span>
              <button className=" bg-[#ffcb05] flex gap-2 border p-1.5  lg:px-4 rounded-md items-center font-bold sm:text-[12px] text-[9px] ">
                View
              </button>
            </div>
          </div>
        </div>
        <div className=" border shadow-md h-auto rounded-md">
          <img
            src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/12793_Sjv0BS5G.jpg"
            alt=""
            className=" rounded-md"
          />
          <div className=" py-8 px-3 ">
            <span className=" font-bold lg:text-[13px] text-[9px]">
              UNLIMITED REFILL OFFER
            </span>
            <div className=" text-[10px] flex justify-between items-center">
              <span>Valid till: Sat, Mar 30, 2024</span>
              <button className=" bg-[#ffcb05] flex gap-2 border p-1.5  px-4 rounded-md items-center font-bold text-[12px]">
                View
              </button>
            </div>
          </div>
        </div>
        <div className=" border shadow-md h-auto rounded-md">
          <img
            src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/12793_Sjv0BS5G.jpg"
            alt=""
            className=" rounded-md"
          />
          <div className=" py-8 px-3 ">
            <span className=" font-bold lg:text-[13px] text-[9px]">
              UNLIMITED REFILL OFFER
            </span>
            <div className=" text-[10px] flex justify-between items-center">
              <span>Valid till: Sat, Mar 30, 2024</span>
              <button className=" bg-[#ffcb05] flex gap-2 border p-1.5  px-4 rounded-md items-center font-bold text-[12px]">
                View
              </button>
            </div>
          </div>
        </div>
        <div className=" border shadow-md h-auto rounded-md">
          <img
            src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/12793_Sjv0BS5G.jpg"
            alt=""
            className=" rounded-md"
          />
          <div className=" py-8 px-3 ">
            <span className=" font-bold lg:text-[13px] text-[9px]">
              UNLIMITED REFILL OFFER
            </span>
            <div className=" text-[10px] flex justify-between items-center">
              <span>Valid till: Sat, Mar 30, 2024</span>
              <button className=" bg-[#ffcb05] flex gap-2 border p-1.5  px-4 rounded-md items-center font-bold text-[12px]">
                View
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  Offers End */}
    </div>
  );
};

export default Experience;
