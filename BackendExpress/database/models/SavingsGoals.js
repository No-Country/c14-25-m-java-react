module.exports = (sequelize, dataTypes) => {
    let alias = 'SavingsGoals'

    let colums = {
        id: {
            type: dataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        isShared: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
        },
        friends: {
            type: dataTypes.STRING, // Puedes ajustar el tipo de datos según tus necesidades
        },
        amount: {
            type: dataTypes.BIGINT,
            allowNull: false,
        },
        duration: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: dataTypes.TEXT,
            allowNull: false,
        }
    }

    let config = {
        tableName: 'savingsgoals',
        timestamps: false,
    }


    const SavingsGoals = sequelize.define(alias, colums, config);
    return SavingsGoals;
}