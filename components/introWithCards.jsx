import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function introWithCards({ content }) {


    const serviceOverview = [
        {
            title: 'Brand strategy',
            blurb: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            img: '/service-detail/shape4.svg'
        },
        {
            title: 'Content development',
            blurb: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            img: '/service-detail/shape5.svg'
        },
        {
            title: 'Creative services',
            blurb: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            img: '/service-detail/shape6.svg'
        },
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
        },
        {
            title: 'Systems & support',
            blurb: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            img: '/service-detail/shape7.svg'
        },
        {
            title: 'Systems & support',
            blurb: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            img: '/service-detail/shape4.svg'
        },
        {
            title: 'Web development',
            blurb: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            img: '/service-detail/shape5.svg'
        }
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
        <section className="introWithCards pt-[406px] grid__parallax dark">
            <div class="bg-text-lines absolute z-[1] text-[122px] text-gray font-bold top-0 -left-[10px]">
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
                <div className="w-mainRow flex flex-wrap relative z-[2]">
                    {contentData.map((data, index) => (
                        <div key={index} className={`w-threeCard bg-white border border-darkGray mx-2.5 mb-5`}>
                            <div className="card pt-[97px] px-[50px] pb-[120px]">
                                <Link href="/" className="text-0">.</Link>
                                <div class="logo-wrap mb-7 h-full w-full max-w-[100px] max-h-[100px]">
                                    <Image src={data.img} alt="image" />
                                </div>
                                <h4 className='mb-5'>{data.title}</h4>
                                <p>{data.blurb}</p>
                                <div class="btn-wrap mt-8">
                                    <Link href="#" class="link-btn black">Learn more</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
