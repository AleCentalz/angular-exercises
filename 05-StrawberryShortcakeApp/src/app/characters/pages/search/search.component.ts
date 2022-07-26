import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Characters } from '../../interfaces/characters.interface';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  term: string = '';
  characters: Characters[] = [];
  characterSelected!: Characters | undefined;

  constructor(private charService: CharactersService) { }

  ngOnInit(): void {
  }

  searching() {
    this.charService.getSuggestions(this.term.trim())
      .subscribe(characters => this.characters = characters)
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {

    if (!event.option.value) { //if the input is empty...
      console.log("no value");
      this.characterSelected = undefined;
      return;
    }

    const character: Characters = event.option.value;
    this.term = character.name; //make the selected option in the input be shown
    this.charService.getChatacterById(character.id!).subscribe(character => this.characterSelected = character);
  }

}
