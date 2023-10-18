import { create } from 'zustand';

export const useNewSavingsGoals = create((set) => ({
    db: [],
    increaseDB: (newData) => set((state) => ({
        db: [...state.db, newData]
    }))
}));
