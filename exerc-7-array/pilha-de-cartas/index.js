let pilha = ["Ah","2s","8c","Qd","Kd"];
let option;
let carta;
do{
    option = prompt("1 - puxar carta\n2 - adicionar carta\n3 - sair\n Cartas no baralho:\n" + pilha)

    switch(option){

        case "1":
            carta =  pilha.pop()
            alert("a carta puxada foi " + carta )
            break;
        case "2":
            pilha.push(prompt("Digite o nome da carta que quer adicionar"));
            break;
        case "3":
            alert("encerrando")
    }


}while(option!=="3")