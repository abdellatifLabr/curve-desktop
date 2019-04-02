import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() size: 'large' | 'small' | '';
  @Input() show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.show = false;
  }
}
