let date1 = new Date("2012.04.05")
let date2 = new Date("2012.04.02")
let res = date1.getTime() - date2.getTime()
let time = new Date(res)
console.log(res.toString("yyy MM dd"));