import { useState } from 'react'

const CustomInput = ({ name, placeholder, register, style = {}, type = "text"}) => {
  const [inputData, setInputData] = useState("");
  const [isSelected, setIsSelected] = useState(false)

  const handleCustomInput = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      setInputData(value)
    }
    else {
      setInputData("")
    }

  }

  return (
    <>
      <section className='customInput-container'>

        {
          inputData.length > 0 ?
            <label className={`customInput-label ${isSelected?"customInput-label-focus":""}`} htmlFor={name}>
              {placeholder}
            </label>

          :
            null
        }



        <input
          className='customInput-input'
          type={type}
          name={name}
          placeholder={placeholder}
          {...register(name, { required: true })}
          onChange={handleCustomInput}
          onFocus={()=>{setIsSelected(true)}}
          onBlur={()=>{setIsSelected(false)}}
          style={style}
          id={name}
        />
      </section>
    </>
  )
}

export default CustomInput