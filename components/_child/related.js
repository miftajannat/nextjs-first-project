import Image from 'next/image'
import Author from './author'

export default function related(){
  return (
    <div>
      <section className="pt-20">
      <h1 className='font-bold text-3xl py-10'>Travel</h1>

      <div className="flex flex-col gap-10">
        {post()}
        {post()}
        {post()}
        {post()}
        

      </div>


      </section>
    </div>
  )
}




function post(){
  return(
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
<a href={"/"}><Image src={"/images/img1.jpg"}alt='' className='rounded'width={300} height={250}
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


