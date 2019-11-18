import { Component, Input,HostListener } from '@angular/core'
import { WebService} from './web.service'
import { ProgressBarService } from './progressbar/progressbar.service'

@Component({
     selector:'messages',
     templateUrl: './messages.component.html'
})
export class MessagesComponent {


  title = 'frontend';
  ratesJSON: string;
  errorMsg: string;
 
  constructor(private webService : WebService,private progressBarService: ProgressBarService ) {}
  @HostListener('click')
  run() {
    this.progressBarService.showSpinner = true;
  }
  getRatesData() {
    
    this.webService.getMessages().then((data:any)=>{

    //console.log("Promise resolved with: " + JSON.stringify(data));
    this.ratesJSON = JSON.parse(JSON.stringify(data.rates));

    
  }).catch((error)=>{
    this.errorMsg = "data loading failed";
    console.log("Promise rejected with " + JSON.stringify(error));
  });
}
    

   
    
}