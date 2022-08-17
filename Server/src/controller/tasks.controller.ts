import { RequestHandler } from "express";
import { where } from "sequelize/types";

import { Task } from "../models/tasks.model"

export const createTask: RequestHandler = async (req, res, _) => {
	var task = await Task.create(...req.body)
	return res
		.status(200)
		.json({ message: "tarea creada correctamente", data: task })
}

export const deleteTask: RequestHandler = async (req, res, _) => {
	const { id } = req.params;
	const deletedTask: Task | null = await Task.findByPk(id)

	await Task.destroy({ where: { id } })

	return res
		.status(200)
		.json({ message: "tarea eliminada correctamente", data: deletedTask })
}

export const getAllTask: RequestHandler = async (req, res, _) => {
	const allTask: Task[] = await Task.findAll()

	return res
		.status(200)
		.json({ message: "Todas las tareas", data: allTask })
}

export const getTaskByID: RequestHandler = async (req, res, _) => {
	const { id } = req.params;
	const getTask: Task | null = await Task.findByPk(id)
	return res
		.status(200)
		.json({ message: "Tarea encontrada", data: getTask })
}

export const updateTask: RequestHandler = async (req, res, _) => {
	const { id } = req.params;
	await Task.update({ ...req.body }, { where: { id } })
	const updatedTask: Task | null = await Task.findByPk(id)
	return res
		.status(200)
		.json({ message: "Tarea actualizada", data: updatedTask })
}
