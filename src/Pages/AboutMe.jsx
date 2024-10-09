import React from 'react'
import PageHeading from '../components/common/PageHeading'
import SkillData from "../data/SkillData"
import PersonalData from "../data/PersonalData"
import StatusData from "../data/StatusData"

const SkillBar = ({ percentage, label, duration }) => {
    const offset = 435 - (percentage/100) * 435

    return (
        <div className='space-y-4' data-aos= "fade-right" data-aos-duration = "1000" data-aos-delay = {duration}>
            <div className='skill'>
                <div className='outer dark:bg-[#252525] bg-[#eeeeee]' >
                    <div className='inner bg-white dark:bg-background'>
                        <div className='dark:text-white text-light-heading font-semibold tracking-wider text-2xl' >{percentage}%</div>
                    </div>
                </div>
                <svg
					            xmlns="http://www.w3.org/2000/svg"
					            version="1.1"
					            width="160px"
					            height="160px"
					            className='circlesvg'
					            strokeDashoffset={offset}
				        >
                        <circle cx={80} cy={80} r={70} />
                </svg>
            </div>
            <h1 className='dark:text-white text-gray-500 uppercase font-semibold text-center tracking-wider'> {label} </h1>

        </div>
    )
}


const StatusCard = ({ label, number }) => {
  return(
      <div className='rounded-[5px] border lg:p-[24px_40px_24px_40px] p-4 dark:border-[#252525]'>
          <h1 className='text-primary-yellow text-[50px] font-bold relative dashupper inline-block'>{number}</h1>
          <h3 className='uppercase text-[15px] text-light-heading dark:text-white md:pl-12 dashbelow relative'>{label.split(" ").slice(0, -1).join(' ')} <br /> {label.split(" ").slice(-1)} </h3>
      </div>
  )
}


function AboutMe() {
  return (

    <div className='overflow-hidden content-box lg:pb-10' data-aos="fade-down" data-aos-duration="1200">
        <PageHeading mainText={"About"} highLightedText={"me"} secondText={"resume"} />
        <div className='flex lg:flex-row flex-col'>
          {/* Personal Infos */}

          <div className='left lg:w-1/2 space-y-8'>
                <h1 className='uppercase text-[26px] font-semibold tracking-wider dark:text-white text-[#666666]'>personal infos</h1>
                <div className='grid grid-cols-2 gap-6'>
                    {
                      PersonalData.map(({ id, placeholder, answer })=>(
                          <div className='text-[15px] font-medium' key={id} >
                            <span className='dark:text-white text-light-heading opacity-80 capitalize' > {placeholder}: </span>
                            <br  className='lg:hidden' />
                              {
                                id < 8 ? 
                                <span className='dark:text-white text-gray-800' > {answer} </span>
                                :
                                <a href={answer} className='dark:text-white text-gray-800' >Click here</a>
                              }
                          </div>
                      ))
                    }
                </div>
          </div>

          {/* Status */}
          
          <div className='right lg:w-1/2 grid  grid-cols-2 gap-2 md:gap-4 lg:gap-[30px] pt-8 lg:pt-0'>
                  {
                    StatusData.map(stat => (
                        <StatusCard key={stat.id} {...stat} />
                    ))
                  }
          </div>
        </div>
        
        <div className='mt-20'>
            <h1 className='dark:text-white text-light-heading uppercase font-semibold text-3xl text-center'>
                  My skills
            </h1>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-10 pt-8' data-aos="fade-up" >
                  {
                    SkillData.map(skill => (
                        <SkillBar key={skill.id} {...skill} />
                    ))
                  }
            </div>
        </div>

    </div>
  )
}

export default AboutMe
