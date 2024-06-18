import React from 'react'
import PageHeading from '../components/common/PageHeading'
import PortfolioData from "../data/PortfolioData"

const PortfolioCard = ({ previewLink, projectTitle, thumbnail }) => {
    return (
        <a href= {previewLink} target='_blank'>
            <div className='card relative rounded-lg overflow-hidden h-[200px] group cursor-pointer'>
                <img src={thumbnail} alt="Project Thumbnail" className='object-cover h-full w-full' />

                <div className='absolute transition-all duration-500 opacity-0 top-0 group-hover:opacity-100 h-full w-full bg-primary-yellow items-center justify-center hidden lg:flex'>
                      <h1 className='text-[14px] text-white uppercase font-medium -translate-y-4 group-hover:translate-y-0 transition-all duration-300'>
                          {projectTitle}
                      </h1>
                </div>
            </div>
        </a>
    )
}

function PortFolio() {
  return (
    <div className='content-box ' data-aos = "fade-down" da-aos-duration= "1200">
        <PageHeading mainText= {"My"} highLightedText = {"Portfolio"} secondText = {"works"} />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {
              PortfolioData.map(data => (
                <PortfolioCard key={data.id} {...data} />
              ))
          }
        </div>

    </div>
  )
}

export default PortFolio
