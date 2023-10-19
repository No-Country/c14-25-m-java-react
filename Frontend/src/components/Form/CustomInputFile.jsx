import { useEffect, useState } from 'react'
import SvgAddCircle from '../../assets/icons/SvgAddCircle';
import SvgCheck from '../../assets/icons/SvgCheck';

const CustomInputFile = ({ register, setValue, name, title }) => {
    const [image, setImage] = useState("");
    const [nameImage, setNameImage] = useState("");

    const handleImage = (e) => {
        const fileOne = e.currentTarget.files[0];
        console.log("fileOne", fileOne.name)
        setNameImage(fileOne.name)
        const image = URL.createObjectURL(fileOne)
        setImage(image)
        setValue("image_savings", image, { shouldValidate: true })
    }

    useEffect(() => {
        register(name, image, { shouldValidate: true })
    }, [])

    return (
        <>
            <input
                type="file"
                onChange={handleImage}
                id={name}
                className='customInputFile-input'
            />

            <label title={nameImage} className={`customInputFile-label ${image.length > 0? "customInputFile-label-active": ""}`} htmlFor={name}>
             
                { 
                    image.length > 0 ? 
                        <>
                            <SvgCheck />
                            Imagen cargada
                        </>
                    : 
                        <>
                            <SvgAddCircle />
                            {title}
                        </>
                }
            </label>


        </>
    )
}

export default CustomInputFile