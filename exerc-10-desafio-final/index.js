let option;
let vagas = [];

function createVagas(){
    let name = prompt("Digite o nome da vaga");
    let description = prompt("Digite a descrição da vaga");
    let limitDate = prompt("Digite a data limite no formato dd/mm/aa");
    let vaga = {
        name:name,
        description:description,
        limitDate:limitDate,
        candidatos:[]
    }
    vagas.push(vaga)

}

function subscribe(){
    let cadidateName = prompt("Qual o nome do candidato?");
    let index = Number(prompt("Qual o indice da vaga?"));
    let confirmar;
    confirmar = confirm("Candidato " + cadidateName + "\nVaga: " + vagas[index-1].name + "\nDescrição: " + vagas[index - 1].description + "\nData limite: " + vagas[index - 1].limitDate);
    if(confirmar){
        vagas[index-1].candidatos.push(cadidateName);
    }
}

function excludes(){
    let index = Number(prompt("Qual o indice da vaga que deseja excluir?"))
    let confirma;
    confirma =confirm("Deseja excluir essa vaga?\n" + "Vaga: " + vagas[index-1].name + "\nDescrição: " + vagas[index - 1].description + "\nData limite: " + vagas[index - 1].limitDate );
    vagas.splice(index-1,1);

}

function visualizeVaga(){
    let index = Number(prompt("Qual o indice da vaga que deseja visualizar?"))
    alert("Indice da Vaga: " + index + "\nVaga: " + vagas[index-1].name + "\nDescrição: " + vagas[index - 1].description + "\nData limite: " + vagas[index - 1].limitDate + "\nNumero de candidatos: " +vagas[index-1].candidatos.length + "\nCandidatos: " + vagas[index-1].candidatos );
}

function listaVagas(){
    let i =1;
    vagas.forEach(vagas => {alert("Indice da Vaga: " + i + "\nVaga: " + vagas.name  + "\nNumero de candidatos: " +vagas.candidatos.length );i++ } )
    
}

function menu(){
    
    do {
        option=prompt("1 - Listar vagas disponíveis\n2 - Criar uma nova vaga\n3 - Visualizar uma vaga\n4 - Inscrever um candidato em uma vaga\n5 - Ecluir uma vaga\n6 - Sair do Programa")
        switch(option){
            case "1":
                listaVagas();
                break
            case "2":
                createVagas();
                break
            case "3":
                visualizeVaga();
                break;
            case "4":
                subscribe();
                break;
            case "5":
                excludes();
                break;
            case "6":
                alert("encerrando programa...")
                break;
            default:
                alert("opção não existente");
        }
    } while (option!=="6");
}