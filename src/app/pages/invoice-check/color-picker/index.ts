import { ColorPickerComponent } from './color-picker.component';
import { ColorPickerDirective } from './color-picker.directive';
import { TextDirective, SliderDirective } from './helpers';
import { ColorPickerService } from './color-picker.service';

export const Directives = [ColorPickerDirective, TextDirective, SliderDirective];
export const Components = [ColorPickerComponent]
export const Services = [ColorPickerService]