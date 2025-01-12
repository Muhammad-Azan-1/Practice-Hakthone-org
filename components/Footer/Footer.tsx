import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,faFacebook,faTwitter,faLinkedin
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <div className="w-full h-auto mt-24 bg-black text-white flex justify-center gap-[76px] flex-wrap lg:gap-0 lg:flex-nowrap lg:justify-between  pt-20 pb-12 px-6 lg:px-8 xl:px-10">
        <div>
            <ul className='relative sm-max:text-center w-[100%] flex flex-col justify-center gap-6'>
                <li className='font-[700] text-[24px]'>Exclusive</li>
                <li className='font-[500] text-[20px]'>Subscribe</li>
                <li>Get 10% off your first order</li>
                <li className="">
                    <input 
                    className="w-[230px] bg-transparent border-[2px] border-white rounded-[4px] py-3 pl-4 placeholder:text-[#e7e5e5] placeholder:opacity-[50%] placeholder:font-poppins placeholder:text-[17px]" placeholder="Enter your email" type="text" />
                    <Image
                    src='/images/Vector.svg'
                    alt='image arrow'
                    width={30}
                    height={20}
                    className='absolute bottom-3 right-2'
                    ></Image>
                </li>
            </ul>
        </div>

        <div>
            <ul className='sm-max:text-center w-[100%] flex flex-col justify-center gap-6'>
                <li className='font-[700] text-[24px]'>Support</li>
                <li>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</li>
                <li>exclusive@gmail.com</li>
                <li>+88015-88888-9999</li>
            </ul>
        </div>

        <div>
            <ul className='sm-max:text-center w-[100%] flex flex-col justify-center gap-5'>
                <li className='font-[700] text-[24px]'>Account</li>
                <li>My Account</li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
            </ul>
        </div>

        <div>
            <ul className=' w-[100%] flex flex-col justify-center max2:text-center gap-5'>
                <li className='font-[700] text-[24px]'>Quick Link</li>
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQs</li>
                <li>Contact</li>
            </ul>
        </div>

        <div>
            <ul className=' w-[100%] flex flex-col justify-center gap-8 text-center lg:text-left '>
                <li  className='font-[700] text-[24px]'>Download App</li>
                <li className='text-[#FAFAFA] opacity-[50%]'>Save $3 with App New User Only</li>
            </ul>
            <div className='flex justify-between  mt-4'>
                <Image
                src='/images/QrCode.svg'
                alt='image qr code'
                width={80}
                height={80}
                /> 
                
                <div className='flex flex-col justify-between mr-3'>
                    <div>
                    <Image
                    src='/images/playstore.svg'
                    alt='playstore'
                    width={110}
                    height={110}
                    />
                    </div>

                        <div>
                     <Image
                    src='/images/appstore.svg'
                    alt='appstore'
                    width={110}
                    height={110}
                    />
                    </div>
                </div>
            </div>

            <div className='flex justify-center gap-10 mt-6'>
                <FontAwesomeIcon className='text-white text-[23px]' icon={faFacebook}/>
                <FontAwesomeIcon className='text-white text-[23px]'  icon={faInstagram}/>
                <FontAwesomeIcon className='text-white text-[23px]'  icon={faTwitter}/>
                <FontAwesomeIcon className='text-white text-[23px]'  icon={faLinkedin}/>
            </div>
        </div>
      </div>

      <div className='w-full bg-black h-[60px]'>
            <div className='w-full  border-t-[1px] border-[#cfcfcf] opacity-[50%]'></div>
            <div className='text-[#cfcfcf] opacity-[50%] flex justify-center pt-4 font-poppins'>&copy; Copyright Rimel 2022. All right reserved</div>
        </div>
    </>
  );
};

export default Footer;
