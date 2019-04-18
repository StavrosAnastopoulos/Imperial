import { Directive, OnChanges, OnDestroy, Input, Output, EventEmitter,
  HostListener, ApplicationRef, ComponentRef, ElementRef, ViewContainerRef,
  Injector, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';

import { ColorPickerService } from './color-picker.service';
import { ColorPickerComponent } from './color-picker.component';

import { AlphaChannel, ColorMode, OutputFormat } from './helpers';

@Directive({
  selector: '[colorPicker]',
  exportAs: 'ngxColorPicker'
})
export class ColorPickerDirective implements OnChanges, OnDestroy {
  private dialog: any;

  private dialogCreated = false;
  private ignoreChanges = false;

  private cmpRef: ComponentRef<ColorPickerComponent>;

  @Input() colorPicker = '#fff';

  @Input() cpWidth = '230px';
  @Input() cpHeight = 'auto';

  @Input() cpToggle = false;
  @Input() cpDisabled = false;

  @Input() cpIgnoredElements: any = [];

  @Input() cpFallbackColor = '';

  @Input() cpColorMode: ColorMode = 'color';

  @Input() cpOutputFormat: OutputFormat = 'auto';
  @Input() cpAlphaChannel: AlphaChannel = 'enabled';

  @Input() cpDisableInput = false;

  @Input() cpDialogDisplay = 'popup';

  @Input() cpSaveClickOutside = true;

  @Input() cpUseRootViewContainer = false;

  @Input() cpPosition = 'right';
  @Input() cpPositionOffset = '0%';
  @Input() cpPositionRelativeToArrow = false;

  @Input() cpOKButton = false;
  @Input() cpOKButtonText = 'OK';
  @Input() cpOKButtonClass = 'cp-ok-button-class';

  @Input() cpCancelButton = false;
  @Input() cpCancelButtonText = 'Cancel';
  @Input() cpCancelButtonClass = 'cp-cancel-button-class';

  @Input() cpPresetLabel = 'Preset colors';
  @Input() cpPresetColors: string[] = ['#000', '#f00', '#ff0', '#0f0', '#0ff', '#00f'];
  @Input() cpMaxPresetColorsLength = 6;

  @Input() cpPresetEmptyMessage = 'No colors added';
  @Input() cpPresetEmptyMessageClass = 'preset-empty-message';

  @Input() cpAddColorButton = false;
  @Input() cpAddColorButtonText = 'Add color';
  @Input() cpAddColorButtonClass = 'cp-add-color-button-class';

  @Input() cpRemoveColorButtonClass = 'cp-remove-color-button-class';

  @Output() cpInputChange = new EventEmitter<any>(true);

  @Output() cpToggleChange = new EventEmitter<boolean>(true);

  @Output() cpSliderChange = new EventEmitter<any>(true);
  @Output() cpSliderDragEnd = new EventEmitter<string>(true);
  @Output() cpSliderDragStart = new EventEmitter<string>(true);

  @Output() colorPickerOpen = new EventEmitter<string>(true);
  @Output() colorPickerClose = new EventEmitter<string>(true);

  @Output() colorPickerCancel = new EventEmitter<string>(true);
  @Output() colorPickerSelect = new EventEmitter<string>(true);
  @Output() colorPickerChange = new EventEmitter<string>(false);

  @Output() cpPresetColorsChange = new EventEmitter<any>(true);

  @HostListener('click') handleClick(): void {
    this.inputFocus();
  }

  @HostListener('focus') handleFocus(): void {
    this.inputFocus();
  }

  @HostListener('input', ['$event']) handleInput(event: any): void {
    this.inputChange(event);
  }

  constructor(private injector: Injector, private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef, private vcRef: ViewContainerRef, private elRef: ElementRef,
    private _service: ColorPickerService) {}

  ngOnDestroy(): void {
    if (this.cmpRef !== undefined) {
      this.cmpRef.destroy();
    }
  }

  ngOnChanges(changes: any): void {
    if (changes.cpToggle && !this.cpDisabled) {
      if (changes.cpToggle.currentValue) {
        this.openDialog();
      } else if (!changes.cpToggle.currentValue) {
        this.closeDialog();
      }
    }

    if (changes.colorPicker) {
      if (this.dialog && !this.ignoreChanges) {
        if (this.cpDialogDisplay === 'inline') {
          this.dialog.setInitialColor(changes.colorPicker.currentValue);
        }

        this.dialog.setColorFromString(changes.colorPicker.currentValue, false);

        if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
          this.cmpRef.changeDetectorRef.detectChanges();
        }
      }

      this.ignoreChanges = false;
    }

    if (changes.cpPresetLabel || changes.cpPresetColors) {
      if (this.dialog) {
        this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
      }
    }
  }

  public openDialog(): void {
    if (!this.dialogCreated) {
      let vcRef = this.vcRef;

      this.dialogCreated = true;

      if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
        const classOfRootComponent = this.appRef.componentTypes[0];
        const appInstance = this.injector.get(classOfRootComponent);

        vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;

        if (vcRef === this.vcRef) {
          console.warn('You are using cpUseRootViewContainer, ' +
            'but the root component is not exposing viewContainerRef!' +
            'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.');
        }
      }

      const compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
      const injector = ReflectiveInjector.fromResolvedProviders([], vcRef.parentInjector);

      this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);

      this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker,
        this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor,
        this.cpColorMode, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput,
        this.cpIgnoredElements, this.cpSaveClickOutside, this.cpUseRootViewContainer,
        this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow,
        this.cpPresetLabel, this.cpPresetColors, this.cpMaxPresetColorsLength,
        this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass,
        this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText,
        this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText,
        this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText,
        this.cpRemoveColorButtonClass);

      this.dialog = this.cmpRef.instance;

      if (this.vcRef !== vcRef) {
        this.cmpRef.changeDetectorRef.detectChanges();
      }
    } else if (this.dialog) {
      this.dialog.openDialog(this.colorPicker);
    }
  }

  public closeDialog(): void {
    if (this.dialog && this.cpDialogDisplay === 'popup') {
      this.dialog.closeDialog();
    }
  }

  public stateChanged(state: boolean): void {
    this.cpToggleChange.emit(state);

    if (state) {
      this.colorPickerOpen.emit(this.colorPicker);
    } else {
      this.colorPickerClose.emit(this.colorPicker);
    }
  }

  public colorChanged(value: string, ignore: boolean = true): void {
    this.ignoreChanges = ignore;

    this.colorPickerChange.emit(value);
  }

  public colorCanceled(): void {
    this.colorPickerCancel.emit();
  }

  public colorSelected(value: string): void {
    this.colorPickerSelect.emit(value);
  }

  public inputFocus(): void {
    const element = this.elRef.nativeElement;

    const ignored = this.cpIgnoredElements.filter((item: any) => item === element);

    if (!this.cpDisabled && !ignored.length) {
      if (typeof document !== 'undefined' && element === document.activeElement) {
        this.openDialog();
      } else if (!this.dialog || !this.dialog.show) {
        this.openDialog();
      } else {
        this.closeDialog();
      }
    }
  }

  public inputChange(event: any): void {
    if (this.dialog) {
      this.dialog.setColorFromString(event.target.value, true);
    } else {
      this.colorPicker = event.target.value;

      this.colorPickerChange.emit(this.colorPicker);
    }
  }

  public inputChanged(event: any): void {
    this.cpInputChange.emit(event);
  }

  public sliderChanged(event: any): void {
    this.cpSliderChange.emit(event);
  }

  public sliderDragEnd(event: any): void {
    this.cpSliderDragEnd.emit(event);
  }

  public sliderDragStart(event: any): void {
    this.cpSliderDragStart.emit(event);
  }

  public presetColorsChanged(value: any[]): void {
    this.cpPresetColorsChange.emit(value);
  }
}
