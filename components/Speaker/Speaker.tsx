
const Speaker = () => {
    return (
      <>
        <div className="w-full pb-4 pt-12 flex justify-center">
          <div  className="w-[90%] max-2:h-[650px] h-[700px] sm:h-[850px] lg:h-[500px] bg-black rounded-[5px] flex lg:flex-row flex-col justify-evenly items-center px-4 xl:px-8"  style={{
      background: "linear-gradient(to left, rgba(150, 150, 150, 1), rgba(0, 0, 0, 1))",
    }}>
              <div className="flex flex-col max-2:gap-1 lg:gap-2 mt-10 lg:mt-0 lg:items-start  justify-center ml-0 lg:ml-3 h-[70%] sm:h-[75%] md:h-[55%] lg:h-[80%] w-full lg:w-[380px] text-center lg:text-left">
              <p className="text-[#00FF66] text-[16px] font-[600] mb-3">Categories</p>
          <h1 className="max-2:text-[30px]  text-[35px] sm:text-[45px] xl:text-[48px] w-[100%] lg:w-auto font-[600] text-[#FAFAFA] tracking-[2%] md:tracking-[4%]">
            Enhance Your
   Music Experience
          </h1>
          <div className="mt-4 flex max-2:gap-[20px] gap-[24px] justify-center">
            <div className="max-2:h-[57px] max-2:w-[57px] h-[62px] w-[62px] bg-[#FAFAFA] rounded-full text-[16px] font-[600] text-center flex flex-col justify-center items-center gap-[-1px]">
              <p>23</p>
              <p className="text-[11px]">Hours</p>
            </div>
            <div className="max-2:h-[57px] max-2:w-[57px]  h-[62px] w-[62px] bg-[#FAFAFA] rounded-full text-[16px] font-[600] text-center flex flex-col justify-center items-center gap-[-1px]">
              <p>05</p>
              <p className="text-[11px]">Days</p>
            </div>
            <div className="max-2:h-[57px] max-2:w-[57px] h-[62px] w-[62px] bg-[#FAFAFA] rounded-full text-[16px] font-[600] text-center flex flex-col justify-center items-center gap-[-1px]">
              <p>59</p>
              <p className="text-[11px]">Minutes</p>
            </div>
            <div className="max-2:h-[57px] max-2:w-[57px] h-[62px] w-[62px] bg-[#FAFAFA] rounded-full text-[16px] font-[600] text-center flex flex-col justify-center items-center gap-[-1px]">
              <p>35</p>
              <p className="text-[11px]">Seconds</p>
            </div>
          </div> 
          <div>
          <button className="bg-[#00FF66] w-[155px] h-[50px] rounded-[5px] text-[16px] text-[#FAFAFA] font-[500] mt-10">
            Buy Now!
          </button> 
          </div>
              </div>
  
           <div className="overflow-hidden h-[70%] sm:h-[90%] flex items-center">
           <div className="bg-[url('/images/speaker.svg')] bg-cover  float-right  bg-no-repeat max-2:w-[300px] max-2:h-[170px] w-[400px] h-[230px] sm:w-[560px] sm:h-[330px] md:w-[620px] lg:w-[510px] md:h-[350px] lg:h-[300px] xl:w-[575px] xl:h-[330px] overflow-hidden"></div>
    
              </div> 
  
  
          </div>
        </div>
      </>
    );
  };
  
  export default Speaker;
  