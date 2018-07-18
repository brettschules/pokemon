import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';

  getPokemons(): null {
    return this.http.get(this.pokemonUrl);
  }
}
