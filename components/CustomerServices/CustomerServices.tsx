import Image from "next/image"

const Service = () => {
  return (
    <>
    <div className="w-full h-auto pt-24  flex justify-center gap-16 md:gap-5 flex-wrap md:justify-between lg:justify-around px-2 lg:px-0">
      <div className="flex flex-col justify-center gap-4">
        <div className="flex justify-center">
        <Image
        src='/images/Services1.svg'
        alt="services1"
        width={80}
        height={100}
        className="text-center"
        ></Image>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <h1 className="text-[18px] lg:text-[20px] font-[600] font-poppins">FREE AND FAST DELIVERY</h1>
          <h3 className="text-[12px] lg:text-[14.5px] font-poppins">Free delivery for all orders over $140</h3>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4">
        <div className="flex justify-center">
        <Image
        src='/images/Services2.svg'
        alt="services1"
        width={80}
        height={100}
        className="text-center"
        ></Image>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <h1 className="text-[18px] lg:text-[20px] font-[600] font-poppins">24/7 CUSTOMER SERVICE</h1>
          <h3 className="text-[12px] lg:text-[14.5px]  font-poppins">Friendly 24/7 customer support</h3>
        </div>
      </div>



      <div className="flex flex-col justify-center gap-4">
        <div className="flex justify-center">
        <Image
        src='/images/Services3.svg'
        alt="services1"
        width={80}
        height={100}
        className="text-center"
        ></Image>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <h1 className="text-[18px] lg:text-[20px]  font-[600] font-poppins">MONEY BACK GUARANTEE</h1>
          <h3 className="text-[12px] lg:text-[14.5px] font-poppins">We reurn money within 30 days</h3>
        </div>
      </div>
    </div>
    </>
  )
}

export default Service