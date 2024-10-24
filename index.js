//importanto o modulo pelo seu caminho absoluto
const express = require('express') 

//instanciando o express a partir da função
const app = express()

//inicia o express na porta 3000
app.listen(3000, () => {
    console.log('Backend executando...')
})