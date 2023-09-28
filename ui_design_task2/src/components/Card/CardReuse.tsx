import last from "../../assets/AS.svg"
interface Props {
    children?: React.ReactNode
    className?: string
}
const CardReuse = ({ children, className = '' }: Props) => {
    return (
        <div className="flex justify-start items-center    gap-[4px] bg-[#FFF] rounded-sm px-4 border-b pb-4"  >
            <input type="checkbox" />
            <div className="lg:ml-[8px] flex justify-start items-center gap-[24px] lg:w-[851px] ">
                <div className="  w-[56px] h-[56px]  rounded-full bg-[#EDF4FF] flex justify-center items-center shrink-0">
                    <img src={last} alt="" />
                </div>
                <div className={`${className}`}>{children}</div>
            </div>
        </div>
    )
}

export default CardReuse