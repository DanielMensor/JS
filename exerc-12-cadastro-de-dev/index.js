let tecno = document.getElementById('tecno')


const name = form.children.name.value

const button = document.getElementById("button")

let i =0;

function createTecnology(ev){
    ev.preventDefault()
    const row = i

    let div = document.createElement('div')
    div.id = i
    let label = document.createElement('label')
    label.innerText = 'Qual o nome da técnologia?'
    let input = document.createElement('input')
    input.type = 'text'
    input.name = 'nome' 
    input.id = 'nome'
    let p = document.createElement('p')
    p.innerText = 'Quanto tempo de experiencia'
    let radio1 = document.createElement('input')
    radio1.type = 'radio'
    radio1.name = 'time' +row
    radio1.value = '0/2'
    let label1 = document.createElement('label')
    label1.innerText = '0 a 2 anos'
    let radio2 = document.createElement('input')
    radio2.type = 'radio'
    radio2.name = 'time'  +row
    radio2.value = '3/4'
    let label2 = document.createElement('label')
    label2.innerText = '3 a 4 anos'
    let radio3 = document.createElement('input')
    radio3.type = 'radio'
    radio3.name = 'time'  +row
    radio1.value = '5+'
    let label3 = document.createElement('label')
    label3.innerText = '5+ anos'

    const x = i
    let removebutton = document.createElement('button')
    removebutton.innerText = 'Remover tecnologia'
    removebutton.addEventListener('click', function(ev) {
        ev.preventDefault()
        let nodeToRemove = document.getElementById(x)   
        tecno.removeChild(nodeToRemove)
    })

    div.appendChild(label)
    div.appendChild(input)
    div.appendChild(p)
    div.appendChild(radio1)
    div.appendChild(label1)
    div.appendChild(radio2)
    div.appendChild(label2)
    div.appendChild(radio3)
    div.appendChild(label3)
    div.appendChild(removebutton)

    tecno.appendChild(div)
    i++

}

button.addEventListener('click', createTecnology)

let usuarios = []

let cadastrar = document.getElementById('cadastrar')
cadastrar.addEventListener('click', function(ev){
    ev.preventDefault()
    let newUser = {
        name: document.getElementById('name').value,
        tecnologys:  [],
    }

    document.querySelectorAll('form>div>div').forEach(function(el){
        
        let tecnology = {
            name:el.children.nome.value,
            time:el.querySelector('input[type="radio"]:checked').value
        }
        newUser.tecnologys.push(tecnology)
    })

    usuarios.push(newUser)
    console.log(usuarios)
})


