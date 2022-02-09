/* PROMISE: um objeto que representa a eventual conclusão ou falha de uma operação assíncrona */

let usuarios = ['Adriano', 'Márcia', 'José']

function inserirUsuarioEListar(nome) {

    let promise = new Promise(function (resolve, reject){
        /* setTimeout: executar uma function com um determinado delay (em milissegundos) */
        setTimeout(() => {
            usuarios.push(nome)
            let error = true

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

inserirUsuarioEListar('Pabllo').then(listarUsuarios).catch( (error) => {
    console.log(error.msg)
})