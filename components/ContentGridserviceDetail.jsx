import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ContentGrid = () => {
    return (
        <section className='contentGrid grid__parallax dark pb-[236px]'>
            <div className='container'>
                <div className='intro'>
                    <div className='wrapper'>
                        <div className='intro__text'>
                            <h6 className='mb-[18px]'>
                                Overview
                            </h6>
                            <h2>
                                Great digital strategy <span className="underline-text">answers</span> critical questions.
                            </h2>
                            <p className='mt-48px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                        </div>
                    </div>
                </div>
                <div className='wrapper mt-[52px]'>
                    <div className='w-threeCard pr-[90px]'>
                        <Link href={'/'}>
                            <div className='max-w-[79px] max-h[79px] mb-[34px] w-full'>
                                <Image src={"/overview-1.png"} alt='' width={80} height={80} />
                            </div>
                            <h4>Lorem ipsum amet dolor sit.</h4>
                            <p className='medium'>Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.</p>
                        </Link>
                    </div>
                    <div className='w-threeCard pr-[90px]'>
                        <Link href={'/'}>
                            <div className='max-w-[79px] max-h[79px] mb-[34px] w-full'>
                                <Image src={"/overview-2.png"} alt='' width={80} height={80} />
                            </div>
                            <h4>Lorem ipsum amet dolor sit.</h4>
                            <p className='medium'>Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.</p>
                        </Link>
                    </div>
                    <div className='w-threeCard pr-[90px]'>
                        <Link href={'/'}>
                            <div className='max-w-[79px] max-h[79px] mb-[34px] w-full'>
                                <Image src={"/overview-3.png"} alt='' width={80} height={80} />
                            </div>
                            <h4>Lorem ipsum amet dolor sit.</h4>
                            <p className='medium'>Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentGrid;
