import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { View } from '../../interfaces/view';
import { ViewsService } from '../../services/views.service';
import { OptionsService } from '../../services/options.service';
import { DatasetService } from '../../services/dataset.service';
import { ProjectsService } from '../../services/projects.service';
import * as _ from 'lodash';
import { DialogsService } from '../../services/dialogs.service';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  project: any;
  projects: any[] = [];
  @Output() view: EventEmitter<View> = new EventEmitter<View>();
  views: View[] = [];
  newView: any = { projectId: 0, name: '' };
  activeView: View;
  types: any[] = [];
  newProjectModal: boolean = false;
  newProject: any = { title: '', createdIn: '' };

  constructor(
    private viewsProvider: ViewsService,
    private dialogsctrl: DialogsService,
    private optionsProvider: OptionsService,
    private dsProvider: DatasetService,
    private projectsProvider: ProjectsService,
    private dialogsCtrl: DialogsService
  ) { }

  ngOnInit() {
    this.projectsProvider.getAllProjects()
      .then(projects => {
        if (projects.length > 0) {
          this.projects = projects.map(project => project.dataValues);
          this.project = this.projects[0];
          this.loadViews();
        }
      });
    this.loadTypes();
  }

  loadViews() {
    if (this.project) {
      this.viewsProvider.getViews(this.project.id)
        .then(views => {
          this.views = views.map(view => view.dataValues);
          if (views.length > 0) {
            this.setActiveView(this.views[0]);
          } else {
            this.setActiveView(null);
          }
        })
        .catch(console.log);
    } else {
      this.views = [];
    }
  }

  createNewProject() {
    this.projectsProvider.createProject(this.newProject)
      .then(project => {
        this.projects.unshift(project.dataValues);
        this.newProject.title = '';
        this.setActiveProject(this.projects[0]);
        this.toggleNewProjectModal();
      })
      .catch(console.log);
  }

  loadTypes() {
    this.dsProvider.getAllTypes()
      .then(types => {
        this.types = types.map(type => type.dataValues);
      })
      .catch(console.log);
  }

  toggleNewProjectModal() {
    this.newProjectModal = !this.newProjectModal;
  }

  createView() {
    this.newView.projectId = this.project.id;
    this.viewsProvider.createView(this.newView)
      .then(newView => {
        const view = newView.dataValues;
        this.views.push(view);
        this.setActiveView(view);
        this.newView = { projectId: 0, name: '' };
      })
      .catch(console.log);
  }

  setActiveView(view: View) {
    this.activeView = view;
    this.view.emit(view);
  }

  setActiveProject(project) {
    this.project = project;
    this.loadViews();
  }

  editView(view: View) {
    this.viewsProvider.EditView(view)
      .then(newView => {
        const i = _.findIndex(this.views, { id: newView.id });
        this.views.splice(i, 1, newView);
        this.setActiveView(newView);
      })
      .catch(console.log);
  }

  deleteView(id: number) {
    this.viewsProvider.deleteView(id)
      .then(() => {
        _.remove(this.views, view => view.id === id);
        if (this.views[0]) {
          this.setActiveView(this.views[0]);
        } else {
          this.setActiveView(null);
        }
      })
      .catch(console.log);
  }

  onViewDelete(view: View) {
    this.dialogsctrl.open({
      title: 'Delete View',
      message: `Are you sure you want to delete '${view.name}'?`,
      size: 'small',
      onApprove: () => this.deleteView(view.id),
      onDeny: () => {}
    });
  }

  isActiveView(view) {
    return this.activeView == view;
  }

  isActiveProject(project) {
    return this.project == project;
  }

  onProjectDelete(project) {
    this.dialogsCtrl.open({
      title: 'Delete Project',
      message: `Are you sure you want to delete '${project.title}'?`,
      size: 'small',
      onApprove: () => this.deleteProject(project.id),
      onDeny: () => {}
    });
  }

  deleteProject(id: number) {
    this.projectsProvider.deleteProject(id)
      .then(() => {
        _.remove(this.projects, project => project.id === id);
        if (this.projects[0]) {
          this.setActiveProject(this.projects[0]);
        } else {
          this.setActiveProject(null);
        }
      })
      .catch(console.log);
  }

  editProject(project) {
    this.projectsProvider.EditProject(project)
      .then(newProject => {
        const i = _.findIndex(this.projects, { id: project.id });
        this.projects.splice(i, 1, newProject);
        this.setActiveProject(newProject);
      })
      .catch(console.log);
  }

  exportProject(project) {
    this.buildProjectJSON(project)
      .then(json => {
        const lnk = document.createElement('a');
        lnk.download = `${project.title}.project.crv`;
        lnk.href = `data:text/json;charset=utf-8,${json}`;
        lnk.click();
      });
  }

  buildProjectJSON(project): Promise<string> {
    return new Promise((res, rej) => {
      this.projectsProvider.getProjectById(project.id, true)
        .then(project => {
          const views = project.views.map(view => {
            const datasets = view.datasets.map(ds => {
              return {
                type: ds.type.dataValues.name,
                data: JSON.parse(ds.dataValues.json)
              };
            });
            const options = JSON.parse(view.option.dataValues.json);
            return {
              name: view.dataValues.name,
              datasets: datasets,
              options: options
            };
          });
          const json = JSON.stringify({ title: project.dataValues.title, views });
          res(json);
        })
        .catch(rej);
    });
  }

  onProjectImport(event) {
    this.readImportdProject(event.target.files[0])
      .then(i_project => {
        return this.createProjectFromFileData(i_project)
      })
      .then(project => {
        this.projects.unshift(project);
      })
      .catch(console.log);
  }

  readImportdProject(file): Promise<any> {
    return new Promise((res, rej) => {
      const fileReader = new FileReader();
      fileReader.onloadend = e => {
        res(JSON.parse(fileReader.result.toString()));
      };
      fileReader.onerror = e => rej(e);
      fileReader.readAsText(file);
    });
  }

  createProjectFromFileData(i_project): Promise<any> {
    return new Promise((res, rej) => {
      this.projectsProvider.createProject(i_project)
        .then(newProject => {
          this.setActiveProject(newProject.dataValues);
          // create observable from views
          const views$ = from(i_project.views);
          views$.subscribe(
            view => this.createViewFromFileData(view),
            err => {},
            () => res(newProject.dataValues) // complete
          );
        })
        .catch(rej);
    });
  }

  exportView(view) {
    this.viewsProvider.getViewById(view.id)
      .then(view => {
        const datasets = view.datasets.map(ds => {
          return {
            type: ds.type.dataValues.name,
            data: JSON.parse(ds.dataValues.json)
          };
        });
        const options = JSON.parse(view.option.dataValues.json);
        const e_view = {
          name: view.dataValues.name,
          datasets: datasets,
          options: options
        };
        const json = JSON.stringify(e_view);
        const lnk = document.createElement('a');
        lnk.download = `${e_view.name}.view.crv`;
        lnk.href = `data:text/json;charset=utf-8,${json}`;
        lnk.click();
      })
      .catch(console.log);
  }

  onImportView(event) {
    this.readImportdView(event.target.files[0])
      .then(i_view => {
        return this.createViewFromFileData(i_view);
      })
      .then(view => {
        this.views.push(view);
        this.setActiveView(view);
      })
      .catch(console.log);
  }

  createViewFromFileData(i_view): Promise<any> {
    return new Promise((res, rej) => {
      let view;
      this.viewsProvider.createView({ projectId: this.project.id, name: i_view.name }, false)
        .then(newView => {
          view = newView;
          const options = { viewId: newView.dataValues.id, json: JSON.stringify(i_view.options) };
          return this.optionsProvider.createOptions(options);
        })
        .then(newOptions => {
          const datasets = i_view.datasets.map(ds => {
            return {
              viewId: newOptions.viewId,
              typeId: this.types.find(type => type.name == ds.type).id,
              json: JSON.stringify(ds.data)
            };
          });
          return this.dsProvider.createDatasets(datasets);
        })
        .then(() => {
          res(view.dataValues);
        })
        .catch(rej);
    });
  }

  readImportdView(file): Promise<any> {
    return new Promise((res, rej) => {
      const fileReader = new FileReader();
      fileReader.onloadend = e => {
        res(JSON.parse(fileReader.result.toString()));
      };
      fileReader.onerror = e => rej(e);
      fileReader.readAsText(file);
    });
  }
}
