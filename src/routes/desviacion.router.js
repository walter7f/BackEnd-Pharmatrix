import express from "express";
import {
  createDesviacion,
  getAllDesviaciones,
  getOneDesviacion,
  updateDesviacion,
  deleteDesviacion,
  getBySeveridad,
  getByCategoria,
} from "../controllers/desviacion.cotroller.js";

const desviacionRouter = express.Router();

desviacionRouter.post("/", createDesviacion);
desviacionRouter.get("/", getAllDesviaciones);
desviacionRouter.get("/:id", getOneDesviacion);
desviacionRouter.patch("/:id", updateDesviacion);
desviacionRouter.delete("/:id", deleteDesviacion);

// Rutas adicionales
desviacionRouter.get("/severidad/:severidad", getBySeveridad);
desviacionRouter.get("/categoria/:categoria", getByCategoria);

export default desviacionRouter;
