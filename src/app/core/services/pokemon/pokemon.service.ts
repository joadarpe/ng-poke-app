import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { NamedAPIResource } from '../../models/classes/NamedAPIResource';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonsUrl: string = 'api/pokemons'

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<NamedAPIResource[]> {
    return this.http.get<NamedAPIResource[]>(this.pokemonsUrl)
      .pipe(
        tap(_ => console.log('Obtiene los pokemons')),
        catchError(this.handleError('getPokemons', []))
      )
  }

  getPokemon(name: string): Observable<NamedAPIResource> {
    return this.http.get<NamedAPIResource>(`${this.pokemonsUrl}/?name=${name}`)
      .pipe(
        tap(_ => console.log(`Obtiene pokemon name=${name}`)),
        catchError(this.handleError<NamedAPIResource>(`getPokemon name=${name}`))
      )
  }

  /** POST: crear un pokemon en el servidor */
  addPokemon(pokemon: NamedAPIResource): Observable<NamedAPIResource> {
    return this.http.post<NamedAPIResource>(this.pokemonsUrl, pokemon, httpOptions)
      .pipe(
        tap((p: NamedAPIResource) => console.log(`Crea un pokemon w/ name=${p.name}`)),
        catchError(this.handleError<NamedAPIResource>('addPokemon'))
      )
  }

  /** DELETE: eliminar un pokemon en el servidor */
  deletePokemon(pokemon: NamedAPIResource | string): Observable<NamedAPIResource> {
    const name = typeof pokemon === 'string' ? pokemon : pokemon.name;
    const url = `${this.pokemonsUrl}/?name${name}`;
    return this.http.delete<NamedAPIResource>(url, httpOptions)
      .pipe(
        tap(_ => console.log(`Elimina el pokemon name=${name}`)),
        catchError(this.handleError<NamedAPIResource>('deletePokemon'))
      )
  }

  /**   
   * Handle Http operation that failed.   
   * Let the app continue.   
   * @param operation - name of the operation that failed   
   * @param result - optional value to return as the observable result   
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {      // TODO: send the error to remote logging infrastructure      
      console.error(error); // log to console instead      
      // Let the app keep running by returning an empty result.      
      return of(result as T);
    };
  }

}
