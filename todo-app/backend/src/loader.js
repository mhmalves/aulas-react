/** Responsável por carregar todos os arquivos de configuração*/
const server = require('./config/server')
require('./config/database')

//Passando como parâmetro o server, para garantir que estamos trabalhando com o mesmo server
require('./config/routes') (server)