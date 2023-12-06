// Import React and any necessary Next.js modules
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Create your Next.js component
const HomepageHero = () => {
  return (
    <section id="HomepageHero" className="hero-banner blade has-video-bg dark has-grid-bg">
      <div className="container blade-content">
        <div className="content-wrap">
          <div className="subtitle">
            Hello! We are Clear Digital.
          </div>
          <h1 className="h1">
            We build B2B websites and <span className="marker-effect marker-underline on">digital</span> brand experiences!!!
          </h1>
          <Link href="/approach/" className="cta-button button-large text margin-start-30 white-active" target="_self">
            Our Approach!
          </Link>
        </div>
      </div>
      <div className="bg-container overlay" data-astro-cid-g47crtsm="" style={{ '--cssImg': 'url(https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/iStock-1280582431-1.webp)' }}>
        <video className="video-bg overlay" poster="https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/iStock-1280582431-1.webp" autoPlay loop muted data-astro-cid-g47crtsm="" style={{ '--cssImg': 'url(https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/iStock-1280582431-1.webp)' }}>
          <source src="https://media.istockphoto.com/id/1372283447/video/attractive-woman-wearing-virtual-reality-headset-augmented-reality-creative-lady-swiping.mp4?s=mp4-640x640-is&amp;k=20&amp;c=Flz0Jza76gPaFZyEJ8X6114fy__lJc1m_4_yKZRZsVo=" type="video/mp4" data-astro-cid-g47crtsm="" style={{ '--cssImg': 'url(https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/iStock-1280582431-1.webp)' }}></source>
        </video>
      </div>
    </section>
  );
};

export default HomepageHero;
