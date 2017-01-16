import {Page, NavController,Loading } from 'ionic-angular';

/*
  Generated class for the Profile1Page page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/profile-1/profile-1.html',
})
export class Profile1Page {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
        let loading = Loading.create({
    content: "Loading",
    duration: 3000
  });
  this.nav.present(loading);
  }
}
