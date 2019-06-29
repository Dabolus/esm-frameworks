import 'zone.js';
import { enableProdMode, NgModule, Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// TODO: replace Component, NgModule and Input function calls
// with decorators as soon as they become available in Chrome Canary

const AngularComponent = Component({
  selector: 'angular-component',
  template: '<div>Angular is {{ mood }}!</div>',
})(class {});

Input()(AngularComponent.prototype, 'mood');

const RootComponent = Component({
  selector: 'angular-root',
  template: '<angular-component mood="great"></angular-component>'
})(class {});

const RootModule = NgModule({
  declarations: [
    AngularComponent,
    RootComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [RootComponent],
})(class {})

enableProdMode();

platformBrowserDynamic().bootstrapModule(RootModule);
