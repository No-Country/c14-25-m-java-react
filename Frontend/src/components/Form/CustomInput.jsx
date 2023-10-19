import React from 'react'

const CustomInput = ({name, placeholder, register}) => {
  return (
    <>
        <input 
          {...register(name, { required: true })} 
          className='customInput-container' 
          type="text" 
          name={name} 
          placeholder={placeholder} 
          id=""
        />
    </>
  )
}

export default CustomInput