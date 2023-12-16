import React from 'react'

const Intro = ({ eyeBrowText, heading, highLightedText, subText }) => {
    return (
        <div className='intro'>
            <div className='wrapper'>
                <div className='intro__text max-w-[119rem;]'>
                    <h5 className='eyebrow__text'>{eyeBrowText}</h5>
                    <h2>{heading}<span className="underline-text text-pink">{highLightedText}</span></h2>
                    <p className='mt-[2rem]'>{subText}</p>
                </div>
                <div className='intro__cta'></div>
            </div>
        </div>
    )
}

export default Intro;

