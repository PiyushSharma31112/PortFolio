import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
// import Home from './Pages/Home.jsx' 
// import PortFolio from "./Pages/PortFolio.jsx"
// import ContactUs from "./Pages/ContactUs.jsx"
// import AboutMe from "./Pages/AboutMe.jsx"

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path='/' element = {<App />} >

//             <Route path='' element= {<Home />} />
//             <Route path='/AboutMe' element= {<AboutMe />} />
//             <Route path='/PortFolio' element= {<PortFolio />} />
//             <Route path='/ContactUs' element= {<ContactUs />} />

//         </Route>
//     )
// )



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider  router={router} /> */}
    <App />
  </React.StrictMode>,
)
