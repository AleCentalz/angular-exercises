import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-non-commons',
  templateUrl: './non-commons.component.html',
  styleUrls: ['./non-commons.component.css']
})
export class NonCommonsComponent {
  //i18nSelect
  name: string = "Alejandra";
  gender: string = "female";
  //map
  invitationMap = {
    'male': 'compañero',
    'female': 'compañera'
  }

  changeGender() {
    this.name = "Fernando";
    this.gender = "male";
  }

  //i18nPlura
  customers: string[] = ['Edgar', 'Gorge', 'Chucho', 'Luis', 'Sofia', 'Maria', 'Gloria'];
  //map
  customersMap = {
    '=0': 'zero customers waiting.',
    '=1': '1 customer waiting',
    'other': '# customers waiting'
  }

  deleteCustomer() {
    this.customers.pop();
  }


  //KeuValuePipe
  person = {
    name: 'Ale',
    age: 23,
    hometown: 'Mexico'
  }

  //JSON pipe
  heros = [
    {
      name: 'Superman',
      fly: true
    },
    {
      name: 'Ironman',
      fly: true
    },
    {
      name: 'Batman',
      fly: false
    }
  ];

  //Async Pipe
  myObservable = interval(3000); //un observable que emite valores numericos del 0-1000
  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('We have data of the promise');
    }, 3000);
  });

}
