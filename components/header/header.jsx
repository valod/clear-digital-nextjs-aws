import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from './header.module.css';

const Header = (dropLabel, label, url, heading, subText) => {
	const navData = [
		{
			dropLabel: "Work",
			url: "/",
			subMenu: [
				{
					description: [
						{
							heading: "Insights",
							subText: "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
							label: "Overview",
							url: "/"
						}
					]
				},
				{
					subItems: [
						{
							label: "White Papers",
							url: "/"
						},
						{
							label: "Videos",
							url: "/"
						},
						{
							label: "Infographics",
							url: "/"
						},
						{
							label: "Podcasts",
							url: "/"
						},
						{
							label: "Client in the News",
							url: "/"
						},
						{
							label: "Press Releases",
							url: "/"
						}
					]
				}
			]
		},
		{
			dropLabel: "Approach",
			url: "/",
			subMenu: [
				{
					description: [
						{
							heading: "Insights",
							subText: "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
							label: "Overview",
							url: "/"
						}
					]
				},
				{
					subItems: [
						{
							label: "White Papers",
							url: "/"
						},
						{
							label: "Videos",
							url: "/"
						},
						{
							label: "Infographics",
							url: "/"
						},
						{
							label: "Podcasts",
							url: "/"
						},
						{
							label: "Client in the News",
							url: "/"
						},
						{
							label: "Press Releases",
							url: "/"
						}
					]
				}
			]
		},
		{
			dropLabel: "Services",
			url: "/",
			subMenu: [
				{
					description: [
						{
							heading: "Insights",
							subText: "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
							label: "Overview",
							url: "/"
						}
					]
				},
				{
					subItems: [
						{
							label: "White Papers",
							url: "/"
						},
						{
							label: "Videos",
							url: "/"
						},
						{
							label: "Infographics",
							url: "/"
						},
						{
							label: "Podcasts",
							url: "/"
						},
						{
							label: "Client in the News",
							url: "/"
						},
						{
							label: "Press Releases",
							url: "/"
						}
					]
				}
			]
		},
		{
			dropLabel: "Insights",
			url: "/",
			subMenu: [
				{
					description: [
						{
							heading: "Insights",
							subText: "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
							label: "Overview",
							url: "/"
						}
					]
				},
				{
					subItems: [
						{
							label: "White Papers",
							url: "/"
						},
						{
							label: "Videos",
							url: "/"
						},
						{
							label: "Infographics",
							url: "/"
						},
						{
							label: "Podcasts",
							url: "/"
						},
						{
							label: "Client in the News",
							url: "/"
						},
						{
							label: "Press Releases",
							url: "/"
						}
					]
				}
			]
		},
		{
			dropLabel: "About",
			url: "/",
			subMenu: [
				{
					description: [
						{
							heading: "Insights",
							subText: "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
							label: "Overview",
							url: "/"
						}
					]
				},
				{
					subItems: [
						{
							label: "White Papers",
							url: "/"
						},
						{
							label: "Videos",
							url: "/"
						},
						{
							label: "Infographics",
							url: "/"
						},
						{
							label: "Podcasts",
							url: "/"
						},
						{
							label: "Client in the News",
							url: "/"
						},
						{
							label: "Press Releases",
							url: "/"
						}
					]
				}
			]
		}
	];

	const [scrolled, setScrolled] = useState(false);
	const [slideDown, setSlideDown] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(0);

	// handle subMenu slide down
	const handleMouseEnter = () => {
		setSlideDown(true);
	};

	const handleMouseLeave = () => {
		setSlideDown(false);
	};

	// change bgColor on scroll
	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 10;
			if (isScrolled !== scrolled) {
				setScrolled(isScrolled);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrolled]);

	// toggle menu on smaller width
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const toggleSubMenu = (index) => {
		const newSubMenuState = Array(navData.length).fill(false);
		newSubMenuState[index] = !isSubMenuOpen[index];
		setIsSubMenuOpen(newSubMenuState);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 992 && isMenuOpen) {
				setIsMenuOpen(false);
				setIsSubMenuOpen(0);
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [isMenuOpen]);

	return (
		<header className={`group fixed w-full top-0 left-0 z-50 transition-all duration-700 ease hover:bg-white ${scrolled ? 'bg-white' : ''} ${isMenuOpen ? 'lg:bg-white' : ''}`}>
			<div className='container'>
				<div className='wrapper flex justify-between items-center lg:py-[3rem]'>
					<Link href={"/"}>
						<svg width="111" height="35" viewBox="0 0 111 35" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_813_210)">
								<path d="M105.606 24.228C102.629 24.228 100.298 26.5741 100.298 29.5684C100.298 32.5626 102.629 35 105.606 35C108.583 35 111 32.6143 111 29.5684C111 26.5224 108.631 24.228 105.606 24.228ZM108.268 29.5684C108.268 31.0974 107.124 32.2489 105.606 32.2489C104.089 32.2489 103.032 31.0956 103.032 29.5684C103.032 28.0411 104.162 26.9792 105.606 26.9792C107.05 26.9792 108.268 28.1169 108.268 29.5684Z" fill="#FA198C" />
								<path d="M26.4464 0H30.2595C31.1759 0 31.9604 0.313731 32.6148 0.937746C33.2691 1.56349 33.5963 2.33747 33.5963 3.2597V35H26.4464V0Z" fill={scrolled ? '#000' : '#fff'} className={`transition-fill duration-300 ease group-hover:fill-black ${isMenuOpen ? 'lg:fill-[black!important]' : ''}`} />
								<path d="M79.5278 21.2355C78.5634 21.6975 77.7206 22.1147 75.4989 22.5198L73.123 23.0145C71.8845 23.3455 71.0075 23.5316 70.4371 24.2987C69.918 24.9986 69.7142 25.7484 69.7142 26.4724C69.7142 27.4602 70.0242 28.2514 70.6443 28.8444C71.2644 29.3719 72.1586 29.6339 73.3303 29.6339C76.2851 29.6339 77.2427 29.2288 78.4709 28.0532C79.5723 26.9999 79.5278 25.5519 79.5278 23.7057V21.2373V21.2355ZM81.7752 33.3866C80.4716 34.0572 78.6473 34.6312 77.0388 34.8622C76.1686 34.9863 74.3032 35.0414 72.2973 34.9673C69.8204 34.876 67.6501 34.3243 65.7898 33.0401C63.9312 31.7559 63.0011 29.6322 63.0011 26.669C63.0011 23.9023 63.8439 21.9285 65.5311 20.7425C67.2184 19.5566 69.3699 18.7671 71.9873 18.3723C71.9873 18.3723 74.2587 18.0431 74.8788 17.9776C77.9073 17.5828 79.4233 16.7261 79.4233 15.4091C79.4233 14.4214 78.8888 13.7801 77.8217 13.4836C76.7528 13.1871 75.773 13.0389 74.8788 13.0389C73.9144 13.0389 73.0528 13.1716 72.2973 13.4336C71.5385 13.6974 70.9886 14.1921 70.6443 14.9161H63.724C63.998 12.8751 64.9642 11.1961 66.6155 9.87744C68.4757 8.36222 71.1257 7.60547 74.5687 7.60547C78.4246 7.60547 81.3161 8.23121 83.2449 9.48269C85.2405 10.8014 86.2409 12.6441 86.2409 15.0144V24.6038C86.2409 27.2378 85.8246 29.3581 84.7437 30.7785C83.8633 31.9334 83.2363 32.4523 81.7769 33.39" fill={scrolled ? '#000' : '#fff'} className={`transition-fill duration-300 ease group-hover:fill-black ${isMenuOpen ? 'lg:fill-[black!important]' : ''}`} />
								<path d="M88.7842 35.0002V21.3202C88.7842 18.7517 89.1799 16.5952 89.973 14.849C90.7627 13.1045 91.847 11.7048 93.2259 10.6516C94.5329 9.66384 96.066 8.93984 97.8218 8.47786C99.5776 8.01761 101.385 7.78662 103.243 7.78662H104.276V14.8008H101.9C99.903 14.8008 98.423 15.2627 97.4603 16.1832C96.4959 17.1072 96.0146 18.5535 96.0146 20.5307V31.613C96.0146 33.485 94.4284 35.0019 92.4722 35.0019H88.7842V35.0002Z" fill={scrolled ? '#000' : '#fff'} className={`transition-fill duration-300 ease group-hover:fill-black ${isMenuOpen ? 'lg:fill-[black!important]' : ''}`} />
								<path d="M21.7015 27.6723C20.8707 26.8966 19.6203 26.8587 18.7073 27.5344C17.2221 28.6325 15.7199 29.2444 13.6215 29.2444C9.51551 29.2444 6.42019 25.8589 6.42019 21.3684V21.2943C6.42019 16.8469 9.51722 13.4923 13.6215 13.4923C15.3225 13.4923 16.859 13.9871 18.4332 15.0662C19.4096 15.7367 20.7406 15.5213 21.5182 14.6266L23.9729 11.7996C21.1362 8.98806 17.9553 7.73486 13.6592 7.73486C5.87204 7.73486 0 13.5958 0 21.3684V21.4425C0 29.172 5.77611 35.0019 13.4365 35.0019C17.9519 35.0019 21.0592 33.6401 24.1613 30.3011L24.3275 30.1218L21.7015 27.6723Z" fill={scrolled ? '#000' : '#fff'} className={`transition-fill duration-300 ease group-hover:fill-black ${isMenuOpen ? 'lg:fill-[black!important]' : ''}`} />
								<path d="M58.0728 11.1924C55.8014 8.82048 52.5982 7.63623 48.4682 7.63623C44.3383 7.63623 41.4794 8.85496 39.2748 11.2907C37.1404 13.6609 36.0732 16.9551 36.0732 21.1698C36.0732 25.3845 37.1747 28.9751 39.3775 31.3454C41.5804 33.7828 44.6449 34.9998 48.571 34.9998C51.8068 34.9998 54.4927 34.2431 56.6271 32.7278C58.7597 31.2798 60.2072 29.1716 60.9643 26.4049L56.5637 26.4015C55.3252 26.4015 54.1741 26.9514 53.2971 27.8323C52.5794 28.5511 51.2861 29.2699 48.9838 29.2699C47.1921 29.2699 45.8491 28.7441 44.955 27.6892C43.9906 26.7014 43.4732 25.1862 43.4064 23.1452H61.2709C61.2709 23.1452 61.3771 22.3437 61.3771 22.0213V21.8748C61.3771 17.5274 60.2757 13.6299 58.0728 11.1924ZM43.4064 18.6996C43.475 16.9878 43.9906 15.6709 44.955 14.7486C45.9176 13.8264 47.1578 13.3661 48.6738 13.3661C50.3251 13.3661 51.5995 13.8281 52.4954 14.7486C53.3228 15.6054 53.8024 16.9206 53.9412 18.6996H43.4064Z" fill={scrolled ? '#000' : '#fff'} className={`transition-fill duration-300 ease group-hover:fill-black ${isMenuOpen ? 'lg:fill-[black!important]' : ''}`} />
							</g>
							<defs>
								<clipPath id="clip0_813_210">
									<rect width="111" height="35" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</Link>
					<div className={`${styles.alignNav} nav__wrap lg:absolute lg:left-0 lg:top-[100%] lg:w-full lg:overflow-y-scroll lg:bg-white transition-max-height duration-700 ease ${isMenuOpen ? 'lg:max-h-[92vh]' : 'lg:max-h-0'}`}>
						<div className='lg-up:flex lg-up:items-center lg-up:gap-x-[5rem] lg:min-h-[calc(100vh-95px)]'>
							<nav className=''>
								<ul className='lg-up:flex lg-up:gap-x-[5rem]'>
									{navData.map((item, index) => (
										<li key={index} className='menu lg:border-b lg:border-black/[0.2]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
											<div className='lg:relative'>
												<p className={`cursor-pointer text-[16px] xl-up:text-[1.6rem] font-bold py-[3rem] lg-up:py-[4rem] transition-all duration-700 ease group-hover:text-black ${scrolled ? 'text-black' : 'lg-up:text-white'} ${isSubMenuOpen[index] ? 'lg:border-b lg:border-black/[0.2]' : ''}`} onClick={() => toggleSubMenu(index)}>{item.dropLabel}</p>
												<span className='lg-up:hidden cursor-pointer absolute top-1/2 -translate-y-1/2 right-0 border-[0.4rem] border-pink rounded-full h-[3.5rem] w-[3.5rem] inline-block' onClick={() => toggleSubMenu(index)}>
													<span className='bg-pink rounded-full w-[1.3rem] h-[0.4rem] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'></span>
													<span className={`bg-pink rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${isSubMenuOpen[index] ? 'w-[1.3rem] h-[0.4rem]' : 'w-[0.4rem] h-[1.3rem]'}`}></span>
												</span>
											</div>
											<ul className={`sub__menu bg-white  lg-up:absolute lg-up:left-0 lg-up:top-[100%] w-full transition-max-height duration-700 lg:duration-500 ease overflow-hidden lg:max-h-0 ${isSubMenuOpen[index] ? 'lg:max-h-[100vh] lg:h-auto' : 'lg:max-h-0'} ${slideDown ? 'lg-up:max-h-[100vh] lg-up:h-auto lg-up:border lg-up:border-gray' : 'lg-up:max-h-0'}`}>
												<li className='container lg:p-[0!important]'>
													<ul className='lg-up:flex py-[6rem] min-h-[44rem]'>
														{item.subMenu.map((subMenuItem, subIndex) => (
															<li key={subIndex} className='grow-0 shrink-0 flex-[50%] '>
																{subMenuItem.description && (
																	<div className='max-w-[45rem]'>
																		{subMenuItem.description.map((desc, descIndex) => (
																			<div key={descIndex}>
																				<h2>{desc.heading}</h2>
																				<p className='text-[16px] xl-up:text-[1.6rem] mt-[2rem]'>{desc.subText}</p>
																				<Link href={desc.url} className='btn-default dark-btn-default mt-[2rem]'>{desc.label}</Link>
																			</div>
																		))}
																	</div>
																)}
																{subMenuItem.subItems && (
																	<ul className='md-up:columns-2 gap-[3rem] lg:mt-[2.5rem]'>
																		{subMenuItem.subItems.map((subItem, subItemIndex) => (
																			<li key={subItemIndex} className="py-[1.5rem]">
																				<Link href={subItem.url} className='btn-default'>{subItem.label}</Link>
																			</li>
																		))}
																	</ul>
																)}
															</li>
														))}
													</ul>
												</li>
											</ul>
										</li>
									))}
								</ul>
							</nav>
							<div className="lg:pb-[100px] lg:mt-[3rem]">
								<Link href={'/'} className="pink-btn lg:text-center">Lets Talk</Link>
							</div>
						</div>
					</div>
					<button aria-label="first link" className={`w-[30px] h-[20px] relative transition-transform duration-500 cursor-pointer lg-up:hidden`} onClick={toggleMenu}>
						<ul>
							<li className={`h-[3px] absolute w-full rounded transition-all duration-300 ease-in-out bg-white group-hover:bg-black left-0 ${isMenuOpen ? 'transform rotate-[135deg] top-[12px] bg-[black!important]' : 'top-0'} ${scrolled ? 'lg:bg-black' : ''}`}></li>
							<li className={`h-[3px] absolute w-full rounded transition-all duration-300 ease-in-out bg-white group-hover:bg-black ${isMenuOpen ? 'opacity-0 left-[-60px] bg-[black!important]' : 'top-[9px] left-0'} ${scrolled ? 'lg:bg-black' : ''}`}></li>
							<li className={`h-[3px] absolute w-full rounded transition-all duration-300 ease-in-out bg-white group-hover:bg-black left-0 ${isMenuOpen ? 'transform rotate-[-135deg] top-[12px] bg-[black!important]' : 'top-[18px]'} ${scrolled ? 'lg:bg-black' : ''}`}></li>
						</ul>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;

