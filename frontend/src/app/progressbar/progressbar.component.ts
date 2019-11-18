import { Component, OnInit, Output, HostListener, EventEmitter } from '@angular/core';
import { ProgressBarService } from './progressbar.service'

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {
  showSpinner = false;
  constructor( private progressBarService: ProgressBarService) { }
  ngOnInit() {
  }

  @HostListener('click')
  start() {
    this.progressBarService.change.subscribe(showSpinner => {
      this.showSpinner = true;
    });
  }
}
