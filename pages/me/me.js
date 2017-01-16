import {Page,NavController,ActionSheet} from 'ionic-angular';
import {EditProfilePage} from '../editprofile/editprofile';
import {NotificationsPage} from '../notifications/notifications';
import {ViewPage} from '../view/view';
import {FriendsPage} from '../friends/friends';
import {MatchesPage} from '../matches/matches';
import {ChatListPage} from '../chatpage/chatpage';
import {FiltersPage} from '../filters/filters';

@Page({
  templateUrl: 'build/pages/me/me.html'
})
export class MePage {

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

  editpage() {

    this.nav.push(EditProfilePage);

  }

  notificationpage() {

    this.nav.push(NotificationsPage);
  }

  viewpage() {

    this.nav.push(ViewPage);
  }

  friendspage() {

    this.nav.push(FriendsPage);
  }

  matchespage() {

    this.nav.push(MatchesPage);
  }

  filterspage() {

    this.nav.push(FiltersPage);
  }

  chatpage() {

    this.nav.push(ChatListPage);
  }

  actionSheet() {
      let actionSheet = ActionSheet.create({
        title: 'Add Photo',
        buttons: [
          {
            text: 'Upload',
            role: 'upload',
            handler: () => {
              console.log('upload clicked');
            }
          },{
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      this.nav.present(actionSheet);
  }



}
