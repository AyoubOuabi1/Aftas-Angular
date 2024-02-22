import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompetitionComponent} from "./components/competition/competition.component";
import {FishComponent} from "./components/fish/fish.component";
import {HuntComponent} from "./components/hunt/hunt.component";
import {MembersComponent} from "./components/members/members.component";
import {ParticipationComponent} from "./components/participation/participation.component";
import {PodiumComponent} from "./components/podium/podium.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {authGuard} from "./guard/auth/auth.guard";

const routes: Routes = [
  {path : "competitions", component: CompetitionComponent , canActivate: [authGuard]},
  {path : "", component: CompetitionComponent, canActivate: [authGuard]},
  {path : "fishs", component: FishComponent, canActivate: [authGuard]},
  {path : "hunts", component: HuntComponent, canActivate: [authGuard]},
  {path : "members", component: MembersComponent, canActivate: [authGuard]},
  {path : "podium", component: PodiumComponent, canActivate: [authGuard]},
  {path : "participations", component: ParticipationComponent, canActivate: [authGuard]},
  {path : "login", component: LoginComponent},
  {path : "register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
