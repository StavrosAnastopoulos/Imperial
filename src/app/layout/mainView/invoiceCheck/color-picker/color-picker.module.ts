import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextDirective, SliderDirective } from './helpers';

import { ColorPickerService } from './color-picker.service';
import { ColorPickerComponent } from './color-picker.component';
import { ColorPickerDirective } from './color-picker.directive';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [ CommonModule, MatIconModule ],
  exports: [ ColorPickerDirective, MatIconModule ],
  providers: [ ColorPickerService ],
  declarations: [ ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective ],
  entryComponents: [ ColorPickerComponent ]
})
export class ColorPickerModule {}
