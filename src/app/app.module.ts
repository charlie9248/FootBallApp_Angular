import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlayersPageComponent } from './components/players-page/players-page.component';
import { AddSquadComponent } from './components/add-squad/add-squad.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddPlayerToSquadComponent } from './components/add-player-to-squad/add-player-to-squad.component';
import { ViewPlayerComponent } from './components/view-player/view-player.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlayersPageComponent,
    AddSquadComponent,
    ProfileComponent,
    AddPlayerToSquadComponent,
    ViewPlayerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
