import { Component, Output, EventEmitter } from '@angular/core'
import { WebService} from './web.service'

@Component({
     selector:'messages',
     templateUrl: './messages.component.html'
})
export class MessagesComponent {
 @Output() onGetEvent = new EventEmitter();

  title = 'frontend';
  ratesJSON: string;
  errorMsg: string;
 
  constructor(private webService : WebService ) {}
  

  getRatesData() {
    this.onGetEvent.emit(true);
    this.webService.getMessages().then((data:any)=>{

    //console.log("Promise resolved with: " + JSON.stringify(data));
    this.ratesJSON = JSON.parse(JSON.stringify(data.rates));

    
  }).then(
    ()=> {
      this.onGetEvent.emit(false);
    }
  ).catch((error)=>{
    this.errorMsg = "data loading failed";
    console.log("Promise rejected with " + JSON.stringify(error));
  });
}
    

   
    
}