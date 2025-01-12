import Header from "@/components/Header/Header";
import Hero from '@/components/Hero/Hero'
import Todays from "@/components/Todays/Todays";
import ThisMonth from "@/components/ThisMonth/ThisMonth";
import Categories from "@/components/Categories/Categories";
import Speaker from "@/components/Speaker/Speaker";
import OurProducts from '@/components/OurProducts/OurProducts'
import Featured from "@/components/Featured/Featured";
import Service from "@/components/CustomerServices/CustomerServices";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
   <>
    <Header />
    <Hero />
    <Todays />
    <Categories />
    <ThisMonth/>
    <Speaker />
    <OurProducts />
    <Featured/>
    <Service />
    <Footer />
    
   </>
  );
}