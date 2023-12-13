import style from './styles/footercta.module.css';
import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className='cta flex items-center min-h-[1090px]'>
      <div className='bg-img dark__overlay'>
        <Image src="/service-detail/workshop.png" alt='image' height={1600} width={1090} className='w-full h-full object-cover' />
      </div>
      <div className='container'>
        <div className="content relative max-w-[1410px]">

          <h2 className='h1 mb-[20px]'>Velocity Workshop<sup>TM</sup></h2>
          <h6 className='text-white mb-[30px]'>The Clear Digital Velocity Workshops is our unique and dynamic methodology that flips the traditional agency models by transforming project discovery conversations into focused project planning and road mapping exercises.</h6>
          <div>
            <Link className="pink-btn" href="#">Learn more</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Cta;