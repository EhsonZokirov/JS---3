let num = document.querySelector(`#number`)
let res = document.querySelector(`#result`)
let btn = document.querySelector(`#btn`)

btn.onclick = () => {
    let sum = 1
    for (let i = 1; i <= num.value; i++) {
        res.innerHTML = sum *= i
    }
}