import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <div className="footer-clear-digital bg-black pt-32">
        <div className="container">
          <div className="outer-wrap flex flex-wrap pb-[250px]">
            <div className="item small w-[34%]">
              <div className="img-wrap">
                <Link href="/" data-cursor-expand>
                  <Image src="/cleardigital-logo.png" alt="Cleardigital Logo" height={100} width={100} />
                </Link>
              </div>
              <div className="location-wrap">
                <div className="icon-wrap">
                  <Link href="/" className="icon" data-cursor-expand="">
                    <span className="sr-only">Address</span>
                  </Link>
                </div>
                <div className="location-title">
                  <p className="body-default">1570 The Alameda #330, San Jose, CA 95126</p>
                </div>
              </div>
              <div className="contact-wrap">
                <div className="icon-wrap">
                  <Link href="/" className="icon" data-cursor-expand="">
                    <span className="sr-only">Telephone</span>

                  </Link>
                </div>
                <div className="contact-title">
                  <Link href="tel:408.246.0000" className="contact-link text-white body-default"> 408.246.0000</Link>
                </div>
              </div>
              <div className="social-icons">
                <Link href="https://www.facebook.com/cleardigitalinc" target="_blank" className="icon" data-cursor-expand="">
                  <span className="sr-only">Facebook</span>

                </Link>
                <Link href="https://www.instagram.com/cleardigitalinc/" target="_blank" className="icon" data-cursor-expand="">
                  <span className="sr-only">Instagram</span>

                </Link>
                <Link href="https://www.linkedin.com/company/cleardigitalinc" target="_blank" className="icon" data-cursor-expand="">
                  <span className="sr-only">LinkedIn</span>


                </Link>
                <Link href="https://twitter.com/cleardigitalinc" target="_blank" className="icon" data-cursor-expand="">
                  <span className="sr-only">Twitter</span>


                </Link>
              </div>
            </div>
            <div className="item medium w-[17%]">
              <div className="list-item">
                <ul>
                  <li>
                    <Link href="/" className="subtitle text-white" data-cursor-expand="">Work </Link>
                  </li>
                  <li>
                    <Link href="/" className="subtitle text-white" data-cursor-expand="">Approach</Link>
                  </li>
                  <li>
                    <Link href="/" className="subtitle text-white" data-cursor-expand="">Services </Link>
                  </li>
                  <li>
                    <Link href="/" className="subtitle text-white" data-cursor-expand="">About </Link>
                  </li>
                  <li>
                    <Link href="/" className="subtitle text-white" data-cursor-expand="">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item large w-[49%]">
              <div className="content-wrap flex">
                <div className="img-box w-[30%]">
                  <div className="bg-img">
                    <Image src="/red_circle.png" alt="Red Circle" height={100} width={100} />
                  </div>
                </div>
                <div className="intro w-[70%] pl-4 text-white">
                  <h5 className="mb-5">2023 Fortune 500 B2B Homepage Rankings Report</h5>
                  <p className="medium">Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel
                    nunc non, tempus
                    blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.</p>


                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="title-wrap">
              <h4 className='text-white'>
                Confidently navigating <span className="text-pink">change</span>.
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-myrious bg-black">
        <div className="container">
          <div className="content-wrapper">
            <div className="logo-wrap">
              <Link href="/" data-cursor-expand="">
                <Image src="/myrious_logo.png" alt="Myrious" height={100} width={100} />
              </Link>
            </div>
            <div className="title-wrap">
              <p className="subtitle text-white">Clear Digital is a founding member of Myrious Group’s expertise-driven agencies.</p>
              <p className="body-default">Myrious Group is an independent holding company enabling forward-thinking brands
                to achieve breakthrough performance through power of orchestration. </p>
              <div className="bten-wrap">
                {/* <CTAButton
                  label = "Learn More"
                  href = "/"
                  target = "_self"

                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom py-10">
        <div className="container">
          <div className="wrapper flex justify-between">
            <div className="logo-outer">
              <div className="logo-inner-wrap">
                <Link href="/" passHref data-cursor-expand="">
                  <Image src="/clear.svg" alt="clear" height={100} width={100} className='max-w-[35px]' />
                </Link>
              </div>
            </div>
            <div className="copyright-list flex flex-wrap items-center">
              <ul className='flex align-middle'>
                <li>
                  <Link href="/" className="footer-links-small" data-cursor-expand="">
                    © 2023 Clear Digital, Inc.
                  </Link>
                </li>
                <li>
                  <Link href="/" className="footer-links-small" data-cursor-expand="">
                    Email Subscriptions
                  </Link>
                </li>
                <li>
                  <Link href="/" className="footer-links-small" data-cursor-expand="">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/" className="footer-links-small" data-cursor-expand="">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="footer-links-small" data-cursor-expand="">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="footer-links-small" data-cursor-expand="">
                    Cookie Settings
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Footer;
