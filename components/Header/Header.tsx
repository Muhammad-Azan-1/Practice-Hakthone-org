"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown,faSearch, faTimes, faBars,} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Header = () => {
  const [Menu, setMenu] = useState(false);

  function toggle() {
    setMenu(!Menu);
  }
  return (
    <>
      <div className="w-full h-[54px] sm:h-[48px] bg-black relative">
        <div className="flex justify-between md:justify-center items-center h-full">
          <div className="min-2:w-[90%] text-[12px] sm:text-[14px] flex  justify-center">
            <p className="text-white text-center inline-block font-poppins pr-3">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!{" "}
              <Link className="ml-2 underline" href="/">
                ShopNow
              </Link>
            </p>
          </div>
          <div className="w-[90px] ml-1 flex items-center justify-center mr-1   sm:gap-0 sm:ml-0">
            <p className="text-white  text-[12px] sm:text-[14px] font-poppins ">
              English
            </p>
            <FontAwesomeIcon
              className="text-white min-2:ml-2 ml-1 text-[12px]"
              icon={faChevronDown}
            />
          </div>
        </div>
      </div>

      {/* navbar */}
      <div className="w-full  relative h-[90px] max-1:h-[80px] max-2:h-[60px] bg-[#FAFAFA] border-b-[1px] border-b-gray-500 flex items-center justify-center max-1:justify-between max-1:pt-0 pt-[25px]   px-2">
        <div className="ml-4">
          <Image src="/images/Logo.svg" alt="Logo" width={110} height={100} className="w-auto h-auto"></Image>
        </div>

        <div
          className={`w-[50%]  min-1:w-[56%] flex  flex-row justify-center gap-[30px] min-1:gap-14 max-1:gap-[40px] max-1:w-[330px] max-2:w-[280px] 
        max-1:flex-col items-center max-1:justify-start max-1:pt-[100px] max-1:fixed max-1:text-black
         max-1:bg-white max-1:top-0 max-1:right-0 max-1:h-[100vh] max-1:z-[1000]  max-1:transition-all max-1:duration-1000 max-1:ease-in-out  max-1:overflow-x-hidden
           ${Menu ? "max-1:right-0 " : "max-1:right-[-500px] "}`}
        >
          <div className="text-black hidden max-1:inline-block max-1:absolute max-1:top-[8px] max-1:left-18 max-1:font-[700] max-1:text-[30px]">
            <h1 className="tracking-wider">Exculsive</h1>
          </div>
          <Link className="font-poppins max-1:text-[18px]" href="/">
            Home
          </Link>
          <Link className="font-poppins max-1:text-[18px]" href="/contact">
            Contact
          </Link>
          <Link className="font-poppins max-1:text-[18px]" href="/about">
            About
          </Link>
          <Link className="font-poppins max-1:text-[18px]" href="/signUp">
            Sign Up
          </Link>
{/*
          visibel for small screen */}
          <div className=" max-1:flex gap-6 max-1:items-center hidden">
          <Link href="/wishlist">
           <Image
              src="/images/heart.svg"
              alt="cart icon"
              width={22}
              height={22}
              className="cursor-pointer"
            ></Image>
            </Link> 
           <Link href="/cart"> <Image
              src="/images/Cart.svg"
              alt="cart icon"
              width={25}
              height={25}
            ></Image></Link>

            <Link href={"/account"}>
            <Image
              src="/images/user.png"
              alt="cart-icon"
              width={25}
              height={25}
              className="cursor-pointer hover:scale-110 transition"
            />
            </Link>
          </div>

          {/* for small screens */}

          <div className="hidden max-1:inline-block max-1:absolute max-1:left-0 max-1:top-[20px]">
            <FontAwesomeIcon
              className="text-black ml-2 text-[26px]"
              icon={faTimes}
              onClick={toggle}
            />
          </div>
        </div>

        <div className="max-2:hidden flex w-[320px] max-1:w-[70%] min-1:w-[350px] px-2 min-2:px-0">
          <input
            className="w-[220px] min-1:w-[210px] max-1:w-full h-[38px] bg-[#F5F5F5] placeholder:text-[14px] placeholder:pl-3 rounded-l-[4px] placeholder:font-poppins"
            type="text"
            placeholder="What you are looking for"
          />
          <div className="w-[35px] bg-[#F5F5F5] rounded-r-[4px]  flex justify-center items-center">
            <FontAwesomeIcon
              className="text-[#010101] text-[18px] pr-1"
              icon={faSearch}
            />
          </div>

          <div className=" max-1:hidden flex gap-2 min-1:gap-0 justify-center min-1:justify-between items-center w-[120px]  h-auto ml-6 min-1:mr-0 ">
           <Link href="/wishlist">
           <Image
              src="/images/heart.svg"
              alt="cart icon"
              width={22}
              height={22}
              className="cursor-pointer"
            ></Image>
            </Link> 
           <Link href="/cart"> <Image
              src="/images/Cart.svg"
              alt="cart icon"
              width={25}
              height={25}
            ></Image></Link>

            <Link href={"/account"}>
            <Image
              src="/images/user.png"
              alt="cart-icon"
              width={25}
              height={25}
              className="cursor-pointer hover:scale-110 transition"
            />
            </Link>
          </div>
        </div>

        <div className="hidden max-1:inline-block pt-[5px] ">
          <FontAwesomeIcon
            onClick={toggle}
            className="text-black text-[20px]"
            icon={faBars}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
