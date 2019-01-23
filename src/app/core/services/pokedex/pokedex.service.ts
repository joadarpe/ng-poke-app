import { Injectable } from '@angular/core';
import { Pokedex } from 'pokeapi-js-wrapper'
import { Pokemon } from '../../models/classes/Pokemon';
import { PokemonSpecie } from '../../models/classes/PokemonSpecie';
import { FlavorText } from '../../models/classes/FlavorText';
import { Type } from '../../models/classes/Type';

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

  getPokemonSpecieByName(name: string): Promise<PokemonSpecie> {
    return this._instance.getPokemonSpeciesByName(name)
  }

  getTypeByName(name: string): Promise<Type> {
    return this._instance.getTypeByName(name)
  }

  findTextByLanguage(texts: FlavorText[], ln: string = 'en'): string {
    return texts.find(e => e.language.name === ln).flavor_text
  }
}
