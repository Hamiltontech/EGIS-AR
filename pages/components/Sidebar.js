import { React, use, useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import { CiLocationArrow1 } from "react-icons/ci";
import { BsPinMap, BsMap } from "react-icons/bs";
import Sanitary from "../../public/data/Border_Final_join.json";
import Construction from "../../public/data/Construction_projects.json";
import Station from "../../public/data/Station_Point_Final.json";
import Mega from "../../public/data/Mega_projects.json";
import Areas from "../../public/data/area.json";
import Govs from "../../public/data/gov.json";
import { IoIosArrowDown } from "react-icons/io";
import { FaMapMarkerAlt, FaGripLinesVertical, FaArrowUp } from "react-icons/fa";
import { BsCircleFill, BsSquareFill } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import Image from "next/image";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

const Sidebar = ({
  show,
  govid,
  setGovid,
  sanitary,
  setSanitary,
  construction,
  setConstruction,
  station,
  setStation,
  mega,
  setMega,
  setProjectCoordinates1,
  setProjectCoordinates,
  setProjectDescription,
  setProjectName,
  setInfo,
  info,
  setprojectPosition,
  setAreaGov,
  setProImage,
  clearZoom, 
  setClearZoom
}) => {
  const [constructionProject, setConstructionProject] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [ShowAdvanced, setShowAdvanced] = useState(true);
  const [proName, setProName] = useState("Search..");
  const [gov, setGov] = useState(false);
  const [area, setArea] = useState(false);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 210;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 210;
  };

  const govCheck = () => {
    setGov(!gov);
    if (document.getElementById("area").checked === true) {
      setArea(false);
    }
  };
  const areaCheck = () => {
    setArea(!area);
    if (document.getElementById("governate").checked === true) {
      setGov(false);
    }
  };

  // projects
  const sanitaryCheck = () => {
    setSanitary(!sanitary);
    if (document.getElementById("sanitary").checked === true) {
      setConstruction(false);
      setStation(false);
      setMega(false);
    }
  };
  const ConstructionCheck = () => {
    setConstruction(!construction);
    if (document.getElementById("construction").checked === true) {
      setSanitary(false);
      setStation(false);
      setMega(false);
    }
  };
  const stationCheck = () => {
    setStation(!station);
    if (document.getElementById("station").checked === true) {
      setConstruction(false);
      setSanitary(false);
      setMega(false);
    }
  };
  const megaCheck = () => {
    setMega(!mega);
    if (document.getElementById("mega").checked === true) {
      setConstruction(false);
      setSanitary(false);
      setStation(false);
    }
  };

  function myFunction() {
    var input, filter, ul, li, a, i, txtValue;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL") || "";
    li = ul.getElementsByTagName("li") || "";

    for (i = 0; i < li.length; i++) {
      txtValue = li[i].textContent || li[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  return (
    <div className={info ? "hidden" : "text-center h-screen bg-[#162641]"}>
      <div className=" flex flex-col flex-auto min-h-screen text-white duration-500 ease-in-out bg-[#162641] ">
        <div
          className={` sm:w-[300px] bg-[#162641] p-1  h-full z-40 ease-in-out duration-500 w-full  ${
            show ? "translate-x-30 " : "-translate-x-full"
          }`}
        >
          <div className="flex-grow overflow-x-hidden overflow-y-auto no-scrollbar">
            <ul className="flex flex-col py-4 space-y-1">
              {/* images section */}
              <li className="px-1 ">
                <div className="flex flex-row justify-end h-8  mt-40 lg:mt-12">
                  <div className="text-xs tracking-wide text-white/70 uppercase ">
                    صور المشروع
                  </div>
                </div>
                <div>
                  {construction ? (
                    Construction.features.map((item) => {
                      if (
                        item.properties.cid.toString() === constructionProject
                      ) {
                        const constImages = [
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image1,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image2,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image3,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image4,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image5,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image6,
                        ];
                        return (
                          <>
                           <div className="lg:hidden">
                              <Image
                                alt="/"
                                src={
                                  "https://geo1.esmrts.com/image/" +
                                  item.properties.image1
                                }
                                width={500}
                                height={500}
                              />
                            </div>

                            <div className="relative lg:flex items-center hidden">
                              <MdChevronLeft
                                className="opacity-50 cursor-pointer hover:opacity-100"
                                onClick={slideLeft}
                                size={40}
                              />
                              <div
                                id="slider"
                                className="flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
                              >
                                {constImages.map((item) => (
                                  <div key={item}>
                                    <div className=" py-1 mx-2 mt-10 mb-2  w-[200px] inline-block hover:scale-150 ease-in-out duration-300">
                                      <div className="w-full h-full  ">
                                        <Image
                                          alt=""
                                          src={item}
                                          width={500}
                                          height={500}
                                        />
                                      </div>

                                      {/* <hr className="mt-2 text-starWhite/20 " /> */}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <MdChevronRight
                                className="opacity-50 cursor-pointer hover:opacity-100"
                                onClick={slideRight}
                                size={40}
                              />
                            </div>
                            <div className="flex m-2 gap-1 justify-center">
                              <h1 className="text-sm max-w-[200px] text-center">
                                {item.properties.co_name_ar}
                              </h1>
                              <FaMapMarkerAlt
                                size={20}
                                className="text-red-600"
                              />
                            </div>
                          </>
                        );
                      }
                    })
                  ) : sanitary ? (
                    Sanitary.features.map((item) => {
                      if (
                        item.properties.coid.toString() === constructionProject
                      ) {
                        const constImages = [
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image1,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image2,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image3,
                        ];
                        return (
                          <>
                          <div className="lg:hidden">
                              <Image
                                alt="/"
                                src={
                                  "https://geo1.esmrts.com/image/" +
                                  item.properties.image1
                                }
                                width={500}
                                height={500}
                              />
                            </div>
                            <div className="relative lg:flex items-center hidden">
                              <MdChevronLeft
                                className="opacity-50 cursor-pointer hover:opacity-100"
                                onClick={slideLeft}
                                size={40}
                              />
                              <div
                                id="slider"
                                className="flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
                              >
                                {constImages.map((item) => (
                                  <div key={item}>
                                    <div className=" py-1 mx-2 mt-10 mb-2  w-[200px] inline-block hover:scale-150 ease-in-out duration-300">
                                      <div className="w-full h-full  ">
                                        <Image
                                          alt=""
                                          src={item}
                                          width={500}
                                          height={500}
                                        />
                                      </div>

                                      {/* <hr className="mt-2 text-starWhite/20 " /> */}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <MdChevronRight
                                className="opacity-50 cursor-pointer hover:opacity-100"
                                onClick={slideRight}
                                size={40}
                              />
                            </div>
                            <div className="flex m-2 gap-1 justify-center">
                              <h1 className="text-sm max-w-[200px] text-center">
                                {item.properties.co_name_ar}
                              </h1>
                              <FaGripLinesVertical
                                size={30}
                                className="text-blue-400"
                              />
                            </div>
                          </>
                        );
                      }
                    })
                  ) : station ? (
                    Station.features.map((item) => {
                      if (
                        item.properties.cid.toString() === constructionProject
                      ) {
                        const constImages = [
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image1,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image2,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image3,
                        ];
                        return (
                          <>
                          <div className="lg:hidden">
                              <Image
                                alt="/"
                                src={
                                  "https://geo1.esmrts.com/image/" +
                                  item.properties.image1
                                }
                                width={500}
                                height={500}
                              />
                              </div>
                            <div className="relative hidden lg:flex items-center">
                              <MdChevronLeft
                                className="opacity-50 cursor-pointer hover:opacity-100"
                                onClick={slideLeft}
                                size={40}
                              />
                              <div
                                id="slider"
                                className="flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
                              >
                                {constImages.map((item) => (
                                  <div key={item}>
                                    <div className=" py-1 mx-2 mt-10 mb-2  w-[200px] inline-block hover:scale-150 ease-in-out duration-300">
                                      <div className="w-full h-full  ">
                                        <Image
                                          alt=""
                                          src={item}
                                          width={500}
                                          height={500}
                                        />
                                      </div>

                                      {/* <hr className="mt-2 text-starWhite/20 " /> */}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <MdChevronRight
                                className="opacity-50 cursor-pointer hover:opacity-100"
                                onClick={slideRight}
                                size={40}
                              />
                            </div>
                            <div className="flex m-2 gap-1 justify-center">
                              <h1 className="text-sm max-w-[200px] text-center">
                                {item.properties.st_name_ar}
                              </h1>
                              <FaMapMarkerAlt
                                size={20}
                                className="text-blue-500"
                              />
                            </div>
                          </>
                        );
                      }
                    })
                  ) : mega ? (
                    Mega.features.map((item) => {
                      if (
                        item.properties.cid.toString() === constructionProject
                      ) {
                        const constImages = [
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image1,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image2,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image3,
                        ];
                        return (
                          <>
                          <div className="lg:hidden">
                              <Image
                                alt="/"
                                src={
                                  "https://geo1.esmrts.com/image/" +
                                  item.properties.image1
                                }
                                width={500}
                                height={500}
                              />
                            </div>
                            <div className="relative hidden lg:flex items-center">
                              <MdChevronLeft
                                className="opacity-50 cursor-pointer hover:opacity-100"
                                onClick={slideLeft}
                                size={40}
                              />
                              <div
                                id="slider"
                                className="flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
                              >
                                {constImages.map((item) => (
                                  <div key={item}>
                                    <div className=" py-1 mx-2 mt-10 mb-2  w-[200px] inline-block hover:scale-150 ease-in-out duration-300">
                                      <div className="w-full h-full  ">
                                        <Image
                                          alt=""
                                          src={item}
                                          width={500}
                                          height={500}
                                        />
                                      </div>

                                      {/* <hr className="mt-2 text-starWhite/20 " /> */}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <MdChevronRight
                                className="opacity-50 cursor-pointer hover:opacity-100"
                                onClick={slideRight}
                                size={40}
                              />
                            </div>
                            <div className="flex m-2 gap-1 justify-center">
                              <h1 className="text-sm max-w-[200px] text-center">
                                {item.properties.co_name_ar}
                              </h1>
                              <FaMapMarkerAlt
                                size={20}
                                className="text-blue-500"
                              />
                            </div>
                          </>
                        );
                      }
                    })
                  ) : (
                    <></>
                  )}
                </div>
              </li>

              <li className="px-1">
                <div className="flex flex-row items-center h-8 justify-between">
                  <button
                    className="p-2"
                    onClick={() => setShowAdvanced(!ShowAdvanced)}
                  >
                    <IoIosArrowDown />
                  </button>

                  <div className="text-xs tracking-wide text-white/70 uppercase">
                    بحث
                  </div>
                </div>
              </li>

              {/* location type */}

              {ShowAdvanced && (
                <>
                  <li>
                    <div>
                      <h1 className="relative flex flex-row items-center pr-2 text-white duration-150 ease-in-out border-r-4 border-transparent hover:text-gray-600 h-11 focus:outline-none hover:bg-gray-50 border-[#9d3039] justify-end">
                        <span className="ml-2 text-md tracking-wide truncate ">
                          اختر نوع الموقع
                        </span>
                        <span className="inline-flex items-center justify-center ml-1">
                          <CiLocationArrow1 />
                        </span>
                      </h1>
                      <div class="flex pr-5 text-[14px] justify-end">
                        <label for="governate" className="m-1">
                          محافظة
                        </label>
                        {gov ? (
                          <input
                            type="radio"
                            id="governate"
                            name="governate"
                            className="accent-[#9d3039]"
                            onClick={govCheck}
                            checked={true}
                          />
                        ) : (
                          <input
                            type="radio"
                            id="governate"
                            name="governate"
                            className="accent-[#9d3039]"
                            onClick={govCheck}
                            checked={false}
                          />
                        )}
                      </div>

                      <div className="flex pr-5 justify-end text-[14px]">
                        <label for="area" className="m-1">
                          منطقة
                        </label>
                        {area ? (
                          <input
                            type="radio"
                            name="area"
                            id="area"
                            className="accent-[#9d3039]"
                            onClick={areaCheck}
                            checked={true}
                          />
                        ) : (
                          <input
                            type="radio"
                            name="area"
                            id="area"
                            className="accent-[#9d3039]"
                            onClick={areaCheck}
                            checked={false}
                          />
                        )}
                      </div>
                    </div>
                  </li>
                  <hr className="mx-4" />

                  <li>
                    <div>
                      <h1 className="relative flex flex-row justify-end mt-4 text-white duration-150 ease-in-out border-r-4 border-transparent hover:text-gray-600 h-11 focus:outline-none hover:bg-gray-50 border-[#9d3039]">
                        <span className="mr-2 text-md tracking-wide truncate">
                          اختر الموقع
                        </span>
                        <span className="inline-flex justify-end mr-2 mt-1">
                          <GoLocation />
                        </span>
                      </h1>
                      <select
                        className="select w-[250px] max-w-xs text-gray-600 p-1 outline-none m-1 mb-2 text-right px-2"
                        onChange={(e) => {
                          e.preventDefault;
                          setGovid(e.target.value);
                          setprojectPosition(false);
                          setAreaGov(true);
                          setClearZoom(false)
                        }}
                      >
                        {gov ? (
                          <>
                            <option disabled selected value={0}>
                              --
                            </option>
                            <option value={0}>الجهراء</option>
                            <option value={1}>الأحمدي</option>
                            <option value={2}>حولي</option>
                            <option value={3}>مبارك الكبير</option>
                            <option value={4}>العاصمة</option>
                            <option value={5}>الفروانية</option>
                          </>
                        ) : area ? (
                          <>
                            <option disabled selected>
                              --
                            </option>
                            {Areas.features.slice(0, -6).map((item) => (
                              <>
                                <option value={item.properties.area_id}>
                                  {item.properties.rea_name}
                                </option>
                              </>
                            ))}
                          </>
                        ) : (
                          <option>--</option>
                        )}
                      </select>
                    </div>
                  </li>
                  {/* end of select location */}

                  <hr className="mx-4" />

                  {/* search methiods */}
                  <li>
                    <div>
                      <h1 className="relative flex flex-row justify-end mt-4 text-white duration-150 ease-in-out border-r-4 border-transparent hover:text-gray-600 h-11 focus:outline-none hover:bg-gray-50 border-[#9d3039]">
                        <span className="mr-2 text-md tracking-wide truncate">
                          نوع المشروع
                        </span>
                        <span className="inline-flex items-center justify-center mr-2 mb-4">
                          <BsPinMap />
                        </span>
                      </h1>
                      <div class="flex pr-5 text-[14px] justify-end ">
                        <label for="sanitary-contract-name" className="m-1">
                          المشاريع الصحية
                        </label>
                        {sanitary ? (
                          <input
                            type="radio"
                            id="sanitary"
                            name="sanitary-contract-name"
                            className="accent-[#9d3039]"
                            onClick={sanitaryCheck}
                            checked={true}
                          />
                        ) : (
                          <input
                            type="radio"
                            id="sanitary"
                            name="sanitary-contract-name"
                            className="accent-[#9d3039]"
                            onClick={sanitaryCheck}
                            checked={false}
                          />
                        )}
                      </div>
                      <div className="flex pr-5 text-[14px] justify-end">
                        <label for="construction-project-name" className="m-1">
                          المشاريع الإنشائية{" "}
                        </label>
                        {construction ? (
                          <input
                            type="radio"
                            name="construction"
                            id="construction"
                            className="accent-[#9d3039]"
                            onClick={ConstructionCheck}
                            checked={true}
                          />
                        ) : (
                          <input
                            type="radio"
                            name="construction"
                            id="construction"
                            className="accent-[#9d3039]"
                            onClick={ConstructionCheck}
                            checked={false}
                          />
                        )}
                      </div>
                      <div className="flex pr-5 text-[14px] justify-end">
                        <label for="station" className="m-1">
                          المحطات الصحية
                        </label>
                        {station ? (
                          <input
                            type="radio"
                            name="station"
                            id="station"
                            className="accent-[#9d3039]"
                            onClick={stationCheck}
                            checked={true}
                          />
                        ) : (
                          <input
                            type="radio"
                            name="station"
                            id="station"
                            className="accent-[#9d3039]"
                            onClick={stationCheck}
                            checked={false}
                          />
                        )}
                      </div>
                      <div className="flex pr-5 text-[14px] justify-end">
                        <label for="mega" className="m-1">
                          المشاريع الكبيرة
                        </label>
                        {mega ? (
                          <input
                            type="radio"
                            name="mega"
                            id="mega"
                            className="accent-[#9d3039]"
                            onClick={megaCheck}
                            checked={true}
                          />
                        ) : (
                          <input
                            type="radio"
                            name="mega"
                            id="mega"
                            className="accent-[#9d3039]"
                            onClick={megaCheck}
                            checked={false}
                          />
                        )}
                      </div>
                    </div>
                  </li>
                  {/* end of search methods */}
                  <hr className="mx-4 mt-2" />

                  {/* search project */}
                  <li>
                    <div>
                      <h1 className="relative flex flex-row justify-end mt-4 text-white duration-150 ease-in-out border-r-4 border-transparent hover:text-gray-600 h-11 focus:outline-none hover:bg-gray-50 border-[#9d3039]">
                        <span className="mr-2 text-md tracking-wide truncate">
                          اسم المشروع
                        </span>
                        <span className="inline-flex  justify-end  mt-1 mr-2">
                          <BsMap />
                        </span>
                      </h1>

                      {sanitary ? (
                        <>
                          <div
                            className="flex justify-center max-w-xs cursor-pointer"
                            onClick={() => setShowOptions(true)}
                          >
                            <input
                              type="text"
                              id="myInput"
                              onChange={(e) => myFunction()}
                              placeholder={proName}
                              className="w-[250px] max-w-xs p-1 outline-none m-1 mb-2 bg-transparent border-b"
                            />
                            <IoIosArrowDown className=" mt-3 " />
                          </div>
                          {showOptions && (
                            <ul
                              id="myUL"
                              style={{ height: "200px", overflowY: "scroll" }}
                              className="no-scrollbar bg-white/20"
                            >
                              {Sanitary.features.map((item) => {
                                if (
                                  item.properties.gov_id.toString() === govid
                                ) {
                                  return (
                                    <>
                                      <li
                                        className="cursor-pointer hover:bg-[#9d3039]/20 max-w-xs text-sm py-2 border-b border-white/30"
                                        onClick={() => {
                                          setConstructionProject(
                                            item.properties.coid
                                          );
                                          setProName(
                                            item.properties.co_name_ar
                                          );
                                          setProjectCoordinates(
                                            item.properties.north
                                          );
                                          setProjectCoordinates1(
                                            item.properties.east
                                          );
                                          setProjectName(
                                            item.properties.co_name_ar
                                          );
                                          setProjectDescription(
                                            item.properties.description_ar
                                          );
                                          setprojectPosition(true);
                                          setAreaGov(false);
                                          setProImage(
                                            "https://geo1.esmrts.com/image/" +
                                              item.properties.image1
                                          );
                                        }}
                                      >
                                        {item.properties.co_name_ar}
                                      </li>
                                    </>
                                  );
                                } else if (
                                  item.properties.area_id.toString() === govid
                                ) {
                                  return (
                                    <>
                                      <li
                                        className="cursor-pointer hover:bg-[#9d3039]/20 max-w-xs text-sm py-2 border-b border-white/30"
                                        onClick={() => {
                                          setConstructionProject(
                                            item.properties.coid
                                          );
                                          setProName(
                                            item.properties.co_name_ar
                                          );
                                          setProjectCoordinates(
                                            item.properties.north
                                          );
                                          setProjectCoordinates1(
                                            item.properties.east
                                          );
                                          setProjectName(
                                            item.properties.co_name_ar
                                          );
                                          setProjectDescription(
                                            item.properties.description_ar
                                          );
                                          setprojectPosition(true);
                                          setAreaGov(false);
                                          setProImage(
                                            "https://geo1.esmrts.com/image/" +
                                              item.properties.image1
                                          );
                                        }}
                                      >
                                        {item.properties.co_name_ar}
                                      </li>
                                    </>
                                  );
                                }
                              })}
                            </ul>
                          )}
                        </>
                      ) : construction ? (
                        <>
                          <div
                            className="flex justify-center max-w-xs cursor-pointer"
                            onClick={() => setShowOptions(true)}
                          >
                            <input
                              dir="rtl"
                              type="text"
                              id="myInput"
                              onChange={(e) => myFunction()}
                              placeholder={proName}
                              className="w-[250px] max-w-xs p-1 outline-none m-1 mb-2 bg-transparent border-b"
                            />
                            <IoIosArrowDown className=" mt-3 " />
                          </div>
                          {showOptions && (
                            <ul
                              id="myUL"
                              style={{ height: "200px", overflowY: "scroll" }}
                              className="no-scrollbar bg-white/20"
                            >
                              {Construction.features.map((item) => {
                                if (
                                  item.properties.gov_id.toString() === govid
                                ) {
                                  return (
                                    <>
                                      <li
                                        className="cursor-pointer hover:bg-[#9d3039]/20 max-w-xs text-sm py-2 border-b border-white/30"
                                        onClick={() => {
                                          setConstructionProject(
                                            item.properties.cid
                                          );
                                          setProName(
                                            item.properties.co_name_ar
                                          );
                                          setProjectCoordinates(
                                            item.geometry.coordinates[1]
                                          );
                                          setProjectCoordinates1(
                                            item.geometry.coordinates[0]
                                          );
                                          setProjectName(
                                            item.properties.co_name_ar
                                          );
                                          setProjectDescription(
                                            item.properties.description_ar
                                          );
                                          setprojectPosition(true);
                                          setAreaGov(false);
                                          setProImage(
                                            "https://geo1.esmrts.com/image/" +
                                              item.properties.image1
                                          );
                                        }}
                                      >
                                        {item.properties.co_name_ar}
                                      </li>
                                    </>
                                  );
                                } else if (
                                  item.properties.area_id.toString() === govid
                                ) {
                                  return (
                                    <>
                                      <li
                                        className="cursor-pointer hover:bg-[#9d3039]/20 max-w-xs text-sm py-2 border-b border-white/30"
                                        onClick={() => {
                                          setConstructionProject(
                                            item.properties.cid
                                          );
                                          setProName(
                                            item.properties.co_name_ar
                                          );
                                          setProjectCoordinates(
                                            item.geometry.coordinates[1]
                                          );
                                          setProjectCoordinates1(
                                            item.geometry.coordinates[0]
                                          );
                                          setProjectName(
                                            item.properties.co_name_ar
                                          );
                                          setProjectDescription(
                                            item.properties.description_ar
                                          );
                                          setprojectPosition(true);
                                          setAreaGov(false);
                                          setProImage(
                                            "https://geo1.esmrts.com/image/" +
                                              item.properties.image1
                                          );
                                        }}
                                      >
                                        {item.properties.co_name_ar}
                                      </li>
                                    </>
                                  );
                                }
                              })}
                            </ul>
                          )}
                        </>
                      ) : station ? (
                        <>
                          <div
                            className="flex justify-center max-w-xs cursor-pointer"
                            onClick={() => setShowOptions(true)}
                          >
                            <input
                              type="text"
                              id="myInput"
                              onChange={(e) => myFunction()}
                              placeholder={proName}
                              className="w-[250px] max-w-xs p-1 outline-none m-1 mb-2 bg-transparent border-b"
                            />
                            <IoIosArrowDown className=" mt-3 " />
                          </div>
                          {showOptions && (
                            <ul
                              id="myUL"
                              style={{ height: "200px", overflowY: "scroll" }}
                              className="no-scrollbar bg-white/20"
                            >
                              {Station.features.map((item) => {
                                if (
                                  item.properties.gove_numbe.toString() ===
                                  govid
                                ) {
                                  return (
                                    <>
                                      <li
                                        className="cursor-pointer hover:bg-[#9d3039]/20 max-w-xs text-sm py-2 border-b border-white/30"
                                        onClick={() => {
                                          setConstructionProject(
                                            item.properties.cid
                                          );
                                          setProName(
                                            item.properties.st_name_eng
                                          );
                                          setProjectCoordinates(
                                            item.geometry.coordinates[0][1]
                                          );
                                          setProjectCoordinates1(
                                            item.geometry.coordinates[0][0]
                                          );
                                          setProjectName(
                                            item.properties.st_name_eng
                                          );
                                          setProjectDescription(
                                            item.properties.description_ar
                                          );
                                          setprojectPosition(true);
                                          setAreaGov(false);
                                          setProImage(
                                            "https://geo1.esmrts.com/image/" +
                                              item.properties.image1
                                          );
                                        }}
                                      >
                                        {item.properties.st_name_eng}
                                      </li>
                                    </>
                                  );
                                } else if (
                                  item.properties.area_id.toString() === govid
                                ) {
                                  return (
                                    <>
                                      <li
                                        className="cursor-pointer hover:bg-[#9d3039]/20 max-w-xs text-sm py-2 border-b border-white/30"
                                        onClick={() => {
                                          setConstructionProject(
                                            item.properties.cid
                                          );
                                          setProName(
                                            item.properties.st_name_eng
                                          );
                                          setProjectCoordinates(
                                            item.geometry.coordinates[0][1]
                                          );
                                          setProjectCoordinates1(
                                            item.geometry.coordinates[0][0]
                                          );
                                          setProjectName(
                                            item.properties.st_name_eng
                                          );
                                          setProjectDescription(
                                            item.properties.description_ar
                                          );
                                          setprojectPosition(true);
                                          setAreaGov(false);
                                          setProImage(
                                            "https://geo1.esmrts.com/image/" +
                                              item.properties.image1
                                          );
                                        }}
                                      >
                                        {item.properties.st_name_eng}
                                      </li>
                                    </>
                                  );
                                }
                              })}
                            </ul>
                          )}
                        </>
                      ) : mega ? (
                        <>
                          <div
                            className="flex justify-center max-w-xs cursor-pointer"
                            onClick={() => setShowOptions(true)}
                          >
                            <input
                              type="text"
                              id="myInput"
                              onChange={(e) => myFunction()}
                              placeholder={proName}
                              className="w-[250px] max-w-xs p-1 outline-none m-1 mb-2 bg-transparent border-b"
                            />
                            <IoIosArrowDown className=" mt-3 " />
                          </div>
                          {showOptions && (
                            <ul
                              id="myUL"
                              style={{ height: "200px", overflowY: "scroll" }}
                              className="no-scrollbar bg-white/20"
                            >
                              {Mega.features.map((item) => {
                                if (
                                  item.properties.gov_id.toString() === govid
                                ) {
                                  return (
                                    <>
                                      <li
                                        className="cursor-pointer hover:bg-[#9d3039]/20 max-w-xs text-sm py-2 border-b border-white/30"
                                        onClick={() => {
                                          setConstructionProject(
                                            item.properties.cid
                                          );
                                          setProName(
                                            item.properties.co_name_ar
                                          );
                                          setProjectCoordinates(
                                            item.geometry.coordinates[0][1]
                                          );
                                          setProjectCoordinates1(
                                            item.geometry.coordinates[0][0]
                                          );
                                          setProjectName(
                                            item.properties.co_name_ar
                                          );
                                          setProjectDescription(
                                            item.properties.description_ar
                                          );
                                          setprojectPosition(true);
                                          setAreaGov(false);
                                          setProImage(
                                            "https://geo1.esmrts.com/image/" +
                                              item.properties.image1
                                          );
                                        }}
                                      >
                                        {item.properties.co_name_ar}
                                      </li>
                                    </>
                                  );
                                } else if (
                                  item.properties.area_id.toString() === govid
                                ) {
                                  return (
                                    <>
                                      <li
                                        className="cursor-pointer hover:bg-[#9d3039]/20 max-w-xs text-sm py-2 border-b border-white/30"
                                        onClick={() => {
                                          setConstructionProject(
                                            item.properties.cid
                                          );
                                          setProName(
                                            item.properties.co_name_ar
                                          );
                                          setProjectCoordinates(
                                            item.geometry.coordinates[0][1]
                                          );
                                          setProjectCoordinates1(
                                            item.geometry.coordinates[0][0]
                                          );
                                          setProjectName(
                                            item.properties.co_name_ar
                                          );
                                          setProjectDescription(
                                            item.properties.description_ar
                                          );
                                          setprojectPosition(true);
                                          setAreaGov(false);
                                          setProImage(
                                            "https://geo1.esmrts.com/image/" +
                                              item.properties.image1
                                          );
                                        }}
                                      >
                                        {item.properties.co_name_ar}
                                      </li>
                                    </>
                                  );
                                }
                              })}
                            </ul>
                          )}
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </li>
                </>
              )}

              {/* end of search project */}
              <br />
              <div className="hidden lg:block">
                <button
                  onClick={() => {
                    setConstruction(false);
                    setStation(false);
                    setMega(false);
                    setSanitary(false);
                    setGov(false);
                    setArea(false);
                    setProjectCoordinates(29.3117);
                    setProjectCoordinates1(47.4818);
                    setAreaGov(false)
                    setClearZoom(true)
                  }}
                  className="bg-[#9d3039] p-1 w-[250px] hover:bg-[#9d3039]/70 ease-in-out duration-200"
                >
                  مسح البحث
                </button>
                <button
                  onClick={() => window.print()}
                  className="bg-[#9d3039] p-1 w-[250px] mt-1 hover:bg-[#9d3039]/70 ease-in-out duration-200"
                >
                  طباعة
                </button>
                <div>
                  <button
                    className="bg-[#9d3039] p-1 w-[250px] mb-5 mt-1 hover:bg-[#9d3039]/70 ease-in-out duration-200"
                    onClick={() => setInfo(true)}
                  >
                    تحتاج مساعدة ؟
                  </button>
                </div>
              </div>

              <div className="lg:flex justify-center gap-2 mt-2 text-md hidden ">
                <button className="hover:text-white/50 ease-in-out duration-150 p-1">
                  <a href="https://egis-next.vercel.app/">English</a>
                </button>
              </div>

              <div className="lg:flex items-center justify-center mx-4 text-[11px] hidden ">
                جميع الحقوق محفوظة © وزارة الأشغال العامة
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
