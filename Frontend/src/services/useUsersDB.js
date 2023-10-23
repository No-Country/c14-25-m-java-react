import { create } from 'zustand';
import UserImage from "./../assets/user_icon.png"

export const useUsersDB = create((set) => ({
    db: [{
        id: 0,
        name: "Guido",
        lastname: "Mamaní",
        email: "guidorafaelmamani100@gmail.com",
        password: "12345678",
        image: UserImage,
    }],
    increaseDB: (newData) => set((state) => ({
        db: [...state.db,
        {
            id: state.db[state.db.length - 1].id + 1,
            name: newData.register_name,
            lastname: newData.register_lastname,
            email: newData.register_email,
            password: newData.register_password,
            image: UserImage,
        }
        ]
    })),
    validateUser: (user, state) => {
        
        const foundUser = state.find((userDB) => {
            return userDB.email == user.login_email && userDB.password == user.login_password;
        });

        return foundUser; // Devuelve el usuario encontrado o null si no se encuentra
    }
}));