import { create } from "zustand";
export const useAmountDashboard = create((set) => ({
    //Egresos
  dbE: [
    
    {
        type: "egress",
        id: 1,
        title: "Hospital",
        category: "Salud",
        amount: 50000,
        total: 700000,
    },
    {
      id: 2,
      title: "Renta",
      category: "Renta",
      amount: 100000,
      total: 700000,
    },
    {
      id: 3,
      title: "Comida",
      category: "Comida",
      amount: 60000,
      total: 160000,
    },
    {
      id:4,
      title: "Servicios",
      category: "Renta",
      amount: 15000,
      total: 400000,
    },
    {
      id: 5,
      title: "Educación",
      category: "Educación",
      amount: 60000,
      total: 700000,
    },
    {
      id: 6,
      title: "Transporte",
      category: "Transporte",
      amount: 24074,
      total: 160000,
    },
    {
      id: 7,
      title: "Ocio",
      category: "Ocio",
      amount: 19943,
      total: 400000,
    },
  ],

  increaseDBE: (newData) =>
    set((state) => ({
      dbE: [
        ...state.dbE,
        {
          id: state.dbE[state.dbE.length - 1].id + 1,
          title: newData.name_egress,
          category: newData.category_egress,
          amount: parseInt(newData.amount_egress),
         
          
        },
      ],
    })),

     //Ingresos
    dbI: [
        {
            type: "income",
            id: 1,
            title: "Salario",
            category: "Salario",
            amount: 171000,
            total: 700000,
        },        
        {
          id: 2,
          title: "Bonus",
          category: "Bonus",
          amount: 60000,
          total: 160000,
        },
        {
          id: 3,
          title: "Aguinaldo",
          category: "Aguinaldo",
          amount: 85500,
          total: 400000,
        },
        {
          id: 4,
          title: "Otros",
          category: "Otros",
          amount: 1500,
          total: 700000,
        },
        {
          id: 5,
          title: "Venta Compu",
          category: "Otros",
          amount: 24074,
          total: 160000,
        },
        {
          id: 6,
          title: "Arreglo de mueble",
          category: "Otros",
          amount: 19943,
          total: 400000,
        },
      ],  
      increaseDBI: (newData) =>
      set((state) => ({
        dbI: [
          ...state.dbI,
          {
            id: state.dbI[state.dbI.length - 1].id + 1,
            title: newData.name_income,
            category: newData.category_income,
            amount:  parseInt(newData.amount_income),
            note: newData.note_income,          
            
          },
        ],
      })), 
}));
