'use client'
import style from './styles/footercta.module.css';
import Image from "next/image";
import Link from "next/link";

const Footercta = () => {
  return (
    <section className={`${style.footercta} white_square_pattern after:content-[''] after:absolute after:bg-black after:opacity-50 after:z-1 after:left-0 after:w-full after:h-full after:top-0 min-h-[1090px] lg:min-h-[739px]`}>
      <div className={`${style.bgimg} z-0 absolute w-full h-full top-0 left-0`}>
        <Image src="/Image.svg" alt='image' height={100} width={100} className='w-full h-full object-cover' />
      </div>
      <div className="container">
        <div className="text-wrap w-full relative z-2 text-white">
          <span className='subtitle mb-5'>Lorem ipsum dolor</span>
          <h2 className={`h1 ${style.h1}`}>Let&#39;s talk.</h2>
          <div className={`${style.btnwrap}`}>
            <Link className="pink-btn" href="#">Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Footercta;