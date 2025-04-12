import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LowerTabComponent } from './lower-tab/lower-tab.component';
import { TournamentBoxesComponent } from './tournament-boxes/tournament-boxes.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LowerTabComponent, TournamentBoxesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'padelDailyWebsite';
}
