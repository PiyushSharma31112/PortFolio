import React, { useEffect, useRef } from 'react'
import { usePopup } from "../context/PopUpContext"
import Typed from "typed.js"
import { TypeAnimation } from "react-type-animation"
import { IoIosSend } from "react-icons/io" 
import laptop from "../assets/laptop.png"

const Home = () => {

    const typeElement = useRef(null)

    const { toggleClose } = usePopup()

    useEffect(() => {
        const options = {
          strings: ["frontend developer"],
          typeSpeed: 70,
          loop: true,
          backSpeend: 50
        };

        const typed = new Typed(typeElement.current, options);

        return () => {
            typed.destroy();
        };

    }, [])

      const CodeBlock = `<!Doctype html>\n <html> \n <head> \n <title>Developer Piyush</title> \n </head> \n <body> \n <h1> I'm Piyush and I'm a </h1> \n <p>Frontend Developer</p> \n </body> \n </html>`

  return (
      <section className='relative overflow-hidden flex justify-around items-center content-box flex-col lg:flex-row h-screen'>
            <div className='z-10 max-w-[300px] md:max-w-[450px] relative lg:w-1/2 lg:h-1/2'>
                  <img src={laptop} alt="laptop-image" className='' />
                  <div className='codebox absolute w-[240px] md:w-[360px] left-1/2 top-[58px] md:top-[90px] h-[150px] md:h-[230px]  backdrop-blur-3xl p-2 bg-black dark:bg-transparent -translate-x-1/2 -z-10'>
                      <TypeAnimation
                          sequence={[CodeBlock, 5000 ,""]}
                          repeat={Infinity}
                          cursor={true}
                          wrapper='div'
                          className='typinganimation'
                          omitDeletionAnimation={true}
                          speed={30}
                      />
                  </div>
            </div>

            <div className='max-w-[550px] space-y-6 lg:space-y-10'>
                <h1 className='text-[29px] lg:text-[52px] lg:leading-[61px] uppercase font-bold tracking-wider text-center lg:text-left lg:pl-[70px] hero-heading relative h-32 lg:h-40'>
                  <span className='text-primary-yellow'>I'm Piyush</span> <br />
                  <span className='text-[#666666] dark:text-white' ref={typeElement} ></span>
                </h1>

                <p className='text-[14px] leading-7 text-center md:text-left md:text-[16px] md:leading-9 text-gray-500 dark:text-gray-100'>
                    I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
                </p>

                <button className='uppercase cursor-pointer p-[16px_70px_16px_35px] w-fit text-[15px] bg-transparent border-2 border-primary-yellow dark:text-white text-gray-500 transition-all duration-500 hover:text-white font-semibold rounded-full overflow-hidden relative submit-btn' 
                    onClick={toggleClose}>
                    <span className='z-20 relative'>Send message</span>
                    <span className='absolute z-20 -right-[1px] -top-[1px] flex items-center justify-center h-[55px] aspect-square bg-primary-yellow rounded-full text-[25px] text-white'>
                        <IoIosSend />
                    </span>
                </button>
    
            </div>
          <div className='fixed h-screen bg-primary-yellow w-1/5 -bottom-20 -rotate-[20deg] scale-150 -left-32 hidden lg:block'></div>
      </section>
  )
}

export default Home

// codebox =  