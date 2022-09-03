function Halloween(date) {
    if (date.getMonth() == 9 && date.getDate() == 31) {
        return `Bonfire toffee`
    }
    else { return `toffee` }
}
console.log(Halloween(new Date('2013/10/31')));