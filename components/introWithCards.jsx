import React, { useState, useEffect } from 'react';

export default function introWithCards({ content }) {


    const serviceOverview = [
        {
            title: 'Branding for Theme Designer',
            blurb: 'Digital Marketing',
        },
        {
            title: 'Button Designs Free',
            blurb: 'Search Engine',
        },
        {
            title: 'Branding & Co Agency',
            blurb: 'Admin templates',
        },
        {
            title: 'Zukandre Phoniex',
            blurb: 'Branding',
        },
        {
            title: 'Sionage Mokcup',
            blurb: 'Wll Mockup',
        },
        {
            title: 'Hard Cover Book Mock',
            blurb: 'Book Covers',
        },
        // Add other card items as needed
    ];

    const serviceDetail = [
        {
            title: 'Digital marketing',
            blurb: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            img: '/service-detail/shape1.svg'
        },
        {
            title: 'Digital strategy',
            blurb: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            img: '/service-detail/shape2.svg'
        },
        {
            title: 'Motion graphics',
            blurb: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            img: '/service-detail/shape3.svg'
        }
        // Add other team items as needed
    ];

    const contentData = content === 'serviceDetail' ? serviceDetail : serviceOverview;
    return (
        <section className="introWithCards pt-[406px]">
            <div class="bg-text-lines absolute text-[122px] text-gray font-bold top-0 -left-[10px]">
                <div class="pb-12 animate-marquee whitespace-nowrap ">
                    Brand strategy & <span className='text-black'>Website</span>
                </div>
                <div class="pb-12 animate-marquee whitespace-nowrap ">
                    <span className='text-black'>graphics</span>  & Content devel
                </div>
                <div class="pb-12 animate-marquee whitespace-nowrap ">
                    <span className='text-black'>Support subscriptions</span> & De
                </div>
            </div>
            <div className="container">
                <div className="w-mainRow flex flex-wrap">
                    {contentData.map((data, index) => (
                        <div key={index} className={`w-threeCard bg-white border border-darkGray mx-2.5 mb-5`}>
                            <div className="card pt-[97px] px-[50px] pb-[120px]">
                                <a href="/"></a>
                                <div class="logo-wrap mb-7 h-full w-full max-w-[100px] max-h-[100px]">
                                    <img src={data.img} alt="image" />
                                </div>
                                <h4 className='mb-5'>{data.title}</h4>
                                <p>{data.blurb}</p>
                                <div class="btn-wrap mt-8">
                                    <a href="#" class="link-btn black">Learn more</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
