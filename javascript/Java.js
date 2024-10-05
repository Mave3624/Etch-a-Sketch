const container = document.querySelector('.container')
const input = document.querySelector('#input')
const submit = document.querySelector('.submit')
const message = document.querySelector('p')

let UserInput = 10
let NumberOfGrid = UserInput * UserInput

function divs( ) {
    container.textContent = ''
    for(i = 0; i < NumberOfGrid; i++) {
        const div = document.createElement('div')
        div.setAttribute('class', 'grid')
        container.append(div)
        div.style.width = (500 / UserInput)+'px'
        div.style.height = (500 / UserInput)+'px'
    }
    message.textContent = 'Total Boxes = ' + NumberOfGrid
    message.style.color = 'green'
const grids = document.querySelectorAll('.grid')

grids.forEach(grid => {
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor =  'rgb('+randomcolor()+', '+randomcolor()+', '+randomcolor()+')'
    })
})
}

divs()

submit.addEventListener('click', function hi() {
    UserInput = Number(input.value)
    console.log(UserInput)
    if (UserInput === 0) UserInput = 10
    NumberOfGrid = UserInput * UserInput
    divs()
    input.value = ''
})

submit.addEventListener('mousedown', () => {
    if (input.value > 100) {
    submit.disabled = true
    message.textContent = 'Enter a number From 1 - 100'
    message.style.color = 'red'
    input.value = ''
}
})

input.addEventListener('click', () => {
    submit.disabled = false
    message.textContent = 'Total Boxes = ' + NumberOfGrid
    message.style.color = 'green'
})

function randomcolor() {
    let color = Math.floor(Math.random()*256)
    return color
}
// not in use yet
function opecity() {
    let color = Math.random().toFixed(3)
    if (color < 0.8) color = 0.8
    return color
}