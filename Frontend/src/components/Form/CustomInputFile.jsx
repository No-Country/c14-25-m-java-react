import { useEffect, useState } from 'react'
import SvgAddCircle from '../../assets/icons/SvgAddCircle';
import SvgCheck from '../../assets/icons/SvgCheck';
import axios from 'axios';

const CustomInputFile = ({ register, setValue, name, title, watch }) => {
    const [image, setImage] = useState("");
    const [nameImage, setNameImage] = useState("");
    // const [urlImage, setUrlImage] = useState("");
    // const [loadImage, setLoadImage] = useState(false)

    const handleImage = async (e) => {
        const fileOne = e.currentTarget.files[0];
        console.log("AASDASDASDAS")
         const file = e.target.files[0]
         const data = new FormData();
         data.append("file", file)
         data.append("upload_preset", "Preset_PresupuestoClaro")
        // const response = await axios.post("https://api.cloudinary.com/v1_1/djlxueouv/image/upload", data)
        // setUrlImage(response.data.secure_url);
        console.log("NAME: ", fileOne.name)
        setNameImage(fileOne.name)
        const image = URL.createObjectURL(fileOne)
        setImage(image)
        setValue("image_savings", data, { shouldValidate: true })
        setValue("temporal_image_savings", image)

    }

    useEffect(() => {
        register(name, { required: true })

        if (watch()[name]?.toString()?.length > 0) {
            setValue(name, watch()[name], { shouldValidate: true })
            setImage(watch()[name])
            setNameImage(watch()[name])
        }
    }, [])


    return (
        <>
            <input
                type="file"
                onChange={handleImage}
                id={name}
                className='customInputFile-input'
            />

            <label title={nameImage} className={`customInputFile-label ${image.length > 0 ? "customInputFile-label-active" : ""}`} htmlFor={name}>

            
                <input type="text" readOnly value={nameImage?.length > 0?nameImage:""} />

                <section className='customInputFile-button'>
                    {
                        nameImage?.length > 0 ?
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
                </section>
            </label>


        </>
    )
}

export default CustomInputFile