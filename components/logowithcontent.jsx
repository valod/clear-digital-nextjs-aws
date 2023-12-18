import React from 'react';
import style from './styles/logowithcontent.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Logowithcontent = ({ contentName }) => {
    const contentData = {
        data: [
            {
                bgimg: '/cardsbg.svg',
                logo: '/vmare.svg',
                hover_logo: '/vmarewhite.svg',
                heading: '80% vel consequat est. Donec semper neque quam eget.',
                medium: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                border: true,
            },
            {
                bgimg: '/cardsbg.svg',
                logo: '/mcafee_black.png',
                hover_logo: '/McAfee_white.svg',
                heading: '80% vel consequat est. Donec semper neque quam eget.',
                medium: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                border: true,
            },
            {
                bgimg: '/cardsbg.svg',
                logo: '/cisco.svg',
                hover_logo: '/cisco_white.svg',
                heading: '80% vel consequat est. Donec semper neque quam eget.',
                medium: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                border: true,
            },
            {
                bgimg: '/cardsbg.svg',
                logo: '/vmare.svg',
                hover_logo: '/vmarewhite.svg',
                heading: '80% vel consequat est. Donec semper neque quam eget.',
                medium: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                border: true,
            },
            {
                bgimg: '/cardsbg.svg',
                logo: '/mcafee_black.png',
                hover_logo: '/McAfee_white.svg',
                heading: '80% vel consequat est. Donec semper neque quam eget.',
                medium: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                border: true,
            },
            // Add other data objects here
        ],



        threecards: [
            {
                bgimg: '/cardsbg.svg',
                logo: '/cisco.svg',
                hover_logo: '/cisco_white.svg',
                heading: '80% vel consequat est. Donec semper neque quam eget.',
                medium: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                border: true
            },
            {
                bgimg: '/cardsbg.svg',
                logo: '/vmare.svg',
                hover_logo: '/vmarewhite.svg',
                heading: '80% vel consequat est. Donec semper neque quam eget.',
                medium: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                border: true
            },
            {
                bgimg: '/cardsbg.svg',
                logo: '/mcafee_black.png',
                hover_logo: '/McAfee_white.svg',
                heading: '80% vel consequat est. Donec semper neque quam eget.',
                medium: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
                border: true
            },
            // Add other threecards objects here
        ],
    };

    const content = contentData[contentName] || [];

    return (
        <section className="logowithcontent py-0 sm:pt-[30px]">

            {content.map((wrap, index) => (
                <div key={index} className={`${style.wrapper} group ${wrap.border === true ? `border-t border-gray` : ''} area w-full relative border-darkGray`}>
                    {/* Your existing code for background image */}
                    {wrap.bgimg && (
                        <div className={`absolute top-0 left-0 w-full h-full ${style.bgimg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                            <Image src={wrap.bgimg} className="w-full h-full object-cover" width={100} height={100} alt="image" />
                        </div>
                    )}

                    <div className="container">
                        <div className={`w-full relative flex items-center flex-wrap h-[363px] laptop:h-[350px] lg:h-[350px] sm:h-[320px]`}>
                            <div className="imgwrapper w-[50%] pl-[120px] desktop:pl-[120px] laptop:pl-[60px] largedesktop:pl-[120px] tablet:pl-[50px] phablet:pl-[30px] md:w-full md:pl-0 ">
                                <div className="logowrapper relative w-[190px] h-[69px] sm:w-[150px] sm:h-[50px] ">
                                    <Image className="absolute transition-opacity group-hover:opacity-0 duration-300 left-0 object-contain top-0 w-full h-full" width={100} height={100} src={wrap.logo} alt="image" />
                                    <Image className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100 left-0 top-0 w-full h-full" width={100} height={100} src={wrap.hover_logo} alt="image" />
                                </div>
                            </div>
                            <div className="contentwrapper pl-[15px] w-[50%] md:w-full">
                                <div className={`content max-w-[570px] md:max-w-full group-hover:text-white transition-color duration-300`}>
                                    <h4 className={`heading pr-[50px] ${style.heading}`}>{wrap.heading}</h4>
                                    <p className={`medium letter-spacing-[-0.32px] mt-[10px] letter-spacing-[-0.32px]  ${style.medium}`}>{wrap.medium}</p>
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












