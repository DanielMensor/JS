let opcao;
let startList = ["Daniel","Maria","Marcelo","Margarida","Saudi"]


do{
    let lista = ""
    for(let i=0;i<startList.length;i++){
        lista += (i+1) + "º " + startList[i] + ", ";
    }
    opcao = prompt(`
    1 - Novo paciente
    2 - Consultar paciente
    3 - Sair

    Lista de pacientes:
    ${lista}
    `)

    switch(opcao){
        case "1":
            startList.push(prompt("Digite o nome do novo paciente"));
            break;
        case "2":
            startList.shift();
            break;
        case "3":
            alert("Encerrando...")
    }
}while(opcao!=="3")

alert("encerrado!")
