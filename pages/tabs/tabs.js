
import {Component} from "@angular/core";
import {MeetPage} from '../meet/meet';
import {ChatPage} from '../chat/chat';
import {FeedPage} from '../feed/feed';
import {MePage} from '../me/me';
import {SettingsPage} from '../settings/settings';
import {SearchPage} from '../search/search';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})

export class TabsPage {
  constructor() {
  /*  this.tab1Root = MeetPage;
    this.tab2Root = ChatPage;
    this.tab3Root = FeedPage;
    this.tab4Root = MePage;
    this.tab5Root = SettingsPage;*/
       this.tab1Root = MeetPage;
    this.tab2Root = MePage;
    this.tab3Root = MeetPage;
    this.tab4Root = ChatPage;
    this.tab5Root = SearchPage;
  }
}
