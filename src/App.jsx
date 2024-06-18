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

function App() {
  
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
                    theme='dark'              
                />

          </main>
      </PopUpProvider>
      
  )
}

export default App
