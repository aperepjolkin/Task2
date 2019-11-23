import { Component, ViewChild } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';


@Component({
  selector: 'app-root',
  template:  `<messages (onGetEvent)="onGetEvent($event)"></messages>
  <app-progressbar></app-progressbar>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  
  @ViewChild(ProgressbarComponent, {static:false}) spinner: ProgressbarComponent
  onGetEvent(status) {
    this.spinner.showSpinner = status;
    console.log(status);
  }
  }
