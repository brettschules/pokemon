import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonInfoComponent } from './pokemon/pokemon-info/pokemon-info.component';

const routes: Routes = [

  {path: '', redirectTo: '/pokemons', pathMatch: 'full'},
  {path: 'pokemons', component: PokemonListComponent},
  {path: 'info/:id', component: PokemonInfoComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
