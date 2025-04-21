// Narrowing
interface Mario {
  company: 'Nintendo'
  name: 'Mario'
  jump: () => void
}

interface Sonic {
  company: 'Sega'
  name: 'Sonic'
  run: () => void
}

type Character = Mario | Sonic

function play(character: Character) {
  if (character.company === 'Nintendo') {
    character.jump() // --> Now the jump method is avaiable, we are playing with Mario
    return
  }
  character.run() // --> But in this case TypeScript knows thar we are playing with Sonic
}

//This works but what if we dont hace that company trick? Well we can do this...
// Type Guard!

// We can do a function thar returns if the character is Mario or Sonic!
const checkIsSonic = (character: Character): character is Sonic => {
  return (character as Sonic).run !== undefined
}

function play2(character: Character) {
  if (!checkIsSonic(character)) {
    character.jump() // --> Mario!
    return
  }
  character.run() // --> Sonic!
}

//But remember we dont need to do this everytime, only when is needed

//Never example

function fn(x: string | number) {
  if (typeof x === 'string') {
    x.split('')
    return
  } else if (typeof x === 'number') {
    x.toFixed(3)
    return
  }
  x // this x is type never because...
}
