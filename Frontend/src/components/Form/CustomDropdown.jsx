import { useEffect, useState } from 'react';
import SvgExpandMoreDropdown from '../../assets/icons/SvgExpandMoreDropdown';
import SvgClose from '../../assets/icons/SvgClose';

const CustomDropdown = ({ name, setValue, register, placeholder, watch, dataOptions }) => {
    const [activeDropdown, setActiveDropdown] = useState(false);
    const [placeholderSelected, setPlaceholderSelected] = useState(placeholder);
    const [inputData, setInputData] = useState("");
    const [isSelected, setIsSelected] = useState(false)

    const handleActiveDropdown = () => {
        setActiveDropdown(!activeDropdown);
    }

    const handleOptionDropdown = (data) => {
        setValue(name, data, { shouldValidate: true })
        setPlaceholderSelected(data)
        setActiveDropdown(false)
        setInputData(data)
    }

    const handleDeselectOption = () => {
        setValue(name, null, { shouldValidate: true })
        setPlaceholderSelected(placeholder)
        setActiveDropdown(false)
        setInputData("")
    }

    useEffect(() => {
        register(name, { required: true })
    }, [])

    useEffect(() => {
        setInputData(watch()[name])
    }, [watch()[name]])

    return (
        <section className='customDropdown-container'
        
        >

            <section className='customDropdown-title' onClick={handleActiveDropdown}>
                {
                    watch()[name] ?
                        <>
                            {placeholderSelected}
                            <span onClick={handleDeselectOption} className='customDropdown-icon-close'><SvgClose /></span>

                        </>
                        : <>
                            {placeholder} <SvgExpandMoreDropdown /> </>
                }
            </section>

            {
                inputData?.length > 0 ?
                    <label className={`customInput-label ${isSelected ? "customInput-label-focus" : ""}`} htmlFor={name}>
                        {placeholder}
                    </label>

                    :
                    null
            }

            {
                activeDropdown ?
                    <ul className='customDropdown-options'>
                        {
                            dataOptions?.map((item) => {
                                return <li key={`${item}`} onClick={() => { handleOptionDropdown(item) }}>{item}</li>
                            })
                        }
                    </ul>
                    :
                    null
            }

        </section>
    )
}

export default CustomDropdown