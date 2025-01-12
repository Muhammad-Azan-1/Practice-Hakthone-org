import Header from "@/components/Header/Header"

import Image from "next/image"
{/* <Image src='/images/icons-phone.svg' alt="phone icon" width={40} height={40}></Image> */}
const Contact = () => {
  return (
    <>
    <Header />
    <div className="w-full h-auto ">

    <div className="w-full flex  flex-row justify-start mt-14 sm:mt-20 ">
      <div className="w-[280px] flex pl-12 lg:pl-24 min2:pl-36  justify-start ">
      <p><span className="pr-2 text-[14px] text-gray-600">Home</span>/<span className="pl-2">Contact</span> </p>
      </div>
    </div>
      
      <div className="flex flex-col lg:flex-row justify-center gap-x-8 items-center h-auto mt-16 w-full ">

      <div className="w-[90%] lg:w-[340px] lg:h-[430px] p-6 lg:p-8 flex justify-evenly  lg:justify-start flex-col sm:flex-row lg:flex-col bg-white shadow-md mb-1">
        <div className="flex flex-col lg:p-0 pr-8 gap-y-4">
          <div className="flex items-center">
            <Image src='/images/icons-phone.svg' alt="phone icon" width={40} height={40}></Image>
            <p className="font-[500] pl-4">Call To Us</p>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>

        </div>

        <div className="w-full sm:w-auto lg:w-full  my-[28px] flex justify-center">
        <div className="w-full sm:w-auto lg:w-[100%] border-[1px] border-black ">
        </div>
        </div>

        <div>
        <div className="flex flex-col gap-y-4 sm:pl-10 lg:pl-0 ">
          <div className="flex  items-center">
            <Image src='/images/icons-mail.svg' alt="phone icon" width={40} height={40}></Image>
            <p className="font-[500] pl-4">Write to us</p>
            </div>
           
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          

        </div>

        </div>
      </div>




      <div className="bg-white w-[90%] lg:w-[600px] min2:w-[800px] px-5 sm:px-8 shadow-md mt-6  lg:mt-0 h-auto sm:h-[430px] ">
         <div className="w-full  sm:justify-between flex-col sm:flex-row  pt-10 flex">
       <input type="text" className="w-full mb-5 sm:mb-0 sm:w-[32%] lg:w-[170px] min2:w-[235px] h-[50px] p-4 pr-1 placeholder:text-gray-600 bg-[#F5F5F5] rounded-[5px]" placeholder="Your Name"/>
       <input type="text" className="w-full mb-5 sm:mb-0 sm:w-[32%] lg:w-[170px] min2:w-[235px] h-[50px] p-4 pr-1 placeholder:text-gray-600 bg-[#F5F5F5] rounded-[5px]" placeholder="Your Email"/>
       <input type="text" className="w-full sm:w-[32%] lg:w-[170px] min2:w-[235px] h-[50px] p-4 pr-1 placeholder:text-gray-600 bg-[#F5F5F5] rounded-[5px]" placeholder="Your Phone"/>
         </div>

         <div className="mt-8">
         <textarea name="" id="" className="bg-[#F5F5F5] w-full h-[210px] rounded-[5px]"></textarea>
         </div>

       <div className="flex justify-end mt-2">
          <button className="rounded-[5px] py-3 px-7 text-white bg-[#DB4444]">Send Massage</button>
         </div>
      </div>
      </div>


     



    </div>
    {/* <Footer /> */}
    </>
  )
}

export default Contact;












