//Contador de caracteres
let texto = document.getElementById("text-counter");
texto.addEventListener("input", () => {
    let contador = (texto.value).length;
    document.getElementById("chars-quantity").textContent = `Quantidade de caracteres: ${contador}`;
});

// Regra de três
function calcularRegraDeTres(){
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let valor3 = document.getElementById('valor3').value;
    let resultado = (parseFloat(valor2) * parseFloat(valor3)) / parseFloat(valor1);
    document.getElementById('resultadoRegraDeTres').innerText = resultado;
}

//Acrescimo
function calcularAcrescimoPorcentagem(){
    let valorInicial = document.getElementById('valorInicialAcrescimo').value;
    let valorAcrescimo = document.getElementById('valorAcrescimo').value;
    let resultado = parseFloat(valorInicial) + (parseFloat(valorAcrescimo)*(parseFloat(valorInicial)/100));
    document.getElementById('resultadoAcrescimo').innerText = resultado;
}
//Desconto
function calcularDescontoPorcentagem(){
    let valorInicial = document.getElementById('valorInicialDesconto').value;
    let valorDesconto = document.getElementById('valorDesconto').value;
    let resultado = parseFloat(valorInicial) - (parseFloat(valorDesconto)*(parseFloat(valorInicial)/100));
    document.getElementById('resultadoDesconto').innerText = resultado;
}