import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputEvent, InputProperties } from 'src/app/interfaces/input';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent {
    @Input() properties: InputProperties = {} as InputProperties;
    @Output() onValueChange: EventEmitter<InputEvent> = new EventEmitter();

    public changeValue(name: string, input: HTMLInputElement): void {
        this.onValueChange.next({ name, value: input.value });
    }
}
