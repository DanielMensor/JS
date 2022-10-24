let option;

do {
    option = prompt("1 - Área do triângulo\n2 - Àrea do retângulo\n3 - Área do quadrado\n4 - Área do trapézio\n5 - Área do círculo\n6 - Sair")
    let res;
    switch(option){
    
        case "1": 16
            res = triangulo();
            alert("A área do triângulo é " + res)
            break
        case "2":
            res = retangulo();
            alert("A área do retângulo é " + res)
            break;
        case "3":
            res = quadrado();
            alert("A área do quadrado é " + res)
            break;
        case "4":
            res = trapezio();
            alert("A área do trapézio é " + res)
            break;
        case "5":
            res = circulo();
            alert("A área do círculo é " + res)
            break;
        case "6":
            alert("Encerrando")
            break;
        default:
            alert("opção inválida")
    }    
} while (option!=="6");

function triangulo(){
    let base = Number(prompt("digite o valor da base"))
    let altura = Number(prompt("digite o valor da altura"))
    return base*altura/2;
}

function retangulo(){
    let base = Number(prompt("digite o valor da base"))
    let altura = Number(prompt("digite o valor da altura"))
    return base*altura;
}

function quadrado(){
    let lado = Number(prompt("digite o valor do lado"))

    return lado*lado;
}

function trapezio(){
    let baseMaior = Number(prompt("digite o valor da base maior"))
    let baseMenor = Number(prompt("digite o valor da base menor"))
    let altura = Number(prompt("digite o valor da altura"))
    return (baseMaior+baseMenor)*altura/2;
}

function circulo(){
    let raio = Number(prompt("digite o valor do raio"))

    return raio*raio*3.14;
}
