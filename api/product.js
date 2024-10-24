//exportando diretamente uma função que recebe parametros
export default (app, text) => {
    function save(req, res) {
        res.send('Produto > salvar > ' + text)
    }

    function get(req, res) {
        res.send('Produto > obter > ' + text)
    }

    app.post('/product', save)
    app.get('/product', get)

    return { save, get }
}