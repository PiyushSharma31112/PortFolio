import { useState } from 'react'
import './App.css'
import Navbar from './components/common/Navbar'
import Mouse from "./components/common/Mouse"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import PopUp from "./components/utils/PopUp"
import { PopUpProvider } from "./context/PopUpContext"
import { Outlet } from 'react-router-dom'
import Aosnit from './components/AosInit/Aosnit'
import { RiLightbulbFlashLine } from "react-icons/ri"


function App() {
    
    // DarkMode and lightMode Theme

    const prefersDarkScheme = window.matchMedia("(prefers-colo-scheme: dark)").matches;
    const [darkMode, setDarkMode] = useState(prefersDarkScheme)

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;

        setDarkMode(newDarkMode);

        if (newDarkMode) {
          document.documentElement.classList.add("dark")
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark")
          localStorage.setItem("theme", "light");
        }
    }

    // Apply initial light mode setting 


    if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }


  return (
      <PopUpProvider>
          <main>
                {/* <div className='flex justify-around min-w-screen'>
                    <Outlet />
                    <Navbar />
                </div> */}
                <Navbar />
                <Aosnit />
                <PopUp />
                <Mouse />
                <ToastContainer 
                    position='top-right'
                    autoClose = {2000}
                    hideProgressBar = {false}
                    newestOnTop = {false}
                    closeOnClick
                    rtl = {false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme= { darkMode ? "dark" : "light" }             
                />

            <button
                className='fixed right-[3%] top-4 md:top-20 lg:h-12 aspect-square h-8 rounded-full flex items-center justify-center text-[20px] transition-all duration-[300] ease-in nav-button dark:text-primary-yellow dark:shadow-[0_0_20px_#ffb400] bg-[#1e253012] z-[998]'
                onClick={toggleDarkMode}
            >
              <RiLightbulbFlashLine />
          </button>


          </main>
      </PopUpProvider>
      
  )
}

export default App
