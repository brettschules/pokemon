import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NewModuleModule } from './new-module/new-module.module'

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
    AppRoutingModule,
    NewModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
