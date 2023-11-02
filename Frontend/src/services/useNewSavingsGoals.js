import { create } from 'zustand';
import goals_image_1 from "./../assets/goals_image_1.jpeg"
import goals_image_2 from "./../assets/goals_image_2.jpeg"
import goals_image_3 from "./../assets/goals_image_3.jpeg"

export const useNewSavingsGoals = create((set) => ({
    db:
        [
            {
                id: 1,
                title: "Comprar Auto",
                amount: 5000,
                total: 700000,
                image: goals_image_1,
                category: "Vacaciones",
                friends: ["Guido", "Denise", "Valentino"],
                isShared: "si",
                time: "3 Meses"
            },
            {
                id: 2,
                title: "Renovación de la cocina",
                amount: 100000,
                total: 160000,
                image: goals_image_2,
                category: "Vacaciones",
                friends: ["Guido", "Denise", "Valentino"],
                isShared: "si",
                time: "3 Meses"
            },
            {
                id: 3,
                title: "Viaje con la familia",
                amount: 9700,
                total: 400000,
                image: goals_image_3,
                category: "Vacaciones",
                friends: ["Guido", "Denise", "Valentino"],
                isShared: "si",
                time: "3 Meses"
            }, {
                id: 4,
                title: "Comprar Auto",
                amount: 5000,
                total: 700000,
                image: goals_image_1,
                category: "Vacaciones",
                friends: ["Guido", "Denise", "Valentino"],
                isShared: "si",
                time: "3 Meses"
            },
            {
                id: 5,
                title: "Renovación de la cocina",
                amount: 100000,
                total: 160000,
                image: goals_image_2,
                category: "Vacaciones",
                friends: ["Guido", "Denise", "Valentino"],
                isShared: "si",
                time: "3 Meses"
            },
            {
                id: 6,
                title: "Viaje con la familia",
                amount: 9700,
                total: 400000,
                image: goals_image_3,
                category: "Vacaciones",
                friends: ["Guido", "Denise", "Valentino"],
                isShared: "si",
                time: "3 Meses"
            }
        ]
    ,
    dbAreaChart: [
        
        {
            id: "0-dbAreaChart",
            title: "Enero",
            savingsGoals: [
                {
                    id: "0-savingsGoal-1",
                    title: "Renovación cocina",
                    price: 1500
                },
                {
                    id: "0-savingsGoal-2",
                    title: "Viaje con la familia",
                    price: 2500
                }
            ],
            totalPrice: 4000
        },
        {
            id: "1-dbAreaChart",
            title: "Febrero",
            savingsGoals: [
                {
                    id: "1-savingsGoal-1",
                    title: "Nuevo ordenador",
                    price: 900
                },
                {
                    id: "1-savingsGoal-2",
                    title: "Curso de idiomas",
                    price: 400
                },
                {
                    id: "1-savingsGoal-3",
                    title: "Viaje de fin de semana",
                    price: 1000
                },
                {
                    id: "1-savingsGoal-4",
                    title: "Equipo de gimnasio",
                    price: 400
                },
            ],
            totalPrice: 2700
        },
        {
            id: "2-dbAreaChart",
            title: "Marzo",
            savingsGoals: [
                {
                    id: "2-savingsGoal-1",
                    title: "Bicicleta",
                    price: 500
                },
                {
                    id: "2-savingsGoal-2",
                    title: "Renovación baño",
                    price: 2000
                },
                {
                    id: "2-savingsGoal-3",
                    title: "Electrodomésticos nuevos",
                    price: 1400
                },
                {
                    id: "2-savingsGoal-4",
                    title: "Muebles para el hogar",
                    price: 2000
                },
            ],
            totalPrice: 5900
        },
        {
            id: "3-dbAreaChart",
            title: "Abril",
            savingsGoals: [
                {
                    id: "3-savingsGoal-1",
                    title: "Próximas vacaciones",
                    price: 1500
                },
                {
                    id: "3-savingsGoal-2",
                    title: "Nueva computadora portátil",
                    price: 1800
                },
            ],
            totalPrice: 3300
        },
        {
            id: "4-dbAreaChart",
            title: "Mayo",
            savingsGoals: [
                {
                    id: "4-savingsGoal-1",
                    title: "Nueva televisión",
                    price: 700
                },
                {
                    id: "4-savingsGoal-2",
                    title: "Muebles para el jardín",
                    price: 300
                },
                {
                    id: "4-savingsGoal-3",
                    title: "Viaje de aventura",
                    price: 2200
                },
            ],
            totalPrice: 3200
        },
        {
            id: "5-dbAreaChart",
            title: "Junio",
            savingsGoals: [
                {
                    id: "5-savingsGoal-1",
                    title: "Matrícula universitaria",
                    price: 2500
                },
            ],
            totalPrice: 2500
        },
        {
            id: "6-dbAreaChart",
            title: "Julio",
            savingsGoals: [
                {
                    id: "6-savingsGoal-1",
                    title: "Nueva bicicleta",
                    price: 400
                },
                {
                    id: "6-savingsGoal-2",
                    title: "Cena en un restaurante de lujo",
                    price: 600
                },
            ],
            totalPrice: 2000
        },
        {
            id: "7-dbAreaChart",
            title: "Agosto",
            savingsGoals: [
                {
                    id: "7-savingsGoal-1",
                    title: "Equipo de camping",
                    price: 600
                },
                {
                    id: "7-savingsGoal-2",
                    title: "Clases de surf",
                    price: 1200
                },
                {
                    id: "7-savingsGoal-3",
                    title: "Nueva cámara",
                    price: 800
                },
            ],
            totalPrice: 2600
        },
        {
            id: "8-dbAreaChart",
            title: "Septiembre",
            savingsGoals: [
                {
                    id: "8-savingsGoal-1",
                    title: "Cocina nueva",
                    price: 2000
                },
                {
                    id: "8-savingsGoal-2",
                    title: "Viaje en crucero",
                    price: 2000
                },
            ],
            totalPrice: 4000
        },
        {
            id: "9-dbAreaChart",
            title: "Octubre",
            savingsGoals: [
                {
                    id: "9-savingsGoal-1",
                    title: "Nueva ropa",
                    price: 500
                },
                {
                    id: "9-savingsGoal-2",
                    title: "Colección de libros",
                    price: 600
                },
                {
                    id: "9-savingsGoal-3",
                    title: "Curso de cocina",
                    price: 900
                },
            ],
            totalPrice: 2000
        },
        {
            id: "10-dbAreaChart",
            title: "Noviembre",
            savingsGoals: [
                {
                    id: "10-savingsGoal-1",
                    title: "Proyecto de jardín",
                    price: 1000
                },
                {
                    id: "10-savingsGoal-2",
                    title: "Nueva computadora de escritorio",
                    price: 1800
                },
                {
                    id: "10-savingsGoal-3",
                    title: "Membresía de gimnasio",
                    price: 1000
                },
            ],
            totalPrice: 3800
        },
        {
            id: "11-dbAreaChart",
            title: "Diciembre",
            savingsGoals: [
                {
                    id: "11-savingsGoal-1",
                    title: "Regalos de Navidad",
                    price: 500
                },
                {
                    id: "11-savingsGoal-2",
                    title: "Viaje a la nieve",
                    price: 3500
                },
                {
                    id: "11-savingsGoal-3",
                    title: "Nueva consola de videojuegos",
                    price: 2000
                },
            ],
            totalPrice: 6000
        },

    ],
    increaseDB: (newData) => set((state) => ({
        db: [...state.db,
        {
            id: state.db[state.db.length - 1].id + 1,
            amount: 0,
            total: newData?.amount_savings,
            title: newData?.name_savings,
            image: newData?.image_savings,
            category: newData?.category_savings,
            isShared: newData?.shared_savings,
            friends: newData?.friends_savings || null,
            time: newData?.time_savings
        }
        ]
    }))
    ,
    findById: (id, state) => {

        const foundUser = state.find((savingGoal) => {
            return savingGoal.id == id;
        });

        return foundUser; // Devuelve el usuario encontrado o null si no se encuentra
    },
    updateDbById: (newData) => set((state) => (

        {
            db: [...state.db.filter((item)=>(item.id != newData.id)),
            {
                id: newData.id,
                amount: newData?.amount_savings,
                total: newData?.total_savings,
                title: newData?.name_savings,
                image: newData?.image_savings,
                category: newData?.category_savings,
                isShared: newData?.shared_savings,
                friends: newData?.friends_savings || null,
                time: newData?.time_savings
            }
            ]
        }
    )),
    deleteDbById: (newData) => set((state) => (
        {
            db: [...state.db.filter((item)=>(item.id != newData.id))]
        }
    )),
}));
