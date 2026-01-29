let botao = document.getElementById('enviar')
let valorInput = document.getElementById('valor')
let moedaDe = document.getElementById('moeda')
let moedaPara = document.getElementById('moedar')
let resultado = document.getElementById('res')

const taxas = {
    BRL: 1,
    FJD: 0.42,
    BGN: 0.312,
    NZD: 0.32,
    AUD: 0.27,
    BND: 0.24,
    SGD: 0.24,
    CAD: 0.26,
    BMD: 0.19,
    PAB: 0.19,
    BSD: 0.19,
    USD: 0.19,
    CHF: 0.15,
    EUR: 0.16,
    GBP: 0.14,
    KYD: 0.16,
    JOD: 0.14,
    OMR: 0.074,
    BHD: 0.073,
    KWD: 0.059
}

botao.addEventListener('click', function () {

    let valor = Number(valorInput.value)
    let de = moedaDe.value
    let para = moedaPara.value

    if (valor <= 0 || isNaN(valor)) {
        resultado.innerHTML = '<p>Valor inválido</p>'
        return
    }

    let valorEmReal = valor * taxas[de]
    let valorConvertido = valorEmReal / taxas[para]

    resultado.innerHTML = `
        <p>${valor} ${de} = ${valorConvertido.toFixed(2)} ${para}</p>
    `
})
