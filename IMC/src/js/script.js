function calcular() {

    var peso = parseFloat(document.getElementById("peso").value.replace(",", "."));
    var altura = parseFloat(document.getElementById("altura").value.replace(",", "."));
    var sexo = document.querySelector('input[name="sexo"]:checked').value;


    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById("mensagem").innerHTML = "Preencha peso e altura corretamente!";
        return;
    }


    var imc = peso / (altura * altura);
    document.getElementById("resultadoIMC").value = imc.toFixed(2);

    var pesoIdeal;
    if (sexo === "M") {
        pesoIdeal = (72.7 * altura) - 58;
    } else {
        pesoIdeal = (62.1 * altura) - 44.7;
    }
    document.getElementById("pesoIdeal").value = pesoIdeal.toFixed(2) + " kg";


    var texto = "";
    if (imc < 18.6) {
        texto = "Abaixo do peso";
    } else if (imc < 24.9) {
        texto = "Peso normal";
    } else if (imc < 29.9) {
        texto = "Sobrepeso";
    } else if (imc < 34.9) {
        texto = "Obesidade Grau I";
    } else if (imc < 39.9) {
        texto = "Obesidade Grau II";
    } else {
        texto = "Obesidade Grau III";
    }

    document.getElementById("mensagem").innerHTML = "Classificação: " + texto;
}

function limpar() {
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("resultadoIMC").value = "";
    document.getElementById("pesoIdeal").value = "";
    document.getElementById("mensagem").innerHTML = "";
    document.getElementById("feminino").checked = true;
}