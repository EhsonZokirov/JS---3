
class Calculator {
    add(a, b) {
        return a + b
    }
    sub(a, b) {
        return a - b
    }
    mult(a, b) {
        return a * b
    }
    dev(a, b) {
        return a / b
    }
    mod(a, b) {
        return a % b
    }
}
let calc = new Calculator()
console.log(calc.add(6, 2)); // 8
console.log(calc.sub(5, 2)); // 3
console.log(calc.mult(5, 2)); // 10
console.log(calc.dev(5, 2)); // 2.5
console.log(calc.mod(5, 2)); // 1

