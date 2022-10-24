//Cadastro de recruta
let nome;
let sobrenome;
let studyCamp;
let birthYear;

nome = prompt("Escreva seu primeiro nome");
sobrenome = prompt("Escreva seu sobrenome");
studyCamp = prompt("Escreva seu campo de estudos");
birthYear = prompt("Digite o seu ano de nascimento");

birthYear = Number(birthYear);
let idade = 2022 - birthYear; 

alert(`Recruta:
        nome: ${nome}
        sobrenome: ${sobrenome}
        campo de estudo: ${studyCamp}
        idade: ${idade}`)



//Calculadora de 4 operações
let firstNumber = Number(prompt("digite o primeiro número que queira fazer uma operação"));
let secondNumber = Number(prompt("Digite o segundo número"));

let resultSoma = firstNumber + secondNumber;
let resultSub = firstNumber - secondNumber;
let resultMulti = firstNumber * secondNumber;
let resultDiv = firstNumber / secondNumber;

alert(`Resultados:
        ${firstNumber} + ${secondNumber} = ${resultSoma}
        ${firstNumber} - ${secondNumber} = ${resultSub}
        ${firstNumber} x ${secondNumber} = ${resultMulti}
        ${firstNumber} / ${secondNumber} = ${resultDiv}`)