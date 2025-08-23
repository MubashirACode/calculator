


import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
export const Navbar = () => {


    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {

        if (showMobileMenu) {

            document.body.style.overflow = 'hidden'

        } else {

            document.body.style.overflow = 'auto'



        }

        return () => {
            document.body.style.overflow = 'auto'

        }

    }, [showMobileMenu])




    return (
        <motion.div
            className='    w-full z-10  '>


            <div className="container mx-auto flex justify-between items-center  py-4 px-6 md:px-10 lg:px-32 ">


                <img onClick={() => navigate('/')} src={logo} alt="logo" className='w-32 sm:w-40 z-[9999] cursor-pointer' />


                <ul className='hidden md:flex gap-7 text-white'>

                    <a href="/" className=' text-lg font-medium cursor-pointer text-black hover:text-blue-600 transition duration-500 ease-in-out'>Home</a>
                    <a href="/about" className=' text-lg font-medium cursor-pointer text-black hover:text-blue-600 transition duration-500 ease-in-out'>About </a>
                    <a href="/all-calculator" className=' text-lg font-medium cursor-pointer text-black hover:text-blue-600 transition duration-500 ease-in-out'>Calculators</a>
                    <a href="/all-testimonials" className=' text-lg font-medium cursor-pointer text-black hover:text-blue-600 transition duration-500 ease-in-out'>Testimonials</a>


                </ul>

                <Link to='/all-calculator'>
                    <button className='hidden md:block bg-green-600 text-white px-8 py-2 rounded-md cursor-pointer '>See All</button></Link>

                <Menu onClick={() => setShowMobileMenu(true)} className='md:hidden w-7  cursor-pointer ' />

            </div>


            {/* Mobile Responsive  */}


            <div className={`  md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0  w-0 '} z-[9999]  right-0 top-0 bottom-0 overflow-hidden bg-white  transition-all    `}>

                <div className="flex justify-end p-5 pr-10 cursor-pointer  ">
                    <X onClick={() => setShowMobileMenu(false)} className='w-6  ' />
                </div>



                <ul className='flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium'>
                    <a onClick={() => setShowMobileMenu(false)} href="/" className='px-4 py-2 rounded-full  inline-block  '>Home </a>
                    <a onClick={() => setShowMobileMenu(false)} href="/about" className='px-4 py-2 rounded-full  inline-block  '>About</a>
                    <a onClick={() => setShowMobileMenu(false)} href="/all-calculator" className='px-4 py-2 rounded-full  inline-block  '>Calculator</a>
                    <a onClick={() => setShowMobileMenu(false)} href="/all-testimonials" className='px-4 py-2 rounded-full  inline-block  '>Testimonials</a>
                </ul>



            </div>


        </motion.div>
    )
}

