import { Sprites } from "./Sprites";
import { PokemonAbility } from "./PokemonAbility";

export class Pokemon {
    id: number
    name: string
    weight: number
    height: number
    sprites: Sprites
    abilities: PokemonAbility[]
}