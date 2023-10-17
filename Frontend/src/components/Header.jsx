import SvgExpandMoreArrowDown from "../assets/icons/SvgExpandMoreArrowDown";
import image_user from "./../assets/image_user.jpg";

const Header = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    /**
     * El método toLocaleDateString() devuelve la fecha en un formato sensible a la 
     * localización, adaptándose así al idioma y formato del lugar donde te encuentres
     * **/
    const todayFormated = today.toLocaleDateString();

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

    const user = {
        name: "Sofía",
        image: image_user
    }

    return (
        <header className="header-container">

            <section className="header-section-title">
                <h2>Dashboard</h2>
                <p>{ todayFormated + " - " + obtenerHoraEnFormato12Horas()}</p>
            </section>

            <section className="header-section-user">

                <img className="header-section-user-image" src={user.image} alt="Imagen del usuario" />
                
                <section className="header-section-user-settings">
                    <h3>Hola, <span className="bolder">{user.name}</span></h3>
                    <SvgExpandMoreArrowDown />
                </section>

            </section>


        </header>
    )
}

export default Header