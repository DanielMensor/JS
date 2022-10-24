function escalar(){
    let ul = document.getElementById('escalacao')

    let li = document.createElement('li')
    let name = document.getElementById('nomeDoJogador').value
    console.log(name)
    li.id = document.getElementById('numeroDaCamisa').value
    li.innerText = 'Jogador: ' + name + '\nPosição:' + document.getElementById('posicao').value + '\nNumero da Camisa: ' + document.getElementById('numeroDaCamisa').value
    ul.appendChild(li)

    document.getElementById('nomeDoJogador').value = ''
    document.getElementById('posicao').value = ''
    document.getElementById('numeroDaCamisa').value = ''
}

function remover(){
    let ul = document.getElementById('escalacao')

    let remove = document.getElementById(document.getElementById('camisa').value)
    
    ul.removeChild(remove)

    document.getElementById('camisa').value = ''
}