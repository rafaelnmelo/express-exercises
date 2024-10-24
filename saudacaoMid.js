//Criando um arquivo(modulo) encapsulado
//para ser exportado e executado como middleware
//mesmo ignorando os params(req,res)

function saudacao(name) {
    return (req, res, next) => {
        console.log(`Seja bem vindo ${name}.`)
        next()
    }
}

export default saudacao