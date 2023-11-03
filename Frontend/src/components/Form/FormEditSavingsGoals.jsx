import SvgClose from '../../assets/icons/SvgClose';
import CustomInput from './CustomInput';
import CustomDropdown from './CustomDropdown';
import CustomInputRadio from './CustomInputRadio';
import { useForm } from "react-hook-form"
import { useNewSavingsGoals } from '../../services/useNewSavingsGoals';
import { useEffect, useState } from 'react';
import CustomInputFile from './CustomInputFile';
import CustomAddOption from './CustomAddOption';
import axios from 'axios';
import SvgDeleteRed from '../../assets/icons/SvgDeleteRed';
import Swal from 'sweetalert2'

const FormEditSavingsGoals = ({ handleStateModal, id }) => {
    const { db, findById, updateDbById, deleteDbById } = useNewSavingsGoals();

    const userData = findById(id, db);

    const initDefaultValues = {
        name_savings: userData?.title,
        category_savings: userData?.category,
        shared_savings: userData?.isShared,
        friends_savings: userData?.friends,
        total_savings: userData?.total,
        time_savings: userData?.time,
        image_savings: userData?.image,
        amount_savings: userData?.amount
    }

    const [defaultValues, setDefaultValues] = useState(initDefaultValues)


    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        resetField,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            ...defaultValues
        }
    })

    useEffect(() => {
        console.log("WATCH: ", JSON.stringify(watch(), null, 2))
    }, [db, watch()])


    useEffect(() => {

        if (watch()["shared_savings"] != undefined && watch()["friends_savings"] != undefined) {
            if (watch()["shared_savings"] == "no") {
                resetField("friends_savings");
                setValue("friends_savings", [])
            }
        }
    }, [watch()["shared_savings"]])


    const onSubmit = async (dataForm) => {
        console.log("SUBMIT!")
        console.log(watch()["image_savings"] + "!=" + userData?.image)
        // let imageSavingsGoals = userData?.image

        // if (userData.image != watch()["image_savings"]) {
        //     let response = await axios.post("https://api.cloudinary.com/v1_1/djlxueouv/image/upload", watch()["image_savings"])
        //     imageSavingsGoals = response.data.secure_url;
        // }

        Swal.fire({
            title: '¿Editar meta de ahorro?',
            text: "",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#5706AC',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Editar meta de ahorro',
            cancelButtonText: "Cancelar",
            customClass: {
                confirmButton: 'my-confirm-button-class', // Clase CSS para el botón de confirmar
                cancelButton: 'my-cancel-button-class' // Clase CSS para el botón de cancelar
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '¡Meta de ahorro editada correctamente!',
                    '',
                    'success'
                )

                if (watch()["temporal_image_savings"]) {
                    updateDbById({ ...dataForm, image_savings: watch()["temporal_image_savings"], id: id })
                }
                else {
                    updateDbById({ ...dataForm, id: id })

                }

                handleStateModal()
            }


        })
    }

    const handleReset = () => {
        Swal.fire({
            title: '¿Estas seguro de deshacer los cambios?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#5706AC',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Descartar cambios',
            cancelButtonText: "Cancelar",
            customClass: {
                confirmButton: 'my-confirm-button-class', // Clase CSS para el botón de confirmar
                cancelButton: 'my-cancel-button-class' // Clase CSS para el botón de cancelar
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '¡Cambios descartados correctamente!',
                    '',
                    'success'
                )

                reset(initDefaultValues)
            }


        })
    }

    const handleDelete = () => {

        Swal.fire({
            title: '¿Estas seguro de eliminar esta meta de ahorro?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#5706AC',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar meta de ahorro',
            cancelButtonText: "Cancelar",
            customClass: {
                confirmButton: 'my-confirm-button-class', // Clase CSS para el botón de confirmar
                cancelButton: 'my-cancel-button-class' // Clase CSS para el botón de cancelar
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Meta de ahorro eliminada correctamente!',
                    '',
                    'success'
                )


                deleteDbById({ id: id })
                handleStateModal()
            }


        })
    }

    const category_savings = [
        'Vacaciones',
        'Refacción',
        'Casa',
        'Educación',
        'Emergencias',
        'Retiro',
        'Casamiento',
        'Personalizar'
    ];

    const time_savings = [
        '1 Mes',
        '3 Meses',
        '6 Meses',
        '12 Meses'
    ]

    const friends = ["Guido", "Valentino", "Denise", "Alejandro"];



    return (
        <form onSubmit={handleSubmit(onSubmit)} className='newSavingsGoals-form editSavingsGoals-form' action="">

            <section>
                <header className='newSavingsGoals-header'>
                    <h3>Editar meta de ahorro</h3>

                    <span onClick={handleStateModal}>
                        <SvgClose />
                    </span>
                </header>

                <section className='newEditSavingsGoals-image'>
                    <img src={watch()["temporal_image_savings"] || watch()["image_savings"]} alt="" />
                </section>

                <section className='newSavingGoals-amount'>

                    <section className='newSavingGoals-amount-title'>
                        <h3>Monto ahorrado</h3>
                        <button onClick={handleStateModal}>
                            $
                            <span className='bolder'>{watch()["amount_savings"]?.toLocaleString("es-ES")}</span>
                            /
                            {
                                parseInt(watch()["total_savings"])?.toLocaleString("es-ES")
                            }
                        </button>
                    </section>

                    <section className='newSavingGoals-amount-input'>
                        <p>¡Sigue ahorrando para alcanzar tu meta!</p>

                        <input
                            type="range"
                            name=''
                            min={0}
                            max={watch()?.total_savings || userData?.total}
                            value={watch()["amount_savings"]}
                            onChange={(event) => { setValue("amount_savings", event.target.value) }}
                        />
                    </section>

                </section>
            </section>

            <section className='newSavingGoals-content'>
                <section className='newSavingsGoals-section'>

                    <CustomInput
                        register={register}
                        name={"name_savings"}
                        placeholder={"Nombre del ahorro"}
                        errors={errors}
                        setValue={setValue}
                        watch={watch}
                    />

                    <CustomDropdown
                        watch={watch}
                        setValue={setValue}
                        register={register}
                        name={"category_savings"}
                        dataOptions={category_savings}
                        placeholder={"Categoría"}
                    />

                </section>

                <section className='newSavingsGoals-section-inputRadio'>

                    <p>¿Este ahorro será compartido con otra persona?</p>

                    <section className='newSavingsGoals-subsection'>

                        <section className='newSavingsGoals-section-inputRadio-options'>
                            <CustomInputRadio
                                register={register}
                                title={"Sí"}
                                name={"shared_savings"}
                                id={"shared_savings_yes"}
                                value={"si"}
                            />

                            <CustomInputRadio
                                register={register}
                                title={"No"}
                                name={"shared_savings"}
                                id={"shared_savings_no"}
                                value={"no"}
                            />
                        </section>

                        {
                            watch()["shared_savings"] == "si" ?
                                <CustomAddOption watch={watch} register={register} name={"friends_savings"} title={"Seleccione a sus amigos"} options={friends} />
                                :
                                null
                        }
                    </section>

                </section>

                <section className='newSavingsGoals-section'>
                    <CustomInput
                        register={register}
                        name={"total_savings"}
                        placeholder={"Monto que querés ahorrar"}
                        errors={errors}
                        setValue={setValue}
                        watch={watch}

                    />
                    <CustomDropdown
                        placeholder={"Indica el tiempo que querés ahorrar"}
                        watch={watch}
                        setValue={setValue}
                        register={register}
                        name={"time_savings"}
                        dataOptions={time_savings}
                    />

                </section>

                <CustomInputFile
                    title={"Subir imagen"}
                    watch={watch}
                    register={register}
                    setValue={setValue}
                    name={"image_savings"}
                />

                <section className='editSavingsGoals-section-buttons'>
                    <section>
                        <button className='button-delete' onClick={handleDelete} type='button'><SvgDeleteRed /></button>
                    </section>

                    <section>
                        <button onClick={handleReset} type='reset'>Cancelar</button>
                        <button disabled={!isValid} type="submit">Confirmar</button>
                    </section>

                </section>
            </section>
        </form>
    )
}

export default FormEditSavingsGoals

/**
 * 
        <code>
            <pre>
                {JSON.stringify(watch(),null,2)}
            </pre>
        </code>
 * 
 **/