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
class Sum extends Workers {
    constructor(name, surname, sum1, kol_vo) {
        super(name, surname, sum1, kol_vo)

    }
    SumOfWorker() {
        return this.getSalary() + this.getSalary()
    }
}

let a = new Sum('Nsrat', 'Izzatov', 10, 31) // 310
let b = new Sum('Toshmat', 'Nsratov', 10, 31) // 310
console.log(a.SumOfWorker());
////////////////////////////////////////////////// dar 1 moh chand somon ?