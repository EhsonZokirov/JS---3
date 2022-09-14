let a = document.querySelector(`#number`)
let res = document.querySelector(`#result`)
let btn = document.querySelector(`#btn`)

btn.onclick = () => {
    if (a.value > 0 && a.value < 11) {
        return res.innerHTML = `welcome`
    }
    else return res.innerHTML = `Good bye`
}