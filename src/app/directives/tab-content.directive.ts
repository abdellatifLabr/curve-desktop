import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[tabContent]'
})
export class TabContentDirective {
  @Input('tabContent') id: string;
  @Input() @HostBinding('class.active') isActive: boolean;

  constructor() { }

}
