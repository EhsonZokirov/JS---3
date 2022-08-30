// ///////////////////////////////////// ENTRIES = массив ключ кати велю возвраащать мекна
// const obj = {
//     name: "Ehson",
//     age: 22
// }
// console.log(Object.entries(obj));

/////////////////////////////////////// Object.keys(obj) = массивы ключора возвращать мекна
// const obj = {
//     name: "Ehson",
//     age: 22
// }
// console.log(Object.keys(obj));

////////////////////////////////////////////// деструктизация
// const obj = {
//     nom: "Ehson",
//     age: 22
// }
// let { nom, age } = obj
// console.log(nom);
/////////////////////////////////////////////// copy object
// const obj = {
//     nom: "Ehson",
//     age: 22
// }
// let obj2 = {
//     ...obj,
//     adress: "Somoni"
// }
// console.log(obj2);

/////////////////////////////////////////////////////////////// THIS in JS
// const obj = {
//     nom: "Ehson",
//     surname: "Zokirov",
//     fullName: function () {
//         // return this.nom + " " + this.surname
//         return `${this.nom} ${this.surname}`
//     },
//     age: 22
// }
// let { nom, surname, age } = obj
// console.log(obj.fullName());


//////////// bind() = функцияи объекти дигарира дигачода истифода мебарем!
// const person = {
//     firstName: "Ehson",
//     lastName: "Zokirov",
//     fullName: function () {
//         return this.firstName + ' ' + this.lastName
//     },
// }
// const member = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 22
// }

// let Method = person.fullName.bind(member)
// console.log(Method());

////////////////////////////////////////////// PRACTICE time

// function getVoteCount(x, y) {
//     let obj = {
//         br: x,
//         eki: y,
//     }
//     return obj.br - obj.eki
// }
// console.log(getVoteCount(13, 3));

// //////////////////////////// variant second
// function getCount(obj) {
//     return obj.upVotes - obj.downVotes
// }
// console.log(getCount({ upVotes: 13, downVotes: 3 }));

// ///////////task 2
// function volumeOfBox(obj) {
//     return obj.a * obj.b * obj.c
// }
// console.log(volumeOfBox({ a: 2, b: 5, c: 1 }));

//////////// ///////////////////task 3
function range(x, obj) {
    if (x >= obj.min && x <= obj.max) {
        return true
    }
    return false
}
console.log(range(5, { min: 5, max: 5 })); // true
