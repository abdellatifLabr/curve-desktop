import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.scss']
})
export class CollapsableComponent implements OnInit {
  @Input() title: string;
  @Input() collapsed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

}
