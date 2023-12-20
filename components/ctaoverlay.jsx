import React from "react";
import Image from "next/image";
import Link from "next/link";
import workContent from '../data/work-ctaoverlay.json';
import serviceOverviewContent from '../data/serviceoverview-ctaoverlay.json';

export default function Cta({ contentName }) {
    const getContent = (contentName) => {
        switch (contentName) {
            case 'serviceOverview':
                return serviceOverviewContent;
            case 'work':
                return workContent;
            // Add more cases for additional content names
            default:
                return serviceOverviewContent; // Default to a specific content if the name is not recognized
        }
    };

    const content = getContent(contentName);

    return (
        <section className='cta  flex items-center height__full' id={content.id}>
            <div className='bg-img light__overlay semi_black'>
                <Image src={content.bgimg} alt='image' height={1600} width={1090} className='w-full h-full object-cover' />
            </div>
            <div className='container'>
                <div className="content relative max-w-[129rem]">

                    <h2 className='h1 text-white mb-[20px]'>{content.heading} <span className="circle">.</span></h2>
                    <p className='text-white mb-[3rem] max-w-[81rem] font-normal'>{content.para}</p>
                    <div>
                        <Link className="pink-btn" href="#">{content.link}</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
