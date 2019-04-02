import { Directive, Input, HostListener, HostBinding } from '@angular/core';
import { TabsService } from '../services/tabs.service';

@Directive({
  selector: '[tabHeader]'
})
export class TabHeaderDirective {
  id: string;
  @Input('tabHeader') target: string;
  @Input() @HostBinding('class.active') isActive: boolean;

  constructor(private tabsCtrl: TabsService) { }

  @HostListener('click') onClick() {
    this.isActive = true;
    this.tabsCtrl.setActive(this.id, this.target);
  }
}
