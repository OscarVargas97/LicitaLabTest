import express from 'express'
import errorRoutes from './errors'
import tasksRoutes from './tasks'
import usersRoutes from './users'

const router = express.Router()

// Here add all routes
router.use('/tasks', tasksRoutes)
router.use('/users', usersRoutes)
router.use('/', errorRoutes)


export default router
