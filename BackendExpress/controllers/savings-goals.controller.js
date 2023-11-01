export const getAll = (req, res, next) => {
    try {
        res.status(200).json("Hola desde el listado de metas de ahorro");
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
};


export const getById = (req, res, next) => {
    try {
        res.status(200).json("Hola desde la meta de ahorro con id "+req.params.id);
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
};