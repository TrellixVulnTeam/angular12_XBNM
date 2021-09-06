import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'params'
})
export class ParamsPipe implements PipeTransform {

  transform(value: any, p1:any, p2:any, p3:any,p4:any): unknown {
    return (value *(p1+p2+p3+p4));
  }

}
