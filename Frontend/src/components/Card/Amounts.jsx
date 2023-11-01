import SvgCreate from "../../assets/icons/SvgCreate";
import SvgPhotoCamera from "../../assets/icons/SvgPhotoCamera";
import SvgContentCopy from "../../assets/icons/SvgContentCopy";
import SvgDelete from "../../assets/icons/SvgDelete";
import SvgElipse from "../../assets/icons/SvgElipse";
function Amount({ p, amount }) {
 
  const COLORS = ['#F24822','#0088FE',  '#5706AC','#0D99FF',  '#FFA629','#FFCD29',"#14AE5C", "#7E07FA"];
  const backgroundColor=['#f2482233','#0088FE33','#5706ac33','#0d99ff33','#ffa62933','#ffcd2933','#14ae5c33', '#7E07FA33']
  console.log (p)
  return (
    <>
      {p ? (
        
          amount?.map((item,index) => {
           
          return (

            <ul className="Amount" key={item.id}>
            <li className="AmountType">{item.title}</li>
            <li className="AmountCategory">
              {" "}
              <span style={{color:COLORS[index % COLORS.length], backgroundColor:backgroundColor[index % backgroundColor.length], }}>{item.category}</span>
            </li>
            <li>{item.amount}</li>
            <li>1/10/2023</li>
            <li>efectivo</li>
            <li>{item.note||"Aqui van notas"}</li>
            <li className="AmountIcons">
              <button>
                <SvgCreate />
              </button>
              <button>
                <SvgPhotoCamera />
              </button>
              <button>
                <SvgContentCopy />
              </button>
              <button>
                <SvgDelete />
              </button>
            </li>
          </ul>
          );
        })
      
      ) : (
        amount?.map((item,index) => {
          return (

            <ul className="AmountDetail" key={item.id}>
              <li className="AmountCategory">
                <SvgElipse   fill={COLORS[index % COLORS.length]}/> <span>{item.title}</span>
              </li>
              <li>${item.amount}</li>
            </ul>
          );
        })
      )}
    </>
  );
}
export default Amount;
