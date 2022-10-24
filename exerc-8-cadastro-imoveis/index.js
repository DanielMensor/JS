let imoveis = []

let i=0;
let option

do {
    option = prompt(`Quantidade de imoveis cadastrados: ${imoveis.length}\n\n1 - cadastrar imovel\n2 - listar imóveis\n3 - Sair`)
    switch(option){
        case "1":
            imoveis[i]={}
            imoveis[i].name = prompt("Digite o nome do proprietário");
            imoveis[i].room = prompt("Digite a quantidade de quartos");
            imoveis[i].bathroom = prompt("digite a quantidade de banheiros");
            imoveis[i].garage = confirm("O móvel possui garagem?\nClick OK para sim\nClick cancel para não");
            i++
            break
        case "2":
            let lista = "Lista de Imóveis:\n";
            for(let i = 0;i<imoveis.length;i++){
                lista += ("Nome do proprietário: " + imoveis[i].name + "\nQuantidade de quartos: " + imoveis[i].room +"\nQuantidade de banheiros: " + imoveis[i].bathroom + "\nTem garagem: " + (imoveis[i].garage ? "sim":"não") + "\n\n");                
            }
            alert(lista)
            break;
        case "3":
            alert("Encerrando programa...")
            break;
        default:
            alert("Opção inserida não encontrada")
    }

} while (option!=="3");