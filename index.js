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
    let resultadoFormatado = resultado.toFixed(2);
    resultadoFormatado = resultadoFormatado.replace('.', ',');
    document.getElementById('resultadoRegraDeTres').innerText = resultadoFormatado;
}

//Acrescimo
function calcularAcrescimoPorcentagem(){
    let valorInicial = document.getElementById('valorInicialAcrescimo').value;
    let valorAcrescimo = document.getElementById('valorAcrescimo').value;
    let resultado = parseFloat(valorInicial) + (parseFloat(valorAcrescimo)*(parseFloat(valorInicial)/100));
    let resultadoFormatado = resultado.toFixed(2);
    resultadoFormatado = resultadoFormatado.replace('.', ',');
    document.getElementById('resultadoAcrescimo').innerText = resultadoFormatado;
}
//Desconto
function calcularDescontoPorcentagem(){
    let valorInicial = document.getElementById('valorInicialDesconto').value;
    let valorDesconto = document.getElementById('valorDesconto').value;
    let resultado = parseFloat(valorInicial) - (parseFloat(valorDesconto)*(parseFloat(valorInicial)/100));
    let resultadoFormatado = resultado.toFixed(2);
    resultadoFormatado = resultadoFormatado.replace('.', ',');
    document.getElementById('resultadoDesconto').innerText = resultadoFormatado;
}

//Busca CEP
async function buscaCEP(){
    const cep = document.getElementById('inputCEP').value;
    if(!cep){
        alert('É necessário informar um CEP válido');
        return;
    }
    const url = `https://opencep.com/v1/${cep}`;
    try{
        const response = await fetch(url);
        console.log("antes");
        if(!response.ok){
            alert('Erro ao buscar CEP');
        }
        const endereco = await response.json();
        console.log(endereco);
        document.getElementById('cep-logradouro').textContent="Logradouro: "+endereco.logradouro;
        document.getElementById('cep-complemento').textContent="Complemento: "+endereco.complemento;
        document.getElementById('cep-bairro').textContent="Bairro: "+endereco.bairro;
        document.getElementById('cep-localidade').textContent="Localidade: "+endereco.localidade;
        document.getElementById('cep-uf').textContent="UF: "+endereco.uf;
        console.log("depois")
    } catch(error){
        alert('Erro ao buscar CEP');
    }
}
