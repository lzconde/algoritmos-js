let check = false
let list = []


while(check == false){
    let option = prompt(`Digite a Opção Desejada: 
    1. para cadastrar produto na lista
    2. para visualizar a lista 
    3. para encerrar o programa`)

    switch(option){
        case "1": 
            let item = prompt("Digite o nome do Produto: ")
            list.push(item)
            break
        case "2": 
        console.log(list)
            if(list.length == 0){
                alert("Lista vazia")
            }else{
                alert(list)
            }
            break
        case "3": 
            check = true
            break
        default:
            alert("Digite o número correto")
    }
    console.log(option)
}