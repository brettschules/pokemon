import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';

const routes: Routes = [

  {path: '', redirectTo: '/pokemons', pathMatch: 'full'}
  {path: 'pokemons', component: PokemonListComponent}


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
