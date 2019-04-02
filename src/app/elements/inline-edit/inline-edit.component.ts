import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: InlineEditComponent,
    multi: true
  }]
})
export class InlineEditComponent implements OnInit, ControlValueAccessor {
  value: any;
  onChange: (value) => void;
  onTouched: () => void;
  disabled: boolean;
  @Output() done: EventEmitter<any> = new EventEmitter<any>();
  @Input() type: string;
  editMode: boolean = false;
  @Input() style: {} = {};
  @Input() focusStyle: {} = {};

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: string) {
    this.value = (value) ? value : '';
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }

  onClick(event) {
    event.preventDefault();
  }

  onMouseDown(event) {
    event.preventDefault();
  }

  onDblClick(event) {
    this.editMode = true; 
    event.target.focus();
  }

  onKeyDown(event) {
    if (event.key === "Enter" && this.value.length > 0) {
      this.editMode = false;
      event.target.blur();
      this.done.emit();
    }
  }

  onBlur() {
    this.onTouched();
    this.editMode = false;
  }
}
