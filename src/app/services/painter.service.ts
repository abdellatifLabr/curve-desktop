import { Injectable } from '@angular/core';
import { Curve } from '../interfaces/curve';
import { Options } from '../interfaces/options';
import { PointMark } from '../interfaces/point-mark';
import * as math from 'mathjs';
import { Grid } from '../interfaces/grid';

@Injectable()
export class PainterService {
  context: CanvasRenderingContext2D;
  canvasElement: HTMLCanvasElement;
  curves: any[];
  pointMarks: any[];
  grids: any[];
  options: Options;

  offset: {x: number, y: number};
  drawingDimensions: { width: number, height: number };
  _scale: {x: {from: number, to: number}, y: {from: number, to: number}};
  _padding: {top: number, bottom: number, left: number, right: number};
  _boundaries: {x: {max: number, min: number}, y: {max: number, min: number}};

  constructor() {}

  prepare(
    canvasElement: HTMLCanvasElement, 
    data: { curves: Curve[], pointMarks: PointMark[], grids: Grid[] }, 
    options: any, 
    units: any[]
  ) {
    units.forEach(unit => math.createUnit(unit.name, unit.equiv, { override: true }));
    this.curves = data.curves;
    this.pointMarks = data.pointMarks;
    this.grids = data.grids;
    this.options = options;
    this.canvasElement = canvasElement;
    this.context = this.canvasElement.getContext('2d');
  }

  paint() {
    this._scale = this.getPixelizedScale();
    this._padding = this.getPixelizedPadding();
    this._boundaries = this.calculateBoundaries();
    this.setCanvasDimensions();
    this.offset = this.getOffset();
    this.context.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.setCanvasBackgroundColor();
    this.grids.forEach(grid => this.drawGrid(grid));
    this.drawAxis();
    this.curves.forEach(curve => this.drawCurve(curve));
    this.pointMarks.forEach(mark => this.drawPointMark(mark));
    this.printTitle();
    this.attachLegend();
  }

  attachLegend() {
    if (this.options.legend.show) {
      const x = this.xScale(this.options.legend.position.x);
      const y = this.yScale(this.options.legend.position.y);
      for(let i = 0; i < this.curves.length; i++) {
        const { label, visible, color, lineStyle } = this.curves[i];
        if (visible) {
          this.context.beginPath();
          switch (lineStyle) {
            case 'dashed':
              this.context.setLineDash([5, 2]);
              break;
            case 'dotted':
              this.context.setLineDash([2, 2]);
              break;
            case 'default':
              this.context.setLineDash([]);
              break;
          }
          const padding = 15;
          const fontSize = 11;
          this.context.lineWidth = 0.8;
          this.context.strokeStyle = color;
          this.context.moveTo(x, y + i * padding);
          this.context.lineTo(x + 20, y + i * padding);
          this.context.stroke();
          this.context.beginPath();
          this.context.setLineDash([]);
          this.context.font = `${fontSize}px Helvetica`;
          this.context.fillText(label, x + 25, y + i * padding + fontSize/4);
          this.context.stroke();
        }
      }
    }
  }

  printTitle() {
    if (this.options.view.title.show) {
      this.context.beginPath();
      this.context.setLineDash([0, 0]);
      this.context.lineWidth = 0.6;
      this.context.fillStyle = 'black';
      const title = this.options.view.title.text;
      const fontSize = 14;
      this.context.font = `bold ${fontSize}px Helvetica`;
      const textSize = this.context.measureText(title);
      const x = this.canvasElement.width/2 - textSize.width/2;
      const y = this.drawingDimensions.height + 25 + fontSize/2;
      this.context.fillText(title, x, y);
      this.context.stroke();
    }
  }

  drawGrid(grid) {
    this.context.beginPath();
    this.context.lineWidth = 0.5;
    this.context.strokeStyle = grid.color;
    if (grid.x) {
      let i;
      // right side
      i = 0;
      while (this.xScale(i) + this.offset.x < this.drawingDimensions.width) {
        this.context.moveTo(this.offset.x + this.xScale(i), 0);
        this.context.lineTo(this.offset.x + this.xScale(i), this.drawingDimensions.height);
        i += 1 / grid.unitMultiply;
      }
      // left side
      i = 0;
      while (-this.xScale(i) + this.offset.x > -this.offset.x) {
        this.context.moveTo(this.offset.x - this.xScale(i), 0);
        this.context.lineTo(this.offset.x - this.xScale(i), this.drawingDimensions.height);
        i += 1 / grid.unitMultiply;
      }
    }
    if (grid.y) {
      let i;
      // bottom side
      i = 0;
      while (this.yScale(i) + this.offset.y < this.drawingDimensions.height) {
        this.context.moveTo(0, this.offset.y + this.yScale(i));
        this.context.lineTo(this.drawingDimensions.width, this.offset.y + this.yScale(i));
        i += 1 / grid.unitMultiply;
      }
      // top side
      i = 0;
      while (this.offset.y - this.yScale(i) > 0) {
        this.context.moveTo(0, this.offset.y - this.yScale(i));
        this.context.lineTo(this.drawingDimensions.width, this.offset.y - this.yScale(i));
        i += 1 / grid.unitMultiply;
      }
    }
    this.context.stroke();
  }

  drawAxis() {
    this.context.beginPath();
    this.context.lineWidth = 1.5;
    this.context.strokeStyle = 'black';
    this.context.moveTo(this.offset.x, 0);
    this.context.lineTo(this.offset.x, this.drawingDimensions.height);
    this.context.moveTo(0, this.offset.y);
    this.context.lineTo(this.drawingDimensions.width, this.offset.y);
    this.context.stroke();
  }

  drawCurve({ x, y, visible, label, color, lineStyle }: Curve) {
    this.context.beginPath();
    switch (lineStyle) {
      case 'dashed':
        this.context.setLineDash([5, 2]);
        break;
      case 'dotted':
        this.context.setLineDash([2, 2]);
        break;
      case 'default':
        this.context.setLineDash([]);
        break;
    }
    if (visible) {
      this.context.strokeStyle = color;
      this.context.lineWidth = 0.8;
      const start = {
        x: this.xScale(x[0]) + this.offset.x,
        y: this.yScale(-y[0]) + this.offset.y
      };
      this.context.moveTo(start.x, start.y);
      for (let i = 1; i <= x.length - 1; i++) {
        const _x = this.xScale(x[i]) + this.offset.x;
        const _y = this.yScale(-y[i]) + this.offset.y;
        this.context.lineTo(_x, _y);
      }
      this.context.stroke();
    }
  }

  drawPointMark({ name, visible, x, y, color }: any) {
    if (visible) {
      const _d = 2.5;
      const _x = this.xScale(x) + this.offset.x;
      const _y = this.yScale(-y) + this.offset.y;

      this.context.beginPath();
      this.context.strokeStyle = color;
      this.context.lineWidth = 0.7;
      this.context.setLineDash([5, 3]);
      // x drop
      this.context.moveTo(_x, this.offset.y);
      this.context.lineTo(_x, _y);
      // y drop
      this.context.moveTo(this.offset.x, _y);
      this.context.lineTo(_x, _y);
      this.context.stroke();

      // point
      this.context.beginPath();
      this.context.strokeStyle = color;
      this.context.fillStyle = color;
      this.context.lineWidth = 0.5;
      this.context.setLineDash([]);
      const fontSize = 11;
      this.context.font = `${fontSize}px HelveticafontSize}`;
      const nameWidth = this.context.measureText(name).width;
      let nameX, nameY;
      if (x > 0) {
        nameX = _x - nameWidth - 5;
      } else if (x < 0 ) {
        nameX = _x + 5;
      }
      if (y > 0) {
        nameY = _y - 5
      } else if (y < 0 ) {
        nameY = _y + fontSize + 5;
      }
      this.context.fillText(name, nameX, nameY);
      this.context.arc(_x, _y, _d, 0, 2 * Math.PI);
      this.context.fill();
      this.context.stroke();

      // point name
      this.context.beginPath();
      this.context.setLineDash([0, 0]);
      this.context.lineWidth = 0.6;
      this.context.fillStyle = 'black';
      let numberWidth = this.context.measureText(x.toString()).width;
      let xNumberX, xNumberY, yNumberX, yNumberY;
      xNumberX = _x + 5;
      xNumberY = this.offset.y + fontSize + 5;
      this.context.fillText(x.toString(), xNumberX, xNumberY);
      numberWidth = this.context.measureText(y.toString()).width;
      yNumberX = (x > 0) ? this.offset.x + 5 : this.offset.x - numberWidth - 5;
      yNumberY = _y + 5 + fontSize;
      this.context.fillText(y.toString(), yNumberX, yNumberY);
      this.context.stroke();
    }
  }

  getOffset() {
    const ys = [];
    this.curves.forEach(curve => ys.push(...curve.y));
    this.pointMarks.forEach(mark => ys.push(mark.y));
    const x = -this._boundaries.x.min + this._padding.left;
    const y = -this.yScale(Math.min(...ys.map(y => -y))) + this._padding.top;
    return { x, y };
  }

  getPixelizedScale() {
    const scale = this.options.scale;
    return {
      x: {
        from: this.options.scale.x.from,
        to: this.pixelize(scale.x.to.value, scale.x.to.unit)
      },
      y: {
        from: this.options.scale.y.from,
        to: this.pixelize(scale.y.to.value, scale.y.to.unit)
      }
    };
  }

  getPixelizedPadding() {
    const padding = this.options.padding;
    return {
      top: this.pixelize(padding.top, padding.unit),
      bottom: this.pixelize(padding.bottom, padding.unit),
      left: this.pixelize(padding.left, padding.unit),
      right: this.pixelize(padding.right, padding.unit)
    }
  }

  setCanvasDimensions() {
    const width = this._boundaries.x.max - this._boundaries.x.min + this._padding.right + this._padding.left;
    const height = this._boundaries.y.max - this._boundaries.y.min + this._padding.bottom + this._padding.top;
    this.drawingDimensions = { width: width, height: height };
    this.canvasElement.width = width;
    let titleGap = (this.options.view.title.show) ? 50 : 0;
    this.canvasElement.height = height + titleGap;
  }

  setCanvasBackgroundColor() {
    this.context.beginPath();
    this.context.rect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.context.fillStyle = this.options.background.color;
    this.context.fill();
  }

  xScale(value: number) {
    return value * this._scale.x.to / this._scale.x.from;
  }

  yScale(value: number) {
    return value * this._scale.y.to / this._scale.y.from;
  }

  calculateBoundaries() {
    const xs = [0];
    const ys = [0];
    this.curves.forEach(curve => xs.push(...curve.x));
    this.curves.forEach(curve => ys.push(...curve.y));
    this.pointMarks.forEach(mark => xs.push(mark.x));
    this.pointMarks.forEach(mark => ys.push(mark.y));
    return {
      x: { max: this.xScale(Math.max(...xs)), min: this.xScale(Math.min(...xs)) },
      y: { max: this.yScale(Math.max(...ys)), min: this.yScale(Math.min(...ys)) }
    }
  }

  pixelize(value: number, unit: string) {
    return math.unit(value, unit).toNumber('px');
  }
}
