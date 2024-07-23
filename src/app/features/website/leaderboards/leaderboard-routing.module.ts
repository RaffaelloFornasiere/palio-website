import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {GamesComponent} from "../games/games.component";
import {LeaderboardsComponent} from "./leaderboards.component";
import {CalendarComponent} from "../calendar/calendar.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: LeaderboardsComponent,
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class LeaderboardRoutingModule{}
