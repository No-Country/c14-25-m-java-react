function FormDashboardIncome (){
    return(
        <>

            <section className='formDashboard-section'>

                <CustomInput
                    register={register}
                    name={"name_savings"}//VER EGRESO E INGRESO
                    placeholder={"Nombre del egreso"}
                    errors={errors}
                    setValue={setValue}
                    watch={watch}
                />

                <CustomDropdown
                    watch={watch}
                    setValue={setValue}
                    register={register}
                    name={"category_savings"}//VER EGRESO E INGRESO
                    dataOptions={category_savings}
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
                            name={"shared_savings"}//VER EGRESO E INGRESO
                            id={"shared_savings_yes"}
                            value={"si"}
                        />

                        <CustomInputRadio
                            register={register}
                            title={"No"}
                            name={"shared_savings"}//VER EGRESO E INGRESO
                            id={"shared_savings_no"}
                            value={"no"}
                        />

                    </section>

                    <CustomInput
                        register={register}
                        name={"amount_savings"}//VER EGRESO E INGRESO
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
                    name={"amount_savings"}//VER EGRESO E INGRESO
                    placeholder={"Monto del egreso"}
                    errors={errors}
                    setValue={setValue}
                    watch={watch}

                />
                <CustomInput
                    register={register}
                    name={"amount_savings"}//VER EGRESO E INGRESO
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
            </section>
        </>
    )
}
export default FormDashboardIncome