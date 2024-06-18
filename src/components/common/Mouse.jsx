import React, { useEffect, useState } from 'react'

const Mouse = () =>{
    
    const [position, setPosition] = useState({ x:0,  y:0 })
    const [isClicked, setIsClicked] = useState(false);

    useEffect(()=> {
        const handleMouseMove = (event) => {
          setPosition({ x: event.clientX, y: event.clientY })
        }

        const handleMouseClick = () => {
          setIsClicked(true);
          setTimeout(() => setIsClicked(false), 200); //Reset the scale after 200ms
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("click", handleMouseClick)

        return () => {
          window.removeEventListener("mousemove", handleMouseMove)
          window.removeEventListener("click", handleMouseClick);
        }


    }, [])


    return(
      <>
            <div 
                className={`fixed hidden z-[1000] lg:block pointer-events-none bg-primary-yellow h-2 aspect-square rounded-full inner-circle top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 ${isClicked ? "scale-90" : ""}`}
                style={{ top: position.y, left: position.x }}
            >
            </div>

            <div 
              className={`outer-circle z-[1000] lg:block hidden pointer-events-none h-10 aspect-square rounded-full fixed bg-[#ffb3005f] top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 transition-all duration-700 ease-out ${isClicked ? "scale-125" : ""}`}
              style={{ top: position.y, left:position.x }}
            >

            </div>
      </>
    )
}
export default Mouse
