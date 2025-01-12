import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header/Header'

const CartPage = () => {
    return (
        <>
        <Header />
        <div className="w-full flex  flex-row justify-start mt-10 min-0:mt-14 sm:mt-20 ">
      <div className="w-[280px] flex pl-12 lg:pl-24 min2:pl-36  justify-start ">
      <p><span className="pr-2 text-[14px] text-gray-600">Home</span>/<span className="pl-2">Cart</span> </p>
      </div>
    </div>

            <div className="mt-28 px-10 min2:px-28">
                {/* Table Headers */}
                <div className="flex shadow-md  bg-white h-[72px] items-center justify-between text-gray-600 mb-16 font-semibold">
                    <h1 className="text-sm lg:text-base w-1/4 text-center">Product</h1>
                    <h1 className="text-sm lg:text-base w-1/4 text-center">Price</h1>
                    <h1 className="text-sm lg:text-base w-1/4 text-center">Quantity</h1>
                    <h1 className="text-sm lg:text-base w-1/4 text-center">Subtotal</h1>
                </div>

                {/* Product Row 1 */}
                <div className="flex  bg-white h-[72px] overflow-hidden shadow-md flex-row items-center justify-between  px-1  gap-x-7 gap-4  gap-4 lg:gap-8 mb-16  pb-4">
                    <div className="flex flex-col items-center w-1/4">
                        <Image
                            src="/images/moniter-icon.png"
                            alt="pc-icon"
                            width={54}
                            height={54}
                            className="w-12 h-12"
                        />
                        <span className="text-sm lg:text-base">LCD Monitor</span>
                    </div>
                    <div className="flex flex-col items-center w-1/4">
                        <span className="text-sm lg:text-base">$650</span>
                    </div>
                    <div className="flex flex-col items-center w-1/4">
                        <Image
                            src="/images/quantity1.png"
                            alt="quantity-icon"
                            width={72}
                            height={44}
                            className="w-16 h-auto"
                        />
                    </div>
                    <div className="flex flex-col items-center w-1/4">
                        <span className="text-sm lg:text-base">$650</span>
                    </div>
                </div>

                {/* Product Row 2 */}
                <div className="flex  bg-white h-[72px] overflow-hidden shadow-md flex-row items-center justify-between px-1  gap-x-7 gap-4 lg:gap-8 mb-6  pb-4">
                    <div className="flex flex-col items-center w-1/4">
                        <Image
                            src="/images/gamepad-icon.png"
                            alt="gamepad-icon"
                            width={54}
                            height={54}
                            className="w-12 h-12"
                        />
                        <span className="text-sm lg:text-base">H1 Gamepad</span>
                    </div>
                    <div className="flex flex-col items-center w-1/4">
                        <span className="text-sm lg:text-base">$650</span>
                    </div>
                    <div className="flex flex-col items-center w-1/4">
                        <Image
                            src="/images/quantity2.png"
                            alt="quantity-icon"
                            width={72}
                            height={44}
                            className="w-16 h-auto"
                        />
                    </div>
                    <div className="flex flex-col items-center w-1/4">
                        <span className="text-sm lg:text-base">$1100</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 lg:gap-8 mt-6 items-center justify-between">
                    <button className="w-[120px] py-1 min-0:py-0 min-0:w-[218px] h-[35px] min-0:h-[58px] border border-black rounded-[5px] text-sm lg:text-base">
                        Return To Shop
                    </button>
                    <button className="w-[120px] h-[35px] min-0:py-0 py-1 min-0:w-[195px] min-0:h-[56px] border border-black rounded-[5px] text-sm lg:text-base">
                        Update Cart
                    </button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-16 px-10 min2:px-28 gap-6">

                {/* Coupon Section */}
                <div className="flex flex-row items-center justify-center gap-4 w-full md:w-[450px]">
                    <button className="w-[120px] h-[35px] min-0:w-[300px] min-0:h-[56px] border border-black rounded-[5px] ">Coupon Code</button>
                    <button className="w-[120px] h-[35px] min-0:w-[211px] min-0:h-[56px] bg-[#DB4444] text-[#FAFAFA] rounded-[5px]">Apply Coupon</button>
                </div>

                {/* Cart Total Section */}
                <div className="w-full md:w-[470px] h-auto border border-black rounded-[5px] p-6">
                    <h1 className="font-semibold text-lg mb-6">Cart Total</h1>

                    {/* Subtotal Row */}
                    <div className="flex items-center justify-between text-sm mb-2">
                        <h3 className="text-gray-700">Subtotal</h3>
                        <span className="font-semibold text-gray-900">$1750</span>
                    </div>

                    <div className="w-full mb-4">
                        <div className="border-b">

                        </div>
                    </div>

                    {/* Shipping Row */}
                    <div className="flex items-center justify-between text-sm mb-2">
                        <h3 className="text-gray-700">Shipping</h3>
                        <span className="font-semibold text-gray-900">Free</span>
                    </div>

                    <div className="w-full mb-4">
                        <div className="border-b">

                        </div>
                    </div>

                    {/* Total Row */}
                    <div className="flex items-center justify-between text-sm mb-2">
                        <h3 className="text-gray-700">Total</h3>
                        <span className="font-semibold text-gray-900">$1750</span>
                    </div>

                    <div className="w-full mb-4">
                        <div className="border-b">

                        </div>
                    </div>
                    {/* Checkout Button */}
                    <div className="flex items-center justify-center">
                        <Link href={"/checkout"}>
                            <button className="w-[260px] h-[56px] mt-5 md:py-3 bg-[#DB4444] text-[#FAFAFA] rounded-[5px] font-semibold">
                                Proceed to Checkout
                            </button>
                        </Link>
                    </div>
                </div>

            </div>



        </>
    )
}

export default CartPage