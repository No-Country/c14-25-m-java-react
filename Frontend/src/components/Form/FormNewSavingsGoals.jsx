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

const FormNewSavingsGoals = ({ handleStateModal }) => {
    const { increaseDB, db } = useNewSavingsGoals();
    const [urlImage, setUrlImage] = useState("");

    useEffect(() => {
        console.log("DB: ", db)
    }, [db])

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        resetField,
        formState: { errors, isValid },
    } = useForm()

    const onSubmit = async (dataForm) => {
        // const response = await axios.post("https://api.cloudinary.com/v1_1/djlxueouv/image/upload", watch()["image_savings"])
        increaseDB({ ...dataForm, image_savings: watch()["temporal_image_savings"] })
        handleStateModal()
    }

    const handleReset = () => {
        reset()
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

    useEffect(() => {

        if (watch()["shared_savings"] != undefined && watch()["friends_savings"] != undefined) {
            if (watch()["shared_savings"] == "no") {
                resetField("friends_savings");
                setValue("friends_savings", [])
            }
        }
    }, [watch()["shared_savings"]])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='newSavingsGoals-form' action="">

            <header className='newSavingsGoals-header'>
                <h3>Nuevo ahorro</h3>

                <span onClick={handleStateModal}>
                    <SvgClose />
                </span>
            </header>

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
                        name={"amount_savings"}
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

                <section className='newSavingsGoals-section-buttons'>

                    <button onClick={handleReset} type='reset'>Cancelar</button>
                    <button disabled={!isValid} type="submit">Confirmar</button>

                </section>
            </section>


        </form>
    )
}

export default FormNewSavingsGoals

/**
 * 
        <code>
            <pre>
                {JSON.stringify(watch(),null,2)}
            </pre>
        </code>
 * 
 **/