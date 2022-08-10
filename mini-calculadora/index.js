alert("Sejam Bem Vindos a Mini Calculadora!!")
alert("Realize seu calculo de Adição (+), Subtração (-), Divisão (/), Multiplicação (*) e Resto de uma Divisao (%)")

let numberOne = prompt("Digite o primeiro numero: ")
let operator = prompt("Digite o Operador: ")
let numberTwo = prompt("Digite o segundo numero: ")

const checkNumberOne = numberOne => {
    let checked

    if(numberOne == ""){
        throw new Error("Digite o Primeiro número!")
    }else{
        checked = true
    }
    return checked
} 

const checkNumberTwo = numberTwo => {
    let checked

    if(numberTwo == ""){
        throw new Error("Digite o Segundo número!")
    }else{
        checked = true
    }
    
    return checked
} 

const checkNumberOperator = operator => {
    let checked

    if(operator == ""){
        throw new Error("Digite o Operador número!")
    }else{
        checked = true
    }

    return checked
} 



const calculate = (numberOne, numberTwo, operator) => {
    let total 

    switch (operator){
        case '+':
            total = Number(numberOne) + Number(numberTwo)
            break
        case '-':
            total = Number(numberOne) - Number(numberTwo)
            break
        case '/':
            total = Number(numberOne) / Number(numberTwo)
            break
        case '*':
            total = Number(numberOne) * Number(numberTwo)
            break
        case '%':
            total = Number(numberOne) % Number(numberTwo)
            break
        default:
            alert("Operação não implementada")
            break
    } 

    alert(`O Resultado da sua Operação é ${total}`)
}

if(checkNumberOne(numberOne) && checkNumberTwo(numberTwo) && checkNumberOperator(operator) == true){
    calculate(numberOne, numberTwo, operator)
}

