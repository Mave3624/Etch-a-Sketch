const container = document.querySelector('.container')
const input = document.querySelector('#input')
const submit = document.querySelector('.submit')
const message = document.querySelector('p')
const grids = document.querySelector('.grid')

let UserInput = 20
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
}

submit.addEventListener('click', function hi() {
    UserInput = Number(input.value)
    NumberOfGrid = UserInput * UserInput
    divs()
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
    input.textContent = ''
    submit.disabled = false
    message.textContent = ''
})

divs()