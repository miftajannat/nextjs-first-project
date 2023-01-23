import Image from "next/image";
import Author from "./_child/author";
import SwiperCore, {Autoplay} from "swiper"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';




export default function section1() {

    SwiperCore.use([Autoplay]);
   
    const bg = {
        background: "url('/images/bg.jpg') no-repeat",
        backgroundPosition: "right" 
    }

  return (
    <section className='py-16' style={bg}>
      <div className='container mx-auto md:px-20'>
        <h1 className='font-bold text-4xl pb-12 text-center'>Trending</h1>

        <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 2000 }}
    >
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>


    </Swiper>


        
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className='grid md:grid-cols-2'>
      <div className='image'>
        <a href={"/"}>
          <Image src={"/images/img1.jpg"} alt='' width={600} height={600} />{" "}
        </a>
      </div>
      <div className='info flex justify-center flex-col'>
        <div className='cat'>
          <a href='' className='text-orange-600 hover:text-orange-800'>
            Business Travel
          </a>
          <a href='' className='text-gray-800 hover:text-gray-600'>
            -July 3,2022
          </a>
        </div>
        <div>
          <a
            href={"/"}
            className='text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600'>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.
          </a>
          <p className='text-gray-500 py-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            nesciunt esse quis ea soluta cumque delectus molestiae ad.
          </p>
          <Author />
        </div>
      </div>
    </div>
  );
}
