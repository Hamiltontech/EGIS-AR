import React from "react";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { VscSearch } from "react-icons/vsc";

const Header = ({ setShow, show, setAbout, about, info, setTech, tech }) => {
  return (
    <div
      className={
        about
          ? "hidden"
          : info
          ? "hidden"
          : tech
          ? "hidden"
          : "flex lg:bg-[#162641] w-full p-2 justify-between header-sys "
      }
    >
      <div className="flex"
       
      >

<div  className={
          show
            ? `flex justify-between bg-white lg:bg-transparent p-4 rounded-full lg:p-0 lg:rounded-none shadow-xl`
            : `flex justify-between bg-[#162641] lg:bg-transparent p-4 rounded-full lg:p-0 lg:rounded-none shadow-xl`
        }>


        <button onClick={() => setShow(!show)} className=" hover:scale-105 lg:mb-1 lg:ml-3">
          <AiOutlineMenu
            size={25}
            className="text-white lg:mt-3 lg:mr-4 hidden lg:block"
          />
          <VscSearch
            size={22}
            className={
              show ? "lg:hidden text-[#162641]" : `lg:hidden text-white`
            }
          />
        </button>
       
      </div>
     
     <div className="text-white flex justify-between gap-4 ml-10">
        <button
          onClick={() => setAbout(true)}
          className="cursor-pointer hover:text-white/40 ease-in-out duration-150 hidden lg:block"
        >
          عن النظام
        </button>
        <button
          onClick={() => setTech(true)}
          className="cursor-pointer hover:text-white/40 ease-in-out duration-150 hidden lg:block"
        >
          الوصف التقني
        </button>
        </div>
      </div>
      <Image
          src={logo}
          alt="logo"
          width={220}
          height={100}
          className="hidden lg:block"
        />
    </div>
  );
};

export default Header;
