import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import style from './styles/scrollablecontent.module.css';

const ScrollableContent = () => {
    const scrollableContentRef = useRef(null);
    const [previousSectionsHeight, setPreviousSectionsHeight] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
    const [visibleSections, setVisibleSections] = useState([true, false, false]);

    // useEffect(() => {
    //     const calculatePreviousSectionsHeight = () => {
    //         const scrollableContent = scrollableContentRef.current;
    //         if (scrollableContent) {
    //             let totalHeight = 0;
    //             let previousSections = scrollableContent.previousElementSibling;

    //             while (previousSections) {
    //                 totalHeight += previousSections.clientHeight;
    //                 previousSections = previousSections.previousElementSibling;
    //             }

    //             setPreviousSectionsHeight(totalHeight);
    //         }
    //     };

    //     // Initial calculation and event listener setup
    //     calculatePreviousSectionsHeight();
    //     window.addEventListener('resize', calculatePreviousSectionsHeight);

    //     // Cleanup for event listener
    //     return () => {
    //         window.removeEventListener('resize', calculatePreviousSectionsHeight);
    //     };
    // }, []);

    // const handleScroll = () => {
    //     const section = document.querySelector(".content-with-img");

    //     if (section) {
    //         const distanceFromTop = section.getBoundingClientRect().top;

    //         const isStickyNow = window.scrollY > previousSectionsHeight;
    //         setIsSticky(isStickyNow);

    //         const isShowFirst = window.scrollY > previousSectionsHeight + 100;
    //         const isShowSecond = window.scrollY > isShowFirst + 100;

    //         setVisibleSections([isStickyNow, isShowFirst, isShowSecond]);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [previousSectionsHeight]);

    // Content data array
    const contentData = [
        {
            subHeadibng: "Our process",
            heading: "Nisl <span class='underline-black text-pink'>pulvinar</span>  consectet nec set adipiscing",

        },
    ];
    const sections = [
        {
            title: "Nisl pulvinar consectet nec set adipiscing",
            imageSrc: "/service-detail/img1.png",
            description: "Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur erat risus ac nibh. Lectus egestas adipiscing interdum hendrerit vitae consequat odio. Mattis imperdiet vitae tellus fringilla. Magna.",
        },
        {
            title: "Nisl pulvinar consectet nec set adipiscing",
            imageSrc: "/service-detail/img2.png",
            description: "Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur erat risus ac nibh. Lectus egestas adipiscing interdum hendrerit vitae consequat odio. Mattis imperdiet vitae tellus fringilla. Magna.",
        },
        {
            title: "Nisl pulvinar consectet nec set adipiscing",
            imageSrc: "/service-detail/img3.png",
            description: "Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur erat risus ac nibh. Lectus egestas adipiscing interdum hendrerit vitae consequat odio. Mattis imperdiet vitae tellus fringilla. Magna.",
        },
    ];
    console.log(contentData.sections);

    return (
        <section className="content-with-img no-padding set-2 min-h-[100vh]" id="our-process" ref={scrollableContentRef}>
            <div className={`${style.scrollerContainer}`}>
                <div className={`${isSticky ? style.stickTop : ''} w-full column-wrapper`}>
                    <div className="relative w-full h-auto z-[1]">
                        {contentData.map((content, index) => (
                            <div key={index} className="title-wrap absolute top-0 left-0 w-1/2 h-auto z-[4] pt-[300px] pl-[95px] pb-[50px] phablet:pt-[120px] sm:pt-[80px]">
                                <h6 className="mb-[19px] subtitle">{content.subHeadibng}</h6>
                                {content.heading && <h2 className="" dangerouslySetInnerHTML={{ __html: content.heading }} />}
                            </div>
                        ))}
                        {sections.map((content, index) => (
                            <div key={index} className={`${style.innerWrap} inner-wrap flex flex-wrap bg-gray relative ${visibleSections[index] ? '' : style.hide}`}>
                                <div className="text-holder w-1/2 pl-[95px] pr-[135px] lg:w-[100%] tablet:pl-[40px] tablet:pr-[100px] phablet:pl-[40px] phablet:pr-[100px] sm:pl-[20px] sm:pr-[20px]">
                                    <div className="inner-content h-full flex flex-wrap flex-col justify-end">
                                        <div className={`${style.bodyWrap} body-wrap pb-[151px] phablet:pb-[120px] sm:pb-[10rem] transition-opacity duration-300`}>
                                            <h4>{content.title}</h4>
                                            <p className="mt-[19px]">{content.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.imageholder} h-[100vh] ${style.imgWrap} w-1/2 lg:w-[100%] transition-opacity duration-300`}>
                                    <div className={`${style.imgWrap} img-wrap h-full`}>
                                        <Image width={800} height={1090} className='w-full h-full' src={content.imageSrc} alt="pulvinar" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScrollableContent;
