import { Component, OnInit, OnDestroy, AfterViewInit,
  ViewChild, HostListener, ViewEncapsulation,
  ElementRef, ChangeDetectorRef } from '@angular/core';

import { detectIE } from './helpers';

import { ColorFormats, Hsla, Hsva, Rgba } from './formats';
import { AlphaChannel, OutputFormat, SliderDimension, SliderPosition } from './helpers';

import { ColorPickerService } from './color-picker.service';

@Component({
  selector: 'color-picker',
  templateUrl: 'color-picker.component.html',
  styleUrls: [ 'color-picker.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class ColorPickerComponent implements OnInit, OnDestroy, AfterViewInit {
  private isIE10: boolean = false;

  private hsva: Hsva | null = null;

  private width: number = 0;
  private height: number = 0;

  private outputColor: string = '';
  private initialColor: string = '';
  private fallbackColor: string = '';

  private listenerResize: any;
  private listenerMouseDown: any;

  private directiveInstance: any;

  private sliderH: number = 0;
  private sliderDimMax: SliderDimension | null = null;
  private directiveElementRef: ElementRef | null = null;

  private dialogArrowSize: number = 10;
  private dialogArrowOffset: number = 15;

  private dialogInputFields: ColorFormats[] = [
    ColorFormats.HEX,
    ColorFormats.RGBA,
    ColorFormats.HSLA
  ];

  private useRootViewContainer: boolean = false;

  public show: boolean = false;
  public hidden: boolean = false;

  public top: number = 0;
  public left: number = 0;
  public position: string = '';

  public format: ColorFormats | null = null;
  public slider: SliderPosition | null = null;

  public hexText: string = '';
  public hexAlpha: number = 0;

  public hslaText: Hsla | null = null;
  public rgbaText: Rgba | null = null;

  public arrowTop: number = 0;

  public selectedColor: string = '';
  public hueSliderColor: string = '';
  public alphaSliderColor: string = '';

  public cpWidth: number = 0;
  public cpHeight: number = 0;

  public cpColorMode: number = 0;

  public cpAlphaChannel: AlphaChannel | null = null;
  public cpOutputFormat: OutputFormat | null = null;

  public cpDisableInput: boolean = false;
  public cpDialogDisplay: string = '';

  public cpIgnoredElements: any;
  public cpSaveClickOutside: boolean = false;

  public cpPosition: string = '';
  public cpPositionOffset: number = 0;

  public cpOKButton: boolean = false;
  public cpOKButtonText: string = '';
  public cpOKButtonClass: string = '';

  public cpCancelButton: boolean = false;
  public cpCancelButtonText: string = '';
  public cpCancelButtonClass: string = '';

  public cpPresetLabel: string = '';
  public cpPresetColors: string[] = [];
  public cpMaxPresetColorsLength: number = 0;

  public cpPresetEmptyMessage: string = '';
  public cpPresetEmptyMessageClass: string = '';

  public cpAddColorButton: boolean = true;
  public cpAddColorButtonText: string = '';
  public cpAddColorButtonClass: string = '';
  public cpRemoveColorButtonClass: string = '';

  @ViewChild('dialogPopup', { static: true }) dialogElement: ElementRef | null = null;

  @ViewChild('hueSlider', { static: true }) hueSlider: ElementRef | null = null;
  @ViewChild('alphaSlider', { static: true }) alphaSlider: ElementRef | null = null;

  @HostListener('document:keyup.esc', ['$event']) handleEsc(event: any): void {
    if (this.show && this.cpDialogDisplay === 'popup') {
      this.onCancelColor(event);
    }
  }

  @HostListener('document:keyup.enter', ['$event']) handleEnter(event: any): void {
    if (this.show && this.cpDialogDisplay === 'popup') {
      this.onAcceptColor(event);
    }
  }

  constructor(private elRef: ElementRef, private cdRef: ChangeDetectorRef, private service: ColorPickerService) {}

  ngOnInit(): void {
    this.slider = new SliderPosition(0, 0, 0, 0);
    if (this.hueSlider != null && this.alphaSlider != null) {
      const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
      const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
  
      this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
    }

    if (this.cpOutputFormat === 'rgba') {
      this.format = ColorFormats.RGBA;
    } else if (this.cpOutputFormat === 'hsla') {
      this.format = ColorFormats.HSLA;
    } else {
      this.format = ColorFormats.HEX;
    }

    this.listenerMouseDown = (event: any) => { this.onMouseDown(event); };
    this.listenerResize = () => { this.onResize(); };

    this.openDialog(this.initialColor, false);
  }

  ngOnDestroy(): void {
    this.closeDialog();
  }

  ngAfterViewInit(): void {
    if (this.cpWidth !== 230 || this.cpDialogDisplay === 'inline') {
      if (this.hueSlider != null && this.alphaSlider != null) {
        const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
        const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
  
        this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
  
        this.updateColorPicker(false);
  
        this.cdRef.detectChanges();
      }
    }
  }

  public openDialog(color: any, emit: boolean = true): void {
    this.service.setActive(this);

    if (!this.width &&  this.directiveElementRef != null) {
      this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
    }

    if (!this.height) {
      this.height = 320;
    }

    this.setInitialColor(color);

    this.setColorFromString(color, emit);

    this.openColorPicker();
  }

  public closeDialog(): void {
    this.closeColorPicker();
  }

  public setupDialog(instance: any, elementRef: ElementRef, color: any,
    cpWidth: string, cpHeight: string, cpDialogDisplay: string, cpFallbackColor: string,
    cpColorMode: string, cpAlphaChannel: AlphaChannel, cpOutputFormat: OutputFormat,
    cpDisableInput: boolean, cpIgnoredElements: any, cpSaveClickOutside: boolean,
    cpUseRootViewContainer: boolean, cpPosition: string, cpPositionOffset: string,
    cpPositionRelativeToArrow: boolean, cpPresetLabel: string, cpPresetColors: string[],
    cpMaxPresetColorsLength: number, cpPresetEmptyMessage: string, cpPresetEmptyMessageClass: string,
    cpOKButton: boolean, cpOKButtonClass: string, cpOKButtonText: string,
    cpCancelButton: boolean, cpCancelButtonClass: string, cpCancelButtonText: string,
    cpAddColorButton: boolean, cpAddColorButtonClass: string, cpAddColorButtonText: string,
    cpRemoveColorButtonClass: string): void
  {
    this.setInitialColor(color);

    this.setColorMode(cpColorMode);

    this.isIE10 = (detectIE() === 10);

    this.directiveInstance = instance;
    this.directiveElementRef = elementRef;

    this.cpDisableInput = cpDisableInput;

    this.cpAlphaChannel = cpAlphaChannel;
    this.cpOutputFormat = cpOutputFormat;
    this.cpDialogDisplay = cpDialogDisplay;

    this.cpIgnoredElements = cpIgnoredElements;
    this.cpSaveClickOutside = cpSaveClickOutside;

    this.useRootViewContainer = cpUseRootViewContainer;

    this.width = this.cpWidth = parseInt(cpWidth, 10);
    this.height = this.cpHeight = parseInt(cpHeight, 10);

    this.cpPosition = cpPosition;
    this.cpPositionOffset = parseInt(cpPositionOffset, 10);

    this.cpOKButton = cpOKButton;
    this.cpOKButtonText = cpOKButtonText;
    this.cpOKButtonClass = cpOKButtonClass;

    this.cpCancelButton = cpCancelButton;
    this.cpCancelButtonText = cpCancelButtonText;
    this.cpCancelButtonClass = cpCancelButtonClass;

    this.fallbackColor = cpFallbackColor || '#fff';

    this.setPresetConfig(cpPresetLabel, cpPresetColors);

    this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
    this.cpPresetEmptyMessage = cpPresetEmptyMessage;
    this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;

    this.cpAddColorButton = cpAddColorButton;
    this.cpAddColorButtonText = cpAddColorButtonText;
    this.cpAddColorButtonClass = cpAddColorButtonClass;
    this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;

    if (!cpPositionRelativeToArrow) {
      this.dialogArrowOffset = 0;
    }

    if (cpDialogDisplay === 'inline') {
      this.dialogArrowSize = 0;
      this.dialogArrowOffset = 0;
    }

    if (cpOutputFormat === 'hex' &&
        cpAlphaChannel !== 'always' && cpAlphaChannel !== 'forced')
    {
      this.cpAlphaChannel = 'disabled';
    }
  }

  public setColorMode(mode: string): void {
    switch (mode.toString().toUpperCase()) {
      case '1':
      case 'C':
      case 'COLOR':
        this.cpColorMode = 1;
        break;
      case '2':
      case 'G':
      case 'GRAYSCALE':
        this.cpColorMode = 2;
        break;
      case '3':
      case 'P':
      case 'PRESETS':
        this.cpColorMode = 3;
        break;
      default:
        this.cpColorMode = 1;
    }
  }

  public setInitialColor(color: any): void {
    this.initialColor = color;
  }

  public setPresetConfig(cpPresetLabel: string, cpPresetColors: string[]): void {
    this.cpPresetLabel = cpPresetLabel;
    this.cpPresetColors = cpPresetColors;
  }

  public setColorFromString(value: string, emit: boolean = true, update: boolean = true): void {
    let hsva: Hsva | null;

    if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'forced') {
      hsva = this.service.stringToHsva(value, true);

      if (!hsva && !this.hsva) {
        hsva = this.service.stringToHsva(value, false);
      }
    } else {
      hsva = this.service.stringToHsva(value, false);
    }

    if (!hsva && !this.hsva) {
      hsva = this.service.stringToHsva(this.fallbackColor, false);
    }

    if (hsva) {
      this.hsva = hsva;

      this.sliderH = this.hsva.h;

      this.updateColorPicker(emit, update);
    }
  }

  public onResize(): void {
    if (this.position === 'fixed') {
      this.setDialogPosition();
    } else if (this.cpDialogDisplay !== 'inline') {
      this.closeColorPicker();
    }
  }

  public onDragEnd(slider: string): void {
    this.directiveInstance.sliderDragEnd({ slider: slider, color: this.outputColor });
  }

  public onDragStart(slider: string): void {
    this.directiveInstance.sliderDragStart({ slider: slider, color: this.outputColor });
  }

  public onMouseDown(event: MouseEvent): void {
    if (this.directiveElementRef != null && !this.isIE10 && this.cpDialogDisplay === 'popup' &&
        event.target !== this.directiveElementRef.nativeElement &&
        !this.isDescendant(this.elRef.nativeElement, event.target) &&
        !this.isDescendant(this.directiveElementRef.nativeElement, event.target) &&
        this.cpIgnoredElements.filter((item: any) => item === event.target).length === 0)
    {
      if (!this.cpSaveClickOutside) {
        this.setColorFromString(this.initialColor, false);

        this.directiveInstance.colorChanged(this.initialColor);
      }

      this.closeColorPicker();
    }
  }

  public onAcceptColor(event: Event): void {
    event.stopPropagation();

    if (this.cpDialogDisplay === 'popup') {
      this.closeColorPicker();
    }

    if (this.outputColor) {
      this.directiveInstance.colorSelected(this.outputColor);
    }
  }

  public onCancelColor(event: Event): void {
    event.stopPropagation();

    this.setColorFromString(this.initialColor, true);

    if (this.cpDialogDisplay === 'popup') {
      this.directiveInstance.colorChanged(this.initialColor, true);

      this.closeColorPicker();
    }

    this.directiveInstance.colorCanceled();
  }

  public onFormatToggle(change: number): void {
    const availableFormats = this.dialogInputFields.length;

    if (this.format != null) {
      const nextFormat = (((this.dialogInputFields.indexOf(this.format) + change) %
        availableFormats) + availableFormats) % availableFormats;
  
      this.format = this.dialogInputFields[nextFormat];
    }
  }

  public onColorChange(value: { s: number, v: number, rgX: number, rgY: number }): void {
    if (this.hsva != null) {
      this.hsva.s = value.s / value.rgX;
      this.hsva.v = value.v / value.rgY;
  
      this.updateColorPicker();
  
      this.directiveInstance.sliderChanged({
        slider: 'lightness',
        value: this.hsva.v,
        color: this.outputColor
      });
  
      this.directiveInstance.sliderChanged({
        slider: 'saturation',
        value: this.hsva.s,
        color: this.outputColor
      });
    }
  }

  public onHueChange(value: { v: number, rgX: number }): void {
    if (this.hsva != null) {
      this.hsva.h = value.v / value.rgX;
      this.sliderH = this.hsva.h;
  
      this.updateColorPicker();
  
      this.directiveInstance.sliderChanged({
        slider: 'hue',
        value: this.hsva.h,
        color: this.outputColor
      });
    }
  }

  public onValueChange(value: { v: number, rgX: number }): void {
    if (this.hsva != null) {
      this.hsva.v = value.v / value.rgX;
  
      this.updateColorPicker();
  
      this.directiveInstance.sliderChanged({
        slider: 'value',
        value: this.hsva.v,
        color: this.outputColor
      });
    }
  }

  public onAlphaChange(value: { v: number, rgX: number }): void {
    if (this.hsva != null) {
      this.hsva.a = value.v / value.rgX;
  
      this.updateColorPicker();
  
      this.directiveInstance.sliderChanged({
        slider: 'alpha',
        value: this.hsva.a,
        color: this.outputColor
      });
    }
  }

  public onHexInput(value: string | null): void {
    if (value === null) {
      this.updateColorPicker();
    } else {
      if (value && value[0] !== '#') {
        value = '#' + value;
      }

      let validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;

      if (this.cpAlphaChannel === 'always') {
        validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
      }

      if (validHex.test(value)) {
        if (value.length < 5) {
          value = '#' + value.substring(1)
            .split('')
            .map(c => c + c)
            .join('');
        }

        if (this.cpAlphaChannel === 'forced' && this.hsva != null) {
          value += Math.round(this.hsva.a * 255).toString(16);
        }

        this.setColorFromString(value, true, false);

        this.directiveInstance.inputChanged({
          input: 'hex',
          value: value,
          color: this.outputColor
        });
      }
    }
  }

  public onRedInput(value: { v: number, rg: number }): void {
    if (this.hsva != null) {
      const rgba = this.service.hsvaToRgba(this.hsva);
  
      rgba.r = value.v / value.rg;
  
      this.hsva = this.service.rgbaToHsva(rgba);
  
      this.sliderH = this.hsva.h;
  
      this.updateColorPicker();
  
      this.directiveInstance.inputChanged({
        input: 'red',
        value: rgba.r,
        color: this.outputColor
      });
    }
  }

  public onBlueInput(value: { v: number, rg: number }): void {
    if (this.hsva != null) {
      const rgba = this.service.hsvaToRgba(this.hsva);
  
      rgba.b = value.v / value.rg;
  
      this.hsva = this.service.rgbaToHsva(rgba);
  
      this.sliderH = this.hsva.h;
  
      this.updateColorPicker();
  
      this.directiveInstance.inputChanged({
        input: 'blue',
        value: rgba.b,
        color: this.outputColor
      });
    }
  }

  public onGreenInput(value: { v: number, rg: number }): void {
    if (this.hsva != null) {
      const rgba = this.service.hsvaToRgba(this.hsva);
  
      rgba.g = value.v / value.rg;
  
      this.hsva = this.service.rgbaToHsva(rgba);
  
      this.sliderH = this.hsva.h;
  
      this.updateColorPicker();
  
      this.directiveInstance.inputChanged({
        input: 'green',
        value: rgba.g,
        color: this.outputColor
      });
    }
  }

  public onHueInput(value: { v: number, rg: number }) {
    if (this.hsva != null) {
      this.hsva.h = value.v / value.rg;
  
      this.sliderH = this.hsva.h;
  
      this.updateColorPicker();
  
      this.directiveInstance.inputChanged({
        input: 'hue',
        value: this.hsva.h,
        color: this.outputColor
      });
    }
  }

  public onValueInput(value: { v: number, rg: number }): void {
    if (this.hsva != null) {
      this.hsva.v = value.v / value.rg;
  
      this.updateColorPicker();
  
      this.directiveInstance.inputChanged({
        input: 'value',
        value: this.hsva.v,
        color: this.outputColor
      });
    }
  }

  public onAlphaInput(value: { v: number, rg: number }): void {
    if (this.hsva != null) {
      this.hsva.a = value.v / value.rg;
  
      this.updateColorPicker();
  
      this.directiveInstance.inputChanged({
        input: 'alpha',
        value: this.hsva.a,
        color: this.outputColor
      });
    }
  }

  public onLightnessInput(value: { v: number, rg: number }): void {
    if (this.hsva != null) {
      const hsla = this.service.hsva2hsla(this.hsva);
  
      hsla.l = value.v / value.rg;
  
      this.hsva = this.service.hsla2hsva(hsla);
  
      this.sliderH = this.hsva.h;
  
      this.updateColorPicker();
  
      this.directiveInstance.inputChanged({
        input: 'lightness',
        value: hsla.l,
        color: this.outputColor
      });
    }
  }

  public onSaturationInput(value: { v: number, rg: number }): void {
    if (this.hsva != null) {
      const hsla = this.service.hsva2hsla(this.hsva);
  
      hsla.s = value.v / value.rg;
  
      this.hsva = this.service.hsla2hsva(hsla);
  
      this.sliderH = this.hsva.h;
  
      this.updateColorPicker();
  
      this.directiveInstance.inputChanged({
        input: 'saturation',
        value: hsla.s,
        color: this.outputColor
      });
    }
  }

  public onAddPresetColor(event: any, value: string): void {
    event.stopPropagation();

    // if (!this.cpPresetColors.filter((color) => (color === value)).length) {
      this.cpPresetColors.push(value);

      this.directiveInstance.presetColorsChanged(this.cpPresetColors);
    // }
  }

  public onRemovePresetColor(event: any, value: string): void {
    event.stopPropagation();

    this.cpPresetColors = this.cpPresetColors.filter((color) => (color !== value));

    this.directiveInstance.presetColorsChanged(this.cpPresetColors);
  }

  // Private helper functions for the color picker dialog status

  private openColorPicker(): void {
    if (!this.show) {
      this.show = true;
      this.hidden = true;

      setTimeout(() => {
        this.hidden = false;

        this.setDialogPosition();

        this.cdRef.detectChanges();
      }, 0);

      this.directiveInstance.stateChanged(true);

      if (!this.isIE10) {
        document.addEventListener('mousedown', this.listenerMouseDown);
      }

      window.addEventListener('resize', this.listenerResize);
    }
  }

  private closeColorPicker(): void {
    if (this.show) {
      this.show = false;

      this.directiveInstance.stateChanged(false);

      if (!this.isIE10) {
        document.removeEventListener('mousedown', this.listenerMouseDown);
      }

      window.removeEventListener('resize', this.listenerResize);

      if (!this.cdRef['destroyed']) {
        this.cdRef.detectChanges();
      }
    }
  }

  private updateColorPicker(emit: boolean = true, update: boolean = true): void {
    if (this.sliderDimMax) {

      const lastOutput = this.outputColor;

      if (this.hsva != null) {
        if (this.cpColorMode === 2) {
          this.hsva.s = 0;
        }

        const hsla = this.service.hsva2hsla(this.hsva);
        const rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));

        const hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));
        this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')';
        this.alphaSliderColor = 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';

        if (update) {
          this.hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100),
            Math.round(hsla.a * 100) / 100);
  
          this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
  
          const allowHex8 = this.cpAlphaChannel === 'always';
  
          this.hexText = this.service.rgbaToHex(rgba, allowHex8);
          this.hexAlpha = this.rgbaText.a;
        }
      }


      if (this.cpOutputFormat === 'auto') {
        if (this.hsva != null && this.hsva.a < 1) {
          this.format = this.hsva.a < 1 ? ColorFormats.RGBA : ColorFormats.HEX;
        }
      }

      if (this.hsva != null) {
        if (this.cpOutputFormat != null && this.cpAlphaChannel != null) {
          this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
        }
        this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', null);

        this.slider = new SliderPosition(
          (this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8,
          this.hsva.s * this.sliderDimMax.s - 8,
          (1 - this.hsva.v) * this.sliderDimMax.v - 8,
          this.hsva.a * this.sliderDimMax.a - 8
        );
      }

      if (emit && lastOutput !== this.outputColor) {
        this.directiveInstance.colorChanged(this.outputColor);
      }
    }
  }

  // Private helper functions for the color picker dialog positioning

  private setDialogPosition(): void {
    if (this.cpDialogDisplay === 'inline') {
      this.position = 'relative';
    } else {
      let position = 'static', transform = '', style;

      let parentNode: any = null, transformNode: any = null;

      let node = this.directiveElementRef?.nativeElement.parentNode;

      const dialogHeight = this.dialogElement?.nativeElement.offsetHeight;

      while (node !== null && node.tagName !== 'HTML') {
        style = window.getComputedStyle(node);
        position = style.getPropertyValue('position');
        transform = style.getPropertyValue('transform');

        if (position !== 'static' && parentNode === null) {
          parentNode = node;
        }

        if (transform && transform !== 'none' && transformNode === null) {
          transformNode = node;
        }

        if (position === 'fixed') {
          parentNode = transformNode;

          break;
        }

        node = node.parentNode;
      }

      const boxDirective = this.createDialogBox(this.directiveElementRef?.nativeElement, (position !== 'fixed'));

      if (this.useRootViewContainer || (position === 'fixed' &&
         (!parentNode || parentNode instanceof HTMLUnknownElement)))
      {
        this.top = boxDirective.top;
        this.left = boxDirective.left;
      } else {
        if (parentNode === null) {
          parentNode = node;
        }

        const boxParent = this.createDialogBox(parentNode, (position !== 'fixed'));

        this.top = boxDirective.top - boxParent.top;
        this.left = boxDirective.left - boxParent.left;
      }

      if (position === 'fixed') {
        this.position = 'fixed';
      }

      if (this.cpPosition === 'left') {
        this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
        this.left -= this.cpWidth + this.dialogArrowSize - 2;
      } else if (this.cpPosition === 'top') {
        this.arrowTop = dialogHeight - 1;

        this.top -= dialogHeight + this.dialogArrowSize;
        this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
      } else if (this.cpPosition === 'bottom') {
        this.top += boxDirective.height + this.dialogArrowSize;
        this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
      } else {
        this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
        this.left += boxDirective.width + this.dialogArrowSize - 2;
      }
    }
  }

  // Private helper functions for the color picker dialog positioning and opening

  private isDescendant(parent: any, child: any): boolean {
    let node: any = child.parentNode;

    while (node !== null) {
      if (node === parent) {
        return true;
      }

      node = node.parentNode;
    }

    return false;
  }

  private createDialogBox(element: any, offset: boolean): any {
    return {
      top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
      left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
}
