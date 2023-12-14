import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className='cta flex items-center min-h-[1090px]'>
      <div className='bg-img dark__overlay'>
        <Image src="/speaker.svg" alt='image' height={100} width={100} className='w-full h-full object-cover' />
      </div>
      <div className='container'>
        <div className="content relative max-w-[1170px]">

          <h2 className='h1 mb-[20px]'>Over 100 awards.</h2>
          <h6 className='text-white mb-[30px]'>The Clear Digital Velocity Workshops is our unique and dynamic methodology that flips the traditional agency models by transforming project discovery conversations into focused project planning and road mapping exercises.</h6>
          <div>
            <Link className="pink-btn" href="#">View our awards</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Cta;