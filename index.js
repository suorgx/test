const body = document.querySelector('body')
const white = body.querySelector('.white')
const black = body.querySelector('.black')
const submit = body.querySelector('.form__submit')
const check = body.querySelector('.form__input_check')
const attention = body.querySelector('.form__attention')
const toggle = body.querySelectorAll('.form__toggle')

console.log(toggle)

white.addEventListener('click', (Event)=> {
    Event.preventDefault()
    body.classList.remove('dark')
})

black.addEventListener('click', (Event)=> {
    Event.preventDefault()
    body.classList.add('dark')
})

submit.addEventListener('click', (Event)=> {
    Event.preventDefault()
    if (!check.classList.contains('required')) {
        check.style.border = "1px solid var(--text-attention)"
        attention.classList.add('attention')
    } else {
        check.style.border = "1px solid var(--input-border)"
        attention.classList.remove('attention')
    }
})

check.addEventListener('input', ()=> {
    let inputValue = check.value.trim()
    if (inputValue.length > 0) {
        check.classList.add('required')
    } else {
        check.classList.remove('required')
    }
})

for (let i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', ()=> {
        toggle[i].classList.toggle('form__toggle_active')
    })
}
