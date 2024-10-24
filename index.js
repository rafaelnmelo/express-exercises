//importanto o modulo pelo seu caminho absoluto
import express, { json } from 'express'
//instanciando o express a partir da função
const app = express()

//use serve pra todas requisições(get, post, etc)
//'/opa' especifica a url que irá atender a requisição
app.use('/opa', (req, res) => {
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
})

//inicia o express na porta 3000
app.listen(3000, () => {
    console.log('Backend executando...')
})