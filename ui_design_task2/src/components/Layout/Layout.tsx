

import Sidebar from "../Sidebar/Sidebar"
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import React from "react"

export interface DashboardLinkProps {
    link: {

        label?: string
        path?: string
        src: string | unknown,

    }
}

const Layout: React.FC<DashboardLinkProps> = () => {
    const menu = { label: "", count: "" }
    return (
        <div className='flex  bg-[#F9FAFF] w-full '>

            <div >


                <Sidebar />
            </div>
            <div className='w-screen p-[32px]'>
                <div className=' fixed '>

                    <Navbar menu={menu} />
                </div>
                <div className=" mt-[200px] lg:mt-[100px]" >
                    <Outlet />
                </div>
            </div>


        </div>
    )
}

export default Layout
