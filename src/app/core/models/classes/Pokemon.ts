import { Sprites } from "./Sprites";
import { PokemonAbility } from "./PokemonAbility";
import { PokemonType } from "./PokemonType";

export class Pokemon {
    id: number
    name: string
    weight: number
    height: number
    sprites: Sprites
    abilities: PokemonAbility[]
    types: PokemonType[]
    isFavorite: boolean | null
}