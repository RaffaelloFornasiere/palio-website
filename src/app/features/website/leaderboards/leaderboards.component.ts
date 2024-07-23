import {Component, OnInit} from '@angular/core';
import * as scores from './scores.json';
import {Leaderboard} from "./leaderboard";





@Component({
  selector: 'app-leaderboard',

  templateUrl: './leaderboards.component.html',
  styleUrl: './leaderboards.component.scss'
})
export class LeaderboardsComponent implements OnInit{

  ngOnInit(): void {
  }



  tab = 'global'


  protected readonly scores = scores;
  protected readonly Leaderboard = Leaderboard;
}

