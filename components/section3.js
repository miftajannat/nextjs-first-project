import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Author from "./_child/author";



export default function section3() {
    return (
      <section className="container mx-auto md:px-20 py-10">
    <h1 className='font-bold text-4xl py-12 text-center'>Most Popular</h1>




        {/* swiper */}
        <Swiper slidesPerView={2}>
<SwiperSlide>{Post()}</SwiperSlide>
<SwiperSlide>{Post()}</SwiperSlide>
<SwiperSlide>{Post()}</SwiperSlide>
<SwiperSlide>{Post()}</SwiperSlide>
<SwiperSlide>{Post()}</SwiperSlide>
<SwiperSlide>{Post()}</SwiperSlide>
<SwiperSlide>{Post()}</SwiperSlide>
        </Swiper>

      </section>
    );
  }




  function Post() {
    return (
      <div className='grid'>
        <div className='images'>
          <a href={"/"}><Image src={"/images/img1.jpg"}alt=''width={600} height={400}
            />
          </a>
        </div>
  
        <div className='info flex flex-col justify-center py-4'>
          <div className='cat'>
            <a href='' className='text-orange-600 hover:text-orange-800'>
              Business Travel
            </a>
            <a href='' className='text-gray-800 hover:text-gray-600'>
              -July 3,2022
            </a>
          </div>
          <div className="title">
            <a
              href={"/"}
              className='text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600'
            >
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.
            </a>
            </div>
            <p className='text-gray-500 py-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              nesciunt esse quis ea soluta cumque delectus molestiae ad.
            </p>
            <Author />
        </div>
      </div>
    );
  }