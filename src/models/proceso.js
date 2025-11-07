import {DataTypes} from "sequelize"
import db from "../db/index.js";
import AreaFabricacion from "./AreaFabricacion.js"


const ProcesoEtapa = db.get().define(
    "ProcesoEtapa",
     {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        
        nombreEtapa: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        estado:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        estatus:{
            type:DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        schema: "pharmatrixdb",
    }
);
AreaFabricacion.hasMany(ProcesoEtapa,{foreignKey:"id_areaFabricacion"});
ProcesoEtapa.belongsTo(AreaFabricacion, {foreignKey: "id_areaFabricacion",});

export default ProcesoEtapa;