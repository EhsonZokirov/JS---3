let red = document.querySelector(`.red`)
let yellow = document.querySelector(`.yellow`)
let green = document.querySelector(`.green`)
let cnt = document.querySelector(`.cnt`)
function svetofor() {
    cnt.innerHTML++
    //red
    if (cnt.innerHTML <= 4 && cnt.innerHTML >= 1) {
        red.style.background = `rgba(255, 0, 0, 0.9)`//red
        yellow.style.background = `rgba(255, 255, 0, 0.4)`//yellow
        green.style.background = `rgba(3, 133, 3, 0.5)` // green
        yellow.innerHTML = 3
        green.innerHTML = 3
        red.innerHTML--
        red.style.boxShadow = `0px 0px 10px 1px red` //red Shadow
        yellow.style.boxShadow = `0px 0px 0px 0px yellow` //yellow Shadow
        green.style.boxShadow = `0px 0px 0px 0px green` //green Shadow
    }
    //yellow
    if (cnt.innerHTML >= 5 && cnt.innerHTML <= 7) {
        red.style.background = `rgba(255, 0, 0, 0.4)`//red
        yellow.style.background = `rgba(255, 255, 0, 0.9)`//yellow
        green.style.background = `rgba(3, 133, 3, 0.5)`// green
        red.innerHTML = 4
        green.innerHTML = 3
        yellow.innerHTML--
        red.style.boxShadow = `0px 0px 0px 0px red` //red Shadow
        yellow.style.boxShadow = `0px 0px 10px 1px yellow` //yellow Shadow
        green.style.boxShadow = `0px 0px 0px 0px green` //green Shadow
    }
    //green
    if (cnt.innerHTML >= 8 && cnt.innerHTML <= 10) {
        red.style.background = `rgba(255, 0, 0, 0.4)`//red
        yellow.style.background = `rgba(255, 255, 0, 0.4)`//yellow
        green.style.background = `rgb(0, 255, 0)`// green
        red.innerHTML = 4
        yellow.innerHTML = 3
        green.innerHTML--
        red.style.boxShadow = `0px 0px 0px 0px red` //red Shadow
        yellow.style.boxShadow = `0px 0px 0px 0px yellow` //yellow Shadow
        green.style.boxShadow = `0px 0px 10px 5px green` //green Shadow
        if (cnt.innerHTML == 10) {
            cnt.innerHTML = 1
        }
    }
}
cnt.onclick = () => {
    setInterval(svetofor, 1000)
}

    /////////////////////////////////////////////////////////////////// reverse
    // if (btn.innerHTML >= 3) {
    //     red.style.background = `rgba(255, 0, 0, 0.4)`
    //     yellow.style.background = `rgba(255, 255, 0, 0.9)`
    //     green.style.background = `rgba(3, 133, 3, 0.4)`

    // }

    // if (btn.innerHTML >= 4) {
    //     red.style.background = `rgba(255, 0, 0, 0.9)`
    //     yellow.style.background = `rgba(255, 255, 0, 0.4)`
    //     green.style.background = `rgba(3, 133, 3, 0.4)`

    // }
