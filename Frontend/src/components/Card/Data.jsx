function Data({data}){
    console.log(data[0].salary ||data[0].spend  )
   return(<>{data.map((d)=>{<div>asdasdasdas {d.salary ||d.spend  }</div>})}</> )

}
export default Data