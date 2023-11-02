const CustomInputRadio = ({ id, name, value, title, register}) => {

    return (
        <>
            <section className="customInputRadio-container">
                <input
                    className='customInputRadio-container-input'
                    type="radio"
                    name={name}
                    id={id}
                    value={value}//Aca esta el tema al cargar el input se carga como null al no dar click pense en algo asi {value== null? "no":value}
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