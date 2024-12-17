import React from 'react'
import { useForm, UseFormRegister } from 'react-hook-form';

function TextInput({
  placeholder, register, name
}: {
  placeholder?: string,
  register: UseFormRegister<any>; 
  name: string;

}) {
  return (
    <input 
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
      placeholder={placeholder} 
      {...register(name)}
    />
  )
}

export default TextInput