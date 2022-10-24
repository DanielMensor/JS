let result = "";

let numero = Number(prompt("Qual numero você deseja saber a tabuada?"))
let multply;
for(let i = 1;i<=20;i++){
    multply = i*numero;
    result += ("numero x "+i + " = " + multply +"\n")
}

alert(result)