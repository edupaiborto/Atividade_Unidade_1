window.onload = function() {
    document.getElementById("calcular").addEventListener("click", function() {
        // Aqui entra os valores dos inputs aceitando virgula e ponto.
        var peso = document.getElementById("peso").value.replace(",",".");
        var altura = document.getElementById("altura").value.replace(",",".");

        // verifica se a entrada é um número válido
        var numeroValido = /^[0-9]+(\.[0-9]+)?$/;

        // verifica se são maiores que zero e se estão validos
        if (numeroValido.test(peso) && numeroValido.test(altura) && peso > 0 && altura > 0) {
            // Calcular o IMC
            var imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
            
            // Limita 2 casas após a virgula
            imc = imc.toFixed(2);

            // Classificação do IMC
            var classificacao;
            if (imc < 18.5) {
                classificacao = "Abaixo do peso";
            } else if (imc >= 18.5 && imc < 24.9) {
                classificacao = "Peso normal";
            } else if (imc >= 25 && imc < 29.9) {
                classificacao = "Sobrepeso";
            } else {
                classificacao = "Obesidade";
            }

            // Exibi o resultado e a classificação
            document.getElementById("result").value = imc;
            document.getElementById("classification").value = classificacao;
        } else {
            // Exibi mensagem de erro se caso os valores forem inválidos
            document.getElementById("result").value = "Entrada inválida";
            document.getElementById("classification").value = "";
        }
    });
}
