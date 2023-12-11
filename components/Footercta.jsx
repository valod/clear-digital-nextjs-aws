'use client'
import style from './styles/footercta.module.css';
import Image from "next/image";
import Link from "next/link";

const Footercta = () => {
   return(
    <section className= {`${style.footercta}`}>
      <div className={`${style.bgimg}`}>
        <Image src="/Image.svg" alt='image' height={100} width={100} className='w-full h-full object-cover'/>
      </div>
      <div className="container">
        <div className="text-wrap w-full">
        <p className='subtitle mb-5'>Lorem ipsum dolor</p>
        <h2 className= {`h1 ${style.h1}`}>Let’s talk.</h2>
        <div className={`${style.btnwrap}`}>
           <Link className="btn" href="">Contact us</Link>
        </div>
        </div>
      
      </div>
    </section>
   )
}
export default Footercta;