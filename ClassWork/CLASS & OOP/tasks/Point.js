class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    toStr() {
        return `[x = ${this.x}, y = ${this.y}]`
    }
}
let a = new Point(3, 4)
console.log(a.toStr()); // [x = 3, y = 4]
