let patients = [{
    name: "Luiz",
    age: 21,
    weight: 80,
    width: 1.71
},
{
    name: "Carlos",
    age: 23,
    weight: 70,
    width: 1.81 
},
{
    name: "Ana" ,
    age: 15,
    weight: 45,
    width: 1.52
}]

let patientsName = []

const calcIMC = ({name, weight, width}) => {
    let IMC = weight / (width * width)
    alert(`O(a) paciente ${name} tem o IMC: ${IMC.toFixed(1)}`)
}

for(let patient of patients){
    alert(`O(a) paciente ${patient.name} tem ${patient.age} anos, tem ${patient.width} de altura e pesa ${patient.weight}Kg`)
    calcIMC(patient)
    patientsName.push(patient.name)
}

alert(`Lista de pacientes: ${patientsName}`)