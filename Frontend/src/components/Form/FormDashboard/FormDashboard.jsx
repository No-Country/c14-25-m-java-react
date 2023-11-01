import SvgClose from '../../../assets/icons/SvgClose';
import CustomInput from '../CustomInput';
import CustomDropdown from '../CustomDropdown';
import CustomInputRadio from '../CustomInputRadio';
import { useForm } from "react-hook-form"
import { useAmountDashboard } from '../../../services/useAmountDashboard';
import { useEffect, useState } from 'react';
import FormDashboardEgress from './FormDashboardEgress';
import FormDashboardIncome from './FormDashboardIncome';
import ButtonIncomeEgress from '../../Card/ButtonIncomeEgress';
const FormDashboard = ({ amount,handleStateModal, changeClass, income, egress }) => {
    const {dbE, increaseDBE, dbI, increaseDBI} = useAmountDashboard();

    useEffect(() => {
        console.log("DBE: ", dbE , "DBI: ", dbI  )
    }, [dbE || dbI])

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        resetField,
        formState: { errors, isValid },
    } = useForm()

    const onSubmit = (dataForm) => {
        changeClass=== true? increaseDBI(dataForm): increaseDBE(dataForm)
        handleStateModal()
    }

    const handleReset = () => {
        reset()
    }

    const category_egress = [
        'Comida',
        'Servicios',
        'Renta',
        'Educación',
        'Transporte',
        'Ocio',
        'Salud',
        'Cultura',
        'Casa',
        'Belleza',
        'Regalos',
        'Tarjeta de crédito',
        'Otro',
    ];

    
    const category_income= [   
        'Salario',
        'Bonus',
        'Aguinaldo',
        'Otros    ',
        
    ];


    //CORREGIR ERROR DE QUE NO PERMITE CONFIRMAR CUANDO ES UN IMPORTE QUE NO SE INICIALIZA EN LA PAG PRINCIPAL
console.log(changeClass)
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='formDashboard-form' action="">

            <header className='formDashboard-header'>
                <h3>Nuevo</h3>

                <span onClick={handleStateModal}>
                    <SvgClose />
                </span>
            </header>
            <ButtonIncomeEgress reset={resetField} changeClass={changeClass} income={ income} egress={ egress} formTrue={true} />        

{changeClass=== true?
                 <>
                 <section className='formDashboard-section'>
 
                 <CustomInput
                     register={register}
                     name={"name_income"}//VER EGRESO E INGRESO
                     placeholder={"Nombre del ingreso"}
                     errors={errors}
                     setValue={setValue}
                     watch={watch}
                 />
 
                 <CustomDropdown
                     watch={watch}
                     setValue={setValue}
                     register={register}
                     name={"category_income"}//VER EGRESO E INGRESO
                     dataOptions={category_income}
                     placeholder={"Categoría"}
                 />
 
                 </section>
              
 
                 <section className='formDashboard-section'>
                 <CustomInput
                     register={register}
                     name={"amount_income"}
                     placeholder={"Monto del ingreso"}
                     errors={errors}
                     setValue={setValue}
                     watch={watch}
                     
 
                 />
                 <CustomInput
                     register={register}
                     name={"note_income"}
                     placeholder={"Notas"}
                     errors={errors}
                     setValue={setValue}
                     watch={watch}
 
                 />
               
                 </section>
                 </>
                 
            :
            <>
             {
            /*------------------------------------------------------------------------------------------------ */
           }
            <section className='formDashboard-section'>

                <CustomInput
                    register={register}
                    name={"name_egress"}//VER EGRESO E INGRESO
                    placeholder={"Nombre del egreso"}
                    errors={errors}
                    setValue={setValue}
                    watch={watch}
                />

                <CustomDropdown
                    watch={watch}
                    setValue={setValue}
                    register={register}
                    name={"category_egress"}//VER EGRESO E INGRESO
                    dataOptions={category_egress}
                    placeholder={"Categoría"}
                />

            </section>

            <section className='formDashboard-section-inputRadio'>

                <p>¿Este ahorro será compartido con otra persona?</p>

                <section className='formDashboard-subsection'>

                    <section className='formDashboard-section-inputRadio-options'>
                        <CustomInputRadio
                            register={register}
                            title={"Sí"}
                            name={"shared_egress"}//VER EGRESO E INGRESO
                            id={"shared_egress_yes"}
                            value={"si"}
                        />

                        <CustomInputRadio
                            register={register}
                            title={"No"}
                            name={"shared_egress"}//VER EGRESO E INGRESO
                            id={"shared_egress_no"}
                            value={"no"}
                        />
                        
                    </section>
                    
                    <CustomInput
                    register={register}
                    name={"friends_egress"}//VER EGRESO E INGRESO
                    placeholder={"Agregar persona"}
                    errors={errors}
                    setValue={setValue}
                    watch={watch}
                    />

                 </section>
                    

            </section>

            <section className='formDashboard-section'>
                <CustomInput
                    register={register}
                    name={"amount_egress"}//VER EGRESO E INGRESO
                    placeholder={"Monto del egreso"}
                    errors={errors}
                    setValue={setValue}
                    watch={watch}

                />
                <CustomInput
                    register={register}
                    name={"note_egress"}//VER EGRESO E INGRESO
                    placeholder={"Notas"}
                    errors={errors}
                    setValue={setValue}
                    watch={watch}

                />

                {/*<CustomDropdown
                    placeholder={"Indica el tiempo que querés ahorrar"}
                    watch={watch}
                    setValue={setValue}
                    register={register}
                    name={"time_savings"}//VER EGRESO E INGRESO
                    dataOptions={time_savings}
                />*/}
            </section> </>
         







               }
           {
            /*------------------------------------------------------------------------------------------------ */
           }
            <section className='formDashboard-section-buttons'>

                <button onClick={handleReset && handleStateModal} type='reset'>Cancelar</button>{/*Guido uso el reset para borrar info el handle lo cierra. Podria intentar que al borrar la data recien ahi pueda cerrar*/}
                <button disabled={!isValid } type="submit">Confirmar</button>
                 
            </section>
        </form>
    )
}

export default FormDashboard

