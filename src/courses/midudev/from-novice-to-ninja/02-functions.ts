// ❌ Avoid using the generic 'Function' type in TypeScript
// It's too vague and disables useful type checking and autocompletion

const sayHiFromFunction = (fn: Function) => {
  fn('Santiago')
}

sayHiFromFunction((name: string) => {
  console.log(`Hola ${name}`)
})

// ✅ This works, but TypeScript doesn't enforce that the parameter should be a string
// So the following code compiles, but fails at runtime:

sayHiFromFunction((id: number) => {
  console.log(id.toFixed(2)) // 💥 Runtime error: "Santiago" is not a number
})

// ----------------------------------------------------------------
// ✅ Correct way: define the function signature explicitly

const sayHiFromTypedFunction = (fn: (name: string) => void) => {
  fn('Santi')
}

sayHiFromTypedFunction((name) => {
  console.log(`Hello, ${name.toUpperCase()}`)
})

// ❌ This won't compile:
// sayHiFromTypedFunction((id: number) => {})
// Error: Argument of type '(id: number) => void' is not assignable to parameter of type '(name: string) => void'

// ----------------------------------------------------------------
// ✅ Function types using type aliases

type GreetingFn = (name: string) => void

const sayHiWithAlias = (fn: GreetingFn) => {
  fn('Mateo')
}

sayHiWithAlias((n) => {
  console.log(`Hi ${n}`)
})

// ----------------------------------------------------------------
// ✅ Return functions from functions

const createGreeter = (greeting: string): ((name: string) => string) => {
  return (name: string) => `${greeting}, ${name}!`
}

const greet = createGreeter('Welcome')
console.log(greet('Santi')) // Output: Welcome, Santi!

// ----------------------------------------------------------------
// ✅ Return types in normal and arrow functions

function add(a: number, b: number): number {
  return a + b
}

const subtract = (a: number, b: number): number => a - b

// ----------------------------------------------------------------
// ✅ void: used for functions that return nothing

const logMessage = (): void => {
  console.log('Logging something...')
}

function sayHello(name: string): void {
  console.log(`Hello, ${name}`)
}

// You can technically return undefined from a void function:
function logSomething(): void {
  return undefined
}

// But you can't return any value other than undefined or nothing

// ----------------------------------------------------------------
// ✅ never: used for functions that NEVER return

// Example 1: A function that always throws an error
function throwError(message: string): never {
  throw new Error(message)
}

// Example 2: A function that enters an infinite loop
function infiniteLoop(): never {
  while (true) {
    // never exits
  }
}

// `never` is useful to signal that a function either crashes or never ends,
// so its return value should never be used or expected

// ----------------------------------------------------------------
// 📝 Summary:
//
// - Use `void` when a function doesn’t return a value (just runs logic)
// - Use `never` when a function never finishes (e.g. throws error or loops forever)
// - Avoid the generic `Function` type
// - Always define argument and return types in real projects
// - Use type aliases to keep function types clean and reusable
// Keep this file as a module to avoid variable conflicts and allow top-level await
export {}
