const express = require('express')
const server = express()

/* A função use() mapeia todos os métodos HTTP e ainda mapeia com o /api.
   tudo que estiver em pastas abaixo serão tratados aqui. O que não
   acontecec com a função com get(), que pega apenas a última parte da
   URL*/
server.use('/api', function(req, res, next) {
  console.log('Inicio...')
  next()
  console.log('Fim...')
})

server.use('/api', function(req, res) {
  console.log('Resposta...')
  res.send('<h1>API!</h1>')
})

server.listen(3000, () => console.log('Executando...'))
