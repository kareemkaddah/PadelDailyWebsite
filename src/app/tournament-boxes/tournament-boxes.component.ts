import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-tournament-boxes',
  imports: [],
  templateUrl: './tournament-boxes.component.html',
  styleUrl: './tournament-boxes.component.scss',
})
export class TournamentBoxesComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() selectedImage: string = '';
  @Input() imageDiscription: string = '';
}
