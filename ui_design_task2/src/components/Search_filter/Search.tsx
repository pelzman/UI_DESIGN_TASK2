import Input from "./Input"
import Filtercard from "./Filtercard"
const Search = () => {
  return (
    <div>
      <Input />

      <div className="mt-[24px]">
        <div className="flex justify-between items-center lg:max-w-[385px] h-[58px] lg:py-[18px] px-[16px] bg-[#FFF] mb-3">
          <span className="text-[#0B0B0B] font-[Poppins] text-[14px] not-italic font-normal" >Filter</span>
          <p className="text-[11px]">0 <span className="text-[#0B0B0B] font-[Poppins] text-[12px] not-italic font-light">Selected</span></p>
        </div>

        <Filtercard text="Personal Information" />
        <Filtercard text="Education" />
        <Filtercard text="Work Experience" />
        <Filtercard text="Activity Filter" />
        <Filtercard text="Advanced Filter" />
      </div>
    </div>



  )
}

export default Search