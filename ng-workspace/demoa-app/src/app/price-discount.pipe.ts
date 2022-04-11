import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceDiscount'
})
export class PriceDiscountPipe implements PipeTransform {
//it is interface
  transform(value: any, args?: any): any {
    if( args > 0){ return (value -( args * value)) }
    return null;
  }

}
