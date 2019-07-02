import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root.component.js';
import { AngularComponent } from './angular.component.js';

export const RootModule = NgModule({
  declarations: [
    RootComponent,
    AngularComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [RootComponent],
})(class {})
