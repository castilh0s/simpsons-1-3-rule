function func (x) {
  return Math.log(x)
}

function simpson (lower, upper, n) {
  let h = (upper - lower) / n
  let x = []
  let fx = []

  for (let index = 0; index <= n; index++) {
    x[index] = lower + index * h
    fx[index] = func(x[index])
  }

  let res = 0
  for (let index = 0; index <= n; index++) {
    if (index === 0 || index === n) {
      res += fx[index]
    } else if (index % 2 !== 0) {
      res += 4 * fx[index]
    } else {
      res += 2 * fx[index]
    }
  }

  return res * (h / 3)
}

console.log(simpson(4, 5.2, 6))
