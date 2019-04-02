import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() title: string;
  @Input() size: 'large' | 'small' | '';
  @Input() show: boolean = false;
  @Input() message: string;
  onApproveFn: () => void;
  onDenyFn: () => void;

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.show = false;
  }

  approve() {
    this.onApproveFn();
    this.close();
  }

  deny() {
    this.onDenyFn();
    this.close();
  }
}
