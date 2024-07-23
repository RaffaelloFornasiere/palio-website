import {Component, Input, input} from '@angular/core';

@Component({
  selector: 'single-leaderboard',
  templateUrl: './single-leaderboard.component.html',
  styleUrl: './single-leaderboard.component.scss'
})
export class SingleLeaderboardComponent {
  @Input() leaderboard:any[] = []

  get sortedTopThreeLeaderboard() {
    return this.leaderboard.sort((a, b) => b.points - a.points)
      .filter((_, i) => i < 3)
  }

}
