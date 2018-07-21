import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl);
  }

  getPokemonById(id: number): Observable<Pokemon> {
    var url = this.pokemonUrl + id.toString();
    return this.http.get<Pokemon>(this.pokemonUrl + id.toString());
  }



}
