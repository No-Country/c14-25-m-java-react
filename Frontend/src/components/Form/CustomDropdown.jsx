import React, { useState } from 'react'
import SvgExpandMoreDropdown from '../../assets/icons/SvgExpandMoreDropdown'

const CustomDropdown = ({ placeholder }) => {
    const [activeDropdown, setActiveDropdown] = useState(false);

    const handleActiveDropdown = () => {
        setActiveDropdown(!activeDropdown);
    }

    return (
        <section className='customDropdown-container'>

            <section className='customDropdown-title' onClick={handleActiveDropdown}>
                {placeholder}
                <SvgExpandMoreDropdown />
            </section>

            {
                activeDropdown ?
                    <ul className='customDropdown-options'>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                        <li>Option 4</li>
                        <li>Option 5</li>
                    </ul>
                    :
                    null
            }

        </section>
    )
}

export default CustomDropdown