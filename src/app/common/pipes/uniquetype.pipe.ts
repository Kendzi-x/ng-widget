import { Pipe, PipeTransform } from '@angular/core';
import { IData } from '../mock/data';

@Pipe({
  name: 'uniquetype'
})
export class UniquetypePipe implements PipeTransform {
  transform(attractions: IData[]): string[] {
    const types: string[] = attractions.map(attr => attr.type);
    return Array.from(new Set(types));
  }
}
