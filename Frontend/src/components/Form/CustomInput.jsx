import { useEffect, useState } from 'react'

const CustomInput = ({ name, placeholder, register, style = {}, type = "text", setValue, errors}) => {
  const [inputData, setInputData] = useState("");
  const [isSelected, setIsSelected] = useState(false)

  const handleCustomInput = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      setValue(name, value, { shouldValidate: true })
      setInputData(value)
    }
    else {
      setInputData("")      
      setValue(name, "", { shouldValidate: true })

    }

  }

  const handleBlur = (e) => {
    setIsSelected(false)
  }

  useEffect(()=>{}, [
    register(name, { required: true })
  ])

  return (
    <>
      <section className='customInput-container' >

        {
          inputData.length > 0 ?
            <label className={`customInput-label ${isSelected ? "customInput-label-focus" : ""}`} htmlFor={name}>
              {placeholder}
            </label>

            :
            null
        }

        <input
          onFocus={() => { setIsSelected(true) }}
          onBlur={handleBlur}
          className='customInput-input'
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={handleCustomInput}
          style={style}
          id={name}
        />
        <span className='customInputError'>{errors[name]?.message}</span>
      </section>
    </>
  )
}

export default CustomInput