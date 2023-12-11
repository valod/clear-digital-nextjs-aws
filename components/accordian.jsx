import React, { useState } from 'react';

function AccordianItem({ title, isOpen, onClick }) {
    return (
        <li
            className={`w-halfWidth py-10 text-black border-b mx-2.5 transition duration-300 text-[30px] hover:text-pink ${isOpen ? 'text-pink' : ''
                }`}
            onClick={onClick}
        >
            {title}
        </li>
    );
}

function Accordian() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleItemClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const services = [
        'Brand strategy',
        'Website design',
        'Motion graphics',
        'Creative services',
        'Brand strategy',
        'Website design',
        'Motion graphics',
        'Creative services',
        'Motion graphics',
        'Creative services',
        // Add more services as needed
    ];

    return (
        <section className="accordian bg-gray">
            <div className="container">
                <div className="w-full mb-5">
                    <h2>Our services.</h2>
                </div>
                <div className="mainRow">
                    <ul className="w-full list-none flex flex-wrap">
                        {services.map((service, index) => (
                            <AccordianItem
                                key={index}
                                title={service}
                                isOpen={index === openIndex}
                                onClick={() => handleItemClick(index)}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Accordian;
