import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'myUppercase' //nombre obligatorio
})
export class UppercasePipe implements PipeTransform {

  transform(args: string, status: boolean = true): string {
    //se inicializa status como true para que sea un balor opcional
    return (status) ? args.toUpperCase() : args.toLowerCase();
  }
}

