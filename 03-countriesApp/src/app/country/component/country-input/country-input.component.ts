import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html'
})
export class CountryInputComponent implements OnInit {

  term: string = "";
  debounce: Subject<string> = new Subject();
  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); //se emite cuando la persona deje de escribir

  constructor() { }

  ngOnInit() {
    this.debounce.pipe(debounceTime(300)).subscribe(value => {
      this.onDebounce.emit(value);
      console.log('debouncer: ', value);
    });
  }

  search() { //emite el valor que al escucharse en el padre, hace la funcion search
    this.onEnter.emit(this.term);
  }

  keyPress() {
    this.debounce.next(this.term);
  }

}
