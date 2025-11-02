import express from "express";
import {
    createLotePlani,
    deleteOneLotePlani,
    getAllLotePlani,
    getOneLotePlani
} from "../controllers/lotePlanificacion.controller.js";

const lotePlaniRouter = express.Router();

lotePlaniRouter.post("/lote", createLotePlani);
lotePlaniRouter.get("/lote", getAllLotePlani);
lotePlaniRouter.get("/lote/:id", deleteOneLotePlani)
lotePlaniRouter.get("/lote/:id", getOneLotePlani);

export default lotePlaniRouter;
 