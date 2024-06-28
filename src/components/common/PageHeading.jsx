import React from 'react'

function PageHeading({ frontText, backText, highlightedText }) {
  return (
    <div className='relative py-10 text-left md:text-center md:py-20 '>
          <h1 className='w-screen text-[15px] sm:text-3xl font-extrabold uppercase md:text-[56px] text-center md:text-center lg:text-center dark:text-white text-[#616262]'>
              {frontText}
              &nbsp;
              <span className='text-primary-yellow'>
                  {highlightedText}
              </span>
          </h1>
          <span className='uppercase dark:text-[#ffffff12] text-[#1e253012] lg:text-[110px] md:text-[45px] font-extrabold tracking-[10px] absolute top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 md:-translate-y-4 '>
              {backText}
          </span>
    </div>
  )
}

export default PageHeading
