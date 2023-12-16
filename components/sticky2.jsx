import React, { useState, useEffect } from "react";
import StickyStyle from "../components/styles/sticky.module.css";
import Link from 'next/link'

function Sticky() {
    const stickyData = [
        {
            id: "1",
            title: "Services",
            url: "services",
        },
        {
            id: "2",
            title: "Velocity Workshop",
            url: "velocity-workshop",
        },
        {
            id: "3",
            title: "Case studies",
            url: "case-studies",
        },
        {
            id: "4",
            title: "FAQ",
            url: "faq",
        },
    ];


    const [isSticky, setSticky] = useState(false);
    const [headerHeight, setheaderHeight] = useState(0);
    const [stick, setstick] = useState(0);
    const [visibleSections, setVisibleSections] = useState([]);
    const [winWidth, isWinWidth] = useState(0);


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
                    className={`${StickyStyle.mainSticky} py-0 h-[100px] bg-white transition-all duration-300 ease-in-out shadow-bottom-white-shadow `}
                    id={"stickyNav"}
                    data-aos="fade-in"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                >
                    <div className="stickyOuter border-b border-black  z-[10] bg-white">
                        <div className="container">
                            <ul className="flex relative sm:justify-between py-[38px]">
                                {stickyData.map((data, index) => {
                                    return (
                                        <li
                                            key={index}
                                            datatype={data.id}
                                            className="pr-10 sm:px-1 relative tablet-mid:pr-[12px]"
                                            onClick={toggleSubMenu}
                                        >
                                            <Link
                                                href={`/${data.url}`}
                                                aria-label={`Navigate to ${data.title}`}
                                                className={`text-black ${visibleSections[0] === data.url
                                                    ? `${StickyStyle.activated}`
                                                    : ""
                                                    } text-[16px] transition-all hover:text-pink font-bold pb-[22px] ease-in-out`}
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

