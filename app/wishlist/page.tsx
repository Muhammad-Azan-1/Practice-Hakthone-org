import Header from "@/components/Header/Header"
import Image from "next/image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
const page = () => {
  return (
   <>
    <Header />
  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mx-5 px-10 lg:px-20   mt-14">
                <h1 className="text-[16px] sm:text-[20px] text-center sm:text-left">
                    Wishlist (4)
                </h1>
                <button className="border border-black  w-[223px] h-[48px] sm:h-[56px] rounded-[5px]">
                    Move All To Bag
                </button>
            </div>


           
      

      {/* items */}

      <div className="w-full h-auto pt-8 px-6 md:px-10 lg:px-20  flex items-center  mt-10  gap-x-4 xl:gap-8 justify-center flex-wrap">
        {/* Image box1 */}
        <div className="sm-max:w-[380px] max:w-[280px] w-[260px] xl:w-[300px] h-[350px] bg-white rounded-[5px]">
          <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center cursor-pointer ">
            <Image
              src="/images/ct0.svg"
              alt="item2"
              width={150}
              height={100}
              className="w-[170px] sm:w-[150px]"
            ></Image>

            <div className="absolute top-3 right-4">
             <Image src="/images/delet-btn.svg" alt="delet btn" width={34} height={34}></Image>
            </div>
           

            <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
              Add to Cart
            </div>
          </div>

          <div className="py-3 pl-1 flex flex-col justify-center items-center sm:items-start gap-y-1 gap-2">
            <h1 className="font-poppins font-[500]">Breed Dry Dog Food</h1>

            <div className="flex items-center justify-center gap-x-[10px] sm:justify-start w-[80%]">
            
              <h2 className="text-[#DB4444]">$960</h2>
              <h2 className="text-gray-500 line-through">$960</h2>
             
            </div>
          </div>
        </div>



        {/* image box2 */}
        <div className="sm-max:w-[380px] max:w-[280px]  w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
          <div className="relative cursor-pointer   w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
            <Image
              src="/images/ct1.svg"
              alt="item2"
              width={170}
              height={100}
              className="w-[170px] sm:w-[150px]"
            ></Image>

<div className="absolute top-3 right-4">
             <Image src="/images/delet-btn.svg" alt="delet btn" width={34} height={34}></Image>
            </div>
            <div className="absolute font-poppins bg-black bottom-[0]   rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
              Add to Cart
            </div>
          </div>

          <div className="py-3 pl-1 flex flex-col justify-center items-center sm:items-start gap-y-1 gap-2">
            <h1 className="font-poppins font-[500]">CANON EOS DSLR Camera</h1>

            <div className="flex items-center justify-center gap-x-[10px] sm:justify-start w-[80%]">
              <h2 className="text-[#DB4444]">$260</h2>
              <h2 className="text-gray-500 line-through">$260</h2>

            
            </div>
          </div>
        </div>

        {/* box image3 */}
        <div className=" sm-max:w-[380px] max:w-[280px]   w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
          <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
            <Image
              src="/images/item1.svg"
              alt="item2"
              width={170}
              height={100}
              className=""
            ></Image>

            <div className="absolute top-3 right-4">
             <Image src="/images/delet-btn.svg" alt="delet btn" width={34} height={34}></Image>
            </div>

            <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
              Add to Cart
            </div>
          </div>

          <div className="py-3 pl-1 flex flex-col justify-center gap-y-1 gap-2">
            <h1 className="font-poppins font-[500]">HAVIT HV-G92 Gamepad</h1>
            <div className="flex items-center justify-start gap-x-[10px] w-[80%]">
              <h2 className="text-[#DB4444]">$360</h2>
              <h2 className="text-gray-500 line-through">$360</h2>
            </div>
          </div>
        </div>

        {/* box image4 */}
        <div className="sm-max:w-[380px] max:w-[280px]  w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
          <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
            <Image
              src="/images/ct3.svg"
              alt="item2"
              width={120}
              height={100}
              className=""
            ></Image>
                    <div className="absolute top-3 right-4">
             <Image src="/images/delet-btn.svg" alt="delet btn" width={34} height={34}></Image>
            </div>
            <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
              Add to Cart
            </div>
          </div>
                <div className="py-3 pl-1 flex flex-col justify-center gap-2">
                <h1 className="font-poppins font-[500]">ASUS FHD Gaming Laptop</h1>
                <div className="flex items-center justify-start gap-x-[10px] w-[80%]">
              <h2 className="text-[#DB4444]">$460</h2>
              <h2 className="text-gray-500 line-through">$460</h2>
            </div>
                </div>
       
      </div>
      </div>

      {/* JUST FOR YOU */}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mx-5 px-10 lg:px-20  sm:mt-14  mt-6">
      <div className="border-l-[15px]  h-[30px] border-[#DB4444] rounded-t-[5px] rounded-b-[5px] overflow-hidden">
            <h3 className="ml-4 mt-1 font-poppins text-black">Just For You</h3>
          </div>
                <button className="border border-black mt-3 sm:mt-0 w-[150px] h-[48px] sm:h-[56px] rounded-[5px]">
                   See All
                </button>
            </div>




            <div className="w-full h-auto pt-8 px-6 md:px-10 lg:px-20  flex items-center  mt-10  gap-x-4 xl:gap-[38.5px] justify-center flex-wrap">

     {/* box5 */}
     <div className="sm-max:w-[380px] max:w-[280px]  w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
       <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
         <Image
           src="/images/ct4.svg"
           alt="item2"
           width={120}
           height={100}
           className=""
         ></Image>
                <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-3 right-4">
           <FontAwesomeIcon className="text-[16px]" icon={faHeart} />
         </div>
         <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-12 right-4">
           <FontAwesomeIcon className="text-[16px]" icon={faEye} />
         </div>

         <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
           Add to Cart
         </div>
       </div>

       <div className="py-3 pl-1 flex flex-col justify-center gap-2">
         <h1 className="font-poppins font-[500]">Kids Electric Car</h1>

         <div className="flex items-center justify-start w-[80%]">
           <h2 className="text-[#DB4444]">$460</h2>
           <div className="ml-2">
           <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
           <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
           <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
           <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
           <FontAwesomeIcon className="ml-1 text-gray-500" icon={faStar} />
           </div>
           <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
         </div>
       </div>
     </div>

     {/* box6 */}

     <div className="sm-max:w-[380px] max:w-[280px]  w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
       <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
         <Image
           src="/images/ct5.svg"
           alt="item2"
           width={120}
           height={100}
           className=""
         ></Image>
                <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-3 right-4">
           <FontAwesomeIcon className="text-[16px]" icon={faHeart} />
         </div>
         <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-12 right-4">
           <FontAwesomeIcon className="text-[16px]" icon={faEye} />
         </div>

         <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
           Add to Cart
         </div>
       </div>

       <div className="py-3 pl-1 flex flex-col justify-center gap-2">
         <h1 className="font-poppins font-[500]">Jr. Zoom Soccer Cleats</h1>

         <div className="flex items-center justify-start w-[80%]">
           <h2 className="text-[#DB4444]">$760</h2>
           <div className="ml-2">
           <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
           <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
           <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
           <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
           <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
           </div>
           <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
         </div>
       </div>
     </div>

     {/* box7 */}

     <div className="sm-max:w-[380px] max:w-[280px]  w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
       <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
         <Image
           src="/images/ct6.svg"
           alt="item2"
           width={120}
           height={100}
           className=""
         ></Image>
            <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-3 right-4">
           <FontAwesomeIcon className="text-[16px]" icon={faHeart} />
         </div>
         <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-12 right-4">
           <FontAwesomeIcon className="text-[16px]" icon={faEye} />
         </div>

         <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
           Add to Cart
         </div>
       </div>

       <div className="py-3 pl-1 flex flex-col justify-center gap-2">
         <h1 className="font-poppins font-[500]">GP11 Shooter USB Gamepad</h1>

         <div className="flex items-center justify-start w-[80%]">
           <h2 className="text-[#DB4444]">$560</h2>
           <div className="ml-2">
           <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
           <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
           <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
           <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
           <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
           </div>
           <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
         </div>
       </div>
     </div>

     {/* box8 */}

     <div className="sm-max:w-[380px] max:w-[280px]  w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
       <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
         <Image
           src="/images/ct7.svg"
           alt="item2"
           width={120}
           height={100}
           className=""
         ></Image>
            <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-3 right-4">
           <FontAwesomeIcon className="text-[16px]" icon={faHeart} />
         </div>
         <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-12 right-4">
           <FontAwesomeIcon className="text-[16px]" icon={faEye} />
         </div>

         <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
           Add to Cart
         </div>
       </div>

       <div className="py-3 pl-1 flex flex-col justify-center gap-2">
         <h1 className="font-poppins font-[500]">Quilted Satin Jacket</h1>
         <div className="flex items-center justify-start w-[80%]">
           <h2 className="text-[#DB4444]">$160</h2>
           <div className="ml-2">
           <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
           <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
           <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
           <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
           <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
           </div>
           <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
         </div>
       </div>
     </div>
     </div>
      
  

   </>
  )
}

export default page

