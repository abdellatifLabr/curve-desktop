import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ColorPickerComponent } from '../../elements/color-picker/color-picker.component';
import { TabsetComponent } from '../../elements/tabset/tabset.component';

import { TabHeaderDirective } from '../../directives/tab-header.directive';
import { TabContentDirective } from '../../directives/tab-content.directive';

import { TabsService } from '../../services/tabs.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ColorPickerComponent,
    TabsetComponent,
    TabHeaderDirective,
    TabContentDirective
  ],
  exports: [
    ColorPickerComponent,
    TabsetComponent,
    TabHeaderDirective,
    TabContentDirective
  ],
  providers: [
    TabsService
  ]
})
export class CurveUiModule { }
