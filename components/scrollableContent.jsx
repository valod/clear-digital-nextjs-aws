import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ScrollableContent() {
    return (
        <section class="content-with-img no-padding">
            <div class="column-wrapper">
                <div class="inner-wrap flex items-center bg-gray">
                    <div class="text-holder w-1/2 pl-[95px] pr-[135px]">
                        <div class="inner-content">
                            <div class="title-wrap">
                                <p class="subtitle">Our process</p>
                                <h3>Nisl <span className='text-pink'>pulvinar</span> consectet nec set adipiscing</h3>
                            </div>
                            <div class="body-wrap mt-32">
                                <h4>Lorem ipsum dolor sit amet consectetur</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur erat risus ac nibh. Lectus egestas adipiscing interdum hendrerit vitae consequat odio. Mattis imperdiet vitae tellus fringilla. Magna.</p>
                            </div>
                        </div>
                    </div>
                    <div class="image-holder w-1/2">
                        <div class="img-wrap">
                            <Image width={800} height={1090} className='w-full' src="/service-detail/img1.png" alt="pulvinar" />
                        </div>
                    </div>

                </div>
                <div class="inner-wrap flex items-center bg-gray">
                    <div class="text-holder w-1/2 pl-[95px] pr-[135px]">
                        <div class="inner-content">
                            <div class="title-wrap">
                                <p class="subtitle">Our process</p>
                                <h3>Nisl <span className='text-pink'>pulvinar</span> consectet nec set adipiscing</h3>
                            </div>
                            <div class="body-wrap mt-32">
                                <h4>Lorem ipsum dolor sit amet consectetur</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur erat risus ac nibh. Lectus egestas adipiscing interdum hendrerit vitae consequat odio. Mattis imperdiet vitae tellus fringilla. Magna.</p>
                            </div>
                        </div>
                    </div>
                    <div class="image-holder w-1/2">
                        <div class="img-wrap">
                            <Image width={800} height={1090} className='w-full' src="/service-detail/img2.png" alt="pulvinar" />
                        </div>
                    </div>

                </div>
                <div class="inner-wrap flex items-center bg-gray">
                    <div class="text-holder w-1/2 pl-[95px] pr-[135px]">
                        <div class="inner-content">
                            <div class="title-wrap">
                                <p class="subtitle">Our process</p>
                                <h3>Nisl <span className='text-pink'>pulvinar</span> consectet nec set adipiscing</h3>
                            </div>
                            <div class="body-wrap mt-32">
                                <h4>Lorem ipsum dolor sit amet consectetur</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur erat risus ac nibh. Lectus egestas adipiscing interdum hendrerit vitae consequat odio. Mattis imperdiet vitae tellus fringilla. Magna.</p>
                            </div>
                        </div>
                    </div>
                    <div class="image-holder w-1/2">
                        <div class="img-wrap">
                            <Image width={800} height={1090} className='w-full' src="/service-detail/img3.png" alt="pulvinar" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
