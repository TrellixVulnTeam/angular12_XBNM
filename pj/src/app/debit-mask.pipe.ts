import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'debitMask'
})
export class DebitMaskPipe implements PipeTransform {

  transform(cardNumber: any): unknown {
    let c = cardNumber.toString();
    if(c.length == 16){
      let last = c.substr(12,4)
      return 'XXXX XXXX XXXX ' + last;
    } else {
      return cardNumber;
    }
  }
}
