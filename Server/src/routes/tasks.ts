import express from 'express'
import * as Task from '../controller/tasks.controller'

const router = express.Router()

router.get('/', Task.getAllTask)
router.post('/', Task.createTask)
router.get('/:id', Task.getTaskByID)
router.put('/:id', Task.updateTask)
router.delete('/:id', Task.deleteTask)

export default router
