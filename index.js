import express, { json } from 'express'
import saudacao from './saudacaoMid.js'
import bodyParser from 'body-parser'
import user from './api/user.js'
import product from './api/product.js'

//  instanciando o express a partir da função
const app = express()

product(app, 'com param!')

//  use serve pra todas requisições(get, post, etc)
//  '/opa' especifica a url que irá atender a requisição
//  next indica um middleware que chamará o proximo na cadeia(chain of responsability)

app.post('/user', user.save)
app.get('/user', user.get)

app.use(bodyParser.text()) //middleware q interpretará body com textos
app.use(bodyParser.json()) //interpretará body com JSON
app.use(saudacao('Rafael')) //executará o modulo em toda requisição

app.use((req, res, next) => {
    console.log('Antes...')
    next()
})

//  Exemplo: http://localhost:3000/clientes/relatorio?completo=true&ano=2018
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo}, ano = ${req.query.ano}`)
})

//  requisição com parametros no body
app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })
    // req.on('end', function() {
    //     res.send(corpo)
    // })
    res.send(req.body)
})

// : indica que esta parte pode mudar dentro da url
app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.get('/opa', (req, res, next) => {
    console.log('Durante...')
    // res.send('<h1>Estou bem!</h1><br><h2>Tipo é HTML!</h2>')

    // res.json({
    //     name: 'iPad 64gb',
    //     price: 1899.00,
    //     discount: 0.12
    // })

    res.json({
        data: [
            { id: 7, name: 'Gabi', position: 1 },
            { id: 34, name: 'Bia', position: 1 },
            { id: 7, name: 'Joy', position: 1 }
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    next()
})

app.use((req, res) => {
    console.log('Depois...')
})

//  inicia o express na porta 3000
app.listen(3000, () => {
    console.log('Backend executando...')
})