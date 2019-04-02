import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurveUiModule } from './modules/curve-ui/curve-ui.module';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { HttpClientModule } from '@angular/common/http';
import { NgxElectronModule } from 'ngx-electron';

import { ProjectsService } from './services/projects.service';
import { ViewsService } from './services/views.service';
import { DatasetService } from './services/dataset.service';
import { DatasetParserService } from './services/dataset-parser.service';
import { PainterService } from './services/painter.service';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { ControlComponent } from './components/control/control.component';
import { DisplayComponent } from './components/display/display.component';
import { DatasetControlComponent } from './components/dataset-control/dataset-control.component';
import { ModalComponent } from './elements/modal/modal.component';
import { DialogComponent } from './elements/dialog/dialog.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { CollapsableComponent } from './elements/collapsable/collapsable.component';
import { InlineEditComponent } from './elements/inline-edit/inline-edit.component';
import { ToastComponent } from './elements/toast/toast.component';
import { NoUnderscore } from './pipes/no-underscore.pipe';
import { PluralizePipe } from './pipes/pluralize.pipe';

@NgModule({
  entryComponents: [
    DialogComponent,
    ToastComponent
  ],
  declarations: [
    AppComponent,
    SideMenuComponent,
    WorkspaceComponent,
    ControlComponent,
    DisplayComponent,
    DatasetControlComponent,
    ModalComponent,
    DialogComponent,
    DocumentationComponent,
    CollapsableComponent,
    InlineEditComponent,
    ToastComponent,
    NoUnderscore,
    PluralizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CurveUiModule,
    DragAndDropModule,
    HttpClientModule,
    NgxElectronModule
  ],
  providers: [
    ProjectsService,
    ViewsService,
    DatasetService,
    DatasetParserService,
    PainterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
