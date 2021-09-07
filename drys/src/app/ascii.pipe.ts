import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ascii'
})
export class AsciiPipe implements PipeTransform {

  transform(value: string): any {
    var res ='';
    for(let i=0;i<value.length;i++){
      res += " " + value.charCodeAt(i).toString();
    }
    return res;
  }

}
