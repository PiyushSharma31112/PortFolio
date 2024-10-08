import React, { useState } from 'react'
import PageHeading from "../components/common/PageHeading"
import { FaEnvelopeOpen, FaFacebookF, FaInstagram, FaLinkedin, FaMap, FaGithub } from "react-icons/fa"
import { IoIosSend } from "react-icons/io"
import { toast } from "react-toastify" 
import emailjs from 'emailjs-com';

const socialData = [
    {
      id: 1,
      icon: <FaFacebookF />,
      link: 'https://www.facebook.com/share/8Zq6Pp325CGeqeYj/?mibextid=LQQJ4d '
    },
    {
      id: 2,
      icon: <FaInstagram />,
      link: "https://www.instagram.com/its___piyush?igsh=MTczdXJxbGFsOXN0Zg%3D%3D&utm_source=qr"
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/piyush-sharma-233341275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
    },
    {
      id: 4,
      icon: <FaGithub />,
      link: "https://github.com/PyushSharma31112"
    },
  
  ]  

const InputFeild = ({ placeholder, value, onChange, name, error }) => {
  return (
      <div className='relative'>
        <input 
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`p-[11px_26px_11px_26px] transition-all duration-500 border focus:border-primary-yellow rounded-[30px] outline-none dark:bg-[#252525] text-black dark:text-white w-full ${error ? "border-red-800" : "border-gray-400 dark:border-gray-700"} `}
        />
        {error && <p className='text-red-500 text-sm absolute -bottom-6 left-2'> {error} </p>}
      </div>
  )
}

const ContactUs = () => {

      const [formData, setFormData] = useState({
          name: '',
          email: '',
          subject: '',
          message: ''
      })
      
      const [errors, setErrors] = useState({})

      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }

      const validateForm = () => {
        const newErros = {}
        const { name, email, subject, message } = formData

        if (!name) newErros.name = "Name is required"
        
        if (!email) {
            newErros.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErros.email = "Email adress is invalid"
        } 
        if (!subject) newErros.subject = 'Subject is required'
        if (!message) newErros.message = 'Message is required'
        
        return newErros
      }

      const submitForm = (e) => {
        e.preventDefault()

        const newErros = validateForm()
        if (Object.keys(newErros).length > 0) {
            setErrors(newErros)
            toast.error("All feild are mandatory")
            return
        }

        emailjs.send("service_r1vw41k", "template_nvypect", formData)
        .then(function(response) {
            console.log('SUCESS!', response)
        }, function(error) {
            console.log('FAILED...', error)
        });

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        })

        setErrors({})

        toast.success("Get back to you soon")

        console.log(formData.name)
        console.log(formData.email)
        console.log(formData.subject)
        console.log(formData.message)
      }
      
  return (
    <section className='max-w-[1200px] mx-auto px-4 md:px-0 md:w-11/12 pb-20 lg:pb-0' data-aos = "fade-down" data-aos-duration = "1200">
        <PageHeading mainText={"Get in"} highLightedText={"touch"} secondText={"contact"} />

        <div className='flex gap-[60px] lg:flex-row flex-col'>
            <div className='lg:w-2/5 space-y-10'>
                <div>
                    <h1 className='text-[26px] dark:text-white text-gray-600 uppercase font-bold tracking-widest' > don't be shy ! </h1>
                    <p className='text-[15px] dark:text-white text-gray-600 leading-6'> Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or oppurtunities to be part of you visions. </p>
                </div>

                <div className='space-y-6'>
                    <div className='flex items-start gap-4'>
                        <span className='text-primary-yellow text-4xl'>
                              <FaMap />
                        </span>

                        <span>
                              <h1 className='dark:text-[#ffffffcc] text-gray-500 uppercase text-[15px] font-normal'>address</h1>
                              <a href="piyushsharmadec009@gmail.com" className='dark:text-white text-[#000000cc] text-[15px] font-medium'>Patna, Bihar <br /> Country - India</a>
                        </span>
                    </div>

                    <div className='flex items-start gap-4'>
                          <span className='text-primary-yellow text-4xl'>
                              <FaEnvelopeOpen />
                          </span>
                          <span>
                                <h1 className='dark:text-[#ffffffcc] text-gray-500 uppercase text-[15px] font-normal'>mail me</h1>
                                <a href="piyushsharmadec009@gmail.com" className='dark:text-white text-[#000000cc] text-[15px] font-medium'>piyushsharmadec009@gmail.com</a>
                          </span>
                    </div>
                </div>

                {/* Social Icons */}

                <div className='flex gap-3'>
                        { socialData.map(({ icon, link, id }) => (
                          <button key={id} className='h-10 aspect-square bg-[#eeeeee] dark:bg-[#666666] hover:bg-primary-yellow dark:text-white hover:text-white text-[#666666] flex justify-center duration-500 transition-all rounded-full items-center dark:hover:bg-primary-yellow'>
                              <a href={link} target='_blank'>
                                {icon}
                              </a>
                          </button>
                        )) }                        
                </div>
            </div>
            
            <div className='lg:h-3/5'>
                  <form method='post' className='grid lg:grid-cols-2 gap-[30px] cursor-auto' onSubmit={submitForm}>
                      <div className='form-control'>
                           <InputFeild
                               placeholder={'YOUR NAME'}
                              //  value={formData.name}
                               onchange= {handleChange}
                               name="name"
                               error={errors.name}
                           />
                      </div>
                      <div className='form-control'>
                            <InputFeild
                                placeholder={'YOUR EMAIL'}
                                // value={formData.email}
                                onchange= {handleChange}
                                name = "email"
                                error={errors.email}
                            />
                      </div>
                      
                      <div className='form-control lg:col-span-2'>
                            <InputFeild 
                                placeholder={'YOUR SUBJECT'}
                                // value={formData.subject}
                                onchange = {handleChange}
                                name="subject"
                                error={errors.subject}

                            /> 
                      </div>
                     
                      <div className='form-control lg:col-span-2 relative'>
                          <textarea 
                              name="message" 
                              cols="30"
                              rows="8"
                              className={`p-[11px_26px_11px_26px] transition-all duration-500 border focus:border-primary-yellow rounded-[30px] outline-none dark:bg-[#252525] text-black dark:text-white w-full ${errors.message ? "border-red-800" : "border-gray-400 dark:border-gray-700"}`}
                              placeholder='YOUR MESSAGE'
                              // value={formData.message}
                              onChange= {handleChange}
                          > 
                          </textarea>
                          {errors.message && <p className='text-red-500 text-sm absolute -bottom-4 left-2'> {errors.message} </p>}
                      </div>

                      <button type='submit' className='uppercase cursor-pointer p-[16px_70px_16px_35px] w-fit text-[15px] bg-transparent border-2 border-primary-yellow dark:text-white text-gray-600 font-semibold rounded-full  overflow-hidden relative submit-btn hover:text-white transition-all duration-500'>
                            <span className='z-20 relative'>send message</span>
                            <span className='absolute z-20 -right-[1px] -top-[1px] flex items-center justify-center h-[55px] aspect-square bg-primary-yellow rounded-full text-[25px] text-white'>
                                  <IoIosSend />
                            </span>
                      </button>
                  </form>
            </div>
        </div>
    </section>
  )
}
export default ContactUs
