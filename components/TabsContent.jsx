import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect } from 'react';

const TabsContent = (tab, imageSrc, heading, subText, lists, url, linkText) => {
    const [activeTab, setActiveTab] = useState(0);
    const [isTabOpen, setIsTabOpen] = useState(false);

    const toggleTab = () => {
        setIsTabOpen(!isTabOpen);
    };

    const handleTabClick = (index) => {
        setActiveTab(index);
        toggleTab();
    };

    const data = [
        {
            tab: 'Brand strategy',
            tabData: [
                {
                    imageSrc: '/development-circle-pink-and-black.webp',
                    heading: 'Content development',
                    subText: 'Our content creators help you develop messaging and imagery that connect, engage, and guide your B2B customers to your solutions',
                    lists: ['Content Strategy', 'Copywriting / Copyediting', 'Infographics', 'Collateral', 'Ebooks'],
                    url: '/',
                    linkText: 'Learn more'
                }
            ]
        },
        {
            tab: 'Website design',
            tabData: [
                {
                    imageSrc: '/development-circle-pink-and-black.webp',
                    heading: '2 Content development',
                    subText: 'Our content creators help you develop messaging and imagery that connect, engage, and guide your B2B customers to your solutions',
                    lists: ['Content Strategy', 'Copywriting / Copyediting', 'Infographics', 'Collateral', 'Ebooks'],
                    url: '/',
                    linkText: 'Learn more'
                }
            ]
        },
        {
            tab: 'Motion graphics',
            tabData: [
                {
                    imageSrc: '/development-circle-pink-and-black.webp',
                    heading: '3 Content development',
                    subText: 'Our content creators help you develop messaging and imagery that connect, engage, and guide your B2B customers to your solutions',
                    lists: ['Content Strategy', 'Copywriting / Copyediting', 'Infographics', 'Collateral', 'Ebooks'],
                    url: '/',
                    linkText: 'Learn more'
                }
            ]
        },
        {
            tab: 'Creative services',
            tabData: [
                {
                    imageSrc: '/development-circle-pink-and-black.webp',
                    heading: '4 Content development',
                    subText: 'Our content creators help you develop messaging and imagery that connect, engage, and guide your B2B customers to your solutions',
                    lists: ['Content Strategy', 'Copywriting / Copyediting', 'Infographics', 'Collateral', 'Ebooks'],
                    url: '/',
                    linkText: 'Learn more'
                }
            ]
        },
        {
            tab: 'Digital strategy',
            tabData: [
                {
                    imageSrc: '/development-circle-pink-and-black.webp',
                    heading: '5 Content development',
                    subText: 'Our content creators help you develop messaging and imagery that connect, engage, and guide your B2B customers to your solutions',
                    lists: ['Content Strategy', 'Copywriting / Copyediting', 'Infographics', 'Collateral', 'Ebooks'],
                    url: '/',
                    linkText: 'Learn more'
                }
            ]
        },
        {
            tab: 'Web development',
            tabData: [
                {
                    imageSrc: '/development-circle-pink-and-black.webp',
                    heading: '6 Content development',
                    subText: 'Our content creators help you develop messaging and imagery that connect, engage, and guide your B2B customers to your solutions',
                    lists: ['Content Strategy', 'Copywriting / Copyediting', 'Infographics', 'Collateral', 'Ebooks'],
                    url: '/',
                    linkText: 'Learn more'
                }
            ]
        }, {
            tab: 'Website design',
            tabData: [
                {
                    imageSrc: '/development-circle-pink-and-black.webp',
                    heading: '7 Content development',
                    subText: 'Our content creators help you develop messaging and imagery that connect, engage, and guide your B2B customers to your solutions',
                    lists: ['Content Strategy', 'Copywriting / Copyediting', 'Infographics', 'Collateral', 'Ebooks'],
                    url: '/',
                    linkText: 'Learn more'
                }
            ]
        },
        {
            tab: 'UX/UI design',
            tabData: [
                {
                    imageSrc: '/development-circle-pink-and-black.webp',
                    heading: '8 Content development',
                    subText: 'Our content creators help you develop messaging and imagery that connect, engage, and guide your B2B customers to your solutions',
                    lists: ['Content Strategy', 'Copywriting / Copyediting', 'Infographics', 'Collateral', 'Ebooks'],
                    url: '/',
                    linkText: 'Learn more'
                }
            ]
        },
        {
            tab: 'Digital marketing',
            tabData: [
                {
                    imageSrc: '/development-circle-pink-and-black.webp',
                    heading: '9 Content development',
                    subText: 'Our content creators help you develop messaging and imagery that connect, engage, and guide your B2B customers to your solutions',
                    lists: ['Content Strategy', 'Copywriting / Copyediting', 'Infographics', 'Collateral', 'Ebooks'],
                    url: '/',
                    linkText: 'Learn more'
                }
            ]
        },
        {
            tab: 'Support subscriptions',
            tabData: [
                {
                    imageSrc: '/development-circle-pink-and-black.webp',
                    heading: '10 Content development',
                    subText: 'Our content creators help you develop messaging and imagery that connect, engage, and guide your B2B customers to your solutions',
                    lists: ['Content Strategy', 'Copywriting / Copyediting', 'Infographics', 'Collateral', 'Ebooks'],
                    url: '/',
                    linkText: 'Learn more'
                }
            ]
        }
    ];
    return (
        <section className='tabsContent bg-gray'>
            <div className='container'>
                <div className='wrapper'>
                    <div className='intro'>
                        <h3>Our services.</h3>
                    </div>
                    <div className='tabsContent__tabs'>
                        <ul className={`p-0 columns-2 gap-x-[3rem] ${isTabOpen ? 'hidden' : ''} transition-all duration-300`}>
                            {data.map((item, index) => (
                                <li key={index} className='py-[4rem] md-up:py-[5rem] border-b-[0.1rem] cursor-pointer' onClick={() => handleTabClick(index)}>
                                    <h4>{item.tab}</h4>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='tabsContent__content'>
                        <div className={`${isTabOpen ? '' : 'hidden'} transition-all duration-300`}>
                            {data[activeTab].tabData.map((card, index) => {
                                return (
                                    <div key={index} className="xl-up:mt-[3rem] mt-[2rem] py-[5rem] relative border-y-[0.1rem]">
                                        <div className="flex gap-x-[3rem]">
                                            <div className='tabsContent__left w-[50%]'>
                                                <div className="max-h-[53.5rem] max-w-[45rem] h-full">
                                                    <Image src={card.imageSrc} width={894} height={1071} className="w-full" alt="" />
                                                </div>
                                            </div>
                                            <div className='tabsContent__right w-[50%]'>
                                                <h5 className="md-up:mt-[2rem] mt-[1.5rem] leading-[1.3]">{card.heading}</h5>
                                                <p className="text-[1.6rem] mt-[1.5rem] md-up:mt-[2rem]">{card.subText}</p>
                                                <ul className="list-disc mt-[3rem] pl-[2.5rem]">
                                                    {card.lists.map((item, index) => (
                                                        <li key={index} className="text-[1.6rem] mt-[1.5rem] md-up:mt-[2rem]">{item}</li>
                                                    ))}
                                                </ul>
                                                <div className="btn-wrap mt-[3rem]">
                                                    <Link href={card.url} className="pink-btn lg:w-full lg:text-center">{card.linkText}</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="group absolute h-[3rem] w-[3rem] right-0 top-[5rem] cursor-pointer" onClick={() => toggleTab()}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <path d="M22.5 7.5L7.5 22.5" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-pink" />
                                                <path d="M7.5 7.5L22.5 22.5" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-pink" />
                                            </svg>
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TabsContent