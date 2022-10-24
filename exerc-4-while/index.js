

let name=prompt("Digite seu nome");

let visitou = true;
let citys=[]
while(visitou){
    visitou = confirm("você já visitou alguma cidade? click OK se sim e CANCEL se não")
    
    if (visitou){
        citys.push(prompt("Digite o nome da cidade que você já visitou"))
    }else{
        alert(`${name} já visitou ${citys.length} cidades, listadas a baixo\n ${citys}`)
    }
}
