import { useState } from "react"

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input:React.FC<MyInputProps> = (props) => {

  // const [view, setView] = useState(false);

  return (
    <div className="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#F3F4F6] dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <div>
          <label className="font-bold">{props.label}</label>
        </div>
        <div>
          <input {...props} className="w-full bg-transparent outline-none "/>
        </div>
    </div>
  )
}

export default Input