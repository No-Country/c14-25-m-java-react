import React from 'react'
import {Helmet} from "react-helmet"; 
import CardAmount from '../components/Card/CardAmounts';
import BottonGroupDateWMY from '../components/BottonGroupDateWMY';
import SimpleBarChartComponent from '../components/Card/SimpleBarChartComponent';
import ButtonIncomeEgress from '../components/Card/ButtonIncomeEgress'
import List from '../components/Card/List';
import { useAmountDashboard } from "../services/useAmountDashboard";
import { useState } from 'react';
const PreviousExpenses = () => {

const {dbE, increaseDBE, dbI, increaseDBI} = useAmountDashboard();
const [amount, setAmount] = useState(dbI);
const [changeClass, setChangeClass]=useState(true)
  function handleChangeClass() {
    setChangeClass(!changeClass)    
}

  function income() {
    setAmount(dbI);
    
   
    handleChangeClass()
    
  }

  function egress() {
    setAmount(dbE);

    handleChangeClass()
    
    
  }
  
  return (
    <>
      <Helmet>
      <title>Análisis | Presupuesto claro</title>
      </Helmet>
      <article className="analysis-first-article">
        <CardAmount egreso={true} />
         
      </article>
     
      <BottonGroupDateWMY/>
      <article  className="analysis-second-article">
      <ButtonIncomeEgress  amount={amount} changeClass={changeClass} income={ income} egress={ egress} />
      <SimpleBarChartComponent amount={amount} />

      </article>
      <article className="analysis-third-article">
      <List amount={amount} />
      </article>


    </>
    
  )
}

export default PreviousExpenses