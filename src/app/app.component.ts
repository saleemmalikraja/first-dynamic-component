import {
  Component,
  ComponentFactory,
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { AlertComponent } from './alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'first-dynamic-component';

  @ViewChild('alertContainer', { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) { }

  createComponent(type) {
    this.container.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(
      AlertComponent
    );

    this.componentRef = this.container.createComponent(factory);

    this.componentRef.instance.type = type;

    this.componentRef.instance.output.subscribe(event => console.log(event));
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
