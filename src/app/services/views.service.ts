import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { ElectronService } from 'ngx-electron';
import { _View, View } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  constructor(
    private electron: ElectronService
  ) {}

  getViews(projectId: number): Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('fetch-views', projectId);
      this.electron.ipcRenderer.on('views-fetched', (event, views) => {
        res(views);
      });
    });
  }

  getViewById(id: number): Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('fetch-view', id);
      this.electron.ipcRenderer.on('view-fetched', (event, view) => {
        res(view);
      });
    });
  }

  createView(view: _View, createOptions=true): Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('create-view', view, createOptions);
      this.electron.ipcRenderer.on('view-created', (event, view) => {
        res(view);
      });
    });
  }

  deleteView(viewId: number): Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('delete-view', viewId);
      this.electron.ipcRenderer.on('view-deleted', () => {
        res();
      });
    });
  }

  EditView(view: View): Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('update-view', view);
      this.electron.ipcRenderer.on('view-updated', (event, view) => {
        res(view);
      });
    });
  }
}
