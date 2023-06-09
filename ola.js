const express = require('express')
const router = express.Router() //criar rota

const app = express()
const porta = 3333

function mostraOla(request, response){
    response.send("Olá, Mundo!")
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta:", porta)
}

app.use(router.get('/ola', mostraOla)) // informa rota no primeiro parametro pro metodo get e a função como segundo
app.listen(porta, mostraPorta)