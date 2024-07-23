import {Component, Input, input, Pipe} from '@angular/core';
import {Leaderboard} from "../leaderboard";
import {pipe} from "rxjs";


@Pipe(
  {
    standalone: true,
    name: "decorateParticipants"
  }
)
export class DecorateParticipantsPipe{
  transform(participants: {player: string, points: number}[]){
    return participants.map((participant, index) => {
      return {
        ...participant,
        rank: index + 1
      }
    });
  }
}



@Component({
  selector: 'single-leaderboard',
  templateUrl: './single-leaderboard.component.html',
  styleUrl: './single-leaderboard.component.scss'
})
export class SingleLeaderboardComponent {
  @Input() leaderboard!:Leaderboard



}

