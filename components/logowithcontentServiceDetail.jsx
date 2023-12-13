'use client'
import style from './styles/logowithcontent.module.css';
import Link from 'next/link';
import Image from "next/image";

const data = [
  {
    logo: '/cisco.svg',
    heading: '80% vel consequat est. Donec semper neque quam eget.',
    para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
    border: false
  },
  {
    bgimg: '/cardsbg.svg',
    logo: '/vmarewhite.svg',
    heading: '80% vel consequat est. Donec semper neque quam eget.',
    para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
    border: false
  },
  {
    logo: '/mcafee_black.png',
    heading: '80% vel consequat est. Donec semper neque quam eget.',
    para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
    border: false
  }
];

// ... (previous imports and styles)

// ... (previous imports)


const Logowithcontent = () => {
  return (
    <section className="logowithcontent py-0">
      {data.map((wrap, index) => (
        <div className={`${wrap.border == true ? `border-t border-gray` : ''}area w-full relative`} key={index}>
          {/* Use wrap.bgimg instead of bgimg */}
          {wrap.bgimg && (
            <div className={`bgimg ${style.bgimg}`}>
              <Image src={wrap.bgimg} className="w-full h-full object-cover" width={100} height={100} />
            </div>
          )}

          <div className="container">
            <div className={`wrapper ${style.wrapper} w-full relative flex items-center flex-wrap h-[363px]`}>
              <div className="imgwrapper w-[50%] pl-[120px]">
                <div className="logowrapper max-w-[190px] max-h-[69px]">
                  <Image className="w-full h-full object-cover" width={100} height={100} src={wrap.logo} />
                </div>
              </div>
              <div className="contentwrapper w-[50%]">
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
