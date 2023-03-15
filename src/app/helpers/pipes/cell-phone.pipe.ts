import { Pipe, PipeTransform } from '@angular/core';
import { cellPhonePattern } from '../patterns/cellPhonePattern';

@Pipe({
    name: 'cellPhone'
})
export class CellPhonePipe implements PipeTransform {
    transform(cellPhone: string): string {
        return cellPhonePattern(cellPhone);
    }
}
