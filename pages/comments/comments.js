import {Component, ViewChild} from '@angular/core';
import {Page,NavController,Modal} from 'ionic-angular';
import {ImagePopupModal} from '../../components/image-popup-modal/image-popup-modal';



@Component({

  templateUrl: 'build/pages/comments/comments.html',
  
  
})
export class CommentsPage {

 static get parameters() {
    return [[NavController]];
  }

constructor(nav,webservice,utility) {

 this.nav = nav;
  this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
  this.webservice = webservice;
  this.utility = utility;
  this.feeddata=[];
 

}

onPageWillEnter(){

    this.tabBarElement.style.display = 'none';

  }


  openimage1() {
  let modal = Modal.create(ImagePopupModal);
  this.nav.present(modal);
}

  closeimage1() {
  let modal = Modal.onDismiss(ImagePopupModal);

}

}
