class Home {
    constructor(okno, tv, dar, kravat) {
        this.okno = okno
        this.tv = tv
        this.dar = dar
        this.kravat = kravat
    }
    svet() {
        return `YES!`
    }
}
class Xona extends Home {
    constructor(okno, tv, dar, kravat, podval) {
        super(okno, tv, dar, kravat, podval)
        this.podval = podval

    }
}
let b = new Xona('moshniy', 'tenj', 'tansparent', 'sekunja', true)
// console.log(a);
console.log(b.svet());
