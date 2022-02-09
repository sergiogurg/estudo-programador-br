/* 1ª maneira de declarar uma função */

// function dobro(x) {
//     console.log(2 * x)
// }

// console.log(dobro(5))

/* 2ª maneira de declarar uma função */

// let dobro = function(x) {
//     console.log(2 * x)
// }

// console.log(dobro(5))

/* 3ª maneira de declarar uma função (ARROW FUNCTION) */

// let dobro = (x) => {
//     return 2*x
// }

// console.log(dobro(5))

/* ARROW FUNCTION, se apenas retornar valores/variáveis */

let dobro = (x) => 2*x

console.log(dobro(5))

/* THIS e BIND

as ARROW FUNCTIONS sempre consideram o THIS como o WINDOW do navegador. Mesmo usando o método BIND, ele NÃO funciona na ARROW FUNCTION. Resumindo, em uma ARROW FUNCTION, o THIS sempre vai ser o WINDOW.

*/

