import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  pokemons: null;

  getPokemons(): void {
    this.pokemons = this.pokemonService.getPokemons()
    .subscribe(data =>  this.pokemons = data.results)
  }

  ngOnInit() {
    this.getPokemons();
  }

}