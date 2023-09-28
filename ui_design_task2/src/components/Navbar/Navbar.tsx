import { useState } from "react"
import LogoLarge from "../../assets/logoLarge.svg"
import { DropMenus } from "./Index"
import Arrow from "../../assets/arrow.svg"
import { Icons } from "./Index"
import expand from "../../assets/expand.svg"

export interface MenuProps {
    menu: {
        label: string
        count: string
    }
}



const Navbar: React.FC<MenuProps> = () => {
    const [showDropdown, setShowDropDown] = useState(false)
    const [isSelected, setSelected] = useState(DropMenus[0])
    return (
        <>
            <div className="bg-transparent  lg:flex  lg:justify-between lg:items-start">
                <div>
                    <img src={LogoLarge} alt="" />
                    <p className="text-xs font-light leading-normal not-italic text-[#0B0B0B] font-[Poppins]">London</p>
                </div>
                <div className="lg:pl-[40px]" >

                    <button className="flex justify-between items-center w-full lg:w-[341px] lg:h-[40px] py-[8px] px-[16px] rounded-lg bg-[#FFF] shadow-md text-[#1D4ED8] text-xs lg:text-base font-semibold font-[Poppins] mt-4 lg:mt-0" onClick={() => {
                        setShowDropDown(!showDropdown)

                    }}>
                        {isSelected.label}
                        <span>
                            <img src={Arrow} alt="" className={`${showDropdown ? 'rotate-180' : 'row-auto'}`} />
                        </span>
                    </button>
                    {
                        showDropdown && DropMenus.map((menu, index) => (
                            <div key={index} className={`${isSelected.label === menu.label && 'bg-[#EDF2FF]'} lg:w-[341px] lg:h-[72px] lg:py-[8px] lg:px-[16px] mt-4 lg:mt-0 rounded-lg shadow-lg z-[10] bg-[#FFF]`} onClick={() => {
                                setSelected(menu)
                                setShowDropDown(false)
                            }

                            }>

                                <li className=" flex justify-between lg:w-[341px] lg:h-[72px]  items-center cursor-pointer ] py-[4px] px-[24px]">
                                    <span className="text-[#0B0B0B] text-xs lg:text-base font-normal  font-[Poppins]">{menu.label}</span>
                                    <span className="text-[#444] text-[14px] font-semibold  font-[Poppins] ">{menu.count}</span>
                                </li>
                            </div>


                        ))
                    }
                </div>
                {
                    <div className={`${showDropdown ? "hidden lg:flex lg:justify-between lg:gap-[24px] " : "lg:flex  lg:justify-between lg:gap-[24px] lg:items-center "}`}>
                        <div className="flex justify-between items-center my-6 lg:my-0  lg:mt-0  gap-[24px] lg:ml-[30px]">
                            {

                                Icons.map((icon, index) => (
                                    <div key={index} className="lg:my-auto  lg:p-[8px] lg:rounded-lg  border-[#ECECEC] lg:shadow-sm lg:bg-[#FFF] shrink-0 flex">
                                        <img src={`./src/assets/${icon.src}`} alt="" className="flex" />
                                    </div>
                                ))



                            }
                        </div>



                        <div className="bg-[#1D5ECD]   lg:w-[195px] lg:h-[40px] mx-auto text-xs  px-5 flex lg:gap-[20] py-[8px] lg:px-[16px] lg:justify-between lg:items-center relative rounded-lg lg:mx-[32px]  lg:mt-0" >
                            <h2 className="text-[#FFF] font-[Poppins] text-[13px]">Move To Video Interview I</h2>
                            <div className="border-l-2 border-[#FFF]  bg-[#1D5ECD] px-[16px] absolute right-[-38px] h-full bottom-0 rounded-r-lg " >
                                <img src={expand} alt="" className="pt-2 lg:pt-3" />
                            </div>
                        </div>

                    </div>
                }


            </div>
        </>
    )
}

export default Navbar