import React, { useState } from 'react'

const CustomAddOption = ({ register, name, title, options, watch }) => {
    const [activeDropdown, setActiveDropdown] = useState(false);

    watch()[name] = []

    const handleActiveDropdown = () => {
        setActiveDropdown(!activeDropdown);
    }

    return (
        <>
            <div className='customAddOption-container'>
                <section className='customAddOption-header' onClick={handleActiveDropdown}>
                    {
                        watch()[name]?.length <= 0 || watch()[name] == null || watch()[name] == undefined ?
                            <>
                                <p className='customAddOption-placeholder'>{title}</p>
                            </>
                            :
                            <>
                                {
                                    watch()[name]?.length>0? 
                                    
                                        watch()[name]?.slice(0, 2)?.map((option, index) => (
                                            <p className='customAddOption-selected' key={option + index + "selected"}>{option}</p>
                                        ))
                                    : 
                                    <>
                                        <p className='customAddOption-placeholder'>{title}</p>
                                    </>

                                }
                            </>
                    }
                     <p className='customAddOption-counter'>+{ watch()[name]?.length || 0}</p>


                </section>

                {
                    activeDropdown ?
                        <ul className='customAddOption-main'>
                            {
                                options.map((option, index) => (
                                    <li key={option + index}>

                                        <label
                                            className='customAddOption-label'
                                            id={"label"+ option + index}  
                                            htmlFor={option + index}
                                            style={watch()[name]?.includes(option)?{backgroundColor:"#C5A7FF"}:{}} 
                                        >
                                            {option}
                                        </label>

                                        <input 
                                            className='customAddOption-input'
                                            {...register(name, { required: true })} 
                                            type="checkbox" 
                                            id={option + index} 
                                            name={name} 
                                            value={option}
                                        />

                                    </li>
                                ))
                            }
                        </ul> : null
                }
            </div>
        </>
    )
}

export default CustomAddOption