import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ContentGrid = () => {
    return (
        <section className='contentGrid grid__parallax dark pb-[236px] set-2 laptop:pb-[150px] lg:pb-[100px]' id='overview'>
            <div className='container'>
                <div className='intro'>
                    <div className='wrapper'>
                        <div className='intro__text'>
                            <h6 className='subtitle mb-[16px]'>
                                Overview
                            </h6>
                            <h2>
                                Great digital strategy <span className="underline-black text-pink">answers</span> critical questions.
                            </h2>
                            <p className='mt-[48px] max-w-[81%] sm:max-w-[100%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                        </div>
                    </div>
                </div>
                <div className='mainRow flex flex-wrap mt-[36px] -ml-[10px]'>
                    <div className='w-threeCard relative pr-[90px] mx-2.5 md:w-full laptop:pr-[50px] lg:pr-[0] tablet:w-halfWidth tablet:mb-[50px] md:mb-[50px] sm:pr-[0]'>
                        <Link href={'#'} className='redirect'>  .  </Link>
                        <div className='max-w-[79px] max-h-[85px] mb-[30px] w-full sm:max-w-[60px] sm:h-[60px]'>
                            <Image src={"/overview-1.png"} alt='img' className='w-full h-full object-contain' width={80} height={80 } />
                        </div>
                        <h4 className='mb-[10px]'>Lorem ipsum amet dolor sit.</h4>
                        <p className='medium'>Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.</p>

                    </div>
                    <div className='w-threeCard relative pr-[90px] mx-2.5 md:w-full laptop:pr-[50px] lg:pr-[0]  tablet:w-halfWidth tablet:mb-[50px] md:mb-[50px] sm:pr-[0]'>
                        <Link href={'#'} className='redirect'>  .  </Link>
                        <div className='max-w-[79px] max-h[85px] mb-[30px] w-full sm:h-[60px]'>
                            <Image src={"/overview-2.png"} alt='img' className='w-full h-full object-contain' width={80} height={80} />
                        </div>
                        <h4 className='mb-[10px]'>Lorem ipsum amet dolor sit.</h4>
                        <p className='medium'>Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.</p>

                    </div>
                    <div className='w-threeCard relative pr-[90px] mx-2.5 md:w-full laptop:pr-[50px] lg:pr-[0]  tablet:w-halfWidth sm:pr-[0]'>
                        <Link href={'#'} className='redirect'>  .  </Link>
                        <div className='max-w-[79px] max-h[85px] mb-[30px] w-full sm:h-[60px]'>
                            <Image src={"/overview-3.svg"} alt='img' className='w-full h-full object-contain' width={80} height={80} />
                        </div>
                        <h4 className='mb-[10px]'>Lorem ipsum amet dolor sit.</h4>
                        <p className='medium'>Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentGrid;
