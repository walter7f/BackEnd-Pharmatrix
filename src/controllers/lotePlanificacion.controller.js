//import Account from "../models/Account.js";
import LotePlanificacion from "../models/LotePlanificacion.js"

export async function createLotePlani(request, response){
    try {
        const {producto,fechaPhani,areaFabricacion,planta,tamanioLote,distribucion1,distribucion2,distribucion3,distribucion4,distribucion5}= request.body;

        const newPlani  = await LotePlanificacion.build({producto,fechaPhani,areaFabricacion,planta,tamanioLote,distribucion1,distribucion2,distribucion3,distribucion4,distribucion5}).save();
        
        response.send(newPlani);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while creating a new Income: "+ error,
            error,
        });
        
    }
};

export async function getAllLotePlani(request, response){
    try {
        const plani = await LotePlanificacion.findAll();
        response.send(plani);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while gettinf all product:  "+ error,
            error,
        });
    }
}

export async function getOneLotePlani(request, response){
    const id = request.params.id;

    try {
        const plani = await LotePlanificacion.findOne({where:{ id }});
        if(!plani){
            return response.status(404).send({messge: "product not found"});
        }
        response.send(plani);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while getting product  : "+ error,
            error,
        });
    }
}

export async function deleteOneLotePlani(request, response){
    const id = request.params.id;

    try {
        const deletePlani = await LotePlanificacion.destroy({where:{ id }});
        if(deletePlani === 1){
            return response.send({message:"Product deleted"});
        }
        response.send({message:"Product wan not removed"});
    } catch (error) {
        response.status(500).send({
            message: `There war an error while deleting  product:${id} ` + error,
            error,
        });
    }
}

export async function updateLotePlani(request, response) {
    const id = request.params.id;
    
    try {
        // Campos permitidos para actualización
        const camposPermitidos = [
            'producto', 'planificacion', 'vencimiento', 'formaFarmaceutica', 
            'unidad', 'lote', 'orden', 'tamanioLote', 'distribucion1', 
            'distribucion2', 'distribucion3', 'distribucion4', 'distribucion5',
            'distribucionFinal1', 'distribucionFinal2', 'distribucionFinal3', 
            'distribucionFinal4', 'distribucionFinal5', 'planta', 'areaFabricacion',
            'preProceso', 'proceso', 'materiaPrima', 'materialEmpaque', 
            'fechaInicio', 'fechaFinalizado', 'estadoProductoTerminado', 'fechaPhani'
        ];

        // Filtrar solo los campos permitidos que vienen en el request
        const datosParaActualizar = {};
        
        camposPermitidos.forEach(campo => {
            if (request.body[campo] !== undefined) {
                datosParaActualizar[campo] = request.body[campo];
            }
        });

        // Verificar que hay al menos un campo para actualizar
        if (Object.keys(datosParaActualizar).length === 0) {
            return response.status(400).send({
                message: "No se proporcionaron campos válidos para actualizar"
            });
        }

        // Buscar el lote primero
        const lote = await LotePlanificacion.findOne({ where: { id } });
        if (!lote) {
            return response.status(404).send({ 
                message: "Lote de planificación no encontrado" 
            });
        }

        // Actualizar solo los campos proporcionados
        const [filasActualizadas] = await LotePlanificacion.update(
            datosParaActualizar,
            { 
                where: { id } 
            }
        );

        if (filasActualizadas === 0) {
            return response.status(400).send({
                message: "No se pudo actualizar el lote de planificación"
            });
        }

        // Obtener el registro actualizado
        const loteActualizado = await LotePlanificacion.findOne({ where: { id } });
        
        response.send({
            message: "Lote de planificación actualizado exitosamente",
            data: loteActualizado
        });

    } catch (error) {
        response.status(500).send({
            message: `Hubo un error al actualizar el lote de planificación: ${error.message}`,
            error: error.message
        });
    }
}
/*
export async function getQuery(request, response){
    const id = request.params.id;

    try { 
        const icome = await LotePlanificacion.findAll({where:{ id_user:id }});
        if(!icome){
            return response.status(404).send({messge: "product not found"});
        }
        response.send(icome);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while getting product  : "+ error,
            error,
        });
    }
}

export async function getQueryComplete(request, response){
    const id = request.params.id;

    try { 
        const income= await LotePlanificacion.findAll({where:{ id_user:id },
        include:[{model:Account}]
        });
        if(!income){
            return response.status(404).send({messge: "Income not found"});
        }
        response.send(income);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while getting Income  : "+ error,
            error,
        });
    }
}*/