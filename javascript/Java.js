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
    message.style.border = '1px solid green'
const grids = document.querySelectorAll('.grid')

grids.forEach(grid => {
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor =  'rgb('+randomcolor()+', '+randomcolor()+', '+randomcolor()+')'
    })
})
}

divs()

submit.addEventListener('mousedown', () => {
    if (input.value > 100 || isNaN(input.value)) {
    submit.disabled = true
    message.innerHTML = 'Please Enter A Valid Number From 1 - 100'
    message.style.color = 'red'
    message.style.border = '1px solid red'
    input.value = ''
}}
)

submit.addEventListener('click', function hi() {
    UserInput = Number(input.value)
    if (UserInput === 0) UserInput = 10
    NumberOfGrid = UserInput * UserInput
    divs()
    input.value = ''
    message.textContent = "MADE BY MAVERICK"
})

input.addEventListener('click', () => {
    submit.disabled = false
    message.textContent = 'Total Boxes = ' + NumberOfGrid
    message.style.color = 'green'
    message.style.border = '1px solid green'
})

function randomcolor() {
    let color = Math.floor(Math.random()*256)
    return color
}

const section = document.querySelector("section")

section.addEventListener('mouseover', () => {
    section.style.border = `4px double ${'rgb('+randomcolor()+', '+randomcolor()+', '+randomcolor()+')'}`
    section.style.transition= 'border-color 500ms linear 50ms';
})