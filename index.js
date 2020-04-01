
const checkIfNum = (value) => {
  return !isNaN(value) && value !== ''
}

const checkForOperand = (value) => {
  const operands = ['+', '-', '*', '/']

  return checkIfNum(value) || operands.includes(value)
}

const doOperation = (numbers) => {
  switch (numbers[1]) {
    case '+':
      return numbers[0] + numbers[2]
    case '-':
      return numbers[0] - numbers[2]
    case '*':
      return numbers[0] * numbers[2]
    case '/':
      return numbers[0] / numbers[2]
    default:
      return NaN
  }
}

function calculate(calculationSteps) {
  let numbers = []

  calculationSteps.forEach(calcElements => {
    if (checkForOperand(calcElements)) {
      numbers.push(calcElements)
    }
  })

  return doOperation(numbers)
}

module.exports = calculate
