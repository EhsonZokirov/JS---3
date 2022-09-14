let a = document.querySelector(`.num1`)
let b = document.querySelector(`.num2`)
let btn = document.querySelector(`.btn`)
let res = document.querySelector(`.result`)

btn.onclick = () => {
    return res.innerHTML = +a.value + +b.value
}
