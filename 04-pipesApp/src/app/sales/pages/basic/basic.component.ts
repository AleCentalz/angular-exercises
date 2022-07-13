import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {

  nameLower: string = 'alejandra';
  nameUpper: string = 'ALEJANDRA';
  nameComplete: string = 'AlejAndrA CenTeno'

  date: Date = new Date(); //today's day
}
