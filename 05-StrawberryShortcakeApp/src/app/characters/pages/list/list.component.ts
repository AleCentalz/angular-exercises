import { Component, OnInit } from '@angular/core';
import { Characters } from '../../interfaces/characters.interface';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {

  characters: Characters[] = [];

  constructor(private charServices: CharactersService) { }

  ngOnInit(): void {
    this.charServices.getCharacters()
      .subscribe(char => this.characters = char);
  }

}
