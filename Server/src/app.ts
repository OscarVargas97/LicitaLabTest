import express from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv';
import indexRoutes from './routes/index'

// initializations
const app = express()

// settings
const PORT = 4000

// Middleware
app.use(morgan('dev'))
app.use(express.json())

// database

// Routes
app.use('/api', indexRoutes)
dotenv.config();

// Starting the Server
app.listen(PORT, () => {
	console.log('Server on port' + PORT + ' ' + new Date().toLocaleDateString)
})
