import Format from '../../layout/format'
import Author from '../../components/_child/author'
import Image from 'next/image'
import Related from '../../components/_child/related'

export default function page() {
  return (
    <Format>
      <section className='container mx-auto md:px-2 py-16 w-1/2'>
        <div className='flex justify-center'>
            <Author/>
        </div>

        <div className='post py-10'>
            <h1 className='font-bold text-4xl text-center pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing veniam.</h1>

            <p className='text-gray-500 text-xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus, soluta accusamus consequuntur architecto reprehenderit.</p>

            <div className="py-10">
               <Image src={"/images/author.jpg"} alt='' width={900} height={900}/> 
            </div>

            <div className='text-gray-600 text-lg flex flex-col gap-4'>

            <p className='text-gray-600 text-lg flex flex-col gap-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus, soluta accusamus consequuntur architecto reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem qui odio distinctio eaque in hic quas culpa rerum, aperiam magni ad, voluptatibus recusandae? Aspernatur in labore laudantium laboriosam ea aperiam consequuntur eaque dolore eveniet soluta quis provident, facilis magnam praesentium quasi? Officia doloremque illo adipisci vitae error iusto!</p>

            <p className='text-gray-600 text-lg flex flex-col gap-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus, soluta accusamus consequuntur architecto reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem qui odio distinctio eaque in hic quas culpa rerum, aperiam magni ad, voluptatibus recusandae? Aspernatur in labore laudantium laboriosam ea aperiam consequuntur eaque dolore eveniet soluta quis provident, facilis magnam praesentium quasi? Officia doloremque illo adipisci vitae error iusto!</p>

            <p className='text-gray-600 text-lg flex flex-col gap-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus, soluta accusamus consequuntur architecto reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem qui odio distinctio eaque in hic quas culpa rerum, aperiam magni ad, voluptatibus recusandae? Aspernatur in labore laudantium laboriosam ea aperiam consequuntur eaque dolore eveniet soluta quis provident, facilis magnam praesentium quasi? Officia doloremque illo adipisci vitae error iusto!</p>
            </div>

        </div>

        <Related/>

      </section>
    </Format>
  )
}


