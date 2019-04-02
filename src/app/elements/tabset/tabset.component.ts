import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { TabHeaderDirective } from 'src/app/directives/tab-header.directive';
import { TabContentDirective } from 'src/app/directives/tab-content.directive';
import { TabsService } from '../../services/tabs.service';
import * as crypto from 'crypto-js';

@Component({
  selector: 'tabset',
  template: `
    <div class="tabset">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./tabset.component.css']
})
export class TabsetComponent implements OnInit {
  @ContentChildren(TabHeaderDirective) tabHeaders: QueryList<TabHeaderDirective>;
  @ContentChildren(TabContentDirective) tabContents: QueryList<TabContentDirective>;
  id: string;

  constructor(private tabsCtrl: TabsService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.id = this.randomID();
    this.tabHeaders.forEach(tabHeader => tabHeader.id = this.id);
    this.tabsCtrl.registerTabset({
      id: this.id,
      headers: this.tabHeaders,
      contents: this.tabContents
    });
    this.tabHeaders.forEach(tabHeader => {
      if (tabHeader.isActive) {
        this.tabsCtrl.setActive(this.id, tabHeader.target);
      }
    });
  }

  randomID() {
    return crypto.lib.WordArray.random(10).toString();
  }
}
