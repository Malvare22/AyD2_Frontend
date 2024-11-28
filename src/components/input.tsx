import { useState } from "react"

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input:React.FC<MyInputProps> = (props) => {

  // const [view, setView] = useState(false);

  return (
    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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