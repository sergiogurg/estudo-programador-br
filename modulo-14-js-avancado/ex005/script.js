/* ASYNC: indica que a função deve ser executada de modo assíncrono

AWAIT: indica que o programa deve esperar o comando ser resolvido para que continue a ser executado.

OBS.: Para usar o AWAIT, deve-se obrigatoriamente fazer uso do ASYNC.

*/

let usuarios = ['Adriano', 'Márcia', 'José']

function inserirUsuarioEListar(nome) {

    let promise = new Promise(function (resolve, reject){
        /* setTimeout: executar uma function com um determinado delay (em milissegundos) */
        setTimeout(() => {
            usuarios.push(nome)
            let error = false

            if (!error) {
                resolve()
            } else {
                reject({msg: 'Erro de qualquer coisa!'})
            }
        }, 1000);
    })
    return promise
}

function listarUsuarios() {
    console.log(usuarios)
}

async function executar() {
    await inserirUsuarioEListar("Igor")
    listarUsuarios()
}

executar()