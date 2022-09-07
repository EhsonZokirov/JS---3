
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    compareAge(p) {
        if (p.age > this.age) {
            return `${p.name} is older than me.`
        }
        else if (p.age < this.age) {
            return `${p.name} is younger than me.`
        }

        else return `${p.name} is same age as me.`
    }
}

let p1 = new Person('Ehson', 22)
let p2 = new Person('Fayz', 17)
let p3 = new Person('Abubakr', 17)

console.log(p1.compareAge(p2));