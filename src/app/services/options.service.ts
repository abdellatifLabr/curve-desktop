import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  constructor(private electron: ElectronService) {}

  updateOptions(options): Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('update-options', options);
      this.electron.ipcRenderer.on('options-updated', (event) => {
        res();
      });
    });
  }

  createOptions(options): Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('create-options', options);
      this.electron.ipcRenderer.on('options-created', (event, newOptions) => {
        res(newOptions);
      });
    });
  }
}
