import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WebService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class WebService {
  static get parameters(){
    return [[Http]]
  }  

  constructor(http) {

    this.http = http;
    this.apiurl="http://117.218.255.244:5000/api/feed/getfeed";
    this.data = null;
  }

  retrieveData(dataObj) {

    return new Promise(resolve => {

      this.http.post(this.apiurl,dataObj, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        .map(res => res.json())
        .subscribe(data => {
          
          this.data = data;
          resolve(this.data);

        },error => {
            console.log("Oooops!");
        });

    });
  }
}

