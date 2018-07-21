import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pokemonService: PokemonService
  ) { }

  pokemon: Pokemon;
  name = 'pokemon';
  isEditing = false;

  getPokemonById() :void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonById(id)
      .subscribe(data => {
        this.pokemon = data;
        console.log(this.pokemon, 'pokemons fetched')
      });
  }

  open(name: string) :void {
    if(name = this.name) {
      this.isEditing = true;
      console.log(this.isEditing)
    }
  }

  ngOnInit() {
    this.getPokemonById()
  }

}
