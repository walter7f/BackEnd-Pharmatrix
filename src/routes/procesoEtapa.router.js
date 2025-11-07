import express from 'express';
import {
    createProcesoEtapa,
    getAllProcesoEtapa,
    getOneProcesoEtapa,
    deleteOneProcesoEtapa,
    getProcesosByArea,
    updateProcesoEtapa,
    buscarProcesoEtapa,
    getProcesosByEstado,
    getProcesosByEstatus
} from '../controllers/procesoEtapa.controller.js';

const procesoEtapaRouter = express.Router();

procesoEtapaRouter.post('/proceso/', createProcesoEtapa);
procesoEtapaRouter.get('/proceso/', getAllProcesoEtapa);
procesoEtapaRouter.get('/proceso/:id', getOneProcesoEtapa);
procesoEtapaRouter.delete('/proceso/:id', deleteOneProcesoEtapa);
procesoEtapaRouter.get('/proceso/:id_areaFrabricacion', getProcesosByArea);
procesoEtapaRouter.put('/proceso/:id', updateProcesoEtapa);
procesoEtapaRouter.post('/procesoBuscar/', buscarProcesoEtapa);
procesoEtapaRouter.get('/procesoEstado/:estado', getProcesosByEstado);
procesoEtapaRouter.get('/procesoEstatus/:estatus', getProcesosByEstatus);

export default procesoEtapaRouter;