const body = document.querySelector('body')
const white = body.querySelector('.white')
const black = body.querySelector('.black')
const submit = body.querySelector('.form__submit')
const check = body.querySelectorAll('.form__input_check')
const attention = body.querySelector('.form__attention')
const toggle = body.querySelectorAll('.form__toggle')


white.addEventListener('click', (Event)=> {
    Event.preventDefault()
    body.classList.remove('dark')
    black.classList.remove('button_active')
    white.classList.add('button_active')

})

black.addEventListener('click', (Event)=> {
    Event.preventDefault()
    body.classList.add('dark')
    white.classList.remove('button_active')
    black.classList.add('button_active')
})

submit.addEventListener('click', (Event)=> {
    Event.preventDefault()
    for (let x = 0; x < check.length; x++) {
        if (!check[x].classList.contains('required')) {
            check[x].parentNode.classList.add('attention')
            check[x].style.border = "1px solid var(--text-attention)"
        } else {
            check[x].parentNode.classList.remove('attention')
            check[x].style.border = "1px solid var(--input-border)"
        }
    }
})

for (let y = 0; y < check.length; y++) {
    check[y].addEventListener('input', ()=> {
        let inputValue = check[y].value.trim()
        if (inputValue.length > 0) {
            check[y].classList.add('required')
        } else {
            check[y].classList.remove('required')
        }
    })
}

for (let i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', ()=> {
        toggle[i].classList.toggle('form__toggle_active')
    })
}
