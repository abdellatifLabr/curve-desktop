import { Injectable, QueryList } from '@angular/core';
import { TabContentDirective } from '../directives/tab-content.directive';
import { TabHeaderDirective } from '../directives/tab-header.directive';

interface Tabset {
  id: string;
  headers: QueryList<TabHeaderDirective>;
  contents: QueryList<TabContentDirective>;
  activeTab: TabContentDirective;
}

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  tabsets: Tabset[] = [];

  constructor() { }

  registerTabset(tabset) {
    this.tabsets.push(tabset);
  }

  setActive(id: string, target: string) {
    const tabset = this.tabsets.find(tabset => tabset.id == id);
    tabset.contents.forEach(content => {
      if (content.id == target) {
        content.isActive = true;
      } else {
        content.isActive = false;
      }
    });
    tabset.headers.filter(header => header.target != target)
      .forEach(header => header.isActive = false);
  }
}
