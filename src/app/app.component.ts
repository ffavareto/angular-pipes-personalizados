import { Component } from '@angular/core';
import { InputEvent, InputProperties } from './interfaces/input';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public cpf: string = '';
    public cellphone: string = '';

    public cpfInputProperties: InputProperties = {
        type: 'text',
        placeholder: 'CPF',
        name: 'cpf',
        maxlength: '11'
    };

    public cellPhoneInputProperties: InputProperties = {
        type: 'text',
        placeholder: 'Celular',
        name: 'cellphone',
        maxlength: '12'
    };

    public setValue($event: InputEvent): void {
        const { name, value } = $event;
        name == 'cpf' ? (this.cpf = value) : (this.cellphone = value);
    }
}
