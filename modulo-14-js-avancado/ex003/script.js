/* CALLBACK: uma function que é argumento de outra function */
let usuarios = ['Adriano', 'Márcia', 'José']

function inserirUsuarioEListar(nome, callback) {
    /* setTimeout: executar uma function com um determinado delay (em milissegundos) */
    setTimeout(() => {
        usuarios.push(nome)
        callback()    
    }, 1000);
}

function listarUsuarios() {
    console.log(usuarios)
}

/* No caso,  a funcao listarUsuarios serviu como Callback da inserirUsuarioEListar */
inserirUsuarioEListar('Pabllo', listarUsuarios)