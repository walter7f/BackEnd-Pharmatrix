import { where } from "sequelize";
import AreaFabricacion from "../models/AreaFabricacion.js";
import LotePlanificacion from "../models/LotePlanificacion.js";

/* ✅ CREAR un área de fabricación */
export async function createAreaFabricacion(request, response) {
  try {
    const { area_nombre, Planta,orden } = request.body;

    if (!area_nombre || !Planta) {
      return response.status(400).send({
        message: "Faltan datos requeridos (area_nombre o Planta).",
      });
    }

    const newArea = await AreaFabricacion.build({
      area_nombre,
      Planta,
      orden,
    }).save();

    response.send(newArea);
  } catch (error) {
    response.status(500).send({
      message: "Hubo un error al crear un área de fabricación: ",
      error,
    });
  }
}

/* ✅ OBTENER todas las áreas */
export async function getAllAreasFabricacion(request, response) {
  try {
    const areas = await AreaFabricacion.findAll();
    response.send(areas);
  } catch (error) {
    response.status(500).send({
      message: "Hubo un error al obtener las áreas de fabricación: " + error,
      error,
    });
  }
}

/* ✅ OBTENER un área por ID */
export async function getOneAreaFabricacion(request, response) {
  const id = request.params.id;

  try {
    const area = await AreaFabricacion.findOne({ where: { id } });

    if (!area) {
      return response
        .status(404)
        .send({ message: "Área de fabricación no encontrada" });
    }

    response.send(area);
  } catch (error) {
    response.status(500).send({
      message:
        "Hubo un error al obtener el área de fabricación: " + error,
      error,
    });
  }
}

/* ✅ ELIMINAR un área */
export async function deleteOneAreaFabricacion(request, response) {
  const id = request.params.id;

  try {
    const deleteArea = await AreaFabricacion.destroy({ where: { id } });

    if (deleteArea === 1) {
      return response.send({ message: "Área de fabricación eliminada" });
    }

    response.send({ message: "El área no fue eliminada" });
  } catch (error) {
    response.status(500).send({
      message:
        "Hubo un error al eliminar el área de fabricación: " + error,
      error,
    });
  }
}

/* ✅ OBTENER todas las áreas junto con sus lotes */
export async function getAreasConLotes(request, response) {
  try {
    const areas = await AreaFabricacion.findAll({
      include: [
        {
          model: LotePlanificacion,
          as: "lotes",
        },
      ],
    });

    response.send(areas);
  } catch (error) {
    response.status(500).send({
      message:
        "Hubo un error al obtener las áreas con sus lotes: " + error,
      error,
    });
  }
}
