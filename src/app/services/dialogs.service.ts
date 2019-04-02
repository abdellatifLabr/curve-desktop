import { 
  Injectable, 
  ComponentFactoryResolver, 
  ApplicationRef, 
  Injector, 
  EmbeddedViewRef, 
  ComponentRef 
} from '@angular/core';
import { DialogComponent } from '../elements/dialog/dialog.component';

interface DialogOptions {
  title: string;
  message: string;
  size: 'large' | 'small';
  onApprove: () => void;
  onDeny: () => void;
}

@Injectable({
  providedIn: 'root'
})
export class DialogsService {
  dialogCompRef: ComponentRef<DialogComponent>;
  dialogDomElement: HTMLElement;

  constructor(
    private componenFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  private appendDialogCompToBody() {
    document.body.appendChild(this.dialogDomElement);
  }

  private removeDialogCompFromBody() {
    this.appRef.detachView(this.dialogCompRef.hostView);
    this.dialogCompRef.destroy();
  }

  private create(options: DialogOptions) {
    const compFactory = this.componenFactoryResolver.resolveComponentFactory(DialogComponent);
    this.dialogCompRef = compFactory.create(this.injector);
    this.dialogCompRef.instance.title = options.title;
    this.dialogCompRef.instance.message = options.message;
    this.dialogCompRef.instance.size = options.size;
    this.dialogCompRef.instance.onApproveFn = () => {
      options.onApprove();
      this.removeDialogCompFromBody();
    };
    this.dialogCompRef.instance.onDenyFn = () => {
      options.onDeny();
      this.removeDialogCompFromBody();
    };
    this.appRef.attachView(this.dialogCompRef.hostView);
    this.dialogDomElement = (this.dialogCompRef.hostView as EmbeddedViewRef<any>).rootNodes[0];
  }

  public open(options: DialogOptions) {
    this.create(options);
    this.appendDialogCompToBody();
  }
}
