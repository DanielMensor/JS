let buttonBg = document.getElementById('changeBg')
let main= document.querySelector('main')
let copy= document.getElementById('copy')
let resultInput = document.getElementById('result')
let input = document.getElementById('input')

const alowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click',function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById("clear").addEventListener('click',function(){
    input.value = ""
    input.focus()
})

document.getElementById('equal').addEventListener('click',calculate)

buttonBg.addEventListener('click',function(ev){
    ev.preventDefault()
    main.classList.toggle('bg-dark') 
    main.classList.toggle('bg-light')
    main.classList.toggle('branco') 
    main.classList.toggle('preto')
    copy.classList.toggle('branco') 
    copy.classList.toggle('preto')
    console.log('funcionando')
})  

input.addEventListener("keydown",function(ev){
    ev.preventDefault()
    if(alowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }
    if(ev.key==="Backspace"){
        input.value = input.value.slice(0,-1)
    }
    if(ev.key==="Enter"){
        calculate()
    }
})

function calculate(){
    resultInput.value = 'Error'
    resultInput.classList.add('error')
    const resultado= eval(input.value)
    resultInput.value = resultado
    resultInput.classList.remove('error')
    if(resultInput.value ==='undefined'){
        resultInput.value = ''
    }
}

document.getElementById('copy').addEventListener('click',function(ev){
    const button = ev.currentTarget
    if(button.innerText==='copy'){
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    }else{
        button.innerText = 'copy'
        button.classList.remove('success')
    }
})