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

desviacionRouter.post("/desviacion/", createDesviacion);
desviacionRouter.get("/desviacion/", getAllDesviaciones);
desviacionRouter.get("/desviacion/:id", getOneDesviacion);
desviacionRouter.patch("/desviacion/:id", updateDesviacion);
desviacionRouter.delete("/desviacion/:id", deleteDesviacion);

// Rutas adicionales
desviacionRouter.get("/desvseveridad/:severidad", getBySeveridad);
desviacionRouter.get("/desvcategoria/:categoria", getByCategoria);

export default desviacionRouter;
