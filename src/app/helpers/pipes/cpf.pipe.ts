import { Pipe, PipeTransform } from '@angular/core';
import { cpfPattern } from '../patterns/cpfPattern';

@Pipe({
    name: 'CPF'
})
export class CPFPipe implements PipeTransform {
    transform(CPF: string): string {
        return cpfPattern(CPF);
    }
}
