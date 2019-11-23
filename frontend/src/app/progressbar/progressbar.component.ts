import { Component, OnInit,ViewChild } from '@angular/core';
import { ProgressBarService } from './progressbar.service'

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  showSpinner = false;
 

  constructor() { }
  ngOnInit() {
  }

  onGetEvent() {
    console.log('test2');
      this.showSpinner = false;
   
  }
}
