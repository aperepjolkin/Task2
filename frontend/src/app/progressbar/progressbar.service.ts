import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable()
export class ProgressBarService {
  
  showSpinner = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  start() {
    this.showSpinner = true;
    this.change.emit(this.showSpinner);
  }

}