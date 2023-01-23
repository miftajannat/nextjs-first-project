import Image from "next/image";
import Author from "./_child/author";

export default function section2() {
  return (
    <section className='container mx-auto md:px-20 py-10'>
      <h1 className='font-bold text-4xl py-12 text-center'>Latest Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        </div>
    </section>
  )
}

// create function
function Post() {
  return (
    <div className='item'>
      <div className='images'>
        <a href={"/"}><Image src={"/images/img1.jpg"}alt='' className='rounded'width={500} height={350}
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
            className='text-xl font-bold text-gray-800 hover:text-gray-600'
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
