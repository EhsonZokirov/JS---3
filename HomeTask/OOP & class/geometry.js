class geometry {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }
    str() {
        return `[x=${this.x}, y=${this.y}, w=${this.w}, h=${this.h}]`
    }
}
let geo = new geometry(1, 2, 3, 4)
console.log(geo.str());  //[x=1, y=2, w=3, h=4]