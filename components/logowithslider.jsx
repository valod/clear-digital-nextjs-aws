'use client';
import React from 'react';
import style from './styles/logowithslider.module.css';
import Image from 'next/image';

const logoImage = [
    {
        image: "/Cisco.png",
        alt: "Cisco"
    },
    {
        image: "/McAfee.png",
        alt: "McAfee"
    },
    {
        image: "/Stanford.png",
        alt: "Stanford"
    },
    {
        image: "/Tenable.png",
        alt: "Tenable"
    },
    {
        image: "/VMware.png",
        alt: "VMware"
    },
    {
        image: "/Cisco.png",
        alt: "Cisco"
    },
    {
        image: "/McAfee.png",
        alt: "McAfee"
    },
];

const Logowithslider = () => {
    return (<>
        <section className={`slidera ${style.slider} no-padding-top bg-black`}>
            <div className={`slide-track ${style.slidetrack} relative`}>
                {logoImage.map((item, index) => (
                    <div className="slide logowrap w-[210px] h-[84px] mx-[25px]" key={index}>
                        <Image src={item.image} alt={item.alt} width={184} height={100} className='w-full h-full object-contain' />
                    </div>
                ))}
            </div>
        </section>
    </>
    );
}

export default Logowithslider;
















