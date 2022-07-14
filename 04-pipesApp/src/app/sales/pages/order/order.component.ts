import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  uppercase: boolean = true;
  orderBy: string = '';
  heros: Hero[] = [
    {
      name: 'superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'spiderman',
      fly: false,
      color: Color.red
    },
    {
      name: 'ironman',
      fly: true,
      color: Color.red
    },
  ]

  changeStatus() {
    this.uppercase = !this.uppercase;
    console.log(this.uppercase);
  }

  changeOrder(value: string) { //change the order of the table by the button beign pressed
    this.orderBy = value;
  }

}
