import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'params'
})
export class ParamsPipe implements PipeTransform {

  transform(x:any, a:any, b:any, c:any, d:any): any {
    return (x * (a+b+c+d));
  }

}


@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(x:any): any {
    return (x*x);
  }

}
