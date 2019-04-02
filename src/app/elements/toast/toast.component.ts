import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, AfterViewInit {
  message: string;
  delay: number;
  type: string;
  position: string[];
  hide: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.hide = true;
    }, this.delay);
  }

}
