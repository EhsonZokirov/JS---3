class Email {
    constructor(name, surname,) {
        this.name = name
        this.surname = surname
    }
    fullName() {
        return `${this.name} ${this.surname}`
    }
    Email() {
        return `${this.name.toLowerCase()}.${this.surname.toLowerCase()}@company.com`
    }
}
let mail = new Email('Ehson','Zokirov')
console.log(mail.fullName());
console.log(mail.Email());
console.log(mail.name);