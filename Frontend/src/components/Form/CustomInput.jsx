import React from 'react'

const CustomInput = ({name, placeholder}) => {
  return (
    <>
        <input className='customInput-container' type="text" name={name} placeholder={placeholder} id="" />
    </>
  )
}

export default CustomInput