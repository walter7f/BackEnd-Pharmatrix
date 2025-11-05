import express from "express";
import {
  createAreaFabricacion,
  getAllAreasFabricacion,
  getOneAreaFabricacion,
  deleteOneAreaFabricacion,
  getAreasConLotes,
} from "../controllers/areaFabricacion.controller.js";

const areaFrabircRouter = express.Router();

areaFrabircRouter.post("/areaf/", createAreaFabricacion);       // Crear
areaFrabircRouter.get("/areaf/", getAllAreasFabricacion);       // Listar todas
areaFrabircRouter.get("/areaf/:id", getOneAreaFabricacion);     // Obtener una
areaFrabircRouter.delete("/areaf/:id", deleteOneAreaFabricacion); // Eliminar
areaFrabircRouter.get("/areaflotes", getAreasConLotes);    // (Opcional) Ver con lotes

export default areaFrabircRouter;
