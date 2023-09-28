

import { DashBoardLinks, OtherLinks } from './Index'
import logo from "../../assets/icon1.svg"

import { useState } from 'react'

import { Link, useLocation } from 'react-router-dom'


const Sidebar = () => {
    const location = useLocation()
    const [open, setOpen] = useState(true)

    return (



        <div className={` "w-[72px]" duration-500 bg-cyan h-screen  px-2 relative bg-[#FFF] shadow-md  `}>


            <div className=' pt-[20px] shrink-0'>
                <img src={logo} alt="" className={`h-{30px} w-{30px} cursor-pointer duration-200`} onClick={() => setOpen(!open)} />
            </div>


            <div className={`h-0 w-full border bg-[#DFDFDF] my-[32px]  `}></div>
            <ul className='list'>
                {

                    DashBoardLinks.map((link, index) => (
                        <Link key={index} to={link.path}>

                            <li className={`flex justify-start items-center text-white  gap-4 py-2  hover:text-black hover:rounded-lg list ${location.pathname === link.path ? 'active' : ''} 
              
            
              `} >
                                <div className='shrink-0'>
                                    <img src={`./src/assets/${link.src}`} alt="" className={` w-[30px] h-[30px] lg:w-[48px] lg:h-[48px `} />
                                </div>


                            </li>
                        </Link>

                    ))
                }


            </ul>

            <ul className='list pt-28 md:mt-auto'>
                {
                    OtherLinks.map((link, index) => (

                        <Link key={index} to={link.path}>

                            <li className={` flex justify-start items-center text-white  gap-4 py-2  hover:text-black hover:rounded-lg  list ${location.pathname === link.path ? 'active' : ''} 
                
              
                `} >     <div className='shrink-0 ' >
                                    <img src={`./src/assets/${link.src}`} alt="" className={` w-[30px] h-[30px] lg:w-[48px] lg:h-[48px] `} />
                                </div>


                            </li>
                        </Link>
                    ))
                }


            </ul>




        </div>


    )
}

export default Sidebar