import {DataTypes} from "sequelize"
import db from "../db/index.js";
import LotePlanificacion from "./LotePlanificacion.js";

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
        orden:{
            type: DataTypes.INTEGER,
            allowNull:false,
        }
    
    },
    {
        schema: "pharmatrixdb",
    }
);

LotePlanificacion.hasMany(AreaFabricacion,{foreignKey:"id_lotePlani"});
AreaFabricacion.belongsTo(LotePlanificacion, {foreignKey: "id_lotePlani",});
export default AreaFabricacion