import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  pokemons: Pokemon[];

  getPokemons(): void {
    this.pokemons = this.pokemonService.getPokemons()
    .subscribe(data => {
      this.pokemons = data.results;
      console.log(data.results, 'pokemons fetched')
    });
  }


    selectedPokemon(pokemon: Pokemon): void {
      console.log(pokemon, 'pokemon Selected!')
    }

  ngOnInit() {
    this.getPokemons();
  }

}
