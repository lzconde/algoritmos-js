const getRandom = () => {
    const min = Math.ceil(1)
    const max = Math.floor(10)
    let number = Math.random() * (max - min) + min;

    return number
}

const verifyNumber = (randomNumber, userNumber) => {
    let i = 1

    if(userNumber != randomNumber){
        while(userNumber != randomNumber){
            userNumber = prompt("Você errou!! Tente Novamente: ")
            i++
        }
        alert(`Parabéns!! Você acertou em ${i} tentativas!!`)
        alert("Dê um F5 para jogar novamente")
    }else{
        alert("Parabéns, você acertou de primeira!!")
    }
}

const randomNumber = getRandom().toFixed(0)
alert("Sejam bem vindos ao jogo da advinhação!!")
let userNumber = prompt("Tente advinhar um numero de 1 a 10: ")


verifyNumber(randomNumber, userNumber)
    






