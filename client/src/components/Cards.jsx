import React, { useRef, useState } from "react";

import { FaSquare } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdNotificationAdd } from "react-icons/md";

const Cards = () => {
  const [isGenresOpen, setisGenresOpen] = useState(false);
  const [isLanguagesOpen, setisLanguagesOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All Genres");
  const [selectedLanguage, setSelectedLanguage] = useState('All Languages');
  // const dropdownRef = useRef(null);

  const languages = [
    'Hindi', 'English', 'Spanish', 'French', 'German',
    'Chinese', 'Japanese', 'Russian', 'Italian', 'Portuguese'
  ];

  const genres = [
    "Adventure",
    "Horror",
    "Romance",
    "Science Fiction",
    "Drama",
    "Thriller",
    "Crime",
    "Fantasy",
    "Biography",
    "Animation",
    "Comedy",
    "Musical",
    "Sports",
  ];

  const comingMoviesData = [
    {
      title: "CRAKK JEETEGAA TOH JIY...",
      certificate: "U/A",
      image:
        "	https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29329_d3G8hhpI.jpg",
      genre: "Drama",
      language: "Hindi",
      status: "Releasing on 23 Feb",
    },
    {
      title: "CRAKK JEETEGAA TOH JIY...",
      certificate: "U/A",
      image:
        "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29353_YwPnxwer.jpg",
      genre: "Drama",
      language: "Hindi",
      status: "Releasing on 23 Feb",
    },
    {
      title: "CRAKK JEETEGAA TOH JIY...",
      certificate: "U/A",
      image:
        "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29208_zJCMAnCx.jpg",
      genre: "Drama",
      language: "Hindi",
      status: "Releasing on 23 Feb",
    },
    {
      title: "CRAKK JEETEGAA TOH JIY...",
      certificate: "U/A",
      image:
        "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29363_mPPe5RP6.jpg",
      genre: "Drama",
      language: "Hindi",
      status: "Releasing on 23 Feb",
    },

    {
      title: "CRAKK JEETEGAA TOH JIY...",
      certificate: "U/A",
      image:
        "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/28704_Fgvd6mnw.jpg",
      genre: "Drama",
      language: "Hindi",
      status: "Releasing on 23 Feb",
    },
  ];
  const movieData = [
    {
      title: "CRAKK JEETEGAA TOH JIY...",
      certificate: "U/A",
      image:
        "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29104_lGXZN7Vb.jpg",
      genre: "Action",
      language: "Hindi",
      status: "New release",
    },
    {
      title: "CRAKK JEETEGAA TOH JIY...",
      certificate: "U/A",
      image:
        "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/27274_eII7Kwzu.jpg",
      genre: "Action",
      language: "Hindi",
      status: "",
    },

    {
      title: "CRAKK JEETEGAA TOH JIY...",
      certificate: "U/A",
      image:
        "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/28897_Xe8hISZw.jpg",
      genre: "Action",
      language: "Hindi",
      status: "",
    },

    {
      title: "CRAKK JEETEGAA TOH JIY...",
      certificate: "U/A",
      image:
        "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29315_oMzrgrPL.jpg",
      genre: "Action",
      language: "Hindi",
      status: "Releasing on 23 Feb",
    },

    {
      title: "CRAKK JEETEGAA TOH JIY...",
      certificate: "U/A",
      image:
        "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/28044_XLD95jTR.jpg",
      genre: "Action",
      language: "Hindi",
      status: "Releasing on 23 Feb",
    },

    {
      title: "CRAKK JEETEGAA TOH JIY...",
      certificate: "U/A",
      image:
        "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/28253_bs57ACuJ.jpg",
      genre: "Action",
      language: "Hindi",
      status: "Releasing on 23 Feb",
    },
  ];

  return (
    <>
      <div className=" flex flex-col gap-8">
        <div className="   mx-auto max-w-7xl lg:max-w-[80%] text-[12px] font-Poppins w-full">
          <div className=" sm:mx-auto sm:max-w-7xl lg:max-w-full w-full px-6 lg:px-0">
            <div className=" py-2 flex justify-between items-center">
              <p className=" font-extrabold text-[16px]">Now Showing</p>
              <div className=" hidden sm:flex gap-4 items-center">
                <button
                  className="inline-flex justify-between items-center w-auto rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-gray-50 text-[12px] font-medium  hover:bg-gray-50 focus:outline-none"
                  onClick={() => setisGenresOpen(!isGenresOpen)}
                >
                  {selectedOption}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isGenresOpen && (
                  <div className=" origin-bottom -bottom-8 scrollbar-thin absolute h-40 overflow-y-scroll z-20  mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedOption("All Genres");
                          setisGenresOpen(false);
                        }}
                      >
                        All Genres
                      </div>
                      {genres.map((genre, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setSelectedOption(genre);
                            setisGenresOpen(false);
                          }}
                        >
                          {genre}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <button
                  className="inline-flex justify-between w-auto items-center rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-gray-50 text-[12px] font-medium hover:bg-gray-50 focus:outline-none"
                  onClick={() => setisLanguagesOpen(!isLanguagesOpen)}
                >
                  {selectedLanguage}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isLanguagesOpen && (
                  <div className="origin-bottom -bottom-8 absolute right-[124px] scrollbar-thin  h-40 overflow-y-scroll w-auto z-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedLanguage("All Languages");
                          setisLanguagesOpen(false);
                        }}
                      >
                        All Languages
                      </div>
                      {languages.map((language, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setSelectedLanguage(language);
                            setisLanguagesOpen(false);
                          }}
                        >
                          {language}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className=" grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4  lg:gap-6 text-[9px] lg:text-[12px]">
              {movieData.map((movie, index) => (
                <div className=" ">
                  <div className=" relative  h-[240px]  sm:h-[340px]">
                    <span
                      className={`absolute p-1 font-semibold text-[8px] sm:text-[10px] ${
                        movie.status ? "bg-[#ffcb05]" : ""
                      }`}
                    >
                      {movie.status}
                    </span>
                    <img
                      src={movie.image}
                      alt=""
                      className=" object-fill h-full w-full "
                    />
                  </div>
                  <div className=" pt-2">
                    <p className=" w-3/4 truncate font-bold">{movie.title}</p>

                    <div className=" text-slate-400">
                      <p className=" flex items-center">
                        {movie.certificate} <FaSquare className=" h-1" />{" "}
                        {movie.genre}
                      </p>
                      <p>{movie.language}</p>
                    </div>
                    <div className=" flex gap-2 pt-2">
                      <button className="w-28 text-black bg-[#ffcb05] flex justify-center gap-2 border p-1.5  px-3 rounded-md items-center font-bold text-[9px] lg:text-[12px]">
                        Book Tickets
                      </button>
                      <button className=" border rounded-md px-2">
                        <IoIosInformationCircleOutline className=" text-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" py-4  font-Poppins w-full bg-slate-100">
          <div className="sm:mx-auto sm:max-w-7xl lg:max-w-[80%] w-full px-5 lg:px-0">
            <p className=" font-bold text-[16px] py-4"> Coming Soon</p>
            <div className=" grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5  gap-4  lg:gap-6 text-[9px] lg:text-[12px]">
              {comingMoviesData.map((movies, index) => (
                <div className=" ">
                  <div className=" h-[240px]  sm:h-[340px]">
                    <img
                      src={movies.image}
                      alt=""
                      className=" object-fill h-full w-full "
                    />
                  </div>
                  <div className=" pt-2">
                    <p className=" w-3/4 truncate font-bold">
                      CRAKK JEETEGAA TOH JIY...{movies.title}
                    </p>

                    <div className=" text-slate-400">
                      <p className=" flex items-center">
                        {movies.certificate} <FaSquare className=" h-1" />{" "}
                        {movies.genre}
                      </p>
                      <p>{movies.language}</p>
                    </div>
                    <div className=" flex gap-2 pt-2">
                      <button className="w-28 text-black bg-white flex justify-center gap-2 border p-1.5  px-3 rounded-md items-center font-bold text-[9px] lg:text-[12px]">
                        View Details
                      </button>
                      <button className=" border rounded-md px-2 bg-white">
                        <MdNotificationAdd className=" text-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
