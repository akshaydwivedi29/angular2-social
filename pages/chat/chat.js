import {Page,NavController,Loading } from 'ionic-angular';
import {ChatListPage} from '../chatpage/chatpage';

@Page({
  templateUrl: 'build/pages/chat/chat.html'
})
export class ChatPage {

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

  openchat() {

    this.nav.push(ChatListPage);
    //this.nav.setRoot(ChatListPage);
  }

 

}
