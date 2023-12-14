import React from 'react'
import Intro from '../components/Intro'
import Link from 'next/link'
import Image from 'next/image'

const ContentGrid = () => {
    return (
        <section className='contentGrid grid__parallax dark height__full'>
            <div className='container'>
                <Intro />
                <div className='wrapper'>
                    <div className='contentGrid__item'>
                        <Link href={'/'}>
                            <div className='contentGrid__icon'>
                                <Image src={"/overview-1.png"} alt='' width={80} height={80} />
                            </div>
                            <h4>Collaboration focus lorem ipsum.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet expedita! Quis magnam quos odit earum quidem quod voluptates? Ex.</p>
                        </Link>
                    </div>
                    <div className='contentGrid__item'>
                        <Link href={'/'}>
                            <div className='contentGrid__icon'>
                                <Image src={"/overview-2.png"} alt='' width={80} height={80} />
                            </div>
                            <h4>Collaboration focus lorem ipsum.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet expedita! Quis magnam quos odit earum quidem quod voluptates? Ex.</p>
                        </Link>
                    </div>
                    <div className='contentGrid__item'>
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
