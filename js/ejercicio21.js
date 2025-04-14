const input= document.getElementById('campoTexto');
const resultado= document.getElementById('resultado');

input.addEventListener('input', function(){
    resultado.textContent = input.value;
})