import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <div className="footer-clear-digital bg-black pt-32">
        <div className="container">
          <div className="outer-wrap flex flex-wrap lg-up:pb-[25rem] lg:pb-[10rem]">
            <div className="item small lg-up:w-[34%] tablet:w-1/2 phablet:w-1/2 sm:w-full">
              <div className="img-wrap mb-[5rem]">
                <Link href="/" data-cursor-expand>
                  <Image src="/cleardigital-logo.png" alt="Cleardigital Logo" height={100} width={100} />
                </Link>
              </div>
              <div className="location-wrap mb-[2.5rem] flex">
                <div className="icon-wrap mr-[2rem]">
                  <Link href="/" className="icon" data-cursor-expand="">
                    <span className="sr-only">Address</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                        stroke="#FA198C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                        stroke="#FA198C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="location-title">
                  <p className="medium">1570 The Alameda #330, San Jose, CA 95126</p>
                </div>
              </div>
              <div className="contact-wrap mb-[2.5rem] flex">
                <div className="icon-wrap mr-[2rem]">
                  <Link href="/" className="icon" data-cursor-expand="">
                    <span className="sr-only">Telephone</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z"
                        stroke="#FA198C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 18H12.01" stroke="#FA198C" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="contact-title">
                  <Link href="tel:408.246.0000" className="contact-link text-white medium">408.246.0000</Link>
                </div>
              </div>
              <div className="social-icons flex items-center gap-[2.7rem]">
                <a href="https://www.facebook.com/cleardigitalinc" target="_blank" className='group'>
                  <span className="sr-only">Facebook</span>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 0C5.60753 0 0 5.60753 0 12.5C0 19.392 5.60753 25 12.5 25C19.392 25 25 19.392 25 12.5C25 5.60753 19.393 0 12.5 0ZM15.6086 12.9401H13.575V20.1885H10.5615C10.5615 20.1885 10.5615 16.2279 10.5615 12.9401H9.12904V10.3782H10.5615V8.7212C10.5615 7.53444 11.1254 5.68003 13.6027 5.68003L15.8357 5.68859V8.1754C15.8357 8.1754 14.4788 8.1754 14.2149 8.1754C13.9511 8.1754 13.576 8.30732 13.576 8.87326V10.3787H15.872L15.6086 12.9401Z"
                      fill="#989898" className='group-hover:fill-pink transition-all' />
                  </svg>
                </a>
                <a href="https://www.instagram.com/cleardigitalinc/" target="_blank" className='group'>
                  <span className="sr-only">Instagram</span>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8926 12.5C14.8926 13.8214 13.8214 14.8926 12.5 14.8926C11.1786 14.8926 10.1074 13.8214 10.1074 12.5C10.1074 11.1786 11.1786 10.1074 12.5 10.1074C13.8214 10.1074 14.8926 11.1786 14.8926 12.5Z"
                      fill="#989898" className='group-hover:fill-pink transition-all' />
                    <path d="M18.0954 8.26716C17.9804 7.9555 17.7969 7.6734 17.5585 7.44185C17.327 7.20343 17.0451 7.01994 16.7332 6.90493C16.4803 6.8067 16.1003 6.68978 15.4005 6.65793C14.6435 6.62341 14.4165 6.61597 12.5 6.61597C10.5833 6.61597 10.3564 6.62321 9.59953 6.65774C8.89972 6.68978 8.51958 6.8067 8.26686 6.90493C7.95501 7.01994 7.67291 7.20343 7.44155 7.44185C7.20313 7.6734 7.01965 7.95531 6.90444 8.26716C6.80621 8.52007 6.68929 8.90021 6.65744 9.60001C6.62292 10.3568 6.61548 10.5838 6.61548 12.5005C6.61548 14.417 6.62292 14.644 6.65744 15.401C6.68929 16.1008 6.80621 16.4808 6.90444 16.7337C7.01965 17.0455 7.20294 17.3274 7.44136 17.559C7.67291 17.7974 7.95482 17.9809 8.26667 18.0959C8.51958 18.1943 8.89972 18.3113 9.59953 18.3431C10.3564 18.3776 10.5831 18.3849 12.4998 18.3849C14.4167 18.3849 14.6437 18.3776 15.4003 18.3431C16.1002 18.3113 16.4803 18.1943 16.7332 18.0959C17.3592 17.8544 17.854 17.3597 18.0954 16.7337C18.1937 16.4808 18.3106 16.1008 18.3426 15.401C18.3771 14.644 18.3844 14.417 18.3844 12.5005C18.3844 10.5838 18.3771 10.3568 18.3426 9.60001C18.3108 8.90021 18.1938 8.52007 18.0954 8.26716ZM12.5 16.1861C10.4643 16.1861 8.81408 14.536 8.81408 12.5003C8.81408 10.4646 10.4643 8.81457 12.5 8.81457C14.5356 8.81457 16.1858 10.4646 16.1858 12.5003C16.1858 14.536 14.5356 16.1861 12.5 16.1861ZM16.3315 9.53021C15.8558 9.53021 15.4702 9.14454 15.4702 8.66885C15.4702 8.19315 15.8558 7.80749 16.3315 7.80749C16.8072 7.80749 17.1929 8.19315 17.1929 8.66885C17.1927 9.14454 16.8072 9.53021 16.3315 9.53021Z"
                      fill="#989898" className='group-hover:fill-pink transition-all' />
                    <path d="M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM19.6344 15.4593C19.5997 16.2233 19.4782 16.745 19.3008 17.2016C18.928 18.1658 18.1658 18.928 17.2016 19.3008C16.7452 19.4782 16.2233 19.5995 15.4594 19.6344C14.694 19.6693 14.4495 19.6777 12.5002 19.6777C10.5507 19.6777 10.3064 19.6693 9.54075 19.6344C8.77686 19.5995 8.255 19.4782 7.79858 19.3008C7.31945 19.1206 6.88572 18.8381 6.52714 18.4729C6.16207 18.1145 5.87959 17.6805 5.69935 17.2016C5.52197 16.7452 5.40047 16.2233 5.36575 15.4594C5.33047 14.6938 5.32227 14.4493 5.32227 12.5C5.32227 10.5507 5.33047 10.3062 5.36556 9.54075C5.40028 8.77666 5.52158 8.255 5.69897 7.79839C5.87921 7.31945 6.16188 6.88553 6.52714 6.52714C6.88553 6.16188 7.31945 5.8794 7.79839 5.69916C8.255 5.52177 8.77666 5.40047 9.54075 5.36556C10.3062 5.33066 10.5507 5.32227 12.5 5.32227C14.4493 5.32227 14.6938 5.33066 15.4593 5.36575C16.2233 5.40047 16.745 5.52177 17.2016 5.69897C17.6805 5.87921 18.1145 6.16188 18.4731 6.52714C18.8381 6.88572 19.1208 7.31945 19.3008 7.79839C19.4784 8.255 19.5997 8.77666 19.6346 9.54075C19.6695 10.3062 19.6777 10.5507 19.6777 12.5C19.6777 14.4493 19.6695 14.6938 19.6344 15.4593Z"
                      fill="#989898" className='group-hover:fill-pink transition-all' />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/cleardigitalinc" target="_blank" className='group'>
                  <span className="sr-only">LinkedIn</span>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 0C10.0277 0 7.61099 0.733112 5.55538 2.10663C3.49976 3.48015 1.89761 5.43238 0.951511 7.71645C0.00541602 10.0005 -0.242126 12.5139 0.24019 14.9386C0.722505 17.3634 1.91301 19.5907 3.66117 21.3388C5.40933 23.087 7.63661 24.2775 10.0614 24.7598C12.4861 25.2421 14.9995 24.9946 17.2835 24.0485C19.5676 23.1024 21.5199 21.5002 22.8934 19.4446C24.2669 17.389 25 14.9723 25 12.5C25 9.18479 23.683 6.00537 21.3388 3.66116C18.9946 1.31696 15.8152 0 12.5 0ZM8.86514 19.0789H6.13816V10.2944H8.86514V19.0789ZM7.5 9.09539C7.18617 9.09669 6.87899 9.00491 6.6173 8.83167C6.35561 8.65842 6.15115 8.41148 6.02978 8.12206C5.9084 7.83264 5.87555 7.51373 5.93539 7.20565C5.99522 6.89756 6.14505 6.61413 6.36593 6.39118C6.58681 6.16823 6.86883 6.01577 7.17635 5.95306C7.48386 5.89036 7.80306 5.92023 8.0936 6.03891C8.38414 6.15758 8.63298 6.35972 8.80865 6.61979C8.98433 6.87985 9.07897 7.18616 9.0806 7.5C9.08148 7.92083 8.9157 8.3249 8.61952 8.62386C8.32333 8.92282 7.92083 9.09235 7.5 9.09539ZM19.0789 19.0789H16.3536V14.8026C16.3536 13.7829 16.3339 12.4753 14.9359 12.4753C13.5378 12.4753 13.2911 13.5839 13.2911 14.7286V19.0789H10.5757V10.2944H13.1924V11.4918H13.2303C13.5938 10.801 14.4836 10.0724 15.8109 10.0724C18.5707 10.0724 19.0789 11.8914 19.0789 14.2533V19.0789Z"
                      fill="#989898" className='group-hover:fill-pink transition-all' />
                  </svg>
                </a>
                <a href="https://twitter.com/cleardigitalinc" target="_blank" className='group'>
                  <span className="sr-only">Twitter</span>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM18.2074 9.74617C18.2129 9.86919 18.2156 9.99279 18.2156 10.117C18.2156 13.9082 15.3297 18.28 10.0523 18.2802C8.43201 18.2802 6.92425 17.8053 5.65453 16.9914C5.87902 17.0179 6.10752 17.0311 6.33888 17.0311C7.68318 17.0311 8.92029 16.5726 9.90238 15.803C8.64639 15.7797 7.58743 14.9502 7.22198 13.8102C7.39689 13.8437 7.57675 13.862 7.76119 13.862C8.02307 13.862 8.27675 13.8268 8.51784 13.7609C7.20501 13.4981 6.21605 12.3379 6.21605 10.9486C6.21605 10.9356 6.21605 10.924 6.21643 10.9119C6.60305 11.1269 7.04517 11.2562 7.51591 11.2707C6.74553 10.7567 6.23913 9.87797 6.23913 8.88252C6.23913 8.35686 6.38123 7.86438 6.62766 7.44038C8.04253 9.17645 10.157 10.3182 12.5416 10.4382C12.4924 10.228 12.467 10.009 12.467 9.78394C12.467 8.20007 13.752 6.91509 15.3364 6.91509C16.1617 6.91509 16.9071 7.26395 17.4307 7.82166C18.0843 7.69272 18.6981 7.45392 19.2526 7.12528C19.038 7.79495 18.5833 8.35686 17.9909 8.7122C18.5713 8.64277 19.1244 8.48885 19.6384 8.26035C19.2545 8.83579 18.7675 9.34124 18.2074 9.74617Z"
                      fill="#989898" className='group-hover:fill-pink transition-all' />
                  </svg>
                </a>
              </div>
            </div>
            <div className="item medium lg-up:w-[17%] tablet:w-1/2 phablet:w-1/2 sm:w-full sm:mt-[5rem]">
              <div className="list-item">
                <ul className='sm:pl-0 pl-[2rem]'>
                  <li className='mb-[2.5rem]'>
                    <Link href="/" className="h5 text-white font-[400!important]" data-cursor-expand="">Work </Link>
                  </li>
                  <li className='mb-[2.5rem]'>
                    <Link href="/" className="h5 text-white font-[400!important]" data-cursor-expand="">Approach</Link>
                  </li>
                  <li className='mb-[2.5rem]'>
                    <Link href="/" className="h5 text-white font-[400!important]" data-cursor-expand="">Services </Link>
                  </li>
                  <li className='mb-[2.5rem]'>
                    <Link href="/" className="h5 text-white font-[400!important]" data-cursor-expand="">About </Link>
                  </li>
                  <li className='mb-[2.5rem]'>
                    <Link href="/" className="h5 text-white font-[400!important]" data-cursor-expand="">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item large lg-up:w-[49%] w-full lg:mt-[3rem]">
              <div className="content-wrap flex">
                <div className="img-box w-[30%]">
                  <div className="footer__img">
                    <Image src="/red_circle.png" alt="Red Circle" height={100} width={100} className='h-full w-full object-cover' />
                  </div>
                </div>
                <div className="intro w-[70%] pl-[3rem] text-white">
                  <h4 className="mb-5">2023 Fortune 500 B2B Homepage Rankings Report</h4>
                  <p className="medium mb-[3.2rem] mt-[2rem]">Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel
                    nunc non, tempus
                    blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.</p>
                  <div className="btnWrap mt-5">
                    <Link href='#' className='btn-default'>Download</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper pb-20 mb-20 border-b border-white">
            <div className="title-wrap">
              <h4 className='text-white'>
                Confidently navigating <span className="text-pink">change</span>.
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-myrious bg-black pb-24">
        <div className="container">
          <div className="content-wrapper flex">
            <div className="logo-wrap">
              <Link href="/" data-cursor-expand="">
                <Image src="/myrious_logo.png" alt="Myrious" height={100} width={100} />
              </Link>
            </div>
            <div className="title-wrap text-white md-up:pl-[5rem] pl-[2rem] md-up:max-w-[107rem] md:w-[80%]">
              <h5 className="font-[400!important] mb-[4rem]">Clear Digital is a founding member of Myrious Group’s expertise-driven agencies.</h5>
              <p className="medium max-w-[99rem]">Myrious Group is an independent holding company enabling forward-thinking brands
                to achieve breakthrough performance through power of orchestration. </p>
              <div className="btnWrap mt-[4rem]"><Link href='#' className='link-btn white font-bold'>Learn more</Link></div>
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
            <div className="copyright-list flex flex-wrap items-center ml-[2rem]">
              <ul className='flex text-center gap-[2rem] sm:gap-[1rem] lg:flex-wrap sm:text-left'>
                <li className='sm:w-1/2'>
                  <Link href="/" className="footer-links-small xl-up:text-[1.4rem] text-[14px] font-normal text-darkGray" data-cursor-expand="">
                    © 2023 Clear Digital, Inc.
                  </Link>
                </li>
                <li className='sm:w-1/2'>
                  <Link href="/" className="footer-links-small xl-up:text-[1.4rem] text-[14px] font-normal text-darkGray" data-cursor-expand="">
                    Email Subscriptions
                  </Link>
                </li>
                <li className='sm:w-1/2'>
                  <Link href="/" className="footer-links-small xl-up:text-[1.4rem] text-[14px] font-normal text-darkGray" data-cursor-expand="">
                    Terms of Use
                  </Link>
                </li>
                <li className='sm:w-1/2'>
                  <Link href="/" className="footer-links-small xl-up:text-[1.4rem] text-[14px] font-normal text-darkGray" data-cursor-expand="">
                    Privacy
                  </Link>
                </li>
                <li className='sm:w-1/2'>
                  <Link href="/" className="footer-links-small xl-up:text-[1.4rem] text-[14px] font-normal text-darkGray" data-cursor-expand="">
                    Cookie Policy
                  </Link>
                </li>
                <li className='sm:w-1/2'>
                  <Link href="/" className="footer-links-small xl-up:text-[1.4rem] text-[14px] font-normal text-darkGray" data-cursor-expand="">
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
