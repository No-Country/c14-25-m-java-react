import CustomInput from "../components/Form/CustomInput"
import DefaultLayoutFormUser from "../components/Form/DefaultLayoutFormUser"
import { useForm } from "react-hook-form"
import { useUsersDB } from "../services/useUsersDB"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Register = () => {

    const { db, increaseDB } = useUsersDB()

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("userLogged")) {
            navigate("/");
        }
    }, [])

    const {
        register,
        handleSubmit,
        watch,
        setError,
        setValue,
        formState: { errors, isValid },
    } = useForm()

    const regularExpressions = {
        isEmail: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    }

    const onSubmit = (data) => {

        if (data.register_password != data.register_confirm_password) {
            setError("register_password", { type: "custom", message: "Las contraseñas no coinciden." })
            setError("register_confirm_password", { type: "custom", message: "Las contraseñas no coinciden." })
        }
        else if (!regularExpressions.isEmail.test(data.register_email)) {
            setError("register_email", { type: "custom", message: "Ingrese correctamente su email." })
        }
        else if (data.register_password.length < 8) {
            setError("register_password", { type: "custom", message: "La contraseña debe ser mayor o igual a 8 caracteres." })
        }
        else if (data.register_confirm_password.length < 8) {
            setError("register_confirm_password", { type: "custom", message: "La contraseña debe ser mayor o igual a 8 caracteres." })
        }
        else {
            console.log("Creado correctamente")
            increaseDB(data)
            navigate("/login")
        }
    }

    


    return (
        <>
            <DefaultLayoutFormUser
                title={"Crea tu cuenta"}
                subtitle={"Empeza a cambiar la relación con tu dinero."}
                titleGoogle={"Crear cuenta con Google"}
                titleFacebook={"Crear cuenta con Facebook"}
                footerTitle={"¿Tienes cuenta?"}
                footerTitleLink={"Inicia sesión."}
                footerTitlePath={"/login"}
            >

                <form className="defaultLayoutFormUser-form" action="" onSubmit={handleSubmit(onSubmit)}>

                    <section className="register-container-section-two">
                        <CustomInput
                            register={register}
                            placeholder={"Nombre"}
                            name={"register_name"}
                            style={{ width: "100%" }}
                            type={"text"}
                            setValue={setValue}
                            errors={errors}
                            watch={watch}

                        />

                        <CustomInput
                            register={register}
                            placeholder={"Apellido"}
                            name={"register_lastname"}
                            style={{ width: "100%" }}
                            type={"text"}
                            setValue={setValue}
                            errors={errors}
                            watch={watch}

                        />
                    </section>

                    <CustomInput
                        register={register}
                        placeholder={"Correo electrónico"}
                        name={"register_email"}
                        style={{ width: "100%" }}
                        type={"email"}
                        setValue={setValue}
                        errors={errors}
                        watch={watch}

                    />

                    <CustomInput
                        register={register}
                        placeholder={"Contraseña"}
                        name={"register_password"}
                        style={{ width: "100%" }}
                        type={"password"}
                        setValue={setValue}
                        errors={errors}
                        watch={watch}

                    />

                    <CustomInput
                        register={register}
                        placeholder={"Repetir contraseña"}
                        name={"register_confirm_password"}
                        style={{ width: "100%" }}
                        type={"password"}
                        setValue={setValue}
                        errors={errors}
                        watch={watch}

                    />

                    <button disabled={!isValid} type="submit" className="defaultLayoutFormUser-buttonSubmit">
                        Acceder
                    </button>

                </form>


            </DefaultLayoutFormUser>
        </>
    )
}

export default Register