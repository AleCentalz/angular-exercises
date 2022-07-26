import { Component, Input } from '@angular/core';
import { Characters } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styles: [`
  mat-card {
    margin-top: 20px;
  }
`
  ]
})
export class CharacterCardComponent {

  @Input() character!: Characters;

}
