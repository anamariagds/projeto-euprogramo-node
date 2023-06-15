const express = require('express') //iniciando o express
const router = express.Router() //configurando a primeira parte da rota
const {v4: uuidv4} = require('uuid')

const app = express() //iniciando o app
app.use(express.json()) //para que sejam enviados infromações como JSON
const porta = 3333 //criando a porta

//criando lista inicial de mulheres
const mulheres = [ 
    {   id: '1',
        nome: 'Ana Maria', 
        imagem: 'sem imagem',
        minibio: 'Estudante de desenvolvimento Backend'
    },
    {   
        id: '2',
        nome: 'Simara Conceição',
        imagem: 'imagem',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        id: '3',
        nome: 'Valeska Uchôa',
        imagem: 'imagem',
        minibio: 'IA engeneer'
    }

]

//função que mostra a lista de mulheres - GET
function mostraMulheres(request, response){
    response.json(mulheres)
}

//POST
function criaMulher(request, response){
    const novaMulher  = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    } 
    //colocar nova mulher na lista de mulheres
    mulheres.push(novaMulher) //recebe novaMulher
    response.json(mulheres)
}

//PATCH
function corrigeMulher(request, response){
    function encontraMulher(mulher){
        if (mulher.id === request.params.id){
            return mulher
        }
       
    }
    const mulherEncontrada = mulheres.find(encontraMulher)
    
   
    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    } 

    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    } 

    response.json(mulheres)
}

//PORTA
function mostraPorta(){
    console.log("Servidor criado e rodando na porta:", porta)
}


app.use(router.get('/mulheres', mostraMulheres)) //configurei a rota GET /mulheres
app.use(router.post('/mulheres', criaMulher))
app.use(router.patch('/mulheres/:id', corrigeMulher))

app.listen(porta, mostraPorta) //Servidor ouvindo a porta