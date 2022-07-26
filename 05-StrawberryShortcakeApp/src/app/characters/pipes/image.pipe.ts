import { Pipe, PipeTransform } from "@angular/core";
import { Characters } from "../interfaces/characters.interface";

@Pipe({
  name: "image"
})
export class ImagePipe implements PipeTransform {
  transform(character: Characters): string {
    return 'assets/characters/' + character.id + '.png'
  }
}