const db = require('./../database/models');

 const getAll = async (req, res, next) => {
    try {
        const savingsGoals = await db.SavingsGoals.findAll(); // Recupera todas las metas de ahorro de la base de datos
        res.status(200).json(savingsGoals);
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
};

 const getById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const savingsGoal = await db.SavingsGoals.findByPk(id); // Busca la meta de ahorro por su ID

        if (savingsGoal) {
            res.status(200).json(savingsGoal);
        } else {
            res.status(404).json("Meta de ahorro no encontrada");
        }
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
};
module.exports = {getAll, getById}