import React from 'react';
import Link from 'next/link';
import styles from './styles/herobanner.module.css';

const HomepageHero = () => {
  return (
    <section className="hero__banner grid__parallax height__full">
      <div className="container">
        <div className="hero__content">
          <h5 className="eyebrow__text">
            Hello! We are Clear Digital.
          </h5>
          <h1> We build B2B websites and <span className="underline-text">digital</span> brand experiences.</h1>
          <Link href="/" className="btn-default" target="_self">
            Our Approach
          </Link>
        </div>
      </div>
      <div className="bg-img dark__overlay">
        <video className="video-bg overlay" poster="https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/iStock-1280582431-1.webp" autoPlay loop muted >
          <source src="https://media.istockphoto.com/id/1372283447/video/attractive-woman-wearing-virtual-reality-headset-augmented-reality-creative-lady-swiping.mp4?s=mp4-640x640-is&amp;k=20&amp;c=Flz0Jza76gPaFZyEJ8X6114fy__lJc1m_4_yKZRZsVo=" type="video/mp4"></source>
        </video>
      </div>
    </section>
  );
};

export default HomepageHero;

