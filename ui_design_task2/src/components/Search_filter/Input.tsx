
import Search from "../../assets/Search.svg"
import Circle from "../../assets/Circle.svg"

interface Props {
  type?: string
  placeholder?: string
  onSearch?: () => void
}

const Input = ({ type, onSearch, placeholder }: Props) => {
  return (
    <div className=" p-[16px] max-w-sm lg:max-w-[385px] h-[48px] bg-[#FFF] flex justify-start  items-center rounded-lg">
      <img src={Search} alt=""
        className="pt-2 "
      />
      <input type={type}
        placeholder={placeholder}
        onClick={onSearch}
        className=" py-[12px] px-[12px]  lg:placeholder: placeholder:text-xs focus:outline-none "

      />
      <img src={Circle} alt=""
        className=" lg:pl-32"
      />
    </div>

  )
}
Input.defaultProps = {
  placeholder: "Serach by name, edu, exp or #tag"
}

export default Input