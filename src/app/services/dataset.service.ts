import { Injectable } from '@angular/core';
import { placeholders } from './placeholders';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  constructor(private electron: ElectronService) {
    this.createTypes();
  }

  async createTypes() {
    await this.createType({
      name: 'CURVE',
      placeholder: JSON.stringify(placeholders.curve)
    });
    await this.createType({
      name: 'POINT_MARK',
      placeholder: JSON.stringify(placeholders.pointMark)
    });
    await this.createType({
      name: 'GRID',
      placeholder: JSON.stringify(placeholders.grid)
    });
  }

  getAllTypes(): Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('fetch-types');
      this.electron.ipcRenderer.on('types-fetched', (event, types) => {
        res(types);
      });
    });
  }

  createType(type): Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('create-type', type);
      this.electron.ipcRenderer.on('type-created', (event, type) => {
        res(type);
      });
    });
  }

  getType(name): Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('fetch-type', name);
      this.electron.ipcRenderer.on('type-fetched', (event, type) => {
        res(type);
      });
    });
  }

  createDataset(dataset): Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('create-dataset', dataset);
      this.electron.ipcRenderer.on('dataset-created', (event, dataset) => {
        res(dataset);
      });
    });
  }

  createDatasets(datasets): Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('create-datasets', datasets);
      this.electron.ipcRenderer.on('datasets-created', (event) => {
        res();
      });
    });
  }

  deleteDataset(id: number): Promise<number> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('delete-dataset', id);
      this.electron.ipcRenderer.on('dataset-deleted', (event) => {
        res(id);
      });
    });
  }

  updateDatasets(datasets: any[]): Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('update-datasets', datasets);
      this.electron.ipcRenderer.on('datasets-updated', (event) => {
        res();
      });
    });
  }
}
