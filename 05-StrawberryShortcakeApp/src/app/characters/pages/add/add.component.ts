import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Characters } from '../../interfaces/characters.interface';
import { CharactersService } from '../../services/characters.service';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
  img{
     width: 100%;
     border-radius: 5px;
  }`]
})
export class AddComponent implements OnInit {

  publishers = [
    {
      id: "American Greetings",
      description: "Amertican - Greetings 1980"
    },
    {
      id: "Bandai",
      description: "Bandai Namco - 2003"
    },
  ]

  character: Characters = {
    name: '',
    publisher: '',
    dessert: '',
    pet: '',
    alt_img: ''
  }

  constructor(private characterService: CharactersService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.characterService.getChatacterById(id))
      )
      .subscribe(character => this.character = character);
  }

  save() {
    if (this.character.name.trim().length === 0) {
      return;
    }
    //add is not the same as save....
    if (this.character.id) {
      //Update 
      this.characterService.updateCharacter(this.character)
        .subscribe(character => {
          this.showSnackBar("Register updated")
        });
    } else {
      //new character
      this.characterService.addCharacter(this.character)
        .subscribe(resp => {
          this.router.navigate(['/characters/edit']);
          this.showSnackBar("Register created");
        });
    }
  }

  delete(){
    const dialog = this.dialog.open(ConfirmComponent, {width: '200px', data: {...this.character}});

    dialog.afterClosed().subscribe(
    (result) => {
      if(result){
        this.characterService.deleteCharacter(this.character.id!).subscribe( resp => {
        this.router.navigate(['/characters/listing']);
        this.showSnackBar("Register deleted")
      });
      }
    }
    )

  }

  showSnackBar( message: string ){
    this.snackBar.open(message, 'ok!', {
      duration: 2500
    });
  }

}
