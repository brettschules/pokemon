import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  pokemon: Pokemon;

  getPokemonById() :void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("retrived " + id);
  }

  ngOnInit() {
    this.getPokemonById()
  }

}
