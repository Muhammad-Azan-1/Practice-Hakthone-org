import React from "react";
import Image from "next/image";
import Service from "@/components/CustomerServices/CustomerServices";
import Header from "@/components/Header/Header";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="w-full flex  flex-row justify-start mt-12 sm:mt-20 ">
        <div className="w-[280px] flex pl-12 lg:pl-24 min2:pl-36  justify-start ">
          <p>
            <span className="pr-2 text-[14px] text-gray-600">About</span>/
            <span className="pl-2">Contact</span>{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-16 min5:gap-y-0  min5:flex-row gap-x-16 min5:justify-end mt-16  w-full ">

        <div className="flex flex-col items-center min5:items-start  justify-center  gap-y-4 w-full min5:w-[530px] px-6  xl:px-6">
          <h1 className=" text-[35px] sm:text-[45px] md:text-[55px] font-[600] mb-2 sm:mb-3 ">Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>

        <div className="w-auto">
            <Image  src="/images/SideImage.svg"  alt="" className= " w-full h-auto xl:w-[710px]  xl:h-[610px]"  width={710} height={610}></Image>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-evenly mt-20 gap-6">
        <div className="w-[270px] h-[230px] border border-black rounded flex flex-col items-center justify-center gap-2 hover:bg-[#DB4444] hover:text-[#FAFAFA] hover:border-none">
          <Image src={"/images/ico1.png"} alt="icon-1" width={80} height={80} />
          <h3 className="text-[32px] font-bold">10.5k</h3>
          <p>Sellers active on our site</p>
        </div>
        <div className="w-[270px] h-[230px] border border-black rounded flex flex-col items-center justify-center gap-2 hover:bg-[#DB4444] hover:text-[#FAFAFA] hover:border-none">
          <Image
            src={"/images/ico2.png"}
            alt="icon-2"
            width={80}
            height={80}
            className="hover:text-white"
          />
          <h3 className="text-[32px] font-bold">33k</h3>
          <p>Monthly Product Sale</p>
        </div>
        <div className="w-[270px] h-[230px] border border-black rounded flex flex-col items-center justify-center gap-2 hover:bg-[#DB4444] hover:text-[#FAFAFA] hover:border-none">
          <Image src={"/images/ico3.png"} alt="icon-3" width={80} height={80} />
          <h3 className="text-[32px] font-bold">45.5k</h3>
          <p>Customers active on our site</p>
        </div>
        <div className="w-[270px] h-[230px] border border-black rounded flex flex-col items-center justify-center gap-2 hover:bg-[#DB4444] hover:text-[#FAFAFA] hover:border-none">
          <Image src={"/images/ico4.png"} alt="icon-4" width={80} height={80} />
          <h3 className="text-[32px] font-bold">25k</h3>
          <p>Annual gross sale on our site</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-around mt-16 lg:mt-28 gap-6">
        <div className="w-full sm:w-[370px] h-auto">
          <Image
            src={"/images/per1.png"}
            width={370}
            height={430}
            alt="per-1"
            className="w-full h-auto"
          />
          <h1 className="font-bold text-[24px] sm:text-[32px] mt-4 text-center">
            Tom Cruise
          </h1>
          <p className="text-center">Founder & Chairman</p>
          <Image
            src={"/images/social-media.png"}
            width={104}
            height={24}
            alt="per-1"
            className="mt-3 mx-auto"
          />
        </div>
        <div className="w-full sm:w-[370px] h-auto">
          <Image
            src={"/images/per2.png"}
            width={370}
            height={430}
            alt="per-2"
            className="w-full h-auto"
          />
          <h1 className="font-bold text-[24px] sm:text-[32px] mt-4 text-center">
            Tom Cruise
          </h1>
          <p className="text-center">Founder & Chairman</p>
          <Image
            src={"/images/social-media.png"}
            width={104}
            height={24}
            alt="per-2"
            className="mt-3 mx-auto"
          />
        </div>
        <div className="w-full sm:w-[370px] h-auto">
          <Image
            src={"/images/per3.png"}
            width={370}
            height={430}
            alt="per-3"
            className="w-full h-auto"
          />
          <h1 className="font-bold text-[24px] sm:text-[32px] mt-4 text-center">
            Tom Cruise
          </h1>
          <p className="text-center">Founder & Chairman</p>
          <Image
            src={"/images/social-media.png"}
            width={104}
            height={24}
            alt="per-3"
            className="mt-3 mx-auto"
          />
        </div>
      </div>

      <Service />
  
    </>
  );
};

export default AboutPage;
