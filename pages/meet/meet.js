import {
    Component
}
from '@angular/core';
import {
    Page, NavController, Loading, Alert
}
from 'ionic-angular';
import {
    HTTP_PROVIDERS, Http, Response, XHRBackend, Headers, RequestOptions
}
from '@angular/http';
import 'rxjs/Rx';
import {
    ProfilesPage
}
from '../profiles/profiles';@
Page({
    templateUrl: 'build/pages/meet/meet.html'
})
export class MeetPage {

    static get parameters() {
        return [[NavController], [Http]];
    }


    constructor(nav, http) {

        this.nav = nav;
        this.http = http;
        this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
        this.users = Array();
        let body = new FormData();



        this.http.post('http://demo.muslimhud.com/webservices/userhome?limit=12&offset=0', body)
            .map(res => res.json())
            .subscribe(
                data => {
                    console.log(data);
                    if (data.response == 'error') {
                        let alert = Alert.create({
                            title: 'Session error',
                            subTitle: data.message,
                            buttons: ['OK']
                        });
                        this.nav.present(alert);
                    } else {
                        for (let i = 0; i < data.user.length; i++) {
                            let tempUser = {
                                name: '',
                                age: '',
                                location: ''
                            };
                            tempUser.name = data.user[i].name;
                            tempUser.age = data.user[i].age;
                            tempUser.location = data.user[i].location;
                           // this.users.push(this.tempUser);
                        }
                        
                       this.users = data.user;
                        console.log('userssss... ' +this.users);
                    }
                },
                err => {
                    console.log("ERROR!: ", err.json());
                    let alert = Alert.create({
                        title: 'Login Error',
                        subTitle: 'Error trying to login! Try again later',
                        buttons: ['OK']
                    });
                    this.nav.present(alert);
                }
            );

    }

    onPageWillEnter() {

        this.tabBarElement.style.display = 'block';

    }

    mepage() {

        this.nav.push(ProfilesPage);

    }

}
