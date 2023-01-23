import Image from "next/image";
import Author from "./_child/author";


export default function Section4() {
  return (
    <section className='container mx-auto md:px-20 py-16'>
      <div className='grid lg:grid-cols-2'>
        <div className='item'>
          <h1 className='font-bold text-4xl py-12 '>Business</h1>
          <div className='flex flex-col gap-6'>
            {/* posts */}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            </div>
        </div>
        <div className='item'>
        <h1 className='font-bold text-4xl py-12 '>Travel</h1>
        <div className='flex flex-col gap-6'>
            {/* posts */}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            </div>
             </div>
      </div>
    </section>
  );
}




function Post(){
    return (
    <div className="flex gap-5">
<div className="image flex flex-col justify-start">
<a href={"/"}><Image src={"/images/img1.jpg"}alt='' className='rounded'width={500} height={350}
          />
        </a>
</div>
<div className="info flex flex-col justify-center">
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
            className='text-xl font-bold text-gray-800 hover:text-gray-600'
          >
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.
          </a>
          </div>
          <Author />
</div>
    </div>
        )
}