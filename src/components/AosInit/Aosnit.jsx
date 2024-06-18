import React, { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'

function Aosnit() {

    useEffect(() => {

        AOS.init();

    }, [])

  return (null)
}

export default Aosnit
