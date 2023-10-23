import { useState } from "react";
import SvgExpandMoreArrowDown from "../assets/icons/SvgExpandMoreArrowDown";
import SvgLogout from "../assets/icons/SvgLogout";
import SvgUserIcon from "../assets/icons/SvgUserIcon";
import image_user from "./../assets/image_user.jpg";
import {useNavigate} from "react-router-dom"

const Header = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    /**
     * El método toLocaleDateString() devuelve la fecha en un formato sensible a la 
     * localización, adaptándose así al idioma y formato del lugar donde te encuentres
     * **/
    const todayFormated = today.toLocaleDateString();

    const navigate = useNavigate()

    function obtenerHoraEnFormato12Horas() {
        const fecha = new Date();
        const horas = fecha.getHours();
        const minutos = fecha.getMinutes();
        const ampm = horas >= 12 ? "PM" : "AM";

        // Ajustar las horas al formato de 12 horas
        const horas12 = horas % 12 || 12;

        // Agregar un cero inicial si los minutos son menores a 10
        const minutosConCeroInicial = minutos < 10 ? `0${minutos}` : minutos;

        // Crear la cadena de tiempo en formato de 12 horas
        const horaEnFormato12Horas = `${horas12}:${minutosConCeroInicial} ${ampm}`;

        return horaEnFormato12Horas;
    }

    let user = {
        name: "Sofía",
        image: image_user
    }

    if (localStorage.getItem("userLogged")) {
        user = JSON.parse(localStorage.getItem("userLogged"));
    }

    const [isOpen, setIsOpen] = useState(false);
    const handleSettignsOptions = () => {
        setIsOpen(!isOpen);
    }

    const handleLogoutUser = () => {
        localStorage.removeItem("userLogged")
        navigate("/login")
    }

    return (
        <header className="header-container" onClick={handleSettignsOptions}>

            <section className="header-section-title">
                <h2>Dashboard</h2>
                <p>{todayFormated + " - " + obtenerHoraEnFormato12Horas()}</p>
            </section>

            <section className="header-section-user">

                <img className="header-section-user-image" src={user.image} alt="Imagen del usuario" />
                <section className="header-section-user-settings">
                    <h3>Hola, <span className="bolder">{user.name}</span></h3>
                    <SvgExpandMoreArrowDown />

                    {
                        isOpen ?

                            <section className="header-section-user-options">
                                <ul>
                                    <li><SvgUserIcon /> Configuración</li>
                                    <li onClick={handleLogoutUser}><SvgLogout /> Salir de la cuenta</li>
                                </ul>
                            </section> : null
                    }

                </section>
            </section>


        </header>
    )
}

export default Header