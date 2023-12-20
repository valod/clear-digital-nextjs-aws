import React, { useState } from 'react';
import style from '../components/styles/accordionserviceoverview.module.css';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionItems = [
    {
      title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium?',
      content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.',
      contentagain: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
    },
    {
      title: 'Corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
      content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.',
      contentagain: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
    },
    {
      title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem?',
      content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.',
      contentagain: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
    },
  ];

  return (
    <section className="accordion bg-gray" id="faq">
      <div className="container">
        <div className="intro mb-12">
          <h2>FAQs</h2>
        </div>
        <div className="accordionWrap">
          {accordionItems.map((item, index) => (
            <div key={index} className="accordion-item relative py-[5rem] border-b border-black sm:py-[3rem]" onClick={() => toggleAccordion(index)}>
              <div
                className={`accordion-header ${activeIndex === index ? 'active' : ''} cursor-pointer max-w-[123.9rem]`}
              >
                <h4 className='mb-[20px]'>{item.title}</h4>
              </div>
              <div
                className={`accordioncontent  max-w-[123.9rem] overflow-hidden transition-max-height duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-[57rem] open' : 'max-h-0'  
                } ${style.accordioncontent}`}
              >
                <p className='mb-[10px] medium'>{item.content}</p>
                <p className='medium'>{item.contentagain}</p>
                <div className="btnWrap mt-8 sm:mt-[1rem]">
                  <a href="#" className="pink-btn">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;

