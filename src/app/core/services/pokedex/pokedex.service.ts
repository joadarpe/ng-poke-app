import { Injectable } from '@angular/core';
import { Pokedex } from 'pokeapi-js-wrapper'
import { Pokemon } from '../../models/classes/Pokemon';

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

  async getPokemonByName(name: string): Promise<Pokemon> {
    return this._instance.getPokemonByName(name)
  }
}
