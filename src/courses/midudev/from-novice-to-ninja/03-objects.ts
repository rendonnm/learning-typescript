// 🧱 Working with objects

const hero = {
  name: 'Thor',
  age: 1500
}

// ❌ Property 'power' does not exist on type...
// hero.power = 100

// ---------------------------------------------------
// ✅ Function returning an object

function createHero(name: string, age: number) {
  return {
    name,
    age
  }
}

const thor = createHero('Thor', 1500)

// Is the type of `thor` the same as the `hero` object above? 🤔
// Yes, it's structurally compatible, but we haven't formalized the type

// ---------------------------------------------------
// ✅ Using Type Aliases (PascalCase by convention)

type Hero = {
  name: string
  age: number
}

// We can now reuse this type

const heroWithType: Hero = {
  name: 'Thor',
  age: 1500
}

function createHeroWithType(name: string, age: number): Hero {
  return {
    name,
    age
  }
}

const thorWithType = createHeroWithType('Thor', 1500)

// This ensures consistency across your app 💪
// Keep this file as a module to avoid variable conflicts and allow top-level await
export {}
