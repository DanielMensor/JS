let normalWord = prompt("Escreva qual palavra deseja verificar se é um palíndromo");
let backwardWord = "";

for(let i = (normalWord.length - 1);i>=0;i--){
    backwardWord += normalWord[i];
}

if(normalWord===backwardWord){
    alert(`A palavra é um palíndromo ${backwardWord}`)
}else {
    alert(`A palavra não é um palíndromo\nPalavra normal: ${normalWord}\nDe trás para frente: ${backwardWord}`)
}