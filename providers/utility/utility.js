import {Injectable} from '@angular/core';


/*
  Generated class for the Utility provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Utility {
 

  constructor() {
    
    
  }

  param(dataObj) {

          var returnString = '';

            for (var d in dataObj) {
                if (dataObj.hasOwnProperty(d))
                  returnString += d + '=' + dataObj[d] + '&';
            }

          return returnString.slice(0, returnString.length - 1);
  }
}

