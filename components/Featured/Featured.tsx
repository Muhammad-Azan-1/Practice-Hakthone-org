

import Link from "next/link"

const Featured = () => {



  return (
    <>
   <div className="w-full px-4 lg:px-[40px] pt-16">
   <div className="flex w-[100%]  sm:w-auto md:w-[350px] shrink-0 flex-wrap flex-col items-center sm:items-start sm:justify-end md:justify-between">
          <div className="border-l-[15px]  h-[30px] border-[#DB4444] rounded-t-[5px] rounded-b-[5px] overflow-hidden">
            <h3 className="ml-4 mt-1 font-poppins text-[#DB4444]">Our products</h3>
          </div>

          <div className="text-[25px] mt-4 md:text-[36px] font-poppins">
            <h1>New Arrival</h1>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-x-4 min2:gap-x-6  h-auto lg:h-[600px] mt-6 ">
            <div className="bg-black text-white rounded-[5px]  bg-[url('/images/playstation.webp')] flex items-end bg-contain bg-no-repeat bg-bottom h-[590px] max-2:h-[450px] min2:w-[570px] lg:w-[450px] w-full md:w-[700px]">

              <div className="w-[250px] ml-8 mb-8 flex flex-col max-2:gap-y-2 gap-y-3">
              <h1 className="text-[24px] font-[600]">PlayStation 5</h1>
              <p>Black and White version of the PS5 coming out on sale.</p>

              <Link href='/' className="hover:underline">Shop Now</Link>
              </div>
            
            </div>

            <div className="h-auto lg:h-[590px] mt-3 lg:mt-0 min3:h-[600px] justify-center gap-y-2 min3:gap-y-7 items-center lg:items-start flex flex-col w-full lg:w-[470px] min3:w-[580px]">
              <div className="bg-black text-white   rounded-[5px] flex justify-end items-end w-full md:w-[700px] lg:w-full bg-[url('/images/women.jpeg')] bg-no-repeat bg-left bg-contain h-[350px] lg:h-[190px] min3:h-[285px]">

              <div className="w-[250px] mr-4 mb-6   flex flex-col gap-y-3">
              <h1 className="text-[24px] font-[600]">Women’s Collections</h1>
              <p>Featured woman collections that give you another vibe.</p>

              <Link href='/' className="hover:underline">Shop Now</Link>
              </div>

              </div>

          <div className="flex-col flex justify-between items-center lg:items-start min3:flex-row h-auto w-full min3:w-[580px]">
          <div className="h-[430px] lg:h-[190px] min3:h-[270px] flex items-end text-white  rounded-[5px]  w-full md:w-[700px] lg:w-full min3:w-[280px] bg-[url('/images/speaker3.svg')] bg-contain bg-no-repeat bg-right min3:bg-center  bg-black">
          <div className="w-full lg:mb-4 mb-8 ml-8 min3:ml-4 justify-end lg:justify-center h-full min3:h-auto flex flex-col ">
              <h1 className="text-[24px] font-[600]">Speakers</h1>
              <p>Amazon wireless speakers</p>

              <Link href='/' className="hover:underline mt-2">Shop Now</Link>
              </div>
            </div>
         
            <div className="h-[430px] lg:h-[190px] min3:h-[270px] mt-2 min3:mt-0 flex items-end  text-white  rounded-[5px] w-full md:w-[700px] lg:w-full min3:w-[280px] bg-[url('/images/perfume.png')] bg-contain bg-no-repeat bg-right min3:bg-center bg-black">
            <div className="w-full mb-6 lg:mb-4 ml-8 min3:ml-4 justify-end lg:justify-center h-full min3:h-auto  flex flex-col ">
              <h1 className="text-[24px] font-[600]">Perfume</h1>
              <p>GUCCI INTENSE OUD EDP</p>

              <Link href='/' className="hover:underline mt-2">Shop Now</Link>
              </div>
            </div>
            
          </div>
            </div>
        </div>
   </div>
    
   
    </>
  )
}

export default Featured
