import ProcesoEtapa from "../models/proceso.js";

export async function createProcesoEtapa(request, response){
    try {
        const { nombreEtapa, estado, estatus, id_areaFrabricacion } = request.body;
        const newProcesoEtapa = await ProcesoEtapa.build({
            nombreEtapa, 
            estado, 
            estatus, 
            id_areaFrabricacion
        }).save();

        response.send(newProcesoEtapa);
    } catch (error) {
        response.status(500).send({
            message: "There was an error while creating a new ProcesoEtapa: "+ error,
            error,
        });
    }
};

export async function getAllProcesoEtapa(request, response){
    try {
        const procesosEtapas = await ProcesoEtapa.findAll();
        response.send(procesosEtapas);
    } catch (error) {
        response.status(500).send({
            message: "There was an error while getting all ProcesoEtapa: "+ error,
            error,
        });
    }
}

export async function getOneProcesoEtapa(request, response){
    const id = request.params.id;

    try {
        const procesoEtapa = await ProcesoEtapa.findOne({ where: { id } });
        if(!procesoEtapa){
            return response.status(404).send({ message: "ProcesoEtapa not found" });
        }
        response.send(procesoEtapa);
    } catch (error) {
        response.status(500).send({
            message: "There was an error while getting ProcesoEtapa: "+ error,
            error,
        });
    }
}

export async function deleteOneProcesoEtapa(request, response){
    const id = request.params.id;

    try {
        const deleteProcesoEtapa = await ProcesoEtapa.destroy({ where: { id } });
        
        if(deleteProcesoEtapa === 1){
            return response.send({ message: "ProcesoEtapa deleted" });
        }
        response.send({ message: "ProcesoEtapa was not removed" });
    } catch (error) {
        response.status(500).send({
            message: `There was an error while deleting ProcesoEtapa: ${id} ` + error,
            error,
        });
    }
}

export async function getProcesosByArea(request, response){
    const id_areaFrabricacion = request.params.id_areaFrabricacion;

    try { 
        const procesosEtapas = await ProcesoEtapa.findAll({ 
            where: { id_areaFrabricacion } 
        });
        if(!procesosEtapas || procesosEtapas.length === 0){
            return response.status(404).send({ message: "No ProcesoEtapa found for this area" });
        }
        response.send(procesosEtapas);
    } catch (error) {
        response.status(500).send({
            message: "There was an error while getting ProcesoEtapa by area: "+ error,
            error,
        });
    }
}

export async function updateProcesoEtapa(request, response){
    try {
        const id = request.params.id;
    
        const updateProceso = await ProcesoEtapa.update({
            nombreEtapa: request.body.nombreEtapa,
            estado: request.body.estado,
            estatus: request.body.estatus,
            id_areaFrabricacion: request.body.id_areaFrabricacion
        }, {
            where: { id }
        });

        response.send(updateProceso);
    } catch (error) {
        response.status(500).send({
            message: "There was an error while updating ProcesoEtapa: "+ error,
            error,
        });
    }
}

export async function buscarProcesoEtapa(request, response){
    try {
        const { nombreEtapa, estado } = request.body;
        const procesoFound = await ProcesoEtapa.findOne({ 
            where: { nombreEtapa, estado } 
        });
        
        if(!procesoFound){
            return response.status(404).send({ message: "ProcesoEtapa no encontrado" });
        }
        
        const idResult = await procesoFound.getDataValue('id');
        const estatus = await procesoFound.getDataValue('estatus');
        const id_areaFrabricacion = await procesoFound.getDataValue('id_areaFrabricacion');
        
        response.send({ 
            id: idResult, 
            estatus, 
            id_areaFrabricacion,
            proceso: procesoFound 
        });
    } catch (error) {
        response.status(500).send({
            message: "There was an error while searching ProcesoEtapa: "+ error,
            error,
        });
    }
}

export async function getProcesosByEstado(request, response){
    const estado = request.params.estado;

    try {
        const procesosEtapas = await ProcesoEtapa.findAll({ 
            where: { estado } 
        });
        
        if(!procesosEtapas || procesosEtapas.length === 0){
            return response.status(404).send({ message: "No ProcesoEtapa found with this estado" });
        }
        
        response.send(procesosEtapas);
    } catch (error) {
        response.status(500).send({
            message: "There was an error while getting ProcesoEtapa by estado: "+ error,
            error,
        });
    }
}

export async function getProcesosByEstatus(request, response){
    const estatus = request.params.estatus;

    try {
        const procesosEtapas = await ProcesoEtapa.findAll({ 
            where: { estatus } 
        });
        
        if(!procesosEtapas || procesosEtapas.length === 0){
            return response.status(404).send({ message: "No ProcesoEtapa found with this estatus" });
        }
        
        response.send(procesosEtapas);
    } catch (error) {
        response.status(500).send({
            message: "There was an error while getting ProcesoEtapa by estatus: "+ error,
            error,
        });
    }
}