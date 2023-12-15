import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className='cta set-2 flex items-center min-h-[1090px] laptop:min-h-[990px] tablet:min-h-[890px] md:min-h-[739px]'>
      <div className='bg-img dark__overlay semi_black'>
        <Image src="/speaker.svg" alt='image' height={100} width={100} className='w-full h-full object-cover' />
      </div>
      <div className='container'>
        <div className="content relative max-w-[1170px]">

          <h2 className='h1 mb-[20px]'>Over 100 awards <span className="circle">.</span></h2>
          <p className='text-white mb-[30px] max-w-[810px] font-normal'>The Clear Digital Velocity Workshops is our unique and dynamic methodology that flips the traditional agency models by transforming project discovery conversations into focused project planning and road mapping exercises.</p>
          <div>
            <Link className="pink-btn" href="#">View our awards</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Cta;