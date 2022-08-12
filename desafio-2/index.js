let students = [{
name: "Luiz",
nota1: 7.0,
nota2: 10.0},
{
name: "Julia",
nota1: 5.4,
nota2: 7.5
},{
name: "Carlos",
nota1: 6.5,
nota2: 8.5
},{
name: "Leticia",
nota1: 10,
nota2: 10   
},{
name: "Carol",
nota1: 6.5,
nota2: 7.2
}]

const checkAverage = ({name, nota1, nota2}) => {
    let average = (nota1 + nota2) / 2
    if(average >= 7){
        alert(`A média do(a) aluno(a) ${name} é: ${average}
Parabéns ${name} você foi aprovado`)
    }else{
        alert(`A média do(a) aluno(a) ${name} é: ${average}
Não foi dessa vez ${name}, tente novamente!`)
    }
}

for(student of students){
    checkAverage(student)
}