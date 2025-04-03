function calcularImc(){

    // Entrada de Dados
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
       
    // Processamento do cálculo do IMC
    let imc = peso / (altura * altura);

    // Saída
    document.getElementById("resultado").textContent = "Resultado: " + imc;

    }