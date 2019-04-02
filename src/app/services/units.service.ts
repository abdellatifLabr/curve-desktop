import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  constructor(private electron: ElectronService) {
  }

  getUnits(): Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('fetch-units');
      this.electron.ipcRenderer.on('units-fetched', (event, units) => {
        res(units);
      });
    });
  }

  createUnit(unit): Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('create-unit', unit);
      this.electron.ipcRenderer.on('unit-created', (event, unit) => {
        res(unit);
      });
    });
  }
}
