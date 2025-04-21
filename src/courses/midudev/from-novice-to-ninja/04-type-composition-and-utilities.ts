// 🔁 Optional Properties

type HeroOptional = {
  name: string
  age: number
  isActive?: boolean // optional property
}

function createHeroWithState(name: string, age: number): HeroOptional {
  return {
    name,
    age,
    isActive: true
  }
}

const thorWithState = createHeroWithState('Thor', 1500)
console.log(thorWithState.isActive) // ✅ true

// ---------------------------------------------------
// 🆔 Optional ID + Immutability

type HeroWithId = {
  id?: number
  name: string
  age: number
  isActive?: boolean
}

const thorWithId: HeroWithId = {
  name: 'Thor',
  age: 1500,
  isActive: true
}

// We must check optional values before using them
thorWithId.id?.toString()

// ❌ Mutation (which we may want to avoid)
thorWithId.id = 123456789

// ✅ Make properties readonly
type HeroWithIdReadOnly = {
  readonly id?: number
  name: string
  age: number
  isActive?: boolean
}

// NOTE: readonly in TS throws an error at compile time, but doesn't block mutation at runtime
// You can enforce runtime immutability with Object.freeze

// ---------------------------------------------------
// 🎯 Template Union Types

// What if we want to describe the shape of a UUID string?

type HeroID = `${string}-${string}-${string}-${string}-${string}`

type HeroWithTemplateId = {
  readonly id?: HeroID
  name: string
  age: number
  isActive?: boolean
}

function createHeroWithUID(name: string, age: number): HeroWithTemplateId {
  return {
    id: crypto.randomUUID(), // TS will check that it matches the HeroID pattern
    name,
    age,
    isActive: true
  }
}

const heroWithUID = createHeroWithUID('Thor', 1500)

// Another example: restrict hexadecimal color format

type HexColor = `#${string}`

const color1: HexColor = '#fff' // ✅
// const color2: HexColor = 'fff'  // ❌ Error: must start with #

// ---------------------------------------------------
// 🔀 Union Types

type HeroPowerScale =
  | 'local'
  | 'planetary'
  | 'galactic'
  | 'universal'
  | 'multiversal'
// This restricts a field to a limited set of string values

type HeroWithUnionTypes = {
  readonly id?: HeroID
  name: string
  age: number
  isActive?: boolean
  powerScale?: HeroPowerScale
}

const thorWithPowers: HeroWithUnionTypes = {
  name: 'Thor',
  age: 1500,
  powerScale: 'multiversal' // ✅ Only accepted values are allowed
}

// ---------------------------------------------------
// 🧬 Intersection Types

type HeroBasicInfo = {
  name: string
  age: number
}

type HeroOptionalInfo = {
  readonly id?: HeroID
  isActive?: boolean
  powerScale?: HeroPowerScale
}

// Combining two types into one using '&'
type FullHero = HeroBasicInfo & HeroOptionalInfo

function createFullHero({ name, age }: HeroBasicInfo): FullHero {
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  }
}

const fullThor = createFullHero({ name: 'Thor', age: 1500 })
console.log(fullThor.powerScale) // undefined

// 🧠 Type Indexing
// Extract a specific type from an object type using bracket notation

type HeroProperties = {
  isActive: boolean
  adress: {
    planet: string
    city: string
  }
}

// Extract only the 'adress' part of HeroProperties
const adressHero: HeroProperties['adress'] = {
  city: 'Medellín',
  planet: 'Earth'
}

// ✅ This is useful to avoid repeating nested types manually

// -------------------------------------------------------------
// 🧠 Type from a value using 'typeof'

const adress = {
  planet: 'Earth',
  city: 'Medellín'
}

// We can create a type based on the value using 'typeof'
type Adress = typeof adress

const adressSantiago: Adress = {
  planet: 'Earth',
  city: 'EVG'
}

// ✅ This is powerful when a value becomes a reusable type,
// especially useful for config objects, constants, etc.

// -------------------------------------------------------------
// 🧠 Type from function return using 'ReturnType'

const createAdress = () => {
  return {
    planet: 'Earth',
    city: 'MedaYork'
  }
}

// We can extract the return type of the function
type AdressFromFunction = ReturnType<typeof createAdress>

const anotherAdress: AdressFromFunction = {
  planet: 'Mars',
  city: 'Olympus Mons'
}

// Keep this file as a module to avoid variable conflicts and allow top-level await
export {}
