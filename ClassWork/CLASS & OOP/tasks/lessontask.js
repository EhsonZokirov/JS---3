
////////////////////////////////////
////////////////////////////////////  first class
class Person {
    constructor(name, surname, fullName, sex, age, height, weight, hairstyle, leather, hobby) {
        //1 
        this.name = name
        //2
        this.surname = surname
        //3
        this.fullName = fullName
        //4
        this.sex = sex
        //5 
        this.age = age
        //6 
        this.height = height
        //7 
        this.weight = weight
        //8 
        this.hairstyle = hairstyle
        //9
        this.leather = leather
        //10 
        this.hobby = hobby

    }
}
let ehson = new Person('Ehson', 'Zokirov', 'Ehson Zokirov', 'male', 22, 170, 96, 'black', 'bright skin', 'Programming')
let mehriddin = new Person('Mehriddin', 'Familya', 'Mehriddin Familya', 'male', 18, 170, 68, 'black', 'bright skin', 'Programming')
console.log(ehson);

////////////////////////////////////
////////////////////////////////////  second class
class Car {
    constructor(name, model, date, color, weight, width, height, motor, maslo, benzin) {
        //1
        this.name = name
        //2
        this.model = model
        //3
        this.date = date
        //4
        this.color = color
        //5
        this.weight = weight
        //6
        this.width = width
        //7
        this.height = height
        //8
        this.motor = motor
        //9
        this.maslo = maslo
        //10
        this.benzin = benzin
    }

}
let bmw = new Car('BMW', 'm5', '2015', 'red', '2.5-tonna', 1.5, 3.5, 6.3, 'zic', 'дизель')
let opel = new Car('OPEL', 'ASTRA G', '2007', 'silver', '1.5-tonna', 1.5, 2.5, 1.5, 'Castrol', '92')
console.log(opel);  

