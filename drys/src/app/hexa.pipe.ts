import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexaaaaaaaa'
})
export class HexaPipe implements PipeTransform {

  constructor(){}
  
  transform(inp: number ): any {
    return inp.toString(16);
  }

}
