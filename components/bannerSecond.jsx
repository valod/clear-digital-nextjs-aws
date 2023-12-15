import React from 'react';
import Link from 'next/link';
import serviceDetail from '../data/banners/service-detail.json';
import serviceOverview from '../data/banners/service-overview.json';
import work from '../data/banners/work.json';
import Image from 'next/image';

export default function BannerSecond({ content }) {
    const getContent = (name) => {
        switch (name) {
            case 'serviceDetail':
                return serviceDetail;
            case 'serviceOverview':
                return serviceOverview;
            case 'work':
                return work;
            // Add more cases for additional content names
            default:
                return serviceDetail; // Default to a specific content if the name is not recognized
        }
    };

    const {
        subtitle,
        title,
        description,
        buttonLink,
        buttonText,
        backgroundImage,
        black_overlay,
    } = getContent(content);

    return (
        <section className={`set-2 ${black_overlay ? ' dark__overlay' : ''} bg-black banner-second grid__parallax min-h-[1090px] flex items-center md:min-h-[740px]`}>
            {backgroundImage && <div className="bg-img z-0 set-2">
                <Image src={backgroundImage} width={1600} height={1090} alt="vector" />
            </div>}
            <div className="container">
                <div className="content-wrap relative z-[3] pt-[102px]">
                    {subtitle && <h6 className="subtitle mb-[18px]">{subtitle}</h6>}
                    {title && <h1 className="text-white" dangerouslySetInnerHTML={{ __html: title }} />}
                    {description && <p className='mt-[31px] max-w-[990px]'>{description}</p>}
                    {buttonLink && buttonText && (
                        <div className="btn-wrap mt-[30px]">
                            <Link href={buttonLink} className="link-btn white font-bold">{buttonText}</Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
