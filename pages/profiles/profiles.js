import {Page,NavController} from 'ionic-angular';

import {MeetPage} from '../meet/meet';


@Page({
  templateUrl: 'build/pages/profiles/profiles.html'
})
export class ProfilesPage {

static get parameters() {
    return [[NavController]];
  }


constructor(nav) {
  this.nav = nav;
  this.profileModal="Basicinfo";
  this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
  
}
	
onPageWillEnter(){

    this.tabBarElement.style.display = 'none';
} 

mepage() {

    this.nav.setRoot(MeetPage);
}

}
