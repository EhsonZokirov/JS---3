class Name {
    constructor(name, surname) {
        this.name = name[0].toUpperCase() + name.slice(1).toLowerCase()
        this.surname = surname[0].toUpperCase() + surname.slice(1).toLowerCase()
    }
    fullname() {
        return `${this.name} ${this.surname}`
    }
    initials() {
        return `${this.name[0]}.${this.surname[0]}`
    }
}
let a1 = new Name('ehson', 'ZOKIROV')
console.log(a1.name); // Ehson
console.log(a1.surname); // Zokirov
console.log(a1.fullname()); // Ehson Zokirov
console.log(a1.initials()); // E.Z
