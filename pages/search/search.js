import {Page,NavController} from 'ionic-angular';
import {PushNotificationsPage} from '../pushnotifications/pushnotifications';
import {DeleteAccountPage} from '../deleteaccount/deleteaccount';
import {LoginPage} from '../loginpage/loginpage';

@Page({
  templateUrl: 'build/pages/search/search.html'
})

export class SearchPage {

  static get parameters() {
    return [[NavController]];
  }

	constructor(nav) {
	  this.nav = nav;
    this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
	}

  onPageWillEnter(){

    this.tabBarElement.style.display = 'block';

  } 

  pushnotificationspage() {

    this.nav.push(PushNotificationsPage);
    
  }

  deleteaccountpage() {

    this.nav.push(DeleteAccountPage);

  }

  // loginpage() {

  //  // this.nav.push(LoginPage);
  //   this.nav.setRoot(LoginPage);
  // }


}
