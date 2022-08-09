let person = {
    name: "Livia",
    gender: "F", //F = Female and M = Male
    age: 55,
    contributionTime: 30
}

const calcTotalContribution = (age, contributionTime) => { // Função para calular o Tempo Total de Contribuição
   return contributionTime + age
}


function verifyContributionTime (gender){ //Função para verificar se o tempo de contribuição é suficiente
    const minContributionTimeMale = 35
    const minContributionTimeFemale = 30

    const minContribution = gender == "M" ? minContributionTimeMale : minContributionTimeFemale

    return minContribution
}

const minTotalRetireBeforeGender = gender => { //Função para verificar qual o tempo trabalhado minimo conforme o Sexo
    const minTotalFemale = 85
    const minTotalMale = 95

    const totalTime = gender == "M" ? minTotalMale : minTotalFemale
    return totalTime
} 

const canRetire = ({contributionTime, age, gender}) => {
    const ruleOne = contributionTime >= verifyContributionTime(gender) //Roda essa função para verificar qual a contribuição minima e realizar a comaparação
    const ruleTwo = minTotalRetireBeforeGender(gender) <= calcTotalContribution(contributionTime, age)

    const canRetire = ruleOne && ruleTwo

    return canRetire
}

function calcRetire(person){
    if(canRetire(person)){
        console.log(`${person.name} pode se aposentar!!`)
    }else{
        console.log(`${person.name} não pode se aposentar!!`)
    }
}

calcRetire(person)





