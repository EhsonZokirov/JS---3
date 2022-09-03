function LongLongTime(h, m, s) {
    h *= 3600
    m *= 60
    if (h > m && h > s) {
        return h / 3600
    }
    else if (m > h && m > s) {
        return m / 60
    }
    return s
}

console.log(LongLongTime(2, 300, 15000)); // 300