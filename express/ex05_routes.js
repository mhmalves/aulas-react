const express = require('express')
const router = express.Router()

/* Router é como se fosse uma mini-aplicação, usando as mesmas APIs
   já utilizadas pelo Express*/
router.use((req, res, next) => {
  const init = Date.now()
  next()
  console.log(`Tempo = ${Date.now() - init} ms.`)
})

/* : indica que será algo variável*/
router.get('/produtos/:id', (req,res) => {
  /*res.json você indica que o objeto será convertido para json e enviado*/
  res.json({id: req.params.id, name: 'Caneta'})
})

router.get('/clientes/:id/:name', (req,res) => {
    res.json({id: req.params.id, name: req.params.name})
})

module.exports = router
