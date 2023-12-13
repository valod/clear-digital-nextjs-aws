'use client'
import style from './styles/logowithcontent.module.css';
import Link from 'next/link';
import Image from "next/image";

const data =[
    {
        bgimg: '',
        logo:  '/vmare.svg',
        heading: '80% vel consequat est. Donec semper neque quam eget.',
        para:  'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
    },
    {
        bgimg: '',
        logo:  '/vmare.svg',
        heading: '80% vel consequat est. Donec semper neque quam eget.',
        para:  'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
    },
    {
        bgimg: '',
        logo:  '/vmare.svg',
        heading: '80% vel consequat est. Donec semper neque quam eget.',
        para:  'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
    },
    {
        bgimg: '/cardsbg.svg',
        logo:   '/vmare.svg',
        heading: '80% vel consequat est. Donec semper neque quam eget.',
        para:  'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
    },
    {
        bgimg: '',
        logo:  '/vmare.svg',
        heading: '80% vel consequat est. Donec semper neque quam eget.',
        para:  'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
    },
];

// ... (previous imports and styles)

// ... (previous imports)

const Logowithcontent = () => {
    return (
      <section className="logowithcontent">
        <div className="container">
          <div className="intro w-full relative flex flex-wrap justify-between mb-[210px]">
            <div className="contentwrapper max-w-[690px]">
              <h6 className="mb-[20px]">Case studies</h6>
              <h3>
                Nisl <span className={`pink ${style.pink}`}>pulvinar</span> consectet nec lipsum dolor
              </h3>
            </div>
            <div className="btnwrapper mt-[50px]">
              <Link href="" className="pink-btn"> 
                View all case studies
              </Link>
            </div>
          </div>
        </div>
  
        {data.map((wrap, index) => (
          <div className="area w-full relative" key={index}>
            <div className={`bgimg ${style.bgimg}`}>
              <Image src={wrap.bgimg} className="w-full h-full object-cover" width={100} height={100}/>
              
             </div>   
            <div className="container">
              <div className={`wrapper ${style.wrapper}w-full relative flex flex-wrap h-[363px]`}>
                <div className="imgwrapper w-[50%]">
                  <div className="logowrapper max-w-[190px] max-h-[69px]">
                    <Image className="w-full h-full object-cover" width={100} height={100} src={wrap.logo} />
                  </div>
                </div>
                <div className="contentwrapper w-[50%]">
                  <div className="content max-w-[570px]">
                    <h6 className={`heading ${style.heading}`}>{wrap.heading}</h6>
                    <p className={`para ${style.para}`}>{wrap.para}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  };
  
  export default Logowithcontent;
  
  