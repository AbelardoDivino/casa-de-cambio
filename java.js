let valorInput = document.getElementById("valor");
let moedaDe = document.getElementById("moedaDe");
let moedaPara = document.getElementById("moedaPara");
let enviar = document.getElementById("enviar");
let resultado = document.getElementById("res");

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
};

enviar.addEventListener("click", function () {
    let valor = Number(valorInput.value);
    let de = moedaDe.value;
    let para = moedaPara.value;

    if (valor <= 0 || isNaN(valor)) {
        resultado.innerHTML = "Digite um valor válido!";
        return;
    }

    // converter para BRL
    let emBRL = valor / taxas[de];

    // converter para moeda destino
    let convertido = emBRL * taxas[para];

    resultado.innerHTML = `${valor} ${de} = ${convertido.toFixed(2)} ${para}`;
});
