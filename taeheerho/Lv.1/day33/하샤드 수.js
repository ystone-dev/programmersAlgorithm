//todo

const solution = (x) => {
    let result = Array.from(x.toString(), Number).reduce((a, b) => a + b, 0)
    return x % result === 0
}