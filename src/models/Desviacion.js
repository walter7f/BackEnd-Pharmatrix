import {DataTypes} from "sequelize"
import db from "../db/index.js";


const Desviacion = db.get().define(
    "Desviacion",
     {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Descripcion:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        causa_raiz:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        accion_inmediata:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        accion_correctiva:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        accion_preventiva:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        severidad:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        categoria:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        aprov_jefeplanta:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        aprov_gom:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        aprov_goc:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        aprov_cc:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        aprov_gc:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        schema: "pharmatrixdb",
    }
);


export default Desviacion;

// orm  BD relacional
// odm   BD no relacional

/*
export const MATRIZ_SEVERIDAD = [
  {
    severidad: "Critica",
    descripcion:
      "Desviación que puede afectar directamente la seguridad o eficacia del producto.",
    impacto: "Alto - Riesgo al paciente, incumplimiento regulatorio severo.",
    ejemplos: [
      "Contaminación microbiana o cruzada.",
      "Producto fuera de especificación (OOS).",
      "Falla de esterilización o mezcla de lotes."
    ],
    prioridad: "Alta",
    plazo_cierre: "≤30 días",
  },
  {
    severidad: "Mayor",
    descripcion:
      "Desviación que afecta el cumplimiento GMP pero sin impacto directo a la seguridad.",
    impacto:
      "Medio - Afecta integridad de proceso o documentación, requiere investigación formal.",
    ejemplos: [
      "Equipo sin calibración vigente.",
      "Procedimiento no seguido correctamente.",
      "Registro incompleto o con error menor."
    ],
    prioridad: "Media",
    plazo_cierre: "≤30 días",
  },
  {
    severidad: "Menor",
    descripcion:
      "Desviación sin impacto en la calidad ni en el cumplimiento regulatorio significativo.",
    impacto:
      "Bajo - Error administrativo o de documentación, sin afectación al producto.",
    ejemplos: [
      "Error tipográfico en bitácora.",
      "Firma faltante detectada y corregida.",
      "Retraso menor en registro."
    ],
    prioridad: "Baja",
    plazo_cierre: "≤15 días",
  },
];
*/