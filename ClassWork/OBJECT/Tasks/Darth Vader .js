function relation(name) {
    person = {
        'Darth Vader': "father",
        Leia: "sister",
        Han: "brother in law",
        R2D2: "droid",
    }
    return ` I am your ${person[name]}.`
}
console.log(relation('Darth Vader'));
console.log(relation('Leia'));
console.log(relation('Han'));
console.log(relation('R2D2'));