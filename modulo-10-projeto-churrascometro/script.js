// Carne - 400gr por pessoa. Se >= 6 horas --> 650gr
// Cerveja - 1200mL por pessoa. Se >= 6 horas --> 2000mL
// Refrigereante/agua - 1000mL por pessoa. Se >= 6 horas --> 1500mL

// Crianças valem por 0,5.

let btn = document.querySelector('input#btn')
btn.addEventListener('click', calcular)

function calcular() {
    // window.alert('clicou!')

    let txtAdultos = document.querySelector('input#adultos')
    let txtCriancas = document.querySelector('input#criancas')
    let txtDuracao = document.querySelector('input#duracao')
    let resultado = document.querySelector('div#resultado')


    adultos = txtAdultos.value
    criancas = txtCriancas.value
    duracao = txtDuracao.value

    if (duracao < 6) {
        qtde_carne = 400*adultos + (400/2)*criancas
        qtde_cerveja = 1200*adultos
        qtde_refri = 1000*adultos + (1000/2)*criancas
    } else {
        qtde_carne = 650*adultos + (650/2)*criancas
        qtde_cerveja = 2000*adultos
        qtde_refri = 1500*adultos + (1500/2)*criancas
    }

    // window.alert(`adultos: ${adultos}; criancas = ${criancas}; duracao = ${duracao}; qtde_carne = ${qtde_carne}; qtde_cerveja = ${qtde_cerveja}; qtde_refri = ${qtde_refri}`)

    resultado.innerHTML = `<p>Qtde de Carne: ${qtde_carne} gramas.</p>`
    resultado.innerHTML += `<p>Qtde de Cerveja: ${qtde_cerveja} mL.</p>`
    resultado.innerHTML += `<p>Qtde de Refrigerante: ${qtde_refri} mL.</p>`


}