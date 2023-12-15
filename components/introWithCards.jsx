
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
        <section className="introWithCards pt-[406px] grid__parallax dark" id={content === 'serviceDetail' ? 'related-services' : 'services'}>
            <div class="bg-text-lines absolute z-[1] text-[122px] text-gray font-bold top-0 -left-[10px]">
                <div class="pb-12  whitespace-nowrap ">
                    Brand strategy & <span className='text-black'>Website</span>
                </div>
                <div class="pb-12  whitespace-nowrap ">
                    <span className='text-black'>graphics</span>  & Content devel
                </div>
                <div class="pb-12  whitespace-nowrap ">
                    <span className='text-black'>Support subscriptions</span> & De
                </div>
            </div>
            <div className="container">
                <div className="w-mainRow flex flex-wrap relative z-[2] -ml-[10px]">
                    {contentData.map((data, index) => (
                        <div key={index} className={`w-threeCard bg-white border border-darkGray mx-2.5 mb-5 laptop:w-halfWidth tablet:w-halfWidth phablet:w-halfWidth sm:w-[100%]`}>
                            <div className="card pt-[72px] px-[50px] pb-[100px] laptop:pt-[50px] laptop:px-[40px] laptop:pb-[80px] tablet:pt-[40px] tablet:px-[40px] tablet:pb-[40px] phablet:p-[30px] sm:p-[30px]">
                                <Link href="/" className="text-0">.</Link>
                                <div class="logo-wrap mb-7 w-full max-w-[100px] h-[100px] max-h-[100px] tablet:max-w-[75px] tablet:max-h-[75px] tablet:h-[75px]">
                                    <Image className="h-full" width={100} height={100} src={data.img} alt="image" />
                                </div>
                                <h4 className='mb-[22px]'>{data.title}</h4>
                                <p className="medium">{data.blurb}</p>
                                <div class="btn-wrap mt-[30px]">
                                    <Link href="#" class="link-btn font-bold pink black">Learn more</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}



