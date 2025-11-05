import {DataTypes} from "sequelize"
import db from "../db/index.js";
//import LotePlanificacion from "./LotePlanificacion.js";

const AreaFabricacion = db.get().define(
    "AreaFabricacion",
     {
        id: {
            type: DataTypes.UUID,   
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        
        area_nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        Planta:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    
    },
    {
        schema: "pharmatrixdb",
    }
);

//LotePlanificacion.belongsTo(AreaFabricacion,{foreignKey:"id_areaFabricacion"})

export default AreaFabricacion