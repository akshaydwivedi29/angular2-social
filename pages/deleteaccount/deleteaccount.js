import {Page,NavController, NavParams,Alert,ActionSheet,Loading } from 'ionic-angular';



@Page({
  templateUrl: 'build/pages/deleteaccount/deleteaccount.html'
})
export class DeleteAccountPage {

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


//   presentAlert() {
//   let alert = Alert.create({ 
//     title: 'Low battery',
//     subTitle: '10% of battery remaining',
//     buttons: ['Dismiss']
//   });
//   this.nav.present(alert);
// }


// actionSheet() {
//   let actionSheet = ActionSheet.create({
//     title: 'Modify your album',
//     buttons: [
//       {
//         text: 'Destructive',
//         role: 'destructive',
//         handler: () => {
//           console.log('Destructive clicked');
//         }
//       },{
//         text: 'Archive',
//         handler: () => {
//           console.log('Archive clicked');
//         }
//       },{
//         text: 'Cancel',
//         role: 'cancel',
//         handler: () => {
//           console.log('Cancel clicked');
//         }
//       }
//     ]
//   });
//   this.nav.present(actionSheet);
//   }


  
}
