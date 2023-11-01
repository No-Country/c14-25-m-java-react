import React from "react";
import CardAmount from "../components/Card/CardAmounts";
import CardGraphics from "../components/Card/CardGraphics";
import Graphic from "../components/Card/Graphic";
import Botton from "../components/Botton";
import { useState } from "react";
import BottonGroupDateDWM from "../components/Card/BottonGroupDateDWM";
import {Helmet} from "react-helmet"; 
import ButtonIncomeEgress from "../components/Card/ButtonIncomeEgress";
import { useAmountDashboard } from "../services/useAmountDashboard";
import { useEffect } from "react";
const Dashboard = () => {
  
  const {dbE, increaseDBE, dbI, increaseDBI} = useAmountDashboard();

  const [amount, setAmount] = useState(dbI);
  const [changeClass, setChangeClass]=useState(true)
  const[option,setOption]=useState("income")
  function handleChangeClass() {
    setChangeClass(!changeClass)    
}
useEffect(
  ()=>{
    option=="income"?setAmount(dbI):setAmount(dbE)
},[option,dbI,dbE])
 
function income() {
  setOption("income")
    setAmount(dbI);
    
   
    handleChangeClass()
    
  }

  function egress() {
    setOption("egress")
    setAmount(dbE);
    
    handleChangeClass()
    
    
  }
  
  return (
    
    
   
    <section className="dashboard">
      <Helmet>
      <title>Dashboard | Presupuesto claro</title>
      </Helmet>
    
    
      <article className="dashboard-first-article">
        <CardAmount  />       
        
      </article>

      <article className="dashboard-second-article">
        <div className="cardGraphics-div">
          <h2>Mes</h2>
          <Botton amount={amount}  changeClass={changeClass} income={ income} egress={ egress} />
        </div>
        <section className="dashboard-second-article-section">
          <div className="BottonGroup">
            <BottonGroupDateDWM />
          </div>
          <ButtonIncomeEgress amount={amount} changeClass={changeClass} income={ income} egress={ egress} />         
          <CardGraphics amount={amount} />
        </section>
      </article>

      <h2>Meses anteriores</h2>
      <article className="dashboard-third-article">
        <Graphic p={null}amount={amount} changeClass={changeClass}  income={ income} egress={ egress} />
        <Graphic p={null}amount={amount} changeClass={changeClass}  income={ income} egress={ egress} />
        <Graphic p={null}amount={amount} changeClass={changeClass}  income={ income} egress={ egress} />
      </article>
    </section>
  );
};

export default Dashboard;
