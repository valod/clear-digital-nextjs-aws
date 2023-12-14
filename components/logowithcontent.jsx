'use client'
import style from './styles/logowithcontent.module.css';
import Link from 'next/link';
import Image from "next/image";

const data = [
  {
    logo: '/vmare.svg',
    heading: '80% vel consequat est. Donec semper neque quam eget.',
    para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
    border: true
  },
  {
    logo: '/mcafeewhite.png',
    heading: '80% vel consequat est. Donec semper neque quam eget.',
    para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
    border: true
  },
  {
    logo: '/cisco.svg',
    heading: '80% vel consequat est. Donec semper neque quam eget.',
    para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
    border: true
  },
  {
    bgimg: '/cardsbg.svg',
    logo: '/vmarewhite.svg',
    heading: '80% vel consequat est. Donec semper neque quam eget.',
    para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
    border: false
  },
  {
    bgimg: '',
    logo: '/mcafee_black.png',
    heading: '80% vel consequat est. Donec semper neque quam eget.',
    para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
    border: false
  },
];

// ... (previous imports and styles)

// ... (previous imports)


const Logowithcontent = () => {
  return (
    <section className="logowithcontent pb-0">
      <div className="container">
        <div className="intro w-full relative flex flex-wrap justify-between mb-[210px] laptop:mb-[190px] tablet:mb-[150px] phablet:mb-[130px] sm:mb-[100px]">
          <div className="contentwrapper max-w-[690px]">
            <h6 className="mb-[20px]">Case studies</h6>
            <h3>
              Nisl <span className={`pink ${style.pink}`}>pulvinar</span> consectet nec lipsum dolor
            </h3>
          </div>
          <div className="btnwrapper mt-[50px] sm:mt-[30px]">
            {/* Provide a valid URL or route in href */}
            <Link href="/case-studies" className="pink-btn">
              View all case studies
            </Link>
          </div>
        </div>
      </div>

      {data.map((wrap, index) => (
        <div className={`${wrap.border == true ? `border-t border-gray` : ''}area w-full relative`} key={index}>
          {/* Use wrap.bgimg instead of bgimg */}
          {wrap.bgimg && (
            <div className={`bgimg ${style.bgimg}`}>
              <Image src={wrap.bgimg} className="w-full h-full object-cover" width={100} height={100} />
            </div>
          )}

          <div className="container">
            <div className={`wrapper ${style.wrapper} w-full relative flex items-center flex-wrap h-[363px]  md:h-[310px]`}>
              <div className="imgwrapper w-[50%] pl-[120px] laptop:pl-[60px] largedesktop:pl-[120px] tablet:pl-[50px] phablet:pl-[30px] sm:w-[100%] pl-[20px] ">
                <div className="logowrapper max-w-[190px] max-h-[69px]">
                  <Image className="w-full h-full object-cover" width={100} height={100} src={wrap.logo} />
                </div>
              </div>
              <div className="contentwrapper w-[50%] sm:w-[100%]">
                <div className={`content max-w-[570px] ${wrap.bgimg ? 'text-white' : ''}`}>
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


