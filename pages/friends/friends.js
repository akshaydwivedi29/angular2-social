import {Page,NavController, NavParams,Alert,ActionSheet} from 'ionic-angular';



@Page({
  templateUrl: 'build/pages/friends/friends.html'
})

export class FriendsPage {

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
