
import {Component, ViewChild} from '@angular/core';
import {Page,NavController,Modal} from 'ionic-angular';
import {CommentsPage} from '../comments/comments';
import {ProfilesPage} from '../profiles/profiles';
import {PostModal} from '../../components/post-modal/post-modal';
import {WebService} from '../../providers/web-service/web-service';
import {Utility} from '../../providers/Utility/Utility';


@Component({
  templateUrl: 'build/pages/feed/feed.html',
  providers: [WebService,Utility]
  
})

export class FeedPage {

 static get parameters() {
    return [[NavController],[WebService],[Utility]];
  }


constructor(nav,webservice,utility) {

 this.nav = nav;
  this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
  this.webservice = webservice;
  this.utility = utility;
  this.feeddata=[];
 

}

onPageWillEnter(){

    this.tabBarElement.style.display = 'block';

  }

commentspage() {

    this.nav.push(CommentsPage);
   
}

openpost() {

  let modal = Modal.create(PostModal);
  this.nav.present(modal);

}


closepost(){
  let modal = Modal.onDismiss(PostModal);
}

// getFeed(){


//   var dataObj = {
//           "limit": 10,
//           "startlimit": 0,
//   }

//   this.webservice.retrieveData(this.utility.param(dataObj))
//     .then(data => {

//       this.feeddata = data.data;

//       this.feeddata.forEach((data,key) => {
//         this.feeddata[key].likecount=data.like.length;
//       });

//       console.log(this.feeddata);

//     });


// }

mepage() {

  this.nav.setRoot(ProfilesPage);
}

}
