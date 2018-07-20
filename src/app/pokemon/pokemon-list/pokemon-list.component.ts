import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(private pokemonService: PokemonService, private router: Router) { }

  pokemons: Pokemon[];

  getPokemons(): void {
    this.pokemons = this.pokemonService.getPokemons()
    .subscribe(data => {
      this.pokemons = data.results;
    });
  }

  navigateToPokemon(pokemon: Pokemon): void {
    var id = parseInt(pokemon.url.slice(34, 35), 10);
    this.router.navigate(['/info', id]);
  }

  ngOnInit() {
    this.getPokemons();
  }

}
