let student = prompt("Digite o nome do(a) aluno(a): ")
let n1 = prompt("Digite a primeira nota: ")
let n2 = prompt("Digite a segunda nota: ")
let n3 = prompt("Digite a terceira nota: ")
let average = (Number(n1) + Number(n2) + Number(n3))/ 3
let minPassAverage = 6

average = average.toFixed(1)


if(average >= minPassAverage){
    alert(`Parabéns ${student}, sua média foi: ${average} e você está aprovado!!`)
}else{
    alert(`${student}, sua média foi: ${average} estude para as provas de recuperação!!`)
}