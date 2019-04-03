import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, SimpleChanges, AfterViewInit } from '@angular/core';
import { Options } from 'src/app/interfaces/options';
import { PainterService, UnitsService } from '../../services';
import { Unit } from 'src/app/interfaces/unit';
import * as _ from 'lodash';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, AfterViewInit {
  @ViewChild('mainCanvas') mainCanvas: ElementRef;
  @Output() expand: EventEmitter<boolean> = new EventEmitter<boolean>();
  mainCanvasElement: HTMLCanvasElement;
  @Input() data: { curves: any[], pointMarks: any[], grids: any[] };
  @Input() options: Options;
  units: Unit[] = [];
  position: { x: number, y: number };
  zoom: { value: number, unit: number, max: number, min: number };
  expandedView: boolean = false;
  downloadModal: boolean = false;
  keyBindings: { key: string, ctrl: boolean, action: () => void }[];
  states: {[key: string]: { cursor: string }};
  state: string = 'default';
  indicator: { pos: { x: number, y: number }, data: { prop: string, val: string }[] } = { pos: { x: 0, y: 0 }, data: [] };
  isMouseInCanvas: boolean = false;

  constructor(
    private painter: PainterService, 
    private unitsProvider: UnitsService
  ) {}

  ngOnInit() {
    this.states = {
      'default': {
        cursor: 'crosshair'
      },
      'move': {
        cursor: 'move'
      }
    };
    this.keyBindings = [
      {
        key: '+',
        ctrl: false,
        action: () => this.zoomIn()
      },
      {
        key: '-',
        ctrl: false,
        action: () => this.zoomOut()
      },
      {
        key: '0',
        ctrl: false,
        action: () => this.resetZoom()
      }
    ];
    document.addEventListener('keyup', event => {
      event.preventDefault();
      if (!(document.activeElement instanceof HTMLInputElement)) {
        const binding = _.find(this.keyBindings, kbd => kbd.key == event.key && kbd.ctrl == event.ctrlKey);
        if (binding) {
          binding.action();
        }
      }
    });
    this.zoom = { value: 1, unit: 0.25, max: 5, min: 0.25 }
    this.position = { x: 0, y: 0 };
    this.loadUnits();
  }

  loadUnits() {
    this.unitsProvider.getUnits()
      .then(units => {
        this.units = units.map(unit => unit.dataValues);
      })
      .catch(console.log);
  }

  ngAfterViewInit() {
    this.mainCanvasElement = this.mainCanvas.nativeElement;
    this.mainCanvasElement.scrollIntoView({ block: 'end' });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.Draw();
  }

  Draw() {
    if (this.mainCanvasElement) {
      this.painter.prepare(this.mainCanvasElement, this.data, this.options, this.units);
      this.painter.paint();
    }
  }

  zoomIn() {
    if (this.zoom.value <= this.zoom.max) {
      this.zoom.value += this.zoom.unit;
    }
  }

  zoomOut() {
    if (this.zoom.value >= this.zoom.min) {
      this.zoom.value -= this.zoom.unit;
    }
  }

  resetZoom() {
    this.zoom.value = 1;
  }

  onDragEnd(event) {
    this.position.x += event.x / this.zoom.value;
    this.position.y += event.y / this.zoom.value;
  }

  toggleExpand() {
    this.expandedView = !this.expandedView;
    this.expand.emit(this.expandedView);
  }

  onDownload() {
    const lnk = document.createElement('a');
    lnk.download = `view.jpg`;
    lnk.href = this.mainCanvasElement.toDataURL('image/png;base64');
    lnk.click();
    this.downloadModal = false;
  }

  setState(state: string) {
    this.state = state;
  }
  
  onMouseMovingInsideCanvas(event: MouseEvent) {
    this.isMouseInCanvas = true;
    const px_x = (event.layerX - this.painter.offset.x - this.position.x);
    const px_y = -(event.layerY - this.painter.offset.y - this.position.y);
    const x = (px_x * this.options.scale.x.from / this.painter._scale.x.to).toFixed(1);
    const y = (px_y * this.options.scale.y.from / this.painter._scale.y.to).toFixed(1);
    this.indicator = {
      pos: {
        x: event.clientX + 5,
        y: event.clientY + 5
      },
      data: [
        {
          prop: 'x',
          val: x.toString()
        },
        {
          prop: 'y',
          val: y.toString()
        }
      ]
    };
  }

  onMouseLeftCanvas() {
    this.isMouseInCanvas = false;
  }
}
