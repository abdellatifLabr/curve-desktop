import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef
} from '@angular/core';
import { ToastComponent } from '../elements/toast/toast.component';

interface ToastOptions {
  message: string;
  position: string[];
  delay: number;
  type: 'primary' | 'success' | 'danger';
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastCompRef: ComponentRef<ToastComponent>;
  toastDomElement: HTMLElement;

  constructor(
    private componenFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  private appendToastCompToBody() {
    document.body.appendChild(this.toastDomElement);
  }

  private removeToastCompFromBody() {
    this.appRef.detachView(this.toastCompRef.hostView);
    this.toastCompRef.destroy();
  }

  private create(options: ToastOptions) {
    const compFactory = this.componenFactoryResolver.resolveComponentFactory(ToastComponent);
    this.toastCompRef = compFactory.create(this.injector);
    this.toastCompRef.instance.message = options.message;
    this.toastCompRef.instance.delay = options.delay;
    this.toastCompRef.instance.type = options.type;
    this.toastCompRef.instance.position = options.position;
    this.appRef.attachView(this.toastCompRef.hostView);
    this.toastDomElement = (this.toastCompRef.hostView as EmbeddedViewRef<any>).rootNodes[0];
  }

  public show(options: ToastOptions) {
    this.create(options);
    this.appendToastCompToBody();
    setTimeout(() => {
      this.removeToastCompFromBody();
    }, options.delay + 1000);
  }
}
