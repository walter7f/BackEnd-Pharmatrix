import {DataTypes} from "sequelize"
import db from "../db/index.js";

const User = db.get().define(
    "User",
     {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        planta:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        puesto:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        rol:{
            type:DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        schema: "PharmatrixDB", 
    }
);

export default User;
