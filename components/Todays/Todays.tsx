'use client'
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import { useEffect, useState  } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {  GlobalType} from "../Utils/Helper";



// 1 day = 24 hours
// 1 hour = 60 minutes
// 1 minute = 60 seconds
// 1 second = 1000 milliseconds
const Todays = () => {

  const [timeLeft , setTimeLeft] = useState({days:0 , hours:0 , minutes:0 , seconds:0})
  const [data , setData] =useState<[] | GlobalType[]>([])


 
  useEffect(()=>{

 
    const targetDate = new Date('2025-01-13T23:19:56')
    setInterval(()=>{
      const currentDate = new Date()
       const difernceBetweenDates = targetDate.getTime() - currentDate.getTime()
      //console.log(targetDate.getTime() - currentDate.getTime())  //? here we get the difference between currentDate and targetDate in milliseconds

        const days = Math.floor((difernceBetweenDates / ( 24 * 60 * 60 * 1000))) //  calcualting days
        const hours =  Math.floor((difernceBetweenDates % ( 24 * 60 * 60 * 1000)) / (60 * 60 * 1000)) //  This modulo operation gives the remainder of the difference when divided by one full day. In simpler terms, this gives the remaining time after subtracting complete days.
        const minutes = Math.floor((( difernceBetweenDates) / (1000 * 60))  % 60)
        const seconds = Math.floor((( difernceBetweenDates) / (1000)) % 60)
        const newTime  =  {days,hours,minutes,seconds}  
        setTimeLeft(newTime)
  
     
    },500)

   
  },[])


  useEffect(()=>{

  async  function myFunc(){
    const query = `
    *[_type == "product" && "electronics" in tags  ]{
       _id,
          name,
          price,
          discountPercentage,
          tags,
          "imageUrl": image.asset->url
        }`

        const data :GlobalType[] = await client.fetch(query)
        console.log(data)
        setData(data)
  }

  myFunc()
  },[])

  return (
    <>
      {/* text div */}
      <div className=" w-full h-auto  flex flex-col sm:flex-row px-4 lg:px-14 pt-16">
        {/* <div className="w-full flex"> */}
        <div className="flex w-[100%]  sm:w-auto md:w-[200px] shrink-0 flex-wrap flex-col items-center sm:items-start sm:justify-end md:justify-between">
          <div className="border-l-[15px]  h-[30px] border-[#DB4444] rounded-t-[5px] rounded-b-[5px] overflow-hidden">
          {data.map((product)=>(<h3 key={product.id} className="ml-4 mt-1 font-poppins capitalize tracking-wider text-[#DB4444]">{product.tags[0]}</h3>)) }

          </div>

          <div className="text-[25px] mt-4 md:text-[36px] font-poppins">
            <h1>Flash Sales</h1>
          </div>
        </div>

        <div className="ml-0 sm:ml-6 md:ml-8 lg:ml-12 mt-[20px] sm:mt-[38px] md:mt-[27px] shrink-0 w-[100%] sm:w-[300px] text-center flex justify-center gap-5 sm:gap-0 sm:justify-evenly items-center">
          <div>
            <p className="text-[12px] ">Days</p>
            <h1 className="text-[25px] md:text-[32px] font-[700]">{timeLeft.days}</h1>
          </div>
          <h1 className="text-[32px]  font-[700] mt-[10px] font-poppins text-[#DB4444]">
            :
          </h1>
          <div>
            <p className="text-[12px]">Hours</p>
            <h1 className="text-[25px] md:text-[32px] font-[700]">{timeLeft.hours}</h1>
          </div>
          <h1 className="text-[32px]  font-[700] mt-[10px] font-poppins text-[#DB4444]">
            :
          </h1>
          <div>
            <p className="text-[12px]">Minutes</p>
            <h1 className="text-[25px] md:text-[32px] font-[700]">{timeLeft.minutes}</h1>
          </div>
          <h1 className="text-[32px]  font-[700] mt-[10px] font-poppins text-[#DB4444]">
            :
          </h1>
          <div>
            <p className="text-[12px]">Seconds</p>
            <h1 className="text-[25px] md:text-[32px] font-[700]">{timeLeft.seconds}</h1>
          </div>
        </div>
        {/* </div> */}

        <div className="hidden sm:flex justify-end mt-5 sm:mt-0 sm:w-[60%] items-end ">
          <div className="flex justify-between items-end w-[90px] md:w-[110px] mb-2 ">
            <Image
              src="/images/arrow2.svg"
              alt="arrow-left"
              width={50}
              height={30}
              className="rotate-180 w-[40px] md:w-auto rounded-[50%] bg-slate-100"
            ></Image>

            <Image
              src="/images/arrow1.svg"
              alt="arrow-left"
              width={50}
              height={30}
              className="rotate-180 w-[40px] md:w-auto  rounded-[50%] bg-slate-100"
            ></Image>
          </div>
        </div>
      </div>

      {/* items */}

      <div className="w-full h-auto pt-8 px-4 lg:px-8 xl:px-10 flex items-center max:justify-center max:gap-16 max-733:gap-[48px] gap-y-24 justify-between flex-wrap">

        {/* Image box1 */}
     {  

         data.map((product:GlobalType)=>(
      <div key={product.id} className="sm-max:w-[380px] max:w-[280px] w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
          <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center cursor-pointer ">
            <Image
                src={urlFor(product.imageUrl).url()}
              alt="item2"
              width={150}
              height={100}
              className={` ${product.price === 114 ? 'w-[120px]' : 'w-[170px] sm:w-[150px]'} `}
            ></Image>
            <div className="absolute px-2 py-1 text-[14px] bg-[#DB4444] text-white rounded-[5px] top-3 left-4">
           
            {product.price === 599 || product.price === 999.99 || product.price === 114 ?  '-20%' : '-35%' } 
            </div>
            <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
              Add to Cart
            </div>
          </div>

          <div className="py-3 pl-1 flex flex-col justify-center items-center sm:items-start gap-2">
            <h1 className="font-poppins font-[500]">{product.name}</h1>

            <div className="flex">
              <h2 className="text-[#DB4444]">{product.price}$</h2>
             
            </div>

            <div className="flex">
              <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className={`${product.price === 109 || product.price === 64 ? 'text-gray-500' : 'text-[#FFAD33]'} ml-1 `} icon={faStar} />
              <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
            </div>
          </div>
        </div>
         ))
        
        }

       
        
      </div>

      <div className="mt-16 md:mt-12">
        <Button/>
        </div>
    </>
  );
};

export default Todays;


// <div className="sm-max:w-[380px] max:w-[280px]  w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
//           <div className="relative cursor-pointer   w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
//             <Image
//               src="/images/item2.svg"
//               alt="item2"
//               width={170}
//               height={100}
//               className="w-[170px] sm:w-[150px]"
//             ></Image>
//             <div className="absolute px-2 py-1 text-[14px] bg-[#DB4444] text-white rounded-[5px] top-3 left-4">
//               -35%
//             </div>
//             <div className="absolute font-poppins bg-black bottom-[0]   rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
//               Add to Cart
//             </div>
//           </div>

//           <div className="py-3 pl-1 flex flex-col justify-center items-center sm:items-start gap-2">
//             <h1 className="font-poppins font-[500]">AK-900 Wired Keyboard</h1>

//             <div className="flex">
//               <h2 className="text-[#DB4444]">$960</h2>
//               <h2 className="line-through ml-4 text-gray-500">$1160</h2>
//             </div>

//             <div className="flex">
//               <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
//               <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//               <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//               <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//               <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//               <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
//             </div>
//           </div>
//         </div>

//         {/* box image3 */}
//         <div className="max:w-[280px] hidden sm:inline-block  w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
//           <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
//             <Image
//               src="/images/item3.svg"
//               alt="item2"
//               width={170}
//               height={100}
//               className=""
//             ></Image>
//             <div className="absolute px-2 py-1 text-[14px] bg-[#DB4444] text-white rounded-[5px] top-3 left-4">
//               -30%
//             </div>
//             <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
//               Add to Cart
//             </div>
//           </div>

//           <div className="py-3 pl-1 flex flex-col justify-center gap-2">
//             <h1 className="font-poppins font-[500]">IPS LCD Gaming Monitor</h1>

//             <div className="flex">
//               <h2 className="text-[#DB4444]">$370</h2>
//               <h2 className="line-through ml-4 text-gray-500">$400</h2>
//             </div>

//             <div className="flex">
//               <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
//               <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//               <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//               <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//               <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//               <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
//             </div>
//           </div>
//         </div>

//         {/* box image4 */}
//         <div className="max:w-[280px] hidden sm:inline-block w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
//           <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
//             <Image
//               src="/images/item4.svg"
//               alt="item2"
//               width={120}
//               height={100}
//               className=""
//             ></Image>
//             <div className="absolute px-2 py-1 text-[14px] bg-[#DB4444] text-white rounded-[5px] top-3 left-4">
//               -40%
//             </div>
//             <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
//               Add to Cart
//             </div>
//           </div>

//           <div className="py-3 pl-1 flex flex-col justify-center gap-2">
//             <h1 className="font-poppins font-[500]">S-Series Comfort Chair </h1>

//             <div className="flex">
//               <h2 className="text-[#DB4444]">$120</h2>
//               <h2 className="line-through ml-4 text-gray-500">$160</h2>
//             </div>

//             <div className="flex">
//               <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
//               <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//               <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//               <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//               <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//               <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
//             </div>
//           </div>
//         </div>