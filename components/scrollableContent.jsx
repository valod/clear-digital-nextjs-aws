import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from './styles/scrollablecontent.module.css';
export default function ScrollableContent() {
    return (
        <section class="content-with-img no-padding" id="our-process">
            <div class="column-wrapper">
                <div class="inner-wrap flex flex-wrap bg-gray relative">
                    <div class="text-holder w-1/2 pl-[95px] pr-[135px] lg:w-[100%] phablet:pl-[60px] phablet:pr-[100px] sm:pl-[40px] sm:pr-[40px]">
                        <div class="inner-content h-full flex flex-wrap flex-col justify-between">
                            <div class="title-wrap pt-[149px] pb-[50px] phablet:pt-[120px] sm:pt-[80px]">
                                <h6 className="mb-[19px]">Our process</h6>
                                <h3>Nisl <span className='underline-black text-pink'>pulvinar</span> consectet nec set adipiscing</h3>
                            </div>
                            <div class="body-wrap pb-[151px] phablet:pb-[120px] sm:pb-[80px]">
                                <h4>Lorem ipsum dolor sit amet consectetur</h4>
                                <p className="mt-[19px]">Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur erat risus ac nibh. Lectus egestas adipiscing interdum hendrerit vitae consequat odio. Mattis imperdiet vitae tellus fringilla. Magna.</p>
                            </div>
                        </div>
                    </div>
                    <div class={`imageholder ${style.imageholder} ${style.imgone}  w-1/2 lg:w-[100%]`}>
                        <div class="img-wrap h-full">
                            <Image width={800} height={1090} className='w-full  h-full' src="/service-detail/img1.png" alt="pulvinar" />
                        </div>
                    </div>
                </div>
                <div class="inner-wrap flex flex-wrap bg-gray">
                    <div class="text-holder w-1/2 pl-[95px] pr-[135px] lg:w-[100%] phablet:pl-[60px] phablet:pr-[100px] sm:pl-[20px] sm:pr-[20px]">
                        <div class="inner-content h-full flex flex-col justify-between">
                            <div class="title-wrap pt-[149px] pb-[50px] phablet:pt-[120px] sm:pt-[80px]">
                                <h6 className="mb-[19px]">Our process</h6>
                                <h3>Nisl <span className='underline-black text-pink'>pulvinar</span> consectet nec set adipiscing</h3>
                            </div>
                            <div class="body-wrap pb-[151px] phablet:pb-[120px] sm:pb-[80px]">
                                <h4>Lorem ipsum dolor sit amet consectetur</h4>
                                <p className="mt-[19px]">Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur erat risus ac nibh. Lectus egestas adipiscing interdum hendrerit vitae consequat odio. Mattis imperdiet vitae tellus fringilla. Magna.</p>
                            </div>
                        </div>
                    </div>
                    <div class={` ${style.imageholder}  ${style.imgtwo} w-1/2 lg:w-[100%]`}>
                        <div class="img-wrap">
                            <Image width={800} height={1090} className='w-full  h-full' src="/service-detail/img2.png" alt="pulvinar" />
                        </div>
                    </div>
                </div>
                <div class="inner-wrap flex flex-wrap bg-gray">
                    <div class="text-holder w-1/2 pl-[95px] pr-[135px] lg:w-[100%] phablet:pl-[60px] phablet:pr-[100px] sm:pl-[20px] sm:pr-[20px]">
                        <div class="inner-content h-full flex flex-col justify-between">
                            <div class="title-wrap pt-[149px] pb-[50px] phablet:pt-[120px] sm:pt-[80px]">
                                <h6 className="mb-[19px]">Our process</h6>
                                <h3>Nisl <span className='underline-black text-pink'>pulvinar</span> consectet nec set adipiscing</h3>
                            </div>
                            <div class="body-wrap pb-[151px] phablet:pb-[120px] sm:pb-[80px]">
                                <h4>Lorem ipsum dolor sit amet consectetur</h4>
                                <p className="mt-[19px]">Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur erat risus ac nibh. Lectus egestas adipiscing interdum hendrerit vitae consequat odio. Mattis imperdiet vitae tellus fringilla. Magna.</p>
                            </div>
                        </div>
                    </div>
                    <div class={` ${style.imageholder}  ${style.imgthree} w-1/2 lg:w-[100%]`}>
                        <div class="img-wrap">
                            <Image width={800} height={1090} className='w-full h-full' src="/service-detail/img3.png" alt="pulvinar" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}









