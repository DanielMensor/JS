let option

do{
    option= prompt("Insira a opção que você deseja:\n1 - para a\n2 - para b\n3 - para c\n4 - para d\n5 - para encerrar a aplicação")
    switch(option) {
        case "1":
            alert("Opção 1 escolhida");
            break;
        case "2":
            alert("Opção 2 escolhida");
            break;
        case "3":
            alert("Opção 3 escolhida");
            break;
        case "4":
            alert("Opção 4 escolhida");
            break;
        case "5":
            alert("Programa sendo encerrado")
            break;
        default:
            alert("Opção não encontrada")
            break
    }
}while(option!="5")

