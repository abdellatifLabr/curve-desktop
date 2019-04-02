import { Injectable } from '@angular/core';
import * as math from 'mathjs';

@Injectable()
export class DatasetParserService {
  x_values: number[];
  y_values: number[];

  constructor() { }

  parseCurve(dataset) {
    this.x_values = this.parseInput(dataset.input.x);
    this.y_values = this.parseInput(dataset.input.y);
    return {
      x: this.x_values,
      y: this.y_values,
      label: dataset.name,
      visible: dataset.visible,
      color: dataset.color,
      lineStyle: dataset.lineStyle
    };
  }

  parsePointMark(pointMark) {
    pointMark.y = math.eval(pointMark.y, { x: pointMark.x });
    return pointMark;
  }

  parseInput(input) {
    let values = [];
    const range_in = input.split(':');
    const values_in = input.split(',');

    if (range_in.length > 1) {
      const range = range_in.map(val => math.eval(val));
      values = this.getValuesFromRange(range);
    } else if (values_in.length > 1) {
      values_in.forEach(val => values.push(math.eval(val)));
    } else if (input.length > 0) {
      values = this.applyFunction(input);
    }
    return values;
  }

  getValuesFromRange(range: number[]) {
    let values = [];
    let start = range[0];
    let end = range[range.length - 1];
    let step = (range.length == 2) ? 0.1 : range[1];
    for (let i = start; i <= end; i = i + step) {
      values.push(i);
    }
    return values;
  }

  applyFunction(expression: string) {
    let values = this.x_values.map(x => math.eval(expression, { x: x }));
    return values;
  }
}
