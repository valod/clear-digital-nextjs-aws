import React from 'react'
import Intro from '../components/Intro'
import Link from 'next/link'
import Image from 'next/image'

const ContentGrid = () => {
    return (
        <section className='contentGrid grid__parallax dark height__full'>
            <div className='container'>
                <Intro />
                <div className='wrapper flex flex-wrap justify-between gap-[3rem] mt-[4.8rem]'>
                    <div className='contentGrid__item w-full lg-up:w-[calc(33.33%-2rem)] tablet:w-[calc(50%-2rem)] phablet:w-[calc(50%-2rem)]'>
                        <Link href={'/'}>
                            <div className='contentGrid__icon mb-[3rem]'>
                                <Image src={"/overview-1.png"} alt='' width={80} height={80} />
                            </div>
                            <h4>Collaboration focus lorem ipsum.</h4>
                            <p className='mt-[2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet expedita! Quis magnam quos odit earum quidem quod voluptates? Ex.</p>
                        </Link>
                    </div>
                    <div className='contentGrid__item w-full lg-up:w-[calc(33.33%-2rem)] tablet:w-[calc(50%-2rem)] phablet:w-[calc(50%-2rem)]'>
                        <Link href={'/'}>
                            <div className='contentGrid__icon'>
                                <Image src={"/overview-2.png"} alt='' width={80} height={80} />
                            </div>
                            <h4>Collaboration focus lorem ipsum.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet expedita! Quis magnam quos odit earum quidem quod voluptates? Ex.</p>
                        </Link>
                    </div>
                    <div className='contentGrid__item w-full lg-up:w-[calc(33.33%-2rem)] tablet:w-[calc(50%-2rem)] phablet:w-[calc(50%-2rem)]'>
                        <Link href={'/'}>
                            <div className='contentGrid__icon'>
                                <Image src={"/overview-3.png"} alt='' width={80} height={80} />
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
