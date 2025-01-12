import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faHeart,faEye } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import { GlobalType } from "../Utils/Helper";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
const ThisMonth = async() => {
  
  const query = `
  *[_type == "product" && "jewelery" in tags  ]{
     _id,
        name,
        price,
        discountPercentage,
        tags,
        "imageUrl": image.asset->url
      }`

      const response : GlobalType[] = await client.fetch(query)
 
  return (
    <>
      {/* text div */}
      <div className=" w-full h-auto  flex flex-col sm:flex-row px-4 lg:px-14 pt-16">
        {/* <div className="w-full flex"> */}
        <div className="flex w-[100%]  sm:w-auto md:w-[450px] shrink-0 flex-wrap flex-col items-center sm:items-start sm:justify-end md:justify-between">
          <div className="border-l-[15px]  h-[30px] border-[#DB4444] rounded-t-[5px] rounded-b-[5px] overflow-hidden">
          {response.map((product)=>(<h3 key={product.id} className="ml-4 mt-1 font-poppins capitalize tracking-wider text-[#DB4444]">{product.tags[0]}</h3>)) }
          </div>

          <div className="text-[25px] mt-4 md:text-[36px] font-poppins">
            <h1>Best Selling Products</h1>
          </div>
        </div>

        {/* </div> */}

        <div className="hidden sm:flex justify-end mt-5 sm:mt-0 sm:w-[100%] items-end ">
          <div className="flex justify-end items-end  w-[220px] mb-2 ">
           <button  className="px-8 py-3 rounded-[5px] text-[14px] sm:text-[15px] text-white bg-[#DB4444]"
    >View all</button>
          </div>
        </div>
      </div>

      {/* items */}

      <div className="w-full h-auto pt-8 px-4 lg:px-8 xl:px-10 flex items-center max:justify-center max:gap-16 max-733:gap-[48px] gap-y-12 justify-between flex-wrap">
        {/* Image box1 */}
        {
          
          
          response.map((product:GlobalType)=>(
          <div key={product.id} className="sm-max:w-[380px] max:w-[280px] w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
          <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center cursor-pointer ">
            <Image
              src={urlFor(product.imageUrl).url()}
              alt="item2"
              width={150}
              height={100}
              className={` ${product.price === 695 || product.price === 9.99 ? 'w-[100px]' : 'w-[170px] sm:w-[150px]'}`}
            ></Image>
            <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-3 right-4">
            <FontAwesomeIcon className="text-[16px]" icon={faHeart}/>
            </div>
            <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-12 right-4">
            <FontAwesomeIcon className="text-[16px]" icon={faEye}/>
            </div>
            <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
              Add to Cart
            </div>
          </div>

          <div className="py-3 pl-1 flex flex-col justify-center items-center sm:items-start gap-2">
            <h1 className="font-poppins font-[500]">{product.name}</h1>

            <div className="flex">
              <h2 className="text-[#DB4444]">{product.price}</h2>
              <h2 className="line-through ml-4 text-gray-500">$160</h2>
            </div>

            <div className="flex">
              <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className={`${product.price === 10.99 ? 'text-gray-500' : 'text-[#FFAD33]'} ml-1 `} icon={faStar} />
              <FontAwesomeIcon className={`${product.price === 9.99 || product.price === 695 || product.price === 10.99 ? 'text-gray-500' : 'text-[#FFAD33]'} ml-1 `} icon={faStar} />
              <h3 className="text-gray-500 mb-2 ml-1 ">(65)</h3>
            </div>
          </div>
        </div>
        ))}

        {/* image box2 */}
       
        
      </div>
      <div className="w-full inline-block sm:hidden text-center">
        <Button />
        </div>
        
    </>
  
  );
  
}

export default ThisMonth;


// <div className="sm-max:w-[380px] max:w-[280px]  w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
// <div className="relative cursor-pointer   w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
//   <Image
//     src="/images/product4.svg"
//     alt="item2"
//     width={170}
//     height={100}
//     className="w-[170px] sm:w-[150px]"
//   ></Image>
//    <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-3 right-4">
//   <FontAwesomeIcon className="text-[16px]" icon={faHeart}/>
//   </div>
//   <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-12 right-4">
//   <FontAwesomeIcon className="text-[16px]" icon={faEye}/>
//   </div>
//   <div className="absolute font-poppins bg-black bottom-[0]   rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
//     Add to Cart
//   </div>
// </div>

// <div className="py-3 pl-1 flex flex-col justify-center items-center sm:items-start gap-2">
//   <h1 className="font-poppins font-[500]">Gucci duffle bag</h1>

//   <div className="flex">
//     <h2 className="text-[#DB4444]">$960</h2>
//     <h2 className="line-through ml-4 text-gray-500">$1160</h2>
//   </div>

//   <div className="flex">
//     <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
//     <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//     <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//     <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//     <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//     <h3 className="text-gray-500 mb-2 ml-1 ">(65)</h3>
//   </div>
// </div>
// </div>

// {/* box image3 */}
// <div className="max:w-[280px] hidden sm:inline-block  w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
// <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
//   <Image
//     src="/images/product1.svg"
//     alt="item2"
//     width={170}
//     height={100}
//     className=""
//   ></Image>
//   <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-3 right-4">
//   <FontAwesomeIcon className="text-[16px]" icon={faHeart}/>
//   </div>
//   <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-12 right-4">
//   <FontAwesomeIcon className="text-[16px]" icon={faEye}/>
//   </div>
//   <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
//     Add to Cart
//   </div>
// </div>

// <div className="py-3 pl-1 flex flex-col justify-center gap-2">
//   <h1 className="font-poppins font-[500]">RGB liquid CPU Cooler</h1>

//   <div className="flex">
//     <h2 className="text-[#DB4444]">$370</h2>
//     <h2 className="line-through ml-4 text-gray-500">$400</h2>
//   </div>

//   <div className="flex">
//     <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
//     <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//     <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//     <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//     <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//     <h3 className="text-gray-500 mb-2 ml-1 ">(65)</h3>
//   </div>
// </div>
// </div>

// {/* box image4 */}
// <div className="max:w-[280px] hidden sm:inline-block w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
// <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
//   <Image
//     src="/images/product2.svg"
//     alt="item2"
//     width={120}
//     height={100}
//     className=""
//   ></Image>
//   <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-3 right-4">
//   <FontAwesomeIcon className="text-[16px]" icon={faHeart}/>
//   </div>
//   <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-12 right-4">
//   <FontAwesomeIcon className="text-[16px]" icon={faEye}/>
//   </div>
//   <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white  flex justify-center items-center h-[35px]">
//     Add to Cart
//   </div>
// </div>

// <div className="py-3 pl-1 flex flex-col justify-center gap-2">
//   <h1 className="font-poppins font-[500]">Small BookSelf</h1>

//   <div className="flex">
//     <h2 className="text-[#DB4444]">$120</h2>
//     <h2 className="line-through ml-4 text-gray-500">$160</h2>
//   </div>

//   <div className="flex">
//     <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
//     <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//     <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//     <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//     <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
//     <h3 className="text-gray-500 mb-2 ml-1 ">(65)</h3>
//   </div>
// </div>
// </div>