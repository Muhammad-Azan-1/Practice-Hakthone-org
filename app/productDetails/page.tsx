import React from 'react'

import Image from "next/image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Header from '@/components/Header/Header';


const ProductDetailPage = () => {
    return (
        <>
        <Header />
            <div className="container mx-auto px-4 lg:px-12">
                <h1 className="text-sm lg:text-base mt-10 lg:mt-28">
                    Home / Gaming / Havic HV G-92 Gamepad
                </h1>

                <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-evenly mt-8 lg:mt-16 gap-8">
                    {/* Sidebar Thumbnails */}
                    <div className="flex flex-col gap-4">
                        {[1, 2, 3, 4].map((num) => (
                            <div key={num}>
                                <Image
                                    src={`/images/game${num}.svg`}
                                    alt={`game-${num}`}
                                    width={170}
                                    height={138}
                                    className="rounded-md"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Main Image */}
                    <div>
                        <Image
                            src="/images/big-game.svg"
                            alt="game-big"
                            width={500}
                            height={600}
                            className="rounded-lg"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="max-w-md">
                        <h1 className="text-xl lg:text-2xl font-semibold">Havic HV G-92 Gamepad</h1>
                        <div className="flex items-center gap-3 my-4">
                            <Image
                                src="/images/four-star.png"
                                alt="rating"
                                width={100}
                                height={20}
                            />
                            <span className="text-sm">(150 Reviews)</span>
                            <span className="hidden lg:block border-l border-gray-300 h-5"></span>
                            <span className="text-green-500 text-sm">In Stock</span>
                        </div>
                        <p className="text-lg font-semibold">$192.00</p>
                        <p className="mt-4 text-sm lg:text-base">
                            PlayStation 5 Controller Skin High-quality vinyl with air channel adhesive for easy bubble-free install & mess-free removal Pressure sensitive.
                        </p>
                        <div className="border-b my-4"></div>

                        {/* Colors and Sizes */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <span>Colours:</span>
                                <Image
                                    src="/images/two-dot.png"
                                    alt="two-dot"
                                    width={48}
                                    height={20}
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <span>Size:</span>
                                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                    <div
                                        key={size}
                                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-red-500 hover:text-white"
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-4 mt-6">
                            <button className="bg-red-500 text-white px-6 py-2 rounded">
                                Buy Now
                            </button>
                            <div className="w-8 h-8 border flex items-center justify-center rounded">
                                <Image
                                    src="/images/heart.svg"
                                    alt="wishlist"
                                    width={20}
                                    height={18}
                                />
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div className="border rounded-md mt-6 p-4 space-y-4">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/images/delivery.png"
                                    alt="delivery"
                                    width={40}
                                    height={40}
                                />
                                <div>
                                    <h2 className="font-semibold">Free Delivery</h2>
                                    <p className="text-sm">Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <div className="border-b"></div>
                            <div className="flex items-center gap-4 mt-4">
                                <Image
                                    src="/images/load.png"
                                    alt="return"
                                    width={40}
                                    height={40}
                                />
                                <div>
                                    <h2 className="font-semibold">Return Delivery</h2>
                                    <p className="text-sm">Free 30 Days Delivery Returns. Details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           


            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mx-5 px-10 lg:px-20  sm:mt-14 pt-12 mt-24">
      <div className="border-l-[15px]  h-[30px] border-[#DB4444] rounded-t-[5px] rounded-b-[5px] overflow-hidden">
            <h3 className="ml-4 mt-1 font-poppins text-[#DB4444]">Related Item</h3>
          </div>
            </div>

      <div className="w-full h-auto pt-14 flex items-center gap-10 justify-center flex-wrap">
        {/* Image box1 */}
        <div className=" max:w-[280px] w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
          <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center cursor-pointer ">
            <Image
              src="/images/item1.svg"
              alt="item2"
              width={150}
              height={100}
              className="w-[170px] sm:w-[150px]"
            ></Image>
            <div className="absolute px-2 py-1 text-[14px] bg-[#DB4444] text-white rounded-[5px] top-3 left-4">
              -40%
            </div>
            <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
              Add to Cart
            </div>
          </div>

          <div className="py-3 pl-1 flex flex-col justify-center items-center sm:items-start gap-2">
            <h1 className="font-poppins font-[500]">HAVIT HV-G92 Gamepad</h1>

            <div className="flex">
              <h2 className="text-[#DB4444]">$120</h2>
              <h2 className="line-through ml-4 text-gray-500">$160</h2>
            </div>

            <div className="flex">
              <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
            </div>
          </div>
        </div>

        {/* image box2 */}
        <div className=" max:w-[280px]  w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
          <div className="relative cursor-pointer   w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
            <Image
              src="/images/item2.svg"
              alt="item2"
              width={170}
              height={100}
              className="w-[170px] sm:w-[150px]"
            ></Image>
            <div className="absolute px-2 py-1 text-[14px] bg-[#DB4444] text-white rounded-[5px] top-3 left-4">
              -35%
            </div>
            <div className="absolute font-poppins bg-black bottom-[0]   rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
              Add to Cart
            </div>
          </div>

          <div className="py-3 pl-1 flex flex-col justify-center items-center sm:items-start gap-2">
            <h1 className="font-poppins font-[500]">AK-900 Wired Keyboard</h1>

            <div className="flex">
              <h2 className="text-[#DB4444]">$960</h2>
              <h2 className="line-through ml-4 text-gray-500">$1160</h2>
            </div>

            <div className="flex">
              <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
            </div>
          </div>
        </div>

        {/* box image3 */}
        <div className="max:w-[280px]  w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
          <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
            <Image
              src="/images/item3.svg"
              alt="item2"
              width={170}
              height={100}
              className=""
            ></Image>
            <div className="absolute px-2 py-1 text-[14px] bg-[#DB4444] text-white rounded-[5px] top-3 left-4">
              -30%
            </div>
            <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
              Add to Cart
            </div>
          </div>

          <div className="py-3 pl-1 flex flex-col justify-center gap-2">
            <h1 className="font-poppins font-[500]">IPS LCD Gaming Monitor</h1>

            <div className="flex">
              <h2 className="text-[#DB4444]">$370</h2>
              <h2 className="line-through ml-4 text-gray-500">$400</h2>
            </div>

            <div className="flex">
              <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
            </div>
          </div>
        </div>

        {/* box image4 */}
        <div className="max:w-[280px]  w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
          <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
            <Image
              src="/images/item4.svg"
              alt="item2"
              width={120}
              height={100}
              className=""
            ></Image>
            <div className="absolute px-2 py-1 text-[14px] bg-[#DB4444] text-white rounded-[5px] top-3 left-4">
              -40%
            </div>
            <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
              Add to Cart
            </div>
          </div>

          <div className="py-3 pl-1 flex flex-col justify-center gap-2">
            <h1 className="font-poppins font-[500]">S-Series Comfort Chair </h1>

            <div className="flex">
              <h2 className="text-[#DB4444]">$120</h2>
              <h2 className="line-through ml-4 text-gray-500">$160</h2>
            </div>

            <div className="flex">
              <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
            </div>
          </div>
        </div>
      </div>
    
        </>
    )
}

export default ProductDetailPage