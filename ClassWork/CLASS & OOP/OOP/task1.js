class Workers {
    static cnt = 0
    constructor(name, surname, sum1, kol_vo) {
        this.name = name
        this.surname = surname
        this.sum1 = sum1
        this.kol_vo = kol_vo
        Workers.cnt++
    }
    getSalary() {
        return (this.sum1 * this.kol_vo)
    }
}
// class Sum extends Workers {
//     constructor(name, surname, sum1, kol_vo) {
//         super(name, surname, sum1, kol_vo,)
//     }

// }

let a = new Workers('Nsrat', 'Izzatov', 10, 31)
let b = new Workers('Nsrat', 'Izzatov', 10, 31)
console.log(Workers.cnt * a.getSalary());
////////////////////////////////////////////////// dar 1 moh chand somon ?