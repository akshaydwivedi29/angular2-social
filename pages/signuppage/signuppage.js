import {Page,NavController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/signuppage/signuppage.html'
})
export class signuppage {

static get parameters() {
    return [[NavController]];
  }

constructor(nav) {
  
}


}
