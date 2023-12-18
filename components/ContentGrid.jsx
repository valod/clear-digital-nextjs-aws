import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import Intro from './Intro';


const ContentGrid = () => {
    const intro = {
        eyeBrowText: '20+ years of success.',
        heading: 'We deliver results-driven digital experiences that get you to what’s',
        highLightedText: 'next',
        subText: 'Clear Digital is a Silicon Valley-based website design agency that helps you build and accelerate your web, brand, and digital marketing by providing expert, strategic, and data-informed solutions that deliver results.',
    };
    return (
        <section className='contentGrid grid__parallax dark height__full'>
            <div className='container'>
                {/* <Intro {...intro} /> */}
                <div className='wrapper flex flex-wrap justify-between gap-[3rem] mt-[4.8rem]'>
                    <div className='contentGrid__item w-full lg-up:w-[calc(33.33%-2rem)] tablet:w-[calc(50%-2rem)] phablet:w-[calc(50%-2rem)]'>
                        <Link href={'/'}>
                            <div className='contentGrid__icon mb-[3rem]'>
                                <Image src={"/overview-1.png"} alt='img' width={80} height={80} />
                            </div>
                            <h4>Collaboration focus lorem ipsum.</h4>
                            <p className='mt-[2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet expedita! Quis magnam quos odit earum quidem quod voluptates? Ex.</p>
                        </Link>
                    </div>
                    <div className='contentGrid__item w-full lg-up:w-[calc(33.33%-2rem)] tablet:w-[calc(50%-2rem)] phablet:w-[calc(50%-2rem)]'>
                        <Link href={'/'}>
                            <div className='contentGrid__icon'>
                                <Image src={"/overview-2.png"} alt='img' width={80} height={80} />
                            </div>
                            <h4>Collaboration focus lorem ipsum.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet expedita! Quis magnam quos odit earum quidem quod voluptates? Ex.</p>
                        </Link>
                    </div>
                    <div className='contentGrid__item w-full lg-up:w-[calc(33.33%-2rem)] tablet:w-[calc(50%-2rem)] phablet:w-[calc(50%-2rem)]'>
                        <Link href={'/'}>
                            <div className='contentGrid__icon'>
                                <Image src={"/overview-3.png"} alt='img' width={80} height={80} />
                            </div>
                            <h4>Collaboration focus lorem ipsum.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet expedita! Quis magnam quos odit earum quidem quod voluptates? Ex.</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentGrid;

