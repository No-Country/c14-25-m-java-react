import SvgCreate from "../../assets/icons/SvgCreate"
import SvgPhotoCamera from "../../assets/icons/SvgPhotoCamera"
import SvgContentCopy from "../../assets/icons/SvgContentCopy"
import SvgDelete from "../../assets/icons/SvgDelete"
import SvgElipse from "../../assets/icons/SvgElipse"
function Amount({p, data}) {
    console.log(data[0])
    return (
        <>
        
           { p? <ul className="Amount">
                <li className="AmountType">Pago de alquiler</li>
                <li className="AmountCategory"> <span>Renta</span></li>
                <li>{data[0].salary || data[0].spend }</li>
                <li>1/10/2023</li>
                <li>efectivo</li>
                <li>Aqui van notas</li>
                <li className="AmountIcons">
                <button><SvgCreate/></button>
                <button><SvgPhotoCamera/></button>
                <button><SvgContentCopy/></button>
                <button><SvgDelete/></button>
                </li>               
                </ul>
                :
                <ul className="AmountDetail">
                 
                <li className="AmountCategory"><SvgElipse/> {data[0].salary ?<span>Salario</span>:<span>Renta</span> }</li>
                <li>{data[0].salary || data[0].spend }</li>                
                </ul>
            }
        </>
    )
}
export default Amount