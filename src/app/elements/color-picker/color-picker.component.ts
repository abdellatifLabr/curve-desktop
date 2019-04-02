import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { colors } from '../../store/colors';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ColorPickerComponent,
    multi: true
  }]
})
export class ColorPickerComponent implements OnInit, ControlValueAccessor {
  @Input('label') label: string;
  @Input('no-label') noLabel: boolean;
  value: string = "#000000";
  disabled: boolean;
  onChange: (value) => void;
  onTouched: () => void;
  colors: any[];
  showColors: boolean = false;
  position: { x: number, y: number };

  constructor() { }

  ngOnInit() {
    this.colors = colors;
  }

  writeValue(value: string) {
    this.value = (this.disabled) ? '#ffffff' : value;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
