let numberOne = prompt("Digite o primeiro numero: ")
let numberTwo = prompt("Digite o segundo numero: ")

alert(`A soma dos numeros é ${Number(numberOne) + Number(numberTwo)}`)
alert(`A subtração dos numeros é ${Number(numberOne) - Number(numberTwo)}`)
alert(`A Multiplicação dos numeros é ${Number(numberOne) * Number(numberTwo)}`)
alert(`A Divisão dos numeros é ${Number(numberOne) / Number(numberTwo)}`)
alert(`O resto da divisão dos numeros é ${Number(numberOne) % Number(numberTwo)}`)

let restResult = (numberOne + numberTwo) % 2

if(restResult == 0){
    alert("Esse numero é par")
}else{
    alert("Esse numero é impar")
}

if(numberOne == numberTwo){
    alert("O Primeiro e o segundo numero são iguais")
}else{
    alert("O primeiro e o segundo numero são diferentes")
}