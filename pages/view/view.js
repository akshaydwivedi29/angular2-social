import {Page,NavController} from 'ionic-angular';



@Page({
  templateUrl: 'build/pages/view/view.html'
})
export class ViewPage {

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
