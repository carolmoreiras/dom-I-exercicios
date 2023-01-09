//exercicio 1
const frutas = ["laranja", "limão", "uva"]

document.getElementById("fruta-1").innerHTML = frutas[0]
document.getElementById("fruta-2").innerHTML = frutas[1]
document.getElementById("fruta-3").innerHTML = frutas[2]


// const fruta1 = document.getElementById("fruta-1")
// fruta1.innerHTML = frutas[0]

// const fruta2 = document.getElementById("fruta-2")
// fruta2.innerHTML = frutas[1]

// const fruta3 = document.getElementById("fruta-3")
// fruta3.innerHTML = frutas[2]


//looping
// for (let i = 0; i < frutas.length; i++) {
//   document.getElementById(`fruta-${i+1}`).innerHTML = frutas[i]
  
// }


//exercicio2
const inputElement = document.getElementById("nova-fruta")

function novaFrutaChange () {
  console.log(inputElement.value)
}

inputElement.addEventListener("input", novaFrutaChange);
//toda vez que acontecer o evento de input, a função novaFrutaChange é chamada

//exercicio3

function adicionaFruta () {
  document.getElementById("fruta-4").innerHTML =
  document.getElementById("nova-fruta").value
  frutas.push(document.getElementById("nova-fruta").value)
}