// Teste de velocidade

let decide= confirm("você quer comparar a velocidade de dois veículos?")

if (decide){
let speed1 = Number(prompt("Qual a velocidade do primeiro veículo")) 
let speed2 = Number(prompt("Digite a velocidade do segundo veículo"))
    if(speed1>speed2){
        alert("a velocidade do primeiro carro é maior que a do segundo")
    }else if (speed1< speed2){
        alert("a velocidade do segundo carro é maior do que a do primeiro carro")
    }else{
        alert("as velocidades dos carros são iguais")
    }
}

//One bit Fight, Batalha de personagens

let battle = confirm("quer duelar?");

if(battle){
    let player1Name = prompt("digite o nome do personagem atacante")
    let power = Number(prompt("digite o poder de ataque do personagem"))
    let player2Name = prompt("digite o nome do personagem que está defendendo")
    let life = Number(prompt("digite a vida do personagem"))
    let defend = Number(prompt("digite o poder de defesa do personagem"))
    let shield = confirm("Se o personagem possui escudo click em ok se não clique em cancelar")

    let diference = power - defend;
    let dammage;

    if(shield){
        dammage = diference/2
    }else {
        dammage = diference
    }

    life = (dammage>0)? (life-dammage): (life);
    
    alert(`Resultado:
            Nome do personagem 1: ${player1Name}
            Poder de ataque: ${power}
            
            Nome do personagem 2: ${player2Name}
            Vida: ${life}
            Defesa: ${defend}
            Tem escudo? ${shield?"sim":"não"}
            
            Dano causado: ${dammage}
            `)


}