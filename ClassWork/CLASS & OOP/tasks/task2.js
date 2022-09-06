class Player {
    constructor(name, age, height, weight) {
        this.name = name
        this.age = age
        this.height = height
        this.weight = weight
    }
    get getAge() {
        return `${this.name} is age ${this.age}`
    }
    get getHeight() {
        return `${this.name} is ${this.height}cm`
    }
    get getWeight() {
        return `${this.name} is weight ${this.weight}kg`
    }
}

let p1 = new Player('Ehson Zokirov', 22, 170, 95)
console.log(p1.getAge);
console.log(p1.getHeight);
console.log(p1.getWeight);
