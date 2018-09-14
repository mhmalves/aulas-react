/**
 * Responsável por configurar as rotas para as URLs
 */

// Referenciando o Singleton do Express
const express = require('express')

module.exports = function(server) {

    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //TODO Routes
    const todoService = require('../api/todo/todoService')
    // Registra os métodos com a URL base /todos
    todoService.register(router, '/todos')
}

