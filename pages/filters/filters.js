import {Page,NavController} from 'ionic-angular';

import {MePage} from '../me/me';

@Page({
  templateUrl: 'build/pages/filters/filters.html'
})

export class FiltersPage {

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
