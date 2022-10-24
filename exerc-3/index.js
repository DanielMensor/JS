// conversor de medidas

let number = Number(prompt("Escreva o valor em metros que deseja converter:"))

let option = prompt("Escolha para qual medida deseja converter\n1 - mm\n2 - cm\n3 - dm\n4 - dam\n5 - hm\n6 - km");

let result;
switch(option){
    case "1":
    result = number * 1000;
    break;
    case "2":
    result = number * 100;
    break;
    case "3":
    result = number * 10;
    break;
    case "4":
    result = number * 0.1;
    break;    
    case "5":
    result = number * 0.01;
    break;
    case "6":
    result = number * 0.001;
    break;
    default:    
        alert("As opções não foram digitadas corretamente");

}

alert(" o resultado foi " + result)