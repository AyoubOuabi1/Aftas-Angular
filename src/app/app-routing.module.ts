import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompetitionComponent} from "./components/competition/competition.component";
import {FishComponent} from "./components/fish/fish.component";
import {HuntComponent} from "./components/hunt/hunt.component";
import {MembersComponent} from "./components/members/members.component";
import {RankComponent} from "./components/rank/rank.component";

const routes: Routes = [
  {path : "competitions", component: CompetitionComponent},
  {path : "fishs", component: FishComponent},
  {path : "hunts", component: HuntComponent},
  {path : "members", component: MembersComponent},
  {path : "ranks", component: RankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
