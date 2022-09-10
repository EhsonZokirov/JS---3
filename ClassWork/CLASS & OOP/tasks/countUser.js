class User {
    static cnt = 0
    constructor(gmail) {
        this.gmail = gmail
        User.cnt++
    }

}

let u1 = new User('zakirov3000.ze')
let u4 = new User('fayz.200n')
let u2 = new User('fayz.200n')
let u3 = new User('milan_rodrick')
console.log(User.cnt); //3
