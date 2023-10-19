import { useEffect, useState } from 'react';
import SvgExpandMoreDropdown from '../../assets/icons/SvgExpandMoreDropdown';
import SvgClose from '../../assets/icons/SvgClose';

const CustomDropdown = ({ name, setValue, register, placeholder, watch, dataOptions }) => {
    const [activeDropdown, setActiveDropdown] = useState(false);
    const [placeholderSelected, setPlaceholderSelected] = useState(placeholder);

    const handleActiveDropdown = () => {
        setActiveDropdown(!activeDropdown);
    }

    const handleOptionDropdown = (data) => {
        setValue(name, data,  { shouldValidate: true })
        setPlaceholderSelected(data)
        setActiveDropdown(false)
    }

    const handleDeselectOption = () => {
        setValue(name, null,  { shouldValidate: true })
        setPlaceholderSelected(placeholder)
        setActiveDropdown(false)
    }

    useEffect(()=>{
        register(name, { required: true })
    }, [])

    return (
        <section className='customDropdown-container'>

            <section className='customDropdown-title' onClick={handleActiveDropdown}>
                {
                    watch()[name] ?
                    <>
                         {placeholderSelected}
                        <span onClick={handleDeselectOption} className='customDropdown-icon-close'><SvgClose /></span>
                    
                    </>
                       :  <>  
                    {placeholder} <SvgExpandMoreDropdown /> </>
                }
            </section>

            {
                activeDropdown ?
                    <ul className='customDropdown-options'>
                        {
                            dataOptions?.map((item)=>{
                               return  <li key={`${item }`} onClick={()=>{handleOptionDropdown(item)}}>{item}</li>
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