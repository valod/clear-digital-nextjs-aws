import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const accordionItems = [
        {
            title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium?',
            content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.',
        },
        {
            title: 'Corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
            content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.',
        },
        {
            title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem?',
            content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.',
        },
    ];


    return (
        <section className="accordian bg-gray">
            <div className="container">
                <div className="intro mb-12">
                    <h2>FAQs</h2>
                </div>
                <div className="accordionWrap">
                    {accordionItems.map((item, index) => (
                        <div key={index} className="accordion-item py-[50px] border-b border-black">
                            <div
                                className={`accordion-header ${activeIndex === index ? 'active' : ''} cursor-pointer max-w-[1170px]`}
                                onClick={() => toggleAccordion(index)}
                            >
                           <h4 className=''>{item.title}</h4>
                            </div>
                            {activeIndex === index && (
                                <div className="accordion-content max-w-[1170px]">
                                    <p>{item.content}</p>
                                    <div className="btnWrap mt-8"><a href="#" className='pink-btn'>Learn more</a></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Accordion;
