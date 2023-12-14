import React, { useState, useEffect } from 'react';
import Link from "next/link";
import StickyStyle from '../components/styles/sticky.module.css'

export default function Sticky({ ribbonVisible }) {
    const stickyData = [
        {
            id: "1",
            pageName: "serviceDetail",
            title: "Overview",
            url: "overview"
        },
        {
            id: "2",
            pageName: "serviceDetail",
            title: "Our process",
            url: "our-process"
        },
        {
            id: "3",
            pageName: "serviceDetail",
            title: "Case studies",
            url: "case-studies"
        },
        {
            id: "4",
            pageName: "serviceDetail",
            title: "Related services",
            url: "related-services"
        },
    ];

    const [isSticky, setSticky] = useState(false);
    const [isHeight, setHeight] = useState(0);
    const [isScrolled, setIsScrolled] = useState(true);
    const [ribbonHeight, setRibbonHeight] = useState(0);
    const [abc, setAbc] = useState(0);
    const [isBorder, setBorder] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollMatch, isScrolledMatch] = useState(true);
    const [visibleSections, setVisibleSections] = useState([]);
    const [winWidth, isWinWidth] = useState(0);
    const [isdropDown, setDropDown] = useState(false);
    // const [idMatch, isIdMatch] = use
    const [linkData, setLinkData] = useState();

    useEffect(() => {
        let lastScrollTop = 0;

        const handleNavScroll = () => {
            const currentScrollTop = window.scrollY;
            const isScrolledDown = currentScrollTop < lastScrollTop;

            setIsScrolled(isScrolledDown);
            lastScrollTop = currentScrollTop;
        };

        setTimeout(() => {
            window.addEventListener('scroll', handleNavScroll);
        }, 500);

        return () => {
            window.removeEventListener('scroll', handleNavScroll);
        };
    }, []);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setRibbonHeight(document.getElementById('previewRibbon').clientHeight);
    //     };
    //     setAbc(document.getElementById('previewRibbon'));
    //     window.addEventListener('resize', handleResize);

    //     handleResize();

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };

    // }, []);

    useEffect(() => {
        const headerElement = document.getElementById('header'); // Replace with your actual header ID

        if (headerElement) {
            const headerHeight = headerElement.clientHeight;
            setHeight(headerHeight);
        }
    }, []);


    useEffect(() => {

        setTimeout(() => {
            window.addEventListener('scroll', handleScroll);
        }, 500);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleDocumentClick = (event) => {
            const isOutsideComponent = event.target.closest('#previewRibbon button');
            if (isOutsideComponent) {
                setRibbonHeight(document.getElementById('previewRibbon').clientHeight);
            }
        };

        // Add event listener to the document
        document.addEventListener('click', handleDocumentClick);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const handleScroll = () => {
        setSticky(window.scrollY > 0);
    };
    const handleStickyClick = (e, id, borderActive, sectionId, offset) => {
        var x = document.querySelectorAll("section")
        e.preventDefault()
        setBorder(borderActive);
        var headrHeight = document.querySelector('header').offsetHeight;

        x.forEach((item) => {
            var attr = item.getAttribute('id')
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            if (attr == id) {
                var topp = item.getBoundingClientRect().top;
                console.log(topp)
                // console.log(scrollPosition)
                var d = (scrollPosition + topp) - 100
                if (topp < 0) {
                    d = d - (headrHeight)
                }

                window.scrollTo({
                    top: d,
                    behavior: 'smooth'
                });
                // $('html,body').animate({scrollTop: d}, 0, 'linear');
            }
        })
    }

    const height = {
        top: `${isHeight + ribbonHeight}px`,
    };

    useEffect(() => {
        const mainElement = document.getElementsByTagName('main')[0];
        const headerElement = document.getElementsByTagName('header')[0];
        setTimeout(() => {
            if (ribbonHeight === 0) {
                if (isHeight === 0) {
                    document.documentElement.style.scrollPadding = `${isHeight}px`;
                } else {
                    document.documentElement.style.scrollPadding = `0px`;
                }
            } else {
                var totalHeight = isHeight + ribbonHeight + 80;
                if (isScrolled === true) {
                    document.documentElement.style.scrollPadding = `${totalHeight}px`;
                } else {
                    // var plusRibbonHeight = ribbonHeight + 80;
                    var minusTotalHeight = totalHeight - isHeight;
                    document.documentElement.style.scrollPadding = `${minusTotalHeight}px`;
                    // mainElement.style.height = '5rem';

                }
            }
        }, 500);
    });

    const handleIntersection = (entries) => {
        const visibleSections = entries
            .filter(entry => entry.isIntersecting)
            .map(entry => entry.target.id);

        setVisibleSections(visibleSections);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.5,
        });

        const sectionElements = document.querySelectorAll('section:not(.sticky');

        sectionElements.forEach(sectionElement => {
            observer.observe(sectionElement);
        });

        return () => {
            observer.disconnect();
        };
    }, [visibleSections]);

    useEffect(() => {
        // isWinWidth(window.innerWidth);
        const handleResize = () => {
            isWinWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        // Initial call to set window size
        handleResize();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })


    return (
        <>
            {
                winWidth > 1024 ?
                    <section className={`${isSticky ? 'sticky' : 'position-initial'} py-[38px] ${StickyStyle.mainSticky} border-b border-black z-5 bg-white  transition-all duration-300 ease-in-out shadow-bottom-white-shadow`} style={isScrolled ? height : { top: ribbonHeight }}>
                        <div className="container">
                            <ul className="flex relative sm:justify-between">
                                {stickyData.map((data, index) => {
                                    return (
                                        <li key={index} datatype={data.id} className="pr-10 sm:px-1 relative tablet-mid:pr-[12px]">
                                            <Link href={`#${data.url}`} aria-label={`Navigate to ${data.title}`} className={`text-black ${visibleSections[0] === data.url ? 'border-b-4 border-pink activated' : ''} text-base font-bold transition-all hover:text-pink pb-[22px] ease-in-out`} onClick={(e) => handleStickyClick(e, data.url, index, data.url, 50)} >{data.title}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </section> : ''
            }
            <style jsx>
                {
                    `
                    .activated{
                        color:#FF3B84;
                        -webkit-text-stroke: 1px #FF3B84;
                    }
                    `
                }
            </style>
        </>


    )
}
