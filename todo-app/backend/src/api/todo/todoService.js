/**
 * Responsável por criar a nossa API Restful
 */
const Todo = require('./todo')

/** Já criamos toda a API Rest habilitada */
Todo.methods(['get', 'post', 'put', 'delete'])

/**
 * O new: true garante que o retorno será o registro novo e não o antigo 
 * O runValidators: true garante que no update também serão realizadas as validações nos campos*/
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo