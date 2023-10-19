const CustomInputRadio = ({ id, name, value, title, register}) => {

    return (
        <>
            <section className="customInputRadio-container">
                <input
                    className='customInputRadio-container-input'
                    type="radio"
                    name={name}
                    id={id}
                    value={value}
                    {...register(name, { required: true })} 
                />

                <label
                    className={
                        `customInputRadio-container-label`
                    }
                    htmlFor={id}>
                </label>

                <label htmlFor={id} className="customInputRadio-container-title">
                    {title}
                </label>
            </section>
        </>
    )
}

export default CustomInputRadio