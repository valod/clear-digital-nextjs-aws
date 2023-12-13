import React from 'react';
import Link from 'next/link';
import serviceDetail from '../data/banners/service-detail.json'; // Adjust the path accordingly
import serviceOverview from '../data/banners/service-overview.json'; // Adjust the path accordingly

export default function BannerSecond({ content }) {
    const getContent = (name) => {
        switch (name) {
            case 'serviceDetail':
                return serviceDetail;
            case 'serviceOverview':
                return serviceOverview;
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
        <section className={`${black_overlay ? 'dark__overlay' : ''} bg-black banner-second grid__parallax min-h-[1090px] flex items-center`}>
            {backgroundImage && <div className="bg-img z-0">
                <img src={backgroundImage} alt="vector" />
            </div>}
            <div className="container">
                <div className="content-wrap relative z-[3]">
                    {subtitle && <p className="subtitle mb-5">{subtitle}</p>}
                    {title && <h1 className="text-white">{title}</h1>}
                    {description && <p className='mt-8'>{description}</p>}
                    {buttonLink && buttonText && (
                        <div className="btn-wrap mt-8">
                            <Link href={buttonLink} className="link-btn white">{buttonText}</Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
