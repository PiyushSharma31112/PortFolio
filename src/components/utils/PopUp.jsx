import React, { useRef, useState } from 'react'
import { IoIosSend } from "react-icons/io"
import { FaX } from "react-icons/fa6"
import { toast } from "react-toastify"
import { usePopup } from '../../context/PopUpContext'
import emailjs from 'emailjs-com';

const InputField = ({ placeholder, value, onChange, error, name }) => {
    return (
        <div className='relative'>
            <input 
                type="text"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`p-[8px_20px_8px_20px] lg:p-[11px_26px_11px_26px] transition-all duration-500 border focus:border-primary-yellow rounded-[30px] outline-none dark:bg-[#252525] text-black dark:text-white w-full ${error ? "border-red-800" : "border-gray-400 dark:border-gray-700"}`}
            />

            {error && <p className='text-red-500 text-xs lg:text-sm absolute lg:-bottom-6 left-2'> {error} </p>}
        </div>
    )
}


const PopUp = () => {

    const { close, toggleClose } = usePopup()
    const popupRef = useRef(null)

    const [formData, setFormdata] = useState({
      name: "",
      email: "",
      subject: "",
      message: ""
    }) 

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {

      const {name, value} = e.target
      setFormdata({...formData, [name]: value })
    }

    const validateForm = () => {
          const newErrors = {}
          const { name, email, subject, message } = formData

          if(!name) newErrors.name = "Name is Required"

          if (!email) {
              newErrors.email = "email is required"
          } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email address is invalid"
          }
          if(!subject) newErrors.subject = "Subject is required"
          if(!message) newErrors.message = "Message is required"

          return newErrors
      }

      const submitForm = (e) => {
        e.preventDefault()

        const newErrors = validateForm()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            toast.error("All fields are mandatory")
            return
        }

        // emailjs.send('service_r1vw41k', 'template_nvypect', formData)
        //     .then(function (response) {
        //         console.log('SUCCESS!', response.status, response.text);
        //     }, function (error) {
        //         console.log('FAILED...', error);
        //     });

        setFormdata({
            name: '',
            email: '',
            subject: '',
            message: ''
        })


        setErrors({})

        toast.success("Get back to you soon")
        
        console.log(formData.name)
        console.log(formData.email)
        console.log(formData.subject)
        console.log(formData.message)
    }

      
      const handleSectionClick = (event) => {
          if (popupRef.current && !popupRef.current.contains(event.target)) {
            toggleClose()
          }
      }

    return (
        <section 
            onClick={handleSectionClick}
            className= {`fixed h-screen w-screen bg-[rgba(0,0,0,0.6) z-[999] top-0 left-0 items-center justify-center transition-all duration-500 p-5 ${close ? "hidden" : "flex"}`}
        >
            <div className='bg-[#111111] p-4 lg:p-8 rounded-lg border border-gray-800 popup relative' ref={popupRef}>
                <button className='absolute top-2 right-2 border-2 rounded-full text-sm lg:text-2xl font-bold text-white p-1 lg:p-2 cutbutton' onClick={toggleClose}>
                    <FaX />
                </button>

                <h1 className='text-3xl md:text-[56px] font-extrabold uppercase text-center text-[#616262] dark:text-white'> get in
                    &nbsp;
                    <span className='text-primary-yellow' >touch</span>
                </h1>

                <form method='post' className='grid lg:grid-cols-2 gap-8 lg:gap-[30px] cursor-auto mt-4 lg:mt-8' onSubmit={submitForm}>
                    <div className='form-control'>
                        <InputField 
                            placeholder={"YOUR NAME"}
                           s value={formData.name}
                            onChange={handleChange}
                            name="name"
                            error={errors.name}
                        />                        
                    </div>

                    <div className='form-control'>
                        <InputField 
                            placeholder={"YOUR EMAIL"}
                            value={formData.email}
                            onChange={handleChange}
                            name="email"
                            error={errors.email}
                        />
                    </div>

                    <div className='form-control'>
                        <InputField 
                            placeholder={'YOUR SUBJECT'}
                            value={formData.subject}
                            onChange={handleChange}
                            name="subject"
                            error={errors.subject}
                        />
                    </div>

                    <div className='form-control lg:col-span-2 relative'>
                        <textarea 
                            name="message" 
                            cols="30"
                            rows="4"
                            className={`p-[11px_26px_11px_26px] transition-all duration-500 border focus:border-primary-yellow rounded-[30px] outline-none dark:bg-[#252525] text-black dark:text-white w-full ${errors.message ? "border-red-800" : "border-gray-400 dark:border-gray-700"}`}
                            placeholder='YOUR MESSAGE'
                            value={formData.message}
                            onChange={handleChange}
                            >
                        </textarea>
                        {errors.message && <p className='text-red-500 text-xs lg:text-sm absolute -bottom-3 lg:-bottom-4 left-2'> {errors.message} </p>}
                    </div>
                    
                    <button type= "submit" className='uppercase cursor-pointer p-[16px_70px_16px_35px] w-fit text-[15px] bg-transparent border-2 border-primary-yellow dark:text-white text-gray-600 font-semibold rounded-full overflow-hidden relative submit-btn hover:text-white transition-all duration-500'>
                        <span className='z-20 relative' >
                            send message
                        </span>

                        <span className='absolute z-20 -right-[1px] -top-[1px] flex items-center justify-center h-[55px] aspect-square bg-primary-yellow rounded-full text-[25px] text-white'>
                            <IoIosSend />    
                        </span>
                    </button>

                </form>
            </div>
        </section>
    )
}

export default PopUp
