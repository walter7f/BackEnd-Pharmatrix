import {DataTypes} from "sequelize"
import db from "../db/index.js";
//import User from "./User.js";
//import Account from "./Account.js";

const LotePlanificacion = db.get().define(
    "LotePlanificacion",
     {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        producto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        planificacion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        vencimiento: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        formaFarmaceutica: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        unidad: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lote: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        orden: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        tamanioLote: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        distribucion1: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        distribucion2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        distribucion3: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        distribucion4: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        distribucion5: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        distribucionFinal1: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        distribucionFinal2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        distribucionFinal3: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        distribucionFinal4: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        distribucionFinal5: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        planta: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        areaFabricacion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        preProceso: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        proceso: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        materiaPrima: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        materialEmpaque: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fechaInicio: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        fechaFinalizado: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        estadoProductoTerminado: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fechaPhani:{
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        schema: "pharmatrixdb",
    }
);


export default LotePlanificacion;