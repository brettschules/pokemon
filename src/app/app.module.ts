import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { PokemonInfoComponent } from './pokemon/pokemon-info/pokemon-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    NavbarComponent,
    PokemonInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
