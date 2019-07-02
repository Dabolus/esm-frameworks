import 'zone.js';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RootModule } from './root.module.js';

enableProdMode();

platformBrowserDynamic().bootstrapModule(RootModule);

// TODO: replace Component, NgModule and Input function calls
// with decorators as soon as they become available in Chrome Canary
