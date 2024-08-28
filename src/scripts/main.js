// document.addEventListener('DOMContentLoaded', function(){
//     document.getElementById('form-sorteador').addEventListener('submit', function(){
//         let numeroMaximo = document.getElementById('numero-maximo');
//         numeroMaximo = parseInt(numeroMaximo);

//         let numeroAleatorio = Math.random() * numeroMaximo;
//         alert(numeroAleatorio);
//     })
// })

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteador').addEventListener('submit', function (event) {
        event.preventDefault(); 

        let numeroMaximo = document.getElementById('numero-maximo').value; 
        numeroMaximo = parseInt(numeroMaximo); 

        if (isNaN(numeroMaximo) || numeroMaximo <= 0) {
            alert('Por favor, insira um número válido maior que 0.');
            return;
        }

        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;
        
        alert(`Número sorteado: ${numeroAleatorio}`);
    });
});
