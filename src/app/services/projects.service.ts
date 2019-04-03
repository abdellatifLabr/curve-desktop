import { Injectable } from '@angular/core';
import { Project, _Project } from '../interfaces/project';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private electron: ElectronService
  ) {}

  getAllProjects(): Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('fetch-projects');
      this.electron.ipcRenderer.on('projects-fetched', (event, args) => {
        res(args);
      });
    });
  }

  createProject(project: _Project): Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('create-project', project);
      this.electron.ipcRenderer.on('project-created', (event, project) => {
        res(project);
      });
    });
  }

  deleteProject(projectId: number): Promise<number> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('delete-project', projectId);
      this.electron.ipcRenderer.on('project-deleted', (event) => {
        res();
      });
    });
  }

  EditProject(project: Project): Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('update-project', project);
      this.electron.ipcRenderer.on('project-updated', (event, newProject) => {
        res(newProject);
      });
    });
  }

  getProjectById(id: number, includes=false) : Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('fetch-project', id, includes);
      this.electron.ipcRenderer.on('project-fetched', (event, project) => {
        res(project);
      });
    });
  }

  searchProjects(term: string): Promise<any> {
    return new Promise((res, rej) => {
      this.electron.ipcRenderer.send('search-projects', term);
      this.electron.ipcRenderer.on('projects-searched', (event, projects) => {
        res(projects);
      });
    });
  }
}
