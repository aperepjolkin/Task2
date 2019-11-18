import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs';

@Injectable()
export class WebService {
    rates: any = [];
    constructor(private http: HttpClient) {

    }

    getMessages() {
      // return this.http.get('http://localhost:44321/api/messages').toPromise();
       return this.http.get('https://api.exchangeratesapi.io/latest').toPromise();
    }


}