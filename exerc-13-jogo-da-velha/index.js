let x = [];
let o = [];

let turn = 0
let scorePlayer1= 0
let scorePlayer2=0

let winnig = [['1', '2','3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '5', '9'], ['3', '5', '7'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9']];

let areas = document.querySelectorAll('.space')

console.log(areas)

function startGame(){

    x = [];
    o = [];

    showPlayer(turn)
    

    document.querySelectorAll('.space').forEach(el=>{
        el.classList.remove('text-success')
        el.innerText = ''
    })
areas.forEach(function (area) {
    area.addEventListener('click', function (ev) {
        let play = area.dataset.value
        if (x.includes(play) || o.includes(play)) {
            return
        } else if (turn === 0) {
            x.push(play)
            turn = 1
            area.innerText = "X"
            showPlayer(turn)
            resolve(x)
        } else if (turn === 1) {
            o.push(play)
            turn = 0
            /* console.log(o) */
            area.innerText = "O"
            showPlayer(turn)
            resolve(o)
        }
    })
})
}

function resolve(y) {
    for(let i = 0;i <winnig.length;i++){
        if(y.includes(winnig[i][0]) && y.includes(winnig[i][1]) && y.includes(winnig[i][2])){
            console.log(winnig[i])
            x.push('1','2','3','4','5','6','7','8','9')
            o.push('1','2','3','4','5','6','7','8','9')
            win(winnig[i])
            chagingScore(y)
            
            break
        }
        
    }
    if((x.length+o.length)===9){
        alert('Empate')
    
    } 
}


function win(winLine){
    winLine.forEach(function(el){
        document.querySelector('.space-'+el).classList.add('text-success')
    })
}

function chagingScore(player){
    if(player==x){
        scorePlayer1++
    }else if(player==o){
        scorePlayer2++
    }
    document.getElementById('score1').innerText= scorePlayer1
    document.getElementById('score2').innerText= scorePlayer2
}

function showPlayer(turn){
    if(turn===0){
        document.getElementById('player-turn').innerText = document.getElementById('jogador1').value
    }if(turn===1){
        document.getElementById('player-turn').innerText = document.getElementById('jogador2').value
    }
}

function restartScore(){
    scorePlayer1 = 0
    scorePlayer2 = 0
    document.getElementById('score1').innerText= scorePlayer1
    document.getElementById('score2').innerText= scorePlayer2
}