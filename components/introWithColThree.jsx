import React from 'react';
import Styles from './styles/introWithColThree.module.css';
import Image from 'next/image';

function IntroWithColThree() {

    return (<>
        <style jsx>{`

.slick-list{
    width: 100% !important;
  }
        /* Add more media queries as needed */
      `}</style>

        <section className={`${Styles.introWithColThree} black_square_pattern min-h-[1090px]`}>
            <div className="container">
                <div className="w-full text-black mb-12 max-w-[1161px]">
                    <span className="subtitle mb-5"> 20+ years of success.</span>
                    <h2 className='mb-12'>We deliver results-driven digital experiences that get you to what&#39;s <span>next</span>.</h2>
                    <p>Clear Digital is a Silicon Valley-based website design agency that helps you build and accelerate your web, brand, and digital marketing by providing expert, strategic, and data-informed solutions that deliver results.</p>
                </div>
                <div className={`${Styles.mainRow} -ml-[60px] flex`}>
                    <div className={`${Styles.threeCard} text-black mx-[60px]`}>
                        <div className="w-full max-w-[360px] pr-[75px]">
                            <div className={`mb-5 w-full h-full max-h-[90px] max-w-[85px]`}>
                                <Image className={``} width={80} height={90} src='/bulb.svg' alt="bulb" />
                            </div>
                            <h5 className='mb-2'>Collaboration focus lorem ipsum.</h5>
                            <p>Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.</p>
                        </div>
                    </div>
                    <div className={`${Styles.threeCard} text-black mx-[60px]`}>
                        <div className="w-full max-w-[360px] pr-[75px]">
                            <div className={`mb-5 w-full h-full max-h-[90px] max-w-[85px]`}>
                                <Image className={``} width={80} height={90} src='/graph_up.svg' alt="bulb" />
                            </div>
                            <h5 className='mb-2'>B2B performance driven.</h5>
                            <p>Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.</p>
                        </div>
                    </div>
                    <div className={`${Styles.threeCard} text-black mx-[60px]`}>
                        <div className="w-full max-w-[360px] pr-[75px]">
                            <div className={`mb-5 w-full h-full max-h-[90px] max-w-[85px]`}>
                                <Image className={``} width={80} height={90} src='/trophy.svg' alt="bulb" />
                            </div>
                            <h5 className='mb-2'>Design + development excellence.</h5>
                            <p>Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default IntroWithColThree