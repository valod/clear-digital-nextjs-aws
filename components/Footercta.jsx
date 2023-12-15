import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterCta = ({ props }) => {
  return (
    <section className='footerCta set-2 grid__parallax height__full-nav '>
      <div className='bg-img dark__overlay'>
        <Image src="/Image.svg" alt='image' height={100} width={100} className='w-full h-full object-cover' />
      </div>
      <div className='container'>
        <div className="">
          <h6 className='text-white font-normal mb-[20px]'>Lorem ipsum dolor</h6>
          <h2 className='h1 text-white mb-[30px]'>Let&#39;s talk <span className="circle">.</span></h2>
          <div>
            <Link className="pink-btn" href="#">Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default FooterCta;