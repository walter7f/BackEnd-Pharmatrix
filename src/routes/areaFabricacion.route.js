import express from "express";
import {
  createAreaFabricacion,
  getAllAreasFabricacion,
  getOneAreaFabricacion,
  deleteOneAreaFabricacion,
  getAreasConLotes,
} from "../controllers/areaFabricacion.controller.js";

const areaFrabircRouter = express.Router();

areaFrabircRouter.post("/", createAreaFabricacion);       // Crear
areaFrabircRouter.get("/", getAllAreasFabricacion);       // Listar todas
areaFrabircRouter.get("/:id", getOneAreaFabricacion);     // Obtener una
areaFrabircRouter.delete("/:id", deleteOneAreaFabricacion); // Eliminar
areaFrabircRouter.get("/con/lotes", getAreasConLotes);    // (Opcional) Ver con lotes

export default areaFrabircRouter;
