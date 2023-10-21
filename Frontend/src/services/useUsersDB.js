import { create } from 'zustand';

export const useUsersDB = create((set) => ({
    db: [{
        name: "Guido",
        lastname: "Mamaní",
        email: "guidorafaelmamani100@gmail.com",
        password: "12345678",
        image: "",
    }],
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