import { Pipe, PipeTransform } from '@angular/core';
import { IData } from '../mock/data';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  transform(attractions: IData[], type: string): IData[] {
    return type ? attractions.filter((attr: IData) => attr.type === type) : attractions;
  }
}
