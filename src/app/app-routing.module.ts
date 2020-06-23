import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersPageComponent } from './components/players-page/players-page.component';
import { AddSquadComponent } from './components/add-squad/add-squad.component';
import { ProfileComponent } from './components/profile/profile.component';





const routes: Routes = [
{path:"" ,  component : PlayersPageComponent },
{path:"addSquadComponent" ,  component : AddSquadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
