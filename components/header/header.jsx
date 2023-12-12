import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from './header.module.css';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeMenuItem, setActiveMenuItem] = useState(null);
	const toggleCross = () => {
		const svg = document.getElementById('hamSvg');
		svg.classList.toggle(`${styles.clicked}`);
	}
	const toggleSubMenu = (menuItem) => {
		setActiveMenuItem(activeMenuItem === menuItem ? null : menuItem);
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			// You can adjust the scroll threshold based on your design
			const scrollThreshold = 10;

			if (scrollY > scrollThreshold && !isScrolled) {
				setIsScrolled(true);
			} else if (scrollY <= scrollThreshold && isScrolled) {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		// Remove the scroll event listener when the component unmounts
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isScrolled]);
	return (
		<header className={`${styles.header} ${isScrolled ? styles.active : ''}`}>
			<div className="container">
				<div className={`${styles['main-menu-wrap']}`}>
					<div className={`${styles['imgWrap']} `}>
						<Link href="/set-1/homepage/" className="sitelogolink" data-cursor-expand>
							<Image src="/Clear_black.svg" alt="Clear Digital" height={100} width={100} />
							<Image src="/Clear_logo_pink.svg" alt="Cleardigital" height={100} width={100} />
						</Link>
					</div>

					<div className={`${styles['links-outer']}`}>
						<nav>
							<ul>
								<li>
									{/* <li className={`${styles.subActive}`}> */}
									<span><Link className={`${styles.menulink}`} href="/work" data-cursor-expand>Work</Link></span>
									<div className={`${styles['sub-menu']}`}>
										<div className="container">
											<div className="outer-wrapper text-black flex justify-between pt-[50px] pb-[100px]">
												<div className="col-two w-[33%]">
													<div className={`${styles.titleDescription}`}>
														<h2 className="graphic-effect-underline mb-5" data-underline-image="black-1">Work</h2>
														<p className='medium'>Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim.
															Vivamus gravida velit lorem ipsum dolor sit amet.</p>
														<Link className="link-btn black" href="/" data-cursor-expand>Overview</Link>
													</div>
												</div>
												<div className="col-two w-[53%]">
													<div className={`${styles.linksContainer}`}>
														<ul className="col-wrapper">
															<li className='w-full block'><Link href="/" data-cursor-expand >Case Studies</Link></li>
															<li className='w-full block'><Link href="/" data-cursor-expand>Clients</Link></li>
															<li className='w-full block'><Link href="/" data-cursor-expand>Industry Focus</Link></li>
															<li className='w-full block'><Link href="/" data-cursor-expand>Outcomes</Link></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li><span><Link className={`${styles.menulink}`} href="/approach" data-cursor-expand>Approach</Link></span>
									<div className={`${styles['sub-menu']}`}>
										<div className="container">
											<div className="outer-wrapper text-black flex justify-between pt-[50px] pb-[100px]">
												<div className="col-two w-[33%]">
													<div className={`${styles.titleDescription}`}>
														<h2 className="graphic-effect-underline mb-5" data-underline-image="black-1">Approach</h2>
														<p className='medium'>Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim.
															Vivamus gravida velit lorem ipsum dolor sit amet.</p>
														<Link className="link-btn black" href="/" data-cursor-expand>Overview</Link>
													</div>
												</div>
												<div className="col-two w-[53%]">
													<div className={`${styles.linksContainer}`}>
														<ul className="col-wrapper">
															<li className='w-full block'><Link href="/" data-cursor-expand >Case Studies</Link></li>
															<li className='w-full block'><Link href="/" data-cursor-expand>Clients</Link></li>
															<li className='w-full block'><Link href="/" data-cursor-expand>Industry Focus</Link></li>
															<li className='w-full block'><Link href="/" data-cursor-expand>Outcomes</Link></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li><span><Link className={`${styles.menulink}`} href="/services" data-cursor-expand>Services</Link></span>
									<div className={`${styles['sub-menu']}`}>
										<div className="container">
											<div className="outer-wrapper text-black flex justify-between pt-[50px] pb-[100px]">
												<div className="col-two w-[33%]">
													<div className={`${styles.titleDescription}`}>
														<h2 className="graphic-effect-underline mb-5" data-underline-image="black-1">Services</h2>
														<p className='medium'>Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim.
															Vivamus gravida velit lorem ipsum dolor sit amet.</p>
														<Link className="link-btn black" href="/" data-cursor-expand>Overview</Link>
													</div>
												</div>
												<div className="col-two w-[53%]">
													<div className={`${styles.linksContainer}`}>
														<ul className="col-wrapper">
															<li className='w-full block'><Link href="/" data-cursor-expand >Case Studies</Link></li>
															<li className='w-full block'><Link href="/" data-cursor-expand>Clients</Link></li>
															<li className='w-full block'><Link href="/" data-cursor-expand>Industry Focus</Link></li>
															<li className='w-full block'><Link href="/" data-cursor-expand>Outcomes</Link></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li><span><Link className={`${styles.menulink}`} href="/insights" data-cursor-expand>Insights</Link></span>
									<div className={`${styles['sub-menu']}`}>
										<div className="container">
											<div className="outer-wrapper text-black flex justify-between pt-[50px] pb-[100px]">
												<div className="col-two w-[33%]">
													<div className={`${styles.titleDescription}`}>
														<h2 className="graphic-effect-underline mb-5" data-underline-image="black-1">Insights</h2>
														<p className='medium'>Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim.
															Vivamus gravida velit lorem ipsum dolor sit amet.</p>
														<Link className="link-btn black" href="/" data-cursor-expand>Overview</Link>
													</div>
												</div>
												<div className="col-two w-[53%]">
													<div className={`${styles.linksContainer}`}>
														<ul className="col-wrapper">
															<li className='w-full block'><Link href="/" data-cursor-expand >Case Studies</Link></li>
															<li className='w-full block'><Link href="/" data-cursor-expand>Clients</Link></li>
															<li className='w-full block'><Link href="/" data-cursor-expand>Industry Focus</Link></li>
															<li className='w-full block'><Link href="/" data-cursor-expand>Outcomes</Link></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li><span><Link className={`${styles.menulink}`} href="/about" data-cursor-expand>About</Link></span>
									<div className={`${styles['sub-menu']}`}>
										<div className="container">
											<div className="outer-wrapper text-black flex justify-between pt-[50px] pb-[100px]">
												<div className="col-two w-[33%]">
													<div className={`${styles.titleDescription}`}>
														<h2 className="graphic-effect-underline mb-5" data-underline-image="black-1">Insights</h2>
														<p className='medium'>Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim.
															Vivamus gravida velit lorem ipsum dolor sit amet.</p>
														<Link className="link-btn black" href="/" data-cursor-expand>Overview</Link>
													</div>
												</div>
												<div className="col-two w-[53%]">
													<div className={`${styles.linksContainer}`}>
														<ul className="col-wrapper">
															<li className='w-full block'><Link href="/" data-cursor-expand >Case Studies</Link></li>
															<li className='w-full block'><Link href="/" data-cursor-expand>Clients</Link></li>
															<li className='w-full block'><Link href="/" data-cursor-expand>Industry Focus</Link></li>
															<li className='w-full block'><Link href="/" data-cursor-expand>Outcomes</Link></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>
							<div className="btn-wrap mt-0 ml-[50px] desktop:ml-[35px] lg:ml-0 lg:mt-[30px]">
								<Link href="/" className="pink-btn lg:w-full lg:text-center" data-cursor-expand>Let&#39;s talk</Link>
							</div>
						</nav>
					</div>
					<div id="toggleButton" className={`${styles['toggler']}`} onClick={toggleCross}>
						<svg id="hamSvg" width="35" height="26" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="toggleCross()">
							<g id="Menu">
								<rect id="Rectangle 8387" x="5" width="30" height="4" rx="2" fill="white" />
								<rect id="Rectangle 8388" y="11" width="35" height="4" rx="2" fill="white" />
								<rect id="Rectangle 8389" x="11" y="22" width="24" height="4" rx="2" fill="white" />
							</g>
						</svg>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
