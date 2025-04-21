// In TypeScript we specify the type of variables to know what kind of values they can hold
// We can explicitly declare a variable's type like this:
// let variable1: typeofvariable = value

// The basic types in TypeScript are:

// Numbers
const number1: number = 2

// String
const myName: string = 'Santiago'

// Boolean
const isLearning: boolean = true

// Null
const nullValue: null = null

// Undefined
const anUndefined: undefined = undefined

// ------------------ƒ----------------------------------------
// 🧠 Type Inference
// TypeScript is smart — it can infer types without explicitly declaring them

// Numbers
const number2 = 2 // inferred as number

// String
const myName2 = 'Santiago' // inferred as string

const a = 1
const b = 2
const c = a + b // inferred as number

// Hovering over c shows: const c: number

// ----------------------------------------------------------
// ❌ What if TypeScript can't infer the type?

let anAnyType // inferred as 'any'
// This means TS disables type checking and autocompletion for this variable

anAnyType = 'now it is a string'
anAnyType = 42
anAnyType = true

// You can also manually declare 'any', but it's discouraged:
let anAnyType2: any = 'hello world'
// With `any`, we lose all type safety:
anAnyType2 = 123
anAnyType2.toFixed() // Works, but could fail at runtime if the value is not a number

// ----------------------------------------------------------
// 🤔 What if we really don't know the type (yet)?

// In that case, we use 'unknown' — safer than 'any'
let anUnknownType: unknown = 'This works?'
anUnknownType = 42
anUnknownType = { name: 'Santi' }

// We can't directly use it without checking its type first
// For example:

// console.log(anUnknownType.toUpperCase()) ❌ ERROR

// To use it safely:
if (typeof anUnknownType === 'string') {
  console.log(anUnknownType.toUpperCase()) // ✅ Safe
}

// ----------------------------------------------------------
// 📝 Summary:
// - Prefer type inference unless you need explicit typing
// - Avoid `any` unless absolutely necessary
// - Use `unknown` if you truly don't know the type at declaration time
// Keep this file as a module to avoid variable conflicts and allow top-level await
export { }

