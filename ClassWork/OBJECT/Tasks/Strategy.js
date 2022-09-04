
function Strategy(x) {
    let obj = {
        '1': `circle`,
        '2': `semi-circle`,
        '3': `triangle`,
        '4': `square`,
        '5': `pentagon`,
        '6': `hexagon`,
        '7': `heptangon`,
        '8': `octagon`,
    }
    return `${obj[x]}`
}
console.log(Strategy(8));