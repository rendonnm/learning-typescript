const factorial = (n: number): number => {
  if (n === 1) return 1
  return n * factorial(n - 1)
}

console.log(`The factorial of 3 is ${factorial(3)}`)


function fibonacci(n: number): number {
  if (n <= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(`The Fibonnaci number at position 5 is ${fibonacci(5)}`)