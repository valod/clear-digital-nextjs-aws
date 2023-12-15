import React, { useState, useEffect } from "react";
import StickyStyle from "../components/styles/sticky.module.css";
import Link from 'next/link'
import $ from 'jquery';

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


    const [isSticky, setSticky] = useState(false);
    const [headerHeight, setheaderHeight] = useState(0);
    const [stick, setstick] = useState(0);
    const [visibleSections, setVisibleSections] = useState([]);
    const [winWidth, isWinWidth] = useState(0);

    useEffect(() => {
        const aa = false;
        var elementTop;
        setTimeout(function () {
            elementTop = $('#stickyNav ul').offset().top;
        }, 500)
        console.log(elementTop);
        $(window).on('scroll', function () {
            // Get the vertical scroll position
            var scrollPosition = $(window).scrollTop();

            // Get the element top position

            // Calculate the distance
            var distance = elementTop - scrollPosition;
            console.log(distance);

            if (distance < 154) {
                $('#stickyNav ul').css({ position: 'fixed', top: '154px' });
            } else {
                $('#stickyNav ul').css({ position: 'relative', top: 'auto' });
            }
        });

    }, []);

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
                    className={`${StickyStyle.mainSticky} py-0 h-[100px] bg-white bg-darkBlue transition-all duration-300 ease-in-out shadow-bottom-white-shadow `}
                    id={"stickyNav"}
                    data-aos="fade-in"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                >
                    <div className="container">
                        <ul className="flex relative sm:justify-between py-[38px]  z-[7] bg-white border-b border-black">
                            {stickyData.map((data, index) => {
                                return (
                                    <li
                                        key={index}
                                        datatype={data.id}
                                        className="pr-10 sm:px-1 relative tablet-mid:pr-[12px]"
                                    >
                                        <Link
                                            href={`/${data.url}`}
                                            aria-label={`Navigate to ${data.title}`}
                                            className={`text-black ${visibleSections[0] === data.url
                                                ? "border-b-4 border-white activated"
                                                : ""
                                                } text-[18px] transition-all hover:text-pink font-bold pb-[22px] ease-in-out`}
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
                </section>
            ) : (
                ""
            )}
            <style jsx>
                {`
          .activated {
            color: #FA198C;
          }
          .activated:after{
            content: '';
            postion:absolute;
            width: 100%;
            height: 7px;
            background: #FA198C;
          }
          #stickyNav{
            position: sticky;
          }
        `}
            </style>
        </>
    );
};

export default Sticky;

