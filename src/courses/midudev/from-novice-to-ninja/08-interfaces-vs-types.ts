// -----------------------------------------------------------
// 👤 INTERFACES

const someUid = crypto.randomUUID()
type Uid = typeof someUid // Alias type for a UUID string

// Basic object contract using an interface
interface Hero {
  id: Uid
  name: string
  age: number
  sayHi: () => void
}

const hero: Hero = {
  id: crypto.randomUUID(),
  name: 'Santiago',
  age: 22,
  sayHi() {
    console.log(`Hello! My name is ${this.name}`)
  }
}

// -----------------------------------------------------------
// 🛒 Product / Cart system with inheritance

interface Product {
  id: number
  name: string
  price: number
  quantity: number
}

// Inherit from Product and add specific field
interface RunningShoe extends Product {
  size: number
}

// Cart content and cart behavior
interface ShoppingCart {
  totalPrice: number
  products: (Product | RunningShoe)[]
}

interface ShoppingCartOps {
  add: (product: Product) => void
  remove: (id: number) => void
  clear: () => void
}

const shoppingCart: ShoppingCart = {
  totalPrice: 750,
  products: [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      quantity: 1
    },
    {
      id: 2,
      name: 'Product 2',
      price: 500,
      quantity: 1
    },
    {
      id: 3,
      name: 'Running Shoe',
      price: 150,
      quantity: 1,
      size: 10 // ➕ Inherited field from RunningShoe
    }
  ]
}

// -----------------------------------------------------------
// 🆚 INTERFACE vs TYPE in TypeScript

// ✅ interface
// - Describes the shape of an object
// - Can be extended with `extends`
// - Can be implemented by classes
// - Can be merged/reopened (useful in declaration merging)

interface Animal {
  name: string
}
interface Animal {
  age: number
}
// This works: Animal now has both name and age

// ✅ type
// - More flexible: can represent primitives, unions, tuples, functions, etc.
type ID = string | number
type Point = [number, number]
type ClickHandler = (event: MouseEvent) => void

type Admin = {
  name: string
  permissions: string[]
}

type SuperAdmin = Admin & {
  level: number
}

//Ok, so interfaces or types?
// 🧠 Recommendation:
// - Use `interface` for object contracts (e.g. API responses, props, models)
// - Use `type` whenever you can, but especially when working with primitives, unions, functions or compound types.
