const container = document.querySelector('.container')
const input = document.querySelector('#input')
const submit = document.querySelector('.submit')
const message = document.querySelector('p')
const section = document.querySelector("section")

let UserInput = 10
let NumberOfGrid = UserInput * UserInput

function text() {
    message.textContent = 'Total Boxes = ' + NumberOfGrid
    message.style.color = 'green'
    message.style.border = '1px solid green'
}

let colorsaver = ['transparent']
function colordicided() {
    const grids = document.querySelectorAll('.grid')
    grids.forEach(grid => {
    grid.addEventListener('mouseover',() => {
        let color = 'rgb('+randomcolor()+', '+randomcolor()+', '+randomcolor()+')'
        colorsaver.push(color)
        colorsaver.shift()
        grid.style.backgroundColor = color

        let currentcolor = colorsaver.length - 1
        currentcolor = colorsaver[currentcolor]

        section.style.border = `4px double ${currentcolor}`
        section.style.transition= 'border-color 500ms linear 50ms';
    })
})
}

function gridecided( ) {
    container.textContent = ''
    for(i = 0; i < NumberOfGrid; i++) {
        const div = document.createElement('div')
        div.setAttribute('class', 'grid')
        container.append(div)
        div.style.width = (500 / UserInput)+'px'
        div.style.height = (500 / UserInput)+'px'
    }
    text()
    colordicided() 
}
   
gridecided()

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
    gridecided()
    input.value = ''
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