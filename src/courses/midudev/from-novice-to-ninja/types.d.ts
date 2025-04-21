export interface AvengerContract {
  name: string
  powerScore: number
  wonBattles: number
  age: number
  battle: (enemy: string, win: boolean) => void
}