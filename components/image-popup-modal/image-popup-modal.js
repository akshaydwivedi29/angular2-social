import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';

/*
  Generated class for the PostModal component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({

  templateUrl: 'build/components/image-popup-modal/image-popup-modal.html'
})

export class ImagePopupModal {

	static get parameters() {
	    return [[ViewController]];
	}

	constructor(viewCtrl) {

	   	this.viewCtrl = viewCtrl;
	  	
	}

  	

  	closepost(){

  		console.log('close post modal');
  		
   		this.viewCtrl.dismiss();

  		
	    
	}

}
