function media() {

  document.getElementById("texto1").innerText = ""
  document.getElementById("texto2").innerText = ""
  
var notaDoPrimeiroBimestre = parseFloat(document.getElementById("valor1").value);
var notaDoSegundoBimestre = parseFloat(document.getElementById("valor2").value);
var notaDoTerceiroBimestre = parseFloat(document.getElementById("valor3").value);
var notaDoQuartoBimestre = parseFloat(document.getElementById("valor4").value);
var resultadoFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4;
  if (resultadoFinal>=5)
     document.getElementById("texto1").innerText = "Você foi aprovado"
  else
    document.getElementById("texto2").innerText = "Você foi reprovado"
  
  document.getElementById("results").innerText = resultadoFinal
}


