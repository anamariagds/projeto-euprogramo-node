const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Ana Maria',
        imagem: 'Imagem',
        minibio: 'Estudante de desenvolvimento Backend'
    },
    {
        nome: 'Simara Conceição',
        imagem: 'imagem',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        nome: 'Valeska Uchôa',
        imagem: 'imagem',
        minibio: 'IA engeneer'
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta:", porta)
}


app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)