function save(req, res) {
    res.send('usuario > salvar')
}

function get(req, res) {
    res.send('usuario > obter')
}

export default { save, get }