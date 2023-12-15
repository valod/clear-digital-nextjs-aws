'use client'
import style from './styles/logowithcontent.module.css';
import Link from 'next/link';
import Image from "next/image";

const data = [
  {
    bgimg: '/cardsbg.svg',
    logo: '/cisco.svg',
    hover_logo: '/cisco_white.svg',
    heading: '80% vel consequat est. Donec semper neque quam eget.',
    para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
    border: false
  },
  {
    bgimg: '/cardsbg.svg',
    logo: '/vmare.svg',
    hover_logo: '/vmarewhite.svg',
    heading: '80% vel consequat est. Donec semper neque quam eget.',
    para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
    border: false
  },
  {
    bgimg: '/cardsbg.svg',
    logo: '/mcafee_black.png',
    hover_logo: '/McAfee_white.svg',
    heading: '80% vel consequat est. Donec semper neque quam eget.',
    para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
    border: false
  },
];

// ... (previous imports and styles)

// ... (previous imports)


const Logowithcontent = () => {
  return (
    <section className={`set-2 ${style.logowithcontent} py-0 border-b border-darkGray`} id='case-studies'>
      {data.map((wrap, index) => (
        <div className={`${style.wrapper} group ${wrap.border === true ? `border-t border-gray` : ''} area w-full relative`} key={index}>
          {/* Use wrap.bgimg instead of bgimg */}
          {wrap.bgimg && (
            <div className={`absolute top-0 left-0 w-full h-full ${style.bgimg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
              <Image src={wrap.bgimg} className="w-full h-full object-cover" width={100} height={100} alt='image' />
            </div>
          )}

          <div className="container">
            <div className={`w-full relative flex items-center flex-wrap h-[363px]`}>
              <div className="imgwrapper w-[50%] pl-[120px] desktop:pl-[120px] laptop:pl-[60px] largedesktop:pl-[120px] tablet:pl-[50px] phablet:pl-[30px] md:w-full md:pl-0 ">
                <div className="logowrapper relative w-[190px] h-[69px]">
                  <Image className="absolute transition-opacity group-hover:opacity-0 duration-300 left-0 object-contain top-0 w-full h-full" width={100} height={100} src={wrap.logo} alt='image' />
                  <Image className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100 left-0 top-0 w-full h-full" width={100} height={100} src={wrap.hover_logo} alt='image' />
                </div>
              </div>
              <div className="contentwrapper w-[50%] md:w-full">
                <div className={`content max-w-[570px] md:max-w-full group-hover:text-white transition-color duration-300`}>
                  <h4 className={`heading pr-[30px] ${style.heading}`}>{wrap.heading}</h4>
                  <p className={`medium mt-[10px] para ${style.para}`}>{wrap.para}</p>
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






