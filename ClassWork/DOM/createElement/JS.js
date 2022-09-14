let card = [
    {
        fullName: "John Smith",
        job: "Architect & Engineer",
        img: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
        fullName: "Ehson Zokirov",
        job: "SMM",
        img: "/IMG_5382.JPG",
    },
    {
        fullName: "Jane Smith",
        job: "Ux / Ui Designer",
        img: "https://www.w3schools.com/howto/img_avatar2.png",
    },

];
card.forEach((elem) => {
    let wrapper = document.querySelector(`.wrapper`)
    let card = document.createElement(`div`)
    let img = document.createElement(`img`)
    let h4 = document.createElement(`h4`)
    let p = document.createElement(`p`)
    let container = document.createElement(`div`)
    card.style.background = 'white'
    card.classList.add(`card`)
    img.src = elem.img
    img.alt = 'avatar'
    img.style.width = '100%'
    card.appendChild(img)

    container.classList.add(`container`)
    h4.innerHTML = `<b>${elem.fullName}</b>`
    p.innerHTML = elem.job
    container.appendChild(h4)
    container.appendChild(p)
    card.appendChild(container)
    wrapper.appendChild(card)
});