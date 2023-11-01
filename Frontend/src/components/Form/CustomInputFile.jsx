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

         const file = e.target.files[0]
         const data = new FormData();
         data.append("file", file)
         data.append("upload_preset", "Preset_PresupuestoClaro")
        // const response = await axios.post("https://api.cloudinary.com/v1_1/djlxueouv/image/upload", data)
        // setUrlImage(response.data.secure_url);

        setNameImage(fileOne.name)
        const image = URL.createObjectURL(fileOne)
        setImage(image)
        setValue("image_savings", data, { shouldValidate: true })
    }

    useEffect(() => {
        register(name, { required: true })
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

            
                <input type="text" readOnly value={watch()[name]?.length > 0?nameImage:""} />

                <section className='customInputFile-button'>
                    {
                        watch()[name]?.length > 0 ?
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