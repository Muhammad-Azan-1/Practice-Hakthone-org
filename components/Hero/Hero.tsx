import Link from 'next/link'
import Image from 'next/image';


 const Hero = () => {
  return (
    <>
    <div className="relative w-full h-[410px]  flex flex-row max2:h-auto max2:flex-col justify-center gap-[40px] xl:gap-[60px] max:gap-[30px] max2:gap-[10px] items-center max2:px-0 max:px-2 px-4">
        <div className='w-[200px] max:w-[250px]  max2:h-[50px] flex flex-col max2:w-full max2:flex-row max2:items-center items-end max2:border-b-[1px] max2:border-gray-600'>
          <div className='flex w-[190px] max:w-[145px]  h-[80%] max2:h-full flex-col max2:w-full max2:justify-between max2:flex-row max:px-1  max2:items-center  justify-center gap-4 xl: '>
          <Link className='font-poppins max2:hidden ' href=''>Woman&rsquo;s Fashion</Link> 
          <Link className='font-poppins max2:hidden'  href=''>Men&rsquo;s Fashion</Link>
          <Link className='font-poppins '  href=''>Electronics</Link>
          <Link className='font-poppins max2:hidden'  href=''>Home & Lifestyle</Link>
          <Link className='font-poppins '  href=''>Medicine</Link>
          <Link className='font-poppins max-733:hidden'  href=''>Sports & Outdoor</Link>
          <Link className='font-poppins hidden min-2:inline-block'  href=''>Baby&rsquo;s & Toys</Link>
          <Link className='font-poppins hidden min-2:inline-block'  href=''>Groceries & Pets</Link>
          <Link className='font-poppins hidden min-2:inline-block'  href=''>Health & Beauty</Link>
          <Link className='font-poppins inline-block min-2:hidden'  href=''>Sports</Link>
          <Link className='font-poppins inline-block min-2:hidden'  href=''>Beauty</Link>
          <Link className='font-poppins inline-block min-2:hidden'  href=''>Pets</Link>
          </div>
        </div>

        <div className='flex flex-col h-full max2:hidden'>
        <div className='border-r-[1px] h-[95%]  border-r-[grey] '></div>
        </div>

        <div className=' max2:w-[100%] max:w-[1150px]'>
          <Image
          src='/images/hero.svg'
          alt='hero image'
          width={900}
          height={350}
          className='max:w-[100%] max2:w-full'
          ></Image>
        </div>
    </div>
    </>
  )

}

export default Hero;
