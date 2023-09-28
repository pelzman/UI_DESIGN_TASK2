
import Document from "../../assets/Document.svg"
import caret from "../../assets/Caret_Down.svg"

interface Props {
    text: string
}
const Filtercard = ({ text }: Props) => {
    return (
        <>

            <div className="flex justify-between items-center lg:max-w-[385px] h-[58px] lg:py-[18px] px-[16px] border-b bg-[#FFF] gap-7">
                <div className="flex justify-start items-center gap-[8px]">
                    <img src={Document} alt="" />
                    <p className="text-[#0B0B0B] font-[Poppins] text-[14px] not-italic font-normal">{text}</p>
                </div>

                <div>
                    <img src={caret} alt="" />
                </div>

            </div>
        </>
    )
}

export default Filtercard