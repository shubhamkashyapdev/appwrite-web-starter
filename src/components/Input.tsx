import React, { FC } from "react"
type InputType = {
  type: string
  value: string
  onChange: any
  id: string
  placeholder: string
  label: string
  name: string
}
const Input: FC<InputType> = ({
  type,
  id,
  onChange,
  placeholder,
  label,
  name,
  value,
}) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  )
}

export default Input
