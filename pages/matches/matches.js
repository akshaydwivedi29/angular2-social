import {Page,NavController, NavParams,Alert,ActionSheet} from 'ionic-angular';

import {MePage} from '../me/me';

@Page({
  templateUrl: 'build/pages/matches/matches.html'
})

export class MatchesPage {

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
  
  mepage() {

    this.nav.setRoot(MePage);
  }
  
}
