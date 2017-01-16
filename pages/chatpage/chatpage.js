import {Page,NavController, NavParams,Alert,ActionSheet,Loading } from 'ionic-angular';
import {MePage} from '../me/me';


@Page({
  templateUrl: 'build/pages/chatpage/chatpage.html'
})

export class ChatListPage {

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

  profilepage() {
    this.nav.setRoot(MePage);
  }
}
