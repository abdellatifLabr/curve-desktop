import { Component, OnInit } from '@angular/core';
import { ImportedDataset, View, Curve, PointMark, Grid } from '../../interfaces';
import { Options } from 'src/app/interfaces/options';
import { DatasetParserService, UnitsService } from '../../services';
import * as _ from 'lodash';

@Component({
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  view: View;
  options: Options;
  data: { curves: Curve[], pointMarks: PointMark[], grids: Grid[] } = { curves: [], pointMarks: [], grids: [] };
  expandedView: boolean = false;

  constructor(
    private dsParser: DatasetParserService,
    private unitsProvider: UnitsService
  ) { }

  ngOnInit() {
    this.unitsProvider.createUnit({
      name: 'px',
      equiv: '0.02636 cm'
    });
  }

  onDatasets(datasets: ImportedDataset[]) {
    const curves = datasets.filter(ds => ds.type == 'CURVE').map(ds => ds.data);
    const pointMarks = datasets.filter(ds => ds.type == 'POINT_MARK').map(ds => ds.data);
    const grids = datasets.filter(ds => ds.type == 'GRID').map(ds => ds.data);
    this.data = {
      curves: curves.map(curve => this.dsParser.parseCurve(curve)),
      pointMarks: pointMarks.map(pm => this.dsParser.parsePointMark(pm)),
      grids: grids
    };
  }

  onOptions(options: Options) {
    this.options = options;
  }

  onViewSet(view: View) {
    this.view = view;
  }
}
