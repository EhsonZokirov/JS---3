let a = document.querySelector(`.num`)
let btn = document.querySelector(`.btn`)

btn.onclick = () => {
    alert(a.value * a.value)
}