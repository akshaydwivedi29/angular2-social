import {Page,NavController, NavParams} from 'ionic-angular';



@Page({
  templateUrl: 'build/pages/editprofile/editprofile.html'
})
export class EditProfilePage {

static get parameters() {
    return [[NavController]];
  }


constructor(nav) {

   
   this.nav = nav;
   this.profileModal = 'Basicinfo';
   this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
}

   onPageWillEnter(){

    this.tabBarElement.style.display = 'none';

  } 

  
}
