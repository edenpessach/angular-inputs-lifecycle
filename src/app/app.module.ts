import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { InputsComponent } from './inputs/inputs.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ContainerComponent, InputsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
