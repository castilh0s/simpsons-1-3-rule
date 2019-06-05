function func (value) {
  return Math.log(value)
}

function calculateFx (lowerDomain, integrationSteps, h) {
  let fx = []

  for (let index = 0; index <= integrationSteps; index++) {
    let x = lowerDomain + index * h
    fx[index] = func(x)
  }

  return fx
}

function calculateResult (integrationSteps, h, fx) {
  let res = 0
  for (let index = 0; index <= integrationSteps; index++) {
    if (index === 0 || index === integrationSteps) {
      res += fx[index]
    } else if (index % 2 !== 0) {
      res += 4 * fx[index]
    } else {
      res += 2 * fx[index]
    }
  }

  return res * (h / 3)
}

function SimpsonsRule (lowerDomain, upperDomain, integrationSteps) {
  this.lowerDomain = lowerDomain
  this.upperDomain = upperDomain
  this.integrationSteps = integrationSteps
}

SimpsonsRule.prototype = {
  calculate () {
    const h = (this.upperDomain - this.lowerDomain) / this.integrationSteps
    const fx = calculateFx(this.lowerDomain, this.integrationSteps, h)
    const res = calculateResult(this.integrationSteps, h, fx)

    return res
  }
}

module.exports = { SimpsonsRule }
