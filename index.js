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