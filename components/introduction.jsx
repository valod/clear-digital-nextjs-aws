"use client";
import Link from "next/link";

const Introduction = () => {
  return (
<section className="intro padding-top">
      <div className="container">
        <div className="wrapper set-2 w-full relative flex flex-wrap justify-between">
          <div className="contentwrapper max-w-[690px] pr-[10px]">
            <h6 className="mb-[20px] font-normal">Case studies</h6>
            <h3 className="font-bold">
              Nisl <span className="pink">pulvinar</span> consectet nec lipsum
              dolor
            </h3>
          </div>
          <div className="btnwrapper mt-[50px] sm:mt-[30px]">
            {/* Provide a valid URL or route in href */}
            <Link href="/case-studies" className="pink-btn">
              View all case studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Introduction;
