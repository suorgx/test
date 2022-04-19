const searchSelectOption = document.querySelectorAll('.search_select_option')

for (let i = 0; i < searchSelectOption.length; i++) {
    searchSelectOption[i].addEventListener('click', ()=> {
        searchSelectOption[i].parentNode.previousElementSibling.innerHTML = searchSelectOption[i].innerHTML
        searchSelectOption[i].parentNode.previousElementSibling.click()
    })
}