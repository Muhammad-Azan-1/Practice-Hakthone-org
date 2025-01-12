import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header/Header';


const SignUp = () => {

 
  return (
    <>
    <Header/>
    <div className="flex flex-col lg:flex-row items-center lg:justify-start gap-x-20 min3:gap-x-24 w-full min2:w-[1305px] px-1 sm:px-0  mt-12 ">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
        <Image
          src="/images/signup.png"
          alt="sign-up"
          width={810}
          height={785}
          className=" w-[600px] lg:w-[810px] h-auto"
        />
      </div>

      {/* Form Section */}
      <div className="w-full min-4:w-[375px]  flex flex-col items-center lg:items-start">
        <h1 className="text-[24px] sm:text-[28px] lg:text-[36px] font-semibold mb-2 text-center lg:text-left">
          Create an account
        </h1>
        <span className="text-[14px] sm:text-[16px] text-black mb-8 sm:mb-10 text-center lg:text-left">
        Enter your details below
        </span>

        {/* Name Input */}
        <div className="w-full max-w-[370px]">
          <input placeholder='Name' className="border-b  border-black w-full focus:outline-none px-1 pb-1 mb-8"/>
        </div>

          {/* {Email} */}

          <div className="w-full max-w-[370px]">
          <input placeholder='Email or Phone Number' className="border-b border-black w-full focus:outline-none  px-1 pb-1 mb-8"/>
        </div>


        {/* Password Input */}
        <div className="w-full max-w-[370px]">
          <input placeholder='Password' type='password' className="border-b border-black w-full focus:outline-none px-1 pb-1  mb-6"/>
        </div>

        {/* Create Account Button */}
        <button className="w-full max-w-[370px] h-[56px] bg-[#DB4444] text-white rounded-[5px] mt-4 mb-4 shadow-md hover:bg-[#DB4444] transition">
          Create Account
        </button>

        {/* Google Sign Up Button */}
        <button className="w-full max-w-[370px] h-[56px] border border-gray-600 flex items-center justify-center gap-4 rounded-md  mb-6 hover:shadow-lg transition">
          <Image
            src="/images/google.png"
            width={24}
            height={24}
            alt="google-icon"
          />
          <span>Sign up with Google</span>
        </button>

        {/* Login Option */}
        <div className="flex items-center w-full justify-center mt-1 gap-2 text-sm text-black">
          <span>Already have an account ?</span>
          <Link href={"/login"} className='cursor-pointer'>
          <span className="text-black pl-1  cursor-pointer hover:underline">
            Log in
          </span>
          </Link>
        </div>
      </div>
    </div>
   
    </>
  );
};

export default SignUp;