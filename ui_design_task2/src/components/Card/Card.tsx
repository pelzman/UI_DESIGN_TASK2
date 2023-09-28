import CardReuse from './CardReuse'
import Play from "../../assets/Play.svg"
import Notebook from "../../assets/Notebook.svg"
const Card = () => {
  return (
    <div className=' mt-[32px]  '>
      <div className=' lg:flex lg:justify-between lg:items-center bg-[#FFF] lg:w-[879px] h-[54px] gap-[32px]'>
        <div className='flex gap-3 mx-4'>
          <input type="checkbox" />
          <p className="flex gap-3 text-[#1D4ED8] font-[Poppins]" >247<span className='text-'>Candidates</span></p>
        </div>
        <div className=' flex lg:flex gap-6 max-w-sm mx-8'>
          <p className='text-[#1D4ED8] '>Qualified</p>
          <div className='flex justify-start items-center gap-[16px]'>
            <span className='flex justify-start items-center gap-[8px]'>
              <p className='text-[#0B0B0B] text-[14px] font-[Poppins] font-normal flex gap-[8px]'>Task</p>
              <p className='text-[#0B0B0B] text-[10px] font-[Poppins] font-normal flex gap-[8px] rounded-lg bg-[#F7F8FD]'>25</p>
            </span>
            <span className='flex justify-start items-center gap-[8px]'>
              <p className='text-[#0B0B0B] text-[14px] font-[Poppins] font-normal flex gap-[8px]'>Disqualified</p>
              <p className='text-[10px] font-normal font-[Poppins] rounded-lg bg-[#F7F8FD]'>78</p>
            </span>

          </div>



        </div>

      </div>

      <CardReuse>
        <div className='mt-[16px]'>
          <div className=''>
            <h1 className='text-black lg:text-[14px] font-bold not-italic lg:mb-[8px] font-[Poppins] '>Aaliyah Sanderson</h1>
            <p className='text-black lg:text-[10px] font-semibold not-italic mb-[8px] font-[Poppins] '>Riyadh, Saudi Arabia</p>
            <p className='text-black lg:text-[10px] font-light not-italic mb-[8px] font-[Poppins] '>Bachelor - Cambridge University (2023 - 2023)</p>
          </div>

          <div className='space-x-[8px] '>
            <span className='text-[#1D4ED8] text-[8px] font-normal not-italic mb-[8px] font-[Poppins] '>#top_candidate</span>
            <span className='text-[#1D4ED8] text-[8px] font-normal not-italic mb-[8px] font-[Poppins] '>#top_candidate</span>
          </div>
          <div className='space-x-[8px]'>
            <span className='lg:py-[2px] lg:px-[10px] bg-[#F3FAFC] text-[#037092] text-[8px] font-semibold not-italic rounded-xl'>New York</span>
            <span className='lg:py-[2px] lg:px-[10px bg-[#F3FAFC] text-[#037092] text-[8px] font-semibold not-italic rounded-xl'>Marketing</span>
            <span className='lg:py-[2px] lg:px-[10px] bg-[#F3FAFC] text-[#037092] text-[8px] font-semibold not-italic rounded-xl'>London</span>
          </div>
        </div>

      </CardReuse>
      <CardReuse>
        <div className='mt-[16px]'>
          <div className=''>
            <h1 className='text-black lg:text-[14px] font-bold not-italic lg:mb-[8px] font-[Poppins] '>Aaliyah Sanderson</h1>
            <p className='text-black lg:text-[10px] font-semibold not-italic mb-[8px] font-[Poppins] '>Riyadh, Saudi Arabia</p>
            <p className='text-black lg:text-[10px] font-light not-italic mb-[8px] font-[Poppins] '>Bachelor - Cambridge University (2023 - 2023)</p>
          </div>

          <div className='space-x-[8px] '>
            <span className='text-[#1D4ED8] text-[8px] font-normal not-italic mb-[8px] font-[Poppins] '>#top_candidate</span>
            <span className='text-[#1D4ED8] text-[8px] font-normal not-italic mb-[8px] font-[Poppins] '>#top_candidate</span>
          </div>
          <div className='space-x-[8px]'>
            <span className='lg:py-[2px] lg:px-[10px] bg-[#F3FAFC] text-[#037092] text-[8px] font-semibold not-italic rounded-xl'>New York</span>
            <span className='lg:py-[2px] lg:px-[10px bg-[#F3FAFC] text-[#037092] text-[8px] font-semibold not-italic rounded-xl'>Marketing</span>
            <span className='lg:py-[2px] lg:px-[10px] bg-[#F3FAFC] text-[#037092] text-[8px] font-semibold not-italic rounded-xl'>London</span>
          </div>
        </div>

      </CardReuse>

      <CardReuse>
        <div className='mt-[16px]'>
          <div className=''>
            <h1 className='text-black lg:text-[14px] font-bold not-italic lg:mb-[8px] font-[Poppins] '>John Doe</h1>
            <p className='text-black lg:text-[10px] font-semibold not-italic mb-[8px] font-[Poppins] '>Bostom, USA</p>
            <p className='text-black lg:text-[10px] font-light not-italic mb-[8px] font-[Poppins] '>Bachelor - MIT (2023 - 2023)</p>
          </div>

          <div className='space-x-[8px] '>
            <span className='text-[#1D4ED8] text-[8px] font-normal not-italic mb-[8px] font-[Poppins] '>#top_candidate</span>
            <span className='text-[#1D4ED8] text-[8px] font-normal not-italic mb-[8px] font-[Poppins] '>#top_candidate</span>
          </div>
          <div className='space-x-[8px]'>
            <span className='lg:py-[2px] lg:px-[10px] bg-[#F3FAFC] text-[#037092] text-[8px] font-semibold not-italic rounded-xl'>New York</span>
            <span className='lg:py-[2px] lg:px-[10px bg-[#F3FAFC] text-[#037092] text-[8px] font-semibold not-italic rounded-xl'>Marketing</span>
            <span className='lg:py-[2px] lg:px-[10px] bg-[#F3FAFC] text-[#037092] text-[8px] font-semibold not-italic rounded-xl'>London</span>
          </div>
        </div>

      </CardReuse>
      <CardReuse>
        <div className='mt-[16px]'>
          <div className=''>
            <h1 className='text-black lg:text-[14px] font-bold not-italic lg:mb-[8px] font-[Poppins] '>Thomas Matt</h1>
            <p className='text-black lg:text-[10px] font-semibold not-italic mb-[8px] font-[Poppins] '>Edinburgh, UK</p>
            <p className='text-black lg:text-[10px] font-light not-italic mb-[8px] font-[Poppins] '>Bachelor - Boston University (2023 - 2023)</p>
          </div>

          <div className='space-x-[8px] '>
            <span className='text-[#1D4ED8] text-[8px] font-normal not-italic mb-[8px] font-[Poppins] '>#top_candidate</span>
            <span className='text-[#1D4ED8] text-[8px] font-normal not-italic mb-[8px] font-[Poppins] '>#top_candidate</span>
          </div>
          <div className='space-x-[8px]'>
            <span className='lg:py-[2px] lg:px-[10px] bg-[#F3FAFC] text-[#037092] text-[8px] font-semibold not-italic rounded-xl'>New York</span>
            <span className='lg:py-[2px] lg:px-[10px bg-[#F3FAFC] text-[#037092] text-[8px] font-semibold not-italic rounded-xl'>Marketing</span>
            <span className='lg:py-[2px] lg:px-[10px] bg-[#F3FAFC] text-[#037092] text-[8px] font-semibold not-italic rounded-xl'>London</span>
          </div>
        </div>

      </CardReuse>
      <CardReuse>
        <div className='mt-[16px]'>
          <div className=''>
            <h1 className='text-black lg:text-[14px] font-bold not-italic lg:mb-[8px] font-[Poppins] '>Roy Jade</h1>
            <p className='text-black lg:text-[10px] font-semibold not-italic mb-[8px] font-[Poppins] '>Cambridge, UK</p>
            <p className='text-black lg:text-[10px] font-light not-italic mb-[8px] font-[Poppins] '>Bachelor - Yale (2023 - 2023)</p>
          </div>

          <div className='space-x-[8px] '>
            <span className='text-[#1D4ED8] text-[8px] font-normal not-italic mb-[8px] font-[Poppins] '>#top_candidate</span>
            <span className='text-[#1D4ED8] text-[8px] font-normal not-italic mb-[8px] font-[Poppins] '>#top_candidate</span>
          </div>
          <div className='space-x-[8px]'>
            <span className='lg:py-[2px] lg:px-[10px] bg-[#F3FAFC] text-[#037092] text-[8px] font-semibold not-italic rounded-xl'>New York</span>
            <span className='lg:py-[2px] lg:px-[10px bg-[#F3FAFC] text-[#037092] text-[8px] font-semibold not-italic rounded-xl'>Marketing</span>
            <span className='lg:py-[2px] lg:px-[10px] bg-[#F3FAFC] text-[#037092] text-[8px] font-semibold not-italic rounded-xl'>London</span>
          </div>
        </div>

      </CardReuse>

      <CardReuse className=" lg:flex lg:justify-between lg:w-[700px] ">
        <div className='mt-[16px]  pt-[-70px]' >


          <div>
            <h1 className='text-black lg:text-[14px] font-bold not-italic lg:mb-[8px] font-[Poppins] '>Ahmed Salman</h1>
            <p className='text-black lg:text-[10px] font-semibold not-italic mb-[8px] font-[Poppins] '>Cambridge, UK</p>
            <p className='text-black lg:text-[10px] font-light not-italic mb-[8px] font-[Poppins] '>Bachelor - Yale (2023 - 2023)</p>
          </div>


          <div>
            <div className='space-x-[8px] '>
              <span className='text-[#1D4ED8] text-[8px] font-normal not-italic mb-[8px] font-[Poppins] '>#top_candidate</span>
              <span className='text-[#1D4ED8] text-[8px] font-normal not-italic mb-[8px] font-[Poppins] '>#top_candidate</span>
            </div>
          </div>

          <div className='space-x-[8px]'>
            <span className='lg:py-[2px] lg:px-[10px] bg-[#F3FAFC] text-[#037092] text-[8px] font-semibold not-italic rounded-xl'>New York</span>
            <span className='lg:py-[2px] lg:px-[10px bg-[#F3FAFC] text-[#037092] text-[8px] font-semibold not-italic rounded-xl'>Marketing</span>
            <span className='lg:py-[2px] lg:px-[10px] bg-[#F3FAFC] text-[#037092] text-[8px] font-semibold not-italic rounded-xl'>London</span>
          </div>

        </div>

        <div className='flex  lg:items-start gap-[8px] lg:mt-3 mt-2'>
          <span className='flex justify-start items-center px-[8px] py-[4px] rounded-lg bg-[#F7F8FD] gap-[8px]'>
            <img src={Play} alt="" />
            <p className='text-[#1D4ED8] text-[10px] font-normal font-[Poppins]  '>4</p>
          </span>
          <span className='flex justify-start items-center gap-[8px] lg:px-[16px] lg:py-[4px] px-[8px] py-[4px]  bg-[#E3EBFF] rounded-xl'>
            <img src={Notebook} alt="" />
            <p className='text-[#1D4ED8] text-[10px] font-normal font-[Poppins] w-[100px]'>5 programs</p>
          </span>

        </div>

      </CardReuse>








    </div>
  )
}

export default Card