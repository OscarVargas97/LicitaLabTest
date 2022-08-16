const { Sequelize } = require('sequelize')

// Option 1: Passing a connection URI// Example for sqlite
const sequelize = new Sequelize(process.env.DD_DATABASE_URL) // Example for postgres
