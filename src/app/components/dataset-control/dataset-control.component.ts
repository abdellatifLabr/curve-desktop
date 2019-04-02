import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'dataset-control',
  templateUrl: './dataset-control.component.html',
  styleUrls: ['./dataset-control.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DatasetControlComponent,
    multi: true
  }]
})
export class DatasetControlComponent implements OnInit, ControlValueAccessor {
  @Input() minimized: boolean = false;
  value: any;
  onChange: () => void;
  onTouched: () => void;
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.value);
  }

  writeValue(value: string) {
    this.value = (value) ? value : { input: {} };
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
