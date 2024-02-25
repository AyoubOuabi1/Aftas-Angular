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
import {UnauthorizedComponent} from "./components/unauthorized/unauthorized.component";
import {roleGuard} from "./guard/role-guard.guard";
import {unAuthGuard} from "./guard/auth/un-auth.guard";
import {UserComponent} from "./components/user/user.component";
import {AppComponent} from "./app.component";
import {ActiveComponent} from "./components/active/active.component";

const routes: Routes = [
  {path : "competitions", component: CompetitionComponent , canActivate: [authGuard, roleGuard]},
  {path : "status", component: ActiveComponent, canActivate: [authGuard]},
  {path : "", component: AppComponent, canActivate: [authGuard]},
  {path : "fishs", component: FishComponent, canActivate: [authGuard, roleGuard]},
  {path : "users", component: UserComponent, canActivate: [authGuard, roleGuard]},
  {path : "hunts", component: HuntComponent, canActivate: [authGuard, roleGuard]},
  {path : "members", component: MembersComponent, canActivate: [authGuard, roleGuard]},
  {path : "podium", component: PodiumComponent, canActivate: [authGuard, roleGuard]},
  {path : "participations", component: ParticipationComponent, canActivate: [authGuard, roleGuard]},
  { path: 'unauthorized', component: UnauthorizedComponent, canActivate : [authGuard] },
  {path : "login", component: LoginComponent, canActivate: [unAuthGuard]},
  {path : "register", component: RegisterComponent , canActivate: [unAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
