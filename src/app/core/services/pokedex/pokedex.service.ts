import { Injectable } from '@angular/core';
import { Pokedex } from 'pokeapi-js-wrapper'
import { Pokemon } from '../../models/classes/Pokemon';
import { PokemonSpecies } from '../../models/classes/PokemonSpecies';
import { FlavorText } from '../../models/classes/FlavorText';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private _instance: Pokedex

  constructor() {
    const options = {
      protocol: 'https',
      hostName: 'pokeapi.co',
      versionPath: '/api/v2/',
      cache: true,
      timeout: 5 * 1000 // 5s
    }
    this._instance = new Pokedex(options)
  }

  getPokemonByName(name: string): Promise<Pokemon> {
    return this._instance.getPokemonByName(name)
  }

  getPokemonSpeciesByName(name: string): Promise<PokemonSpecies> {
    return this._instance.getPokemonSpeciesByName(name)
  }

  findTextByLanguage(texts: FlavorText[], ln: string = 'en'): string {
    return texts.find(e => e.language.name === ln).flavor_text
  }
}
