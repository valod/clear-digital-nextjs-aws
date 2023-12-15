import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect } from 'react';

const TabsContent = (tab, imageSrc, heading, subText, lists, url, linkText) => {

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

    const [activeTab, setActiveTab] = useState(0);
    const [isTabOpen, setIsTabOpen] = useState(false);
    const [isTabContentOpen, setIsTabContentOpen] = useState(0);

    const toggleTab = () => {
        setIsTabOpen(!isTabOpen);
    };

    const handleTabClick = (index) => {
        setActiveTab(index);
        toggleTab();
    };


    const toggleTabContent = (index) => {
        const newTabContentState = Array(data.length).fill(false);
        newTabContentState[index] = !isTabContentOpen[index];
        setIsTabContentOpen(newTabContentState);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767 && isTabContentOpen) {
                setIsTabContentOpen(0);
            } else {
                setActiveTab(0);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isTabContentOpen]);

    return (
        <section className='tabsContent bg-gray'>
            <div className='container'>
                <div className='wrapper'>
                    <div className='intro md:mb-[1rem]'>
                        <h3>Our services.</h3>
                    </div>
                    <div className='tabsContent__tabs'>
                        <ul className={`p-0 md-up:columns-2 gap-x-[3rem] ${isTabOpen ? 'md-up:hidden' : ''} transition-all duration-300`}>
                            {data.map((item, index) => (
                                <li key={index} className='border-b-[0.1rem] cursor-pointer md-up:py-[4rem]' onClick={() => handleTabClick(index)}>
                                    <div className="relative">
                                        <h4 className={`md:py-[4rem]`} onClick={() => toggleTabContent(index)}>{item.tab}</h4>
                                        <span className='lg-up:hidden cursor-pointer absolute top-1/2 -translate-y-1/2 right-0 border-[0.4rem] border-pink rounded-full h-[3.5rem] w-[3.5rem] inline-block' onClick={() => toggleTabContent(index)}>
                                            <span className='bg-pink rounded-full w-[1.3rem] h-[0.4rem] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'></span>
                                            <span className={`bg-pink rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${isTabContentOpen[index] ? 'w-[1.3rem] h-[0.4rem]' : 'w-[0.4rem] h-[1.3rem]'}`}></span>
                                        </span>
                                    </div>
                                    <div className='tabsContent__content md-up:hidden'>
                                        <div className={`${isTabOpen ? '' : 'md-up:hidden'} ${isTabContentOpen[index] ? 'max-h-[100vh] h-auto' : 'max-h-[0]'} overflow-hidden transition-all duration-300`}>
                                            {data[activeTab].tabData.map((card, index) => {
                                                return (
                                                    <div key={index} className="mt-[2rem] relative">
                                                        <div className="flex gap-x-[3rem] md:flex-wrap">
                                                            <div className='tabsContent__left w-full md-up:w-[50%]'>
                                                                <div className="max-h-[53.5rem] max-w-[45rem] h-full">
                                                                    <Image src={card.imageSrc} width={894} height={1071} className="w-full" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className='tabsContent__right w-full md-up:w-[50%]'>
                                                                <h5 className="md-up:mt-[2rem] mt-[1.5rem] leading-[1.3]">{card.heading}</h5>
                                                                <p className="text-[1.6rem] mt-[1.5rem] md-up:mt-[2rem]">{card.subText}</p>
                                                                <ul className="list-disc mt-[3rem] pl-[2.5rem]">
                                                                    {card.lists.map((item, index) => (
                                                                        <li key={index} className="text-[1.6rem] mt-[1.5rem] md-up:mt-[2rem]">{item}</li>
                                                                    ))}
                                                                </ul>
                                                                <div className="btn-wrap mt-[3rem] mb-[6rem]">
                                                                    <Link href={card.url} className="pink-btn lg:w-full lg:text-center">{card.linkText}</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='tabsContent__content md:hidden'>
                        <div className={`${isTabOpen ? '' : 'hidden'} transition-all duration-300`}>
                            {data[activeTab].tabData.map((card, index) => {
                                return (
                                    <div key={index} className="xl-up:mt-[3rem] mt-[2rem] py-[5rem] relative border-y-[0.1rem]">
                                        <div className="flex gap-x-[3rem] md:flex-wrap">
                                            <div className='tabsContent__left w-full md-up:w-[50%]'>
                                                <div className="max-h-[53.5rem] max-w-[45rem] h-full">
                                                    <Image src={card.imageSrc} width={894} height={1071} className="w-full" alt="" />
                                                </div>
                                            </div>
                                            <div className='tabsContent__right w-full md-up:w-[50%]'>
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