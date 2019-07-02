import { Component, Input } from '@angular/core';

export const AngularComponent = Component({
  selector: 'angular-component',
  template: '<div>Angular is {{ mood }}!</div>',
})(class {});

Input()(AngularComponent.prototype, 'mood');
