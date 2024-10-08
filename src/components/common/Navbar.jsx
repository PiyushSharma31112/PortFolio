import React, { useState } from 'react'
import { FaHome, FaUser, FaBriefcase, FaEnvelopeOpen } from "react-icons/fa"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import 'react-tabs/style/react-tabs.css';
import AboutMe from '../../Pages/AboutMe'
import Home from '../../Pages/Home'
import PortFolio from '../../Pages/PortFolio'
import ContactUs from '../../Pages/ContactUs'
import { Link, NavLink } from "react-router-dom"


const NavLinks = [
    {
      id: 1,
      icon: <FaHome />,
      label: "Home"
    },
    {
      id: 2,
      icon: <FaUser />,
      label: "about"
    },
    {
      id: 3,
      icon: <FaBriefcase />,
      label: "portfolio"
    },
    {
      id: 4,
      icon: <FaEnvelopeOpen />,
      label: "contact"
    },
]

const Navbar = () =>  {
    
      const [animate, setAnimate] = useState(false)

      const handleClick = () => {
        setAnimate(true);
        setTimeout(() => {
          setAnimate(false)
        }, 1000);
      } 
      
    return (
      <div>
          
          <Tabs>
              <TabList>
                    {
                      NavLinks.map(({ id, icon, label }) => (
                          <Tab key={id}>

                              <button  
                                  className='bg-[#eee] dark:bg-[#444] relative h-[50px] w-[50px] rounded-full text-[15px] dark:text-white text-[#444] flex items-center justify-center hover:bg-primary-yellow transition-all duration-[300] ease-in nav-button'
                                  onClick={handleClick}
                              >
                                {icon}
                                <span className='bg-primary-yellow h-full rounded-full absolute -z-10 right-0 pr-16 pl-8 text-center flex items-center text-[18px] font-semibold uppercase tracking-wider'>
                                  {label}
                                </span>
                              </button>

                          </Tab>
                      ))
                    }
              </TabList>
              
              <TabPanel>
                    <Home />
              </TabPanel>
              
              <TabPanel>
                    <AboutMe />
              </TabPanel>

              <TabPanel>
                    <PortFolio />
              </TabPanel>

              <TabPanel>
                    <ContactUs />
              </TabPanel>    
          </Tabs>

        {/* <div className='flex flex-col w-[30%] justify-center h-screen gap-5 items-end navbar '>  
   
              <NavLink to= "" onClick={handleClick} className={({isActive}) => ` bg-[#eee] dark:bg-[#444] relative h-[50px] w-[50px] rounded-full text-[15px] dark:text-white text-[#444] flex items-center justify-center hover:bg-primary-yellow transition-all duration-[300] ease-in nav-button  ${isActive ? "dark:bg-primary-yellow bg-primary-yellow dark:text-black text-white" : " dark:bg-[#212121] dark:text-white bg-gray-200 text-gray-600" } `} >
                <FaHome />
                    <span className='bg-primary-yellow h-full rounded-full absolute -z-10 right-0 pr-16 pl-8 text-center flex items-center text-[18px] font-semibold uppercase tracking-wider'>
                              Home
                    </span>
              </NavLink>

              <NavLink to= "/AboutMe" onClick={handleClick} className={({isActive}) => `bg-[#eee] dark:bg-[#444] relative h-[50px] w-[50px] rounded-full text-[15px] dark:text-white text-[#444] flex items-center justify-center hover:bg-primary-yellow transition-all duration-[300] ease-in nav-button  ${isActive ? "dark:bg-primary-yellow bg-primary-yellow dark:text-black text-white" : " dark:bg-[#212121] dark:text-white bg-gray-200 text-gray-600" } `} >
                  <FaUser />
                  <span className='bg-primary-yellow h-full rounded-full absolute -z-10 right-0 pr-16 pl-8 text-center flex items-center text-[18px] font-semibold uppercase tracking-wider'>
                      About Me
                  </span>
              </NavLink>
               
              <NavLink to= "/PortFolio" onClick={handleClick} className={({isActive}) => ` bg-[#eee] dark:bg-[#444] relative h-[50px] w-[50px] rounded-full text-[15px] dark:text-white text-[#444] flex items-center justify-center hover:bg-primary-yellow transition-all duration-[300] ease-in nav-button  ${isActive ? "dark:bg-primary-yellow bg-primary-yellow dark:text-black text-white" : " dark:bg-[#212121] dark:text-white bg-gray-200 text-gray-600" } `} >
                  <FaBriefcase />
                  <span className='bg-primary-yellow h-full rounded-full absolute -z-10 right-0 pr-16 pl-8 text-center flex items-center text-[18px] font-semibold uppercase tracking-wider'>
                      portfolio
                  </span>
              </NavLink>

              <NavLink to= "/ContactUs" onClick={handleClick} className={({isActive}) => `bg-[#eee] dark:bg-[#444] relative h-[50px] w-[50px] rounded-full text-[15px] dark:text-white text-[#444] flex items-center justify-center hover:bg-primary-yellow transition-all duration-[300] ease-in nav-button ${isActive ? "dark:bg-primary-yellow bg-primary-yellow dark:text-black text-white" : " dark:bg-[#212121] dark:text-white bg-gray-200 text-gray-600" } `} >
                  <FaEnvelopeOpen />
                  <span className='bg-primary-yellow h-full rounded-full absolute -z-10 right-0 pr-16 pl-8 text-center flex items-center text-[18px] font-semibold uppercase tracking-wider'>
                    contact us
                  </span>
              </NavLink>
             
            
          </div> */}
          <div className={`min-h-screen w-screen bg-[#eeeeee] dark:bg-[#2b2a2a] fixed z-[999] top-full left-0 ${animate ? "animate-top-cover" : ""} `} > </div>
      </div>
    )
}

export default Navbar
