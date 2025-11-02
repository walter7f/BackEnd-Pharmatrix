//import Account from "../models/Account.js";
import LotePlanificacion from "../models/LotePlanificacion.js"

export async function createLotePlani(request, response){
    try {
        const {producto,tamanioLote,distribucion1,distribucion2,distribucion3,distribucion4,distribucion5}= request.body;

        const newPlani  = await LotePlanificacion.build({producto,tamanioLote,distribucion1,distribucion2,distribucion3,distribucion4,distribucion5}).save();
        
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