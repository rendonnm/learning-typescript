// ✅ Basic string array
const languages: string[] = []

languages.push('JavaScript')
// languages.push(3) // ❌ Error: 3 is not a string

// --------------------------------------------------------
// ✅ Union types in arrays

const languagesAndNumbers: (string | number)[] = []
languagesAndNumbers.push('TypeScript')
languagesAndNumbers.push(27)
// languagesAndNumbers.push(true) // ❌ Error: boolean is not allowed

// --------------------------------------------------------
// ✅ Arrays of custom types

// Define valid stack technologies using a union type
type DevelopStack =
  | 'TypeScript'
  | 'JavaScript'
  | 'React'
  | 'Node.js'
  | 'Express'
  | 'MongoDB'
  | 'PostgreSQL'
  | 'Next.js'
  | 'Tailwind'

// Developer type using that stack
type Developer = {
  name: string
  age: number
  stack: DevelopStack[] // Enforced!
}

// Create developer array
const developers: Developer[] = []

// Push developers with valid stacks
developers.push({
  name: 'Santiago',
  age: 22,
  stack: ['TypeScript', 'React', 'Node.js']
})

developers.push({
  name: 'Kibson',
  age: 25,
  stack: ['JavaScript', 'Express', 'MongoDB']
})

// ❌ This would throw a TypeScript error
// developers.push({
//   name: 'Hector',
//   age: 30,
//   stack: ['Python'] // Error: 'Python' is not assignable to type 'DevelopStack'
// })

// --------------------------------------------------------
// ✅ Matrices and Tuples
// Example: Tic Tac Toe board

/*
Matrix:
[
  ['X', 'O', 'X'],  // Row 1
  ['O', 'X', 'O'],  // Row 2
  ['X', 'O', 'O']   // Row 3
]
*/

type CellValue = 'X' | 'O' | ''

type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', 'O', 'O']
]

// --------------------------------------------------------
// ✅ Tuples in practice (React useState example)

// Example from React:
// type State = [string, (newName: string) => void]
// const [user, setUser]: State = useState('RendonnM')

// In a tuple:
// - order matters
// - type position matters

type RGB = [number, number, number]

const red: RGB = [255, 0, 0]
const green: RGB = [0, 255, 0]

// Keep this file as a module to avoid variable conflicts and allow top-level await
export {}
