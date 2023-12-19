import React, { useState, useEffect } from "react";
import StickyStyle from "../components/styles/sticky.module.css";
import Link from 'next/link'

function Sticky() {
    const stickyData = [
        {
            id: "1",
            title: "Overview",
            url: "overview",
        },
        {
            id: "2",
            title: "Our process",
            url: "our-process",
        },
        {
            id: "3",
            title: "Case studies",
            url: "case-studies",
        },
        {
            id: "4",
            title: "related-services",
            url: "related-services",
        },
        {
            id: "5",
            title: "Resources",
            url: "resources",
        },
    ];

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
    const [headerHeight, setheaderHeight] = useState(0);
    const [stick, setstick] = useState(0);
    const [visibleSections, setVisibleSections] = useState([]);
    const [winWidth, isWinWidth] = useState(0);


    const handleScroll = () => {
        const sticky = document.querySelector("#stickyNav .stickyOuter");
        const BannerHeight = document.querySelector(".banner-second")?.offsetHeight || 0;
        const headerHeight = document.querySelector("header")?.offsetHeight;
        if (sticky && headerHeight !== undefined) {
            const isStickyNow = window.scrollY > (BannerHeight - 100);
            setIsSticky(isStickyNow);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // const debounce = (func, delay) => {
    //     let timeoutId;
    //     return (...args) => {
    //         clearTimeout(timeoutId);
    //         timeoutId = setTimeout(() => {
    //             func(...args);
    //         }, delay);
    //     };
    // };

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollPosition(window.scrollY);
    //     };

    //     const handleSticky = () => {
    //         const sticky = document.querySelector("#stickyNav");
    //         let distanceFromTop;

    //         if (sticky) {
    //             distanceFromTop = sticky.getBoundingClientRect().top;
    //         }

    //         const headerHeight = document.querySelector("header")?.offsetHeight;

    //         if (sticky && headerHeight) {
    //             const isSticky = distanceFromTop < 105;

    //             if (isSticky) {
    //                 sticky.classList.add('sticky');
    //             } else {
    //                 sticky.classList.remove('sticky');
    //             }
    //         }
    //     };

    //     const debouncedHandleSticky = debounce(handleSticky, 50);

    //     // Use requestAnimationFrame for smooth scrolling
    //     const handleScrollRAF = () => {
    //         requestAnimationFrame(() => {
    //             handleScroll();
    //             debouncedHandleSticky();
    //         });
    //     };

    //     window.addEventListener('scroll', handleScrollRAF);

    //     // Cleanup
    //     return () => {
    //         window.removeEventListener('scroll', handleScrollRAF);
    //     };
    // }, []);


    // useEffect(() => {
    //     setTimeout(() => {
    //         let lastScrollTop = 0;
    //         const sticky = document.querySelector("#stickyNav");
    //         var topp = sticky?.getBoundingClientRect().top;
    //         const headr = document.querySelector("header")?.offsetHeight || 0;
    //         const handleNavScroll = () => {
    //             topp = sticky?.getBoundingClientRect().top;
    //             console.log(topp);
    //             const currentScrollTop = window.scrollY;
    //             const headr = document.querySelector("header")?.offsetHeight || 0;

    //             if (topp < 154) {
    //                 // If scrolled down more than 154 pixels from the top, add the 'fix' class
    //                 sticky.style.top = '154px'
    //                 sticky.style.position = 'fixed'
    //             } else {
    //                 // If not, remove the 'fix' class

    //             }

    //             lastScrollTop = currentScrollTop;
    //         };


    //         window.addEventListener("scroll", handleNavScroll);

    //         return () => {
    //             window.removeEventListener("scroll", handleNavScroll);
    //         };
    //     }, 100);
    // }, []);
    // useEffect(() => {
    //     const headerElement = document.getElementById('header'); // Replace with your actual header ID

    //     if (headerElement) {
    //         const headerHeight = headerElement.clientHeight;
    //         setHeight(headerHeight);
    //     }
    // }, []);
    const auto = {
        top: `auto`,
    };
    const headheight = {
        top: headerHeight,
    };
    const toggleSubMenu = (event) => {
        // const li = document.querySelectorAll(`.stickyOuter ul li a`)
        const parentListItem = event.target.closest('li');
        if (parentListItem) {
            const parentList = parentListItem.parentNode;
            const hasOpenSiblings = parentList.querySelectorAll(':scope > li a');
            for (let i = 0; i < hasOpenSiblings.length; i++) {
                const sibling = hasOpenSiblings[i];
                if (sibling !== parentListItem) {
                    sibling.classList.remove(StickyStyle.activated);
                }
            }
        }
        event.target.classList.add(StickyStyle.activated);
    };
    const handleStickyClick = (e, id, borderActive, sectionId, offset) => {


        const x = document.querySelectorAll("section");
        e.preventDefault();
        const headrHeight = document.querySelector("header")?.offsetHeight || 0;
        const stickyHeight =
            document.getElementById("stickyNav")?.offsetHeight || 0;
        // console.log("stick", stickyHeight);

        x.forEach((item) => {
            const attr = item.getAttribute("id");
            const scrollPosition =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
            if (attr === id) {
                const topp = item.getBoundingClientRect().top;
                // console.log(topp);
                const d = scrollPosition + topp - 154 - stickyHeight;
                if (topp < 0) {
                    // d = d - headrHeight;
                    d - headrHeight;
                }

                window.scrollTo({
                    top: d,
                    behavior: "smooth",
                });
            }
        });
    };

    const handleIntersection = (entries) => {
        const visibleSections = entries
            .filter((entry) => entry.isIntersecting)
            .map((entry) => entry.target.id);

        setVisibleSections(visibleSections);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.5,
        });

        const sectionElements = document.querySelectorAll("section:not(.sticky");

        sectionElements.forEach((sectionElement) => {
            observer.observe(sectionElement);
        });

        return () => {
            observer.disconnect();
        };
    }, [visibleSections]);

    useEffect(() => {
        const handleResize = () => {
            isWinWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        // Initial call to set window size
        handleResize();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    return (
        <>
            {winWidth > 991 ? (
                <section
                    className={`${StickyStyle.mainSticky} block py-0 h-[100px] bg-white transition-all duration-300 ease-in-out shadow-bottom-white-shadow `}
                    id={"stickyNav"}
                >
                    <div className={`${isSticky ? 'sticky' : ''} stickyOuter border-b border-black  z-[10] bg-white`}>
                        <div className="container">
                            <ul className="flex relative sm:justify-between py-[4.1rem]">
                                {stickyData.map((data, index) => {
                                    return (
                                        <li
                                            key={index}
                                            datatype={data.id}
                                            className="mr-[5.5rem] sm:px-1 text-[16px] xl-up:text-[1.5rem] font-bold  relative tablet-mid:pr-[1rem]"
                                            onClick={toggleSubMenu}
                                        >
                                            <Link
                                                href={`/${data.url}`}
                                                aria-label={`Navigate to ${data.title}`}
                                                className={`text-black ${visibleSections[0] === data.url
                                                    ? `${StickyStyle.activated}`
                                                    : ""
                                                    }transition-all hover:text-pink pb-[22px] ease-in-out`}
                                                onClick={(e) =>
                                                    handleStickyClick(e, data.url, index, data.url, 50)
                                                }
                                            >
                                                {data.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </section>
            ) : (
                ""
            )}
        </>
    );
};

export default Sticky;

