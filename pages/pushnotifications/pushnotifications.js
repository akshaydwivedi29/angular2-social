import {Page,NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/pushnotifications/pushnotifications.html'
})
export class PushNotificationsPage {

	static get parameters() {
	    return [[NavController]];
	}

	constructor(nav) {
	  this.nav = nav;
	  this.tabBarElement = document.querySelector('#tabs ion-tabbar-section'); 
	}

	onPageWillEnter(){

    	this.tabBarElement.style.display = 'none';
  	}
}
