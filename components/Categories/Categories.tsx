import Image from "next/image";
import Button from "../Button/Button";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {  GlobalType} from "../Utils/Helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar , faEye , faHeart } from "@fortawesome/free-solid-svg-icons";

const Categories = async() => {


  const query = `
  *[_type == "product" && "women's clothing" in tags  ]{
       _id,
          name,
          price,
          discountPercentage,
          tags,
          "imageUrl": image.asset->url
        }`

        const response  : GlobalType[] = await client.fetch(query)
  return (
    <>
    <div className=" w-full h-auto  flex flex-col sm:flex-row px-4 lg:px-14 pt-16">
      <div className="flex w-[100%]  min-3:w-auto md:w-[400px] shrink-0 flex-wrap flex-col items-center sm:items-start sm:justify-end md:justify-between">
        <div className="border-l-[15px]  h-[30px] border-[#DB4444] rounded-t-[5px] rounded-b-[5px] overflow-hidden">
        {response.map((product)=>(<h3 key={product.id} className="ml-4 mt-1 font-poppins capitalize tracking-wider text-[#DB4444]">{product.tags[0]}</h3>)) }
        </div>

        <div className="text-[25px] text-center sm:text-left w-auto sm:w-[350px] mt-4 md:text-[36px] font-poppins">
          <h1>Browse By Category</h1>
        </div>
      </div>

      <div className="hidden sm:flex justify-end mt-5 sm:mt-0 sm:w-[90%] items-end ">
          <div className="flex justify-between items-end w-[130px]  md:w-[110px] mb-2 ">
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


      <div className="w-full h-auto pt-8 px-4 lg:px-8 xl:px-10 flex items-center max:justify-center max:gap-16 max-733:gap-[48px] gap-y-12 justify-between flex-wrap">

      {/* images card */}
      {response.map((product:GlobalType)=>(
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
                    <h2 className="text-[#DB4444]">${product.price}</h2>
                    {/* <h2 className="line-through ml-4 text-gray-500">{product.discountPercentage}</h2> */}
                  </div>
      
                  <div className="flex">
                    <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
                    <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
                    <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
                    <FontAwesomeIcon className={`${product.price === 12.99 ? 'text-gray-500' : 'text-[#FFAD33]'} ml-1 `} icon={faStar} />
                    <FontAwesomeIcon className={`${product.price === 12.99 || product.price === 9.85 || product.price === 10.99 ? 'text-gray-500' : 'text-[#FFAD33]'} ml-1 `} icon={faStar} />
                    <h3 className="text-gray-500 mb-2 ml-1 ">(65)</h3>
                  </div>
                </div>
              </div>
              ))}
              </div>
      

                <div className="mt-14"> 
                <Button/>
                </div>
     
      
    </>
  );
};

export default Categories;
