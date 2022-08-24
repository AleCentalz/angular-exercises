import { Pipe, PipeTransform } from "@angular/core";
import { Characters } from "../interfaces/characters.interface";

@Pipe({
  name: "image",
  pure: false
})
export class ImagePipe implements PipeTransform {
  transform(character: Characters): string {
    if (!character.id && !character.alt_img) {
      return 'assets/no-image.png';
    } else if (character.alt_img) {
      return character.alt_img;
    } else {
      return `assets/characters/${character.id}.png`
    }

  }
}