//Contador de caracteres
let texto = document.getElementById("text-counter");
texto.addEventListener("input", () => {
    let contador = (texto.value).length;
    document.getElementById("chars-quantity").textContent = `Quantidade de caracteres: ${contador}`;
});