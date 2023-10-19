import { create } from 'zustand';
import goals_image_1 from "./../assets/goals_image_1.jpeg"
import goals_image_2 from "./../assets/goals_image_2.jpeg"
import goals_image_3 from "./../assets/goals_image_3.jpeg"

export const useNewSavingsGoals = create((set) => ({
    db: [{
        id: 1,
        title: "Comprar Auto",
        amount: 5000,
        total: 700000,
        image: goals_image_1
    },
    {
        id: 2,
        title: "Renovación de la cocina",
        amount: 100000,
        total: 160000,
        image: goals_image_2
    },
    {
        id: 3,
        title: "Viaje con la familia",
        amount: 9700,
        total: 400000,
        image: goals_image_3
    }, {
        id: 4,
        title: "Comprar Auto",
        amount: 5000,
        total: 700000,
        image: goals_image_1
    },
    {
        id: 5,
        title: "Renovación de la cocina",
        amount: 100000,
        total: 160000,
        image: goals_image_2
    },
    {
        id: 6,
        title: "Viaje con la familia",
        amount: 9700,
        total: 400000,
        image: goals_image_3
    },],
    increaseDB: (newData) => set((state) => ({
        db: [...state.db,
        {
            id: state.db[state.db.length-1].id + 1,
            amount: 0,
            total: newData.amount_savings,
            title: newData.name_savings,
            image: newData.image_savings,
        }
        ]
    }))
}));
