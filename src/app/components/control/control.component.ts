import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { DatasetService, OptionsService, UnitsService, ViewsService, DialogsService } from '../../services';
import { Dataset, _Dataset } from '../../interfaces/dataset';
import { View, Type } from '../../interfaces';
import { Options, _Options } from 'src/app/interfaces/options';
import * as _ from 'lodash';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit, OnChanges {
  @Output('datasets') datasetsEmitter: EventEmitter<Dataset[]> = new EventEmitter<Dataset[]>();
  @Output('options') optionsEmitter: EventEmitter<Options> = new EventEmitter<Options>();
  @Input() view: View;
  types: Type[] = [];
  datasets: any[] = [];
  filter: string = '*';
  options: any;
  _options: any;
  units: string[];
  minimizeDatasetsCtrl: boolean = false;
  keyBindings: { key: string, ctrl: boolean, action: () => void }[];
  isChanges: boolean = false;
  firstChange: boolean = true;
  helpModal: boolean;

  constructor(
    private dsProvider: DatasetService, 
    private optionsProvider: OptionsService,
    private unitsProvider: UnitsService,
    private viewsProvider: ViewsService,
    private dialogCtrl: DialogsService
  ) {}

  ngOnInit() {
    this.keyBindings = [
      {
        key: 's',
        ctrl: true,
        action: () => this.saveChanges()
      }
    ];
    document.addEventListener('keydown', event => {
      if (event.key === 's' && event.ctrlKey) {
        event.preventDefault();
      }
      const binding = _.find(this.keyBindings, kbd => kbd.key === event.key && kbd.ctrl === event.ctrlKey);
      if (binding) {
        binding.action();
      }
    });
    this.loadUnits();
    this.loadTypes();
  }

  loadUnits() {
    this.unitsProvider.getUnits()
      .then(units => {
        const predefinedUnits = ['cm', 'mm'];
        const newUnits = units.map(unit => unit.dataValues);
        this.units = [...predefinedUnits, ...newUnits];
      })
      .catch(console.log);
  }

  ngOnChanges(changes) {
    this.firstChange = true;
    if (changes.view.currentValue) {
      this.loadView();
      this.loadTypes();
      this.loadUnits();
    }
  }

  loadView() {
    this.viewsProvider.getViewById(this.view.id)
      .then(view => {
        this.datasets = view.dataValues.datasets.map(ds => {
          return {
            id: ds.dataValues.id,
            viewId: ds.dataValues.viewId,
            type: ds.dataValues.type.dataValues.name,
            data: JSON.parse(ds.dataValues.json)
          };
        });
        this.options = JSON.parse(view.option.dataValues.json);
        this._options = view.option.dataValues;
        if (this.options.view.title.text.length === 0) {
          this.options.view.title.text = this.view.name;
        }
        this.draw();
      })
      .catch(console.log);
  }

  refresh() {
    this.loadView();
  }

  draw() {
    if (!this.firstChange) {
      this.isChanges = true;
    }
    this.datasetsEmitter.emit(this.datasets);
    this.optionsEmitter.emit(this.options);
    this.firstChange = false;
  }

  loadTypes() {
    this.dsProvider.getAllTypes()
      .then(types => {
        this.types = types.map(type => type.dataValues);
      })
      .catch(console.log);
  }

  createNewDataset(typeId) {
    const type = this.types.find(type => type.id == typeId);
    const dataset = {
      viewId: this.view.id,
      typeId,
      json: type.placeholder
    };
    this.dsProvider.createDataset(dataset)
      .then(dataset => {
        this.datasets.unshift({
          id: dataset.dataValues.id,
          viewId: dataset.dataValues.viewId,
          data: JSON.parse(dataset.dataValues.json),
          type: type.name
        });
      })
      .catch(console.log);
  }

  deleteDataset(dataset) {
    this.dsProvider.deleteDataset(dataset.id)
      .then(id => {
        _.remove(this.datasets, ds => ds.id === id);
      })
      .catch(console.log);
  }

  saveChanges() {
    const newDatasets = this.datasets.map(dataset => {
      return {
        id: dataset.id,
        viewId: this.view.id,
        typeId: this.types.find(type => type.name == dataset.type).id,
        json: JSON.stringify(dataset.data)
      };
    });
    this.dsProvider.updateDatasets(newDatasets)
      .then(() => this.isChanges = false); 

    const newOptions = {
      id: this._options.id, 
      viewId: this.view.id, 
      json: JSON.stringify(this.options)
    };
    this.optionsProvider.updateOptions(newOptions);
  }

  onDatasetDelete(dataset) {
    this.dialogCtrl.open({
      title: 'Delete Dataset',
      message: `Are you sure you want to delete '${dataset.data.name}'?`,
      size: 'small',
      onApprove: () => this.deleteDataset(dataset),
      onDeny: () => {}
    });
  }

  setFilter(type: string) {
    this.filter = type;
  }

  filterCheck(dataset) {
    if (this.filter == '*') {
      return true;
    } else {
      return (dataset.type == this.filter) ? true : false;
    }
  }
}
