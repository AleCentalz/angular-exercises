import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Characters } from '../../interfaces/characters.interface';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styles: [`
    img{
      width:100%;
      border-radius: 5px;
  }`

  ]
})
export class CharacterComponent implements OnInit {

  character!: Characters;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private charservice: CharactersService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.charservice.getChatacterById(id))
      )
      .subscribe(character => this.character = character); //mostrar en consola el id del character
  }

  back() {
    this.router.navigate(['characters/listing']);
  }

}
