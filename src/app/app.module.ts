import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CPFPipe } from './helpers/pipes/cpf.pipe';
import { CellPhonePipe } from './helpers/pipes/cell-phone.pipe';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';

@NgModule({
    declarations: [AppComponent, CPFPipe, CellPhonePipe, InputComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
