let off = document.getElementById(`off`)
let on = document.getElementById(`on`)
let btn = document.getElementById(`btn`)
on.style.display = 'none'
btn.style.background = 'yellow'

btn.onclick = () => {
<<<<<<< HEAD
    if (btn.innerHTML == 'ON') {
        btn.innerHTML = 'OFF'
        btn.style.backgroundColor = 'silver'
        on.innerHTML = on.style.display = 'inline-block'
        off.innerHTML = off.style.display = "none"
        return
    }
    btn.innerHTML = 'ON'
    btn.style.backgroundColor = 'yellow'
    on.innerHTML = on.style.display = "none"
    off.innerHTML = off.style.display = 'inline-block'
}
=======
    if (btn.innerHTML == 'on') {
        btn.innerHTML = 'off'
        btn.style.backgroundColor = 'silver'
        off.innerHTML = style.display = "none"
        on.innerHTML = on.style.display = 'block'
        return
    }
    btn.innerHTML = 'on'
    btn.style.backgroundColor = 'yellow'
    on.innerHTML = on.style.display = "none"
    off.innerHTML = off.style.display = 'block'
}
>>>>>>> ab0c204dcb75bdd7300693662609b79f7aa1963f
