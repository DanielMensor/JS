let saldo = Number(prompt("Qual a quantidade de dinheiro inicial?"));
let option;
do{
    option = prompt(`Saldo: ${saldo}\n\nDigite uma das opções\n1 - para adicionar dinheiro\n2 - para retirar dinheiro\n3 - para encerrar o programa`)
    switch(option){
        case "1":
            saldo += Number(prompt("digite o valor que deseja adicionar"));
            break
        case "2":
            saldo -= Number(prompt("Digite o valor que deseja retirar"));
            break;
        default:
            alert(`Programa sendo encerrado\n Saldo Final: ${saldo}`);
            break;
    }
}while(option!='3')


