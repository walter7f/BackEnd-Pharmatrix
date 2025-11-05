import { Sequelize, where } from "sequelize";
import Desviacion from "../models/Desviacion.js";

// Crear una nueva desviación
export async function createDesviacion(request, response) {
  try {
    const {
      titulo,
      Descripcion,
      causa_raiz,
      accion_inmediata,
      accion_correctiva,
      accion_preventiva,
      severidad,
      categoria,
      aprov_jefeplanta,
      aprov_gom,
      aprov_goc,
      aprov_cc,
      aprov_gc,
    } = request.body;

    const newDesviacion = await Desviacion.build({
      titulo,
      Descripcion,
      causa_raiz,
      accion_inmediata,
      accion_correctiva,
      accion_preventiva,
      severidad,
      categoria,
      aprov_jefeplanta,
      aprov_gom,
      aprov_goc,
      aprov_cc,
      aprov_gc,
    }).save();

    response.send(newDesviacion);
  } catch (error) {
    response.status(500).send({
      message: "Error al crear la desviación.",
      error,
    });
  }
}

// Obtener todas las desviaciones
export async function getAllDesviaciones(request, response) {
  try {
    const desviaciones = await Desviacion.findAll();
    response.send(desviaciones);
  } catch (error) {
    response.status(500).send({
      message: "Error al obtener las desviaciones: " + error,
      error,
    });
  }
}

// Obtener una desviación por ID
export async function getOneDesviacion(request, response) {
  const id = request.params.id;

  try {
    const desviacion = await Desviacion.findOne({ where: { id } });
    if (!desviacion) {
      return response.status(404).send({ message: "Desviación no encontrada." });
    }
    response.send(desviacion);
  } catch (error) {
    response.status(500).send({
      message: "Error al obtener la desviación: " + error,
      error,
    });
  }
}

//  Actualizar una desviación
export async function updateDesviacion(request, response) {
  const id = request.params.id;
  try {
    const update = await Desviacion.update(request.body, { where: { id } });
    if (update[0] === 0) {
      return response.status(404).send({ message: "Desviación no encontrada o sin cambios." });
    }
    const updatedDesviacion = await Desviacion.findOne({ where: { id } });
    response.send(updatedDesviacion);
  } catch (error) {
    response.status(500).send({
      message: `Error al actualizar la desviación con id ${id}: ` + error,
      error,
    });
  }
}

// Eliminar una desviación
export async function deleteDesviacion(request, response) {
  const id = request.params.id;

  try {
    const deleted = await Desviacion.destroy({ where: { id } });
    if (deleted === 1) {
      return response.send({ message: "Desviación eliminada correctamente." });
    }
    response.send({ message: "Desviación no encontrada o no eliminada." });
  } catch (error) {
    response.status(500).send({
      message: `Error al eliminar la desviación con id ${id}: ` + error,
      error,
    });
  }
}

//  Obtener desviaciones filtradas por severidad
export async function getBySeveridad(request, response) {
  const { severidad } = request.params;

  try {
    const desviaciones = await Desviacion.findAll({ where: { severidad } });
    if (!desviaciones || desviaciones.length === 0) {
      return response.status(404).send({ message: "No se encontraron desviaciones con esa severidad." });
    }
    response.send(desviaciones);
  } catch (error) {
    response.status(500).send({
      message: "Error al filtrar desviaciones por severidad: " + error,
      error,
    });
  }
}

//  Obtener desviaciones filtradas por categoría
export async function getByCategoria(request, response) {
  const { categoria } = request.params;

  try {
    const desviaciones = await Desviacion.findAll({ where: { categoria } });
    if (!desviaciones || desviaciones.length === 0) {
      return response.status(404).send({ message: "No se encontraron desviaciones en esa categoría." });
    }
    response.send(desviaciones);
  } catch (error) {
    response.status(500).send({
      message: "Error al filtrar desviaciones por categoría: " + error,
      error,
    });
  }
}
