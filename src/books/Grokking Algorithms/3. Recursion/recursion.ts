const factorial = (n: number): number => {
  if (n === 1) return 1
  return n * factorial(n - 1)
}

console.log(`The factorial of 3 is ${factorial(3)}`)