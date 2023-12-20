import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import style from './styles/scrollablecontent.module.css';

const ScrollableContent = () => {
    const scrollableContentRef = useRef(null);
    const [previousSectionsHeight, setPreviousSectionsHeight] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
    const [ShowSecond, setShowSecond] = useState(false);
    const [visibleSections, setVisibleSections] = useState([0, 1, 2]);
    const [i, seti] = useState(0)
    // const firstDivRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            const innerWrapElements = document.querySelectorAll(`.${style.innerWrap}`);
            innerWrapElements[0].classList.add(`${style.show}`);
        }, 300);
    }, []);

    useEffect(() => {
        const calculatePreviousSectionsHeight = () => {
            const scrollableContent = scrollableContentRef.current;
            if (scrollableContent) {
                let totalHeight = 0;
                let previousSections = scrollableContent.previousElementSibling;

                while (previousSections) {
                    totalHeight += previousSections.clientHeight;
                    previousSections = previousSections.previousElementSibling;
                }

                setPreviousSectionsHeight(totalHeight);
            }
        };

        // Initial calculation and event listener setup
        calculatePreviousSectionsHeight();
        window.addEventListener('resize', calculatePreviousSectionsHeight);

        // Cleanup for event listener
        return () => {
            window.removeEventListener('resize', calculatePreviousSectionsHeight);
        };
    }, [previousSectionsHeight]); // Include previousSectionsHeight in the dependency array

    const handleScroll = () => {
        const section = document.querySelector(".content-with-img");
        const screenHeight = window.innerHeight;
        // console.log('Screen Height:', screenHeight);

        if (section) {
            const distanceFromTop = section.getBoundingClientRect().top;

            const isSticky = window.scrollY > previousSectionsHeight;
            const isShowSecond = window.scrollY > previousSectionsHeight + 100;
            const isShowThird = window.scrollY > isShowSecond + 100;
            setIsSticky(isSticky);
            console.log(isSticky);
            const innerWrapElements = document.querySelectorAll(`.${style.innerWrap}`);
            if (isShowSecond) {
                innerWrapElements.forEach((element) => {
                    element.classList.remove(`${style.show}`);
                });
                innerWrapElements[1].classList.add(`${style.show}`);
            }

            // if (isSticky) {

            //     var top = section.getBoundingClientRect().top

            //     var first = top + 100
            //     var second = first + 100
            //     var third = second + 100
            //     var fourth = third + 100

            //     console.log(i);
            //     // if (i < 2) {
            //         var current = window.scrollY;
            //         console.log('Current Scroll:', current);

            //         if ((current > first) && (current < second)) {
            //             seti(0);
            //         } else if ((current > second) && (current < third)) {
            //             seti(1);
            //         } else if ((current > third) && (current < fourth)) {
            //             seti(2);
            //         } else if (current > fourth) {
            //             seti(3);
            //         }
            //     // }
            // }


        }
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [previousSectionsHeight]);

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

    const sectionsLength = sections.length;
    const minHeightStyle = `h-[${sectionsLength}00vh]`;

    return (
        <>
            {/* <section className={`content-with-img no-padding  set-2 bg-gray h-[100vh]`} id="our-process" ref={scrollableContentRef}>
            <div className={`${style.scrollerContainer}`}>
                <div className={`${isSticky ? style.stickTop : ''} h-[100vh] w-full column-wrapper`}>
                    <div className="relative w-full h-auto z-[1]">
                        {contentData.map((content, index) => (
                            <div key={index} className="title-wrap absolute top-0 left-0 w-1/2 h-auto z-[4] pt-[300px] pl-[95px] pb-[50px] phablet:pt-[120px] sm:pt-[80px]">
                                <h6 className="mb-[19px] subtitle">{content.subHeadibng}</h6>
                                {content.heading && <h2 className="" dangerouslySetInnerHTML={{ __html: content.heading }} />}
                            </div>
                        ))}
                        {sections.map((content, index) => (
                        <div className={`${style.innerWrap} inner-wrap flex flex-wrap relative`}>
                            <div className="text-holder w-1/2 pl-[95px] pr-[135px] lg:w-[100%] tablet:pl-[40px] tablet:pr-[100px] phablet:pl-[40px] phablet:pr-[100px] sm:pl-[20px] sm:pr-[20px]">
                                <div className="inner-content h-full flex flex-wrap flex-col justify-end">
                                    <div className={`${style.bodyWrap} body-wrap pb-[151px] phablet:pb-[120px] sm:pb-[10rem] transition-opacity duration-300`}>
                                        <h4>{sections[i].title}</h4>
                                        <p className="mt-[19px]">{sections[i].description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.imageholder} h-[100vh] ${style.imgWrap} w-1/2 lg:w-[100%] transition-opacity duration-300`}>
                                <div className={`${style.imgWrap} img-wrap h-full`}>
                                    <Image width={800} height={1090} className='w-full h-full' src={sections[i].imageSrc} alt="pulvinar" />
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section> */}
            <section className={`content-with-img no-padding  set-2 bg-gray h-[100vh]`} id="our-process" ref={scrollableContentRef}>
                <div className={`${style.scrollerContainer}`}>
                    <div className={`${isSticky ? style.stickTop : ''} h-[100vh] w-full column-wrapper`}>
                        <div className="relative w-full h-auto z-[1]">
                            {contentData.map((content, index) => (
                                <div key={index} className="title-wrap absolute top-0 left-0 w-1/2 h-auto z-[4] pt-[300px] pl-[95px] pb-[50px] phablet:pt-[120px] sm:pt-[80px]">
                                    <h6 className="mb-[19px] subtitle">{content.subHeadibng}</h6>
                                    {content.heading && <h2 className="" dangerouslySetInnerHTML={{ __html: content.heading }} />}
                                </div>
                            ))}
                            {sections.map((content, index) => (
                                <div key={index} className={`${style.innerWrap} inner-wrap flex flex-wrap relative`}>
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
        </>
    );
};

export default ScrollableContent;
