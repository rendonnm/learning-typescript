// -----------------------------------------------------------
// 🦸‍♂️ TypeScript Classes + Interfaces + Access Modifiers

import { AvengerContract } from "./types"
// interface AvengerContract {
//   name: string
//   powerScore: number
//   wonBattles: number
//   age: number
//   battle: (enemy: string, win: boolean) => void
// }

// `Avenger` class implements the `AvengerContract` interface
class Avenger implements AvengerContract {
  // Public by default
  readonly name: string
  powerScore: number
  public wonBattles: number = 0
  public age: number = 30

  constructor(name: string, powerScore: number) {
    this.name = name
    this.powerScore = powerScore
  }

  // ✅ Getter: compute a readable string
  get fullName() {
    return `${this.name}, with a power of ${this.powerScore}`
  }

  // ✅ Setter: allows controlled mutation
  set power(newPower: number) {
    if (newPower <= 100) {
      this.powerScore = newPower
    } else {
      throw new Error('Power score cannot be more than 100')
    }
  }

  battle(enemy: string, win: boolean) {
    console.log(`${this.name} battles ${enemy}...`)
    if (win) {
      this.wonBattles++
      console.log(`Victory! Total wins: ${this.wonBattles}`)
    } else {
      console.log('Defeated... 😢')
    }
  }
}

// ✅ Usage
const spiderMan = new Avenger('Spiderman', 85)

spiderMan.battle('Venom', true)
console.log(spiderMan.fullName) // "Spiderman, with a power of 85"

//spiderMan.name = 'Ironman'  // readonly property, cannot reassign

spiderMan.power = 90           // ✅ Using the setter
console.log(spiderMan.fullName)

// -----------------------------------------------------------
// 🧠 Access modifiers summary:
//
// - public    -> visible from anywhere (default)
// - private   -> visible only inside the class
// - protected -> visible in this class and subclasses
// - readonly  -> can only be set once (usually in constructor)
//
// You can also use `#privateField` to make it truly private in runtime (JS 🍦).
//
// -----------------------------------------------------------
// 🧠 Interface vs Class:
//
// - interface defines the *shape* or contract
// - class implements the logic
//
// Use `implements InterfaceName` to enforce that a class matches the expected shape