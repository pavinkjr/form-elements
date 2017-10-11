
import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { DropdownComponent } from './dropdown/dropdown';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { YearSelectorComponent } from './year-selector/year-selector';

@NgModule({
  declarations: [
    DropdownComponent,
    RadioButtonComponent,
    YearSelectorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports: [
    DropdownComponent,
    RadioButtonComponent,
    YearSelectorComponent
  ]
})
export class FormElementsModule{ }
