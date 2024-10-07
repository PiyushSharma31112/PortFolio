import React from 'react'

function PageHeading({mainText,highLightedText,secondText}) {
    return (
        <div className='md:py-20 py-10 text-left md:text-center relative'>
            <h1 className='main-text text-3xl md:text-[56px] font-extrabold uppercase text-[#616262] dark:text-white'>{mainText}
            &nbsp;
                <span className='text-primary-yellow'>{highLightedText}</span>
            </h1>
            <span className='md:text-[45px] second-text lg:text-[110px] tracking-[10px] font-extrabold dark:text-[#ffffff12] uppercase absolute top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-4  lg:-translate-y-1/2 text-[#1e253012]'>{secondText}</span>
        </div>
    )
}

export default PageHeading