import {
    Component
}
from '@angular/core';
import {
    Page, NavController, NavParams, Alert, ActionSheet, Loading, AlertController
}
from 'ionic-angular';
import {
    HTTP_PROVIDERS, Http, Response, XHRBackend, Headers, RequestOptions
}
from '@angular/http';
import 'rxjs/Rx';
import {
    TabsPage
}
from '../tabs/tabs';
import { SignupPage} from '../signup/signup';
import {Facebook} from 'ionic-native';
@
Page({
    templateUrl: 'build/pages/loginpage/loginpage.html'
})

export class LoginPage {

    static get parameters() {

        return [[NavController], [Http]];


    }
    constructor(nav, http, fbProvider) {

        this.login = {};
        this.login.username = '';
        this.login.password = '';
        this.nav = nav;


        // this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');

        let loading = Loading.create({
            content: "Loading",
            duration: 100
        });


        this.nav.present(loading);
        this.http = http;
        // this.alertCtrl = alertCtrl;

    }



    onPageWillEnter() {

        // this.tabBarElement.style.display = 'none';

    }

    onPagewillLeave() {

        // this.tabBarElement.style.display = 'block';
    }

    meetPage() {

        //this.nav.setRoot(TabsPage);

      /*  Facebook.api('me?fields=email,name', null, (profileData) => {
            console.log(JSON.stringify(profileData));
           
        }, (err) => {
            console.log(JSON.stringify(err));
            
        });*/
        this.nav.setRoot(TabsPage);
        //Facebook.login(['email', 'public_profile'], function(data){console.log(data)}, function(error){console.log(error)});
    }
    doLogin() {
        let body = new FormData();
        body.append('email', this.login.username);
        body.append('password', this.login.password);

        this.http.post('http://demo.muslimhud.com/webservices/authenticate?email=' + this.login.username + '&password=' + this.login.password, body)
            .map(res => res.json())
            .subscribe(
                data => {
                    console.log(data);
                    if (data.response == 'error') {
                        let alert = Alert.create({
                            title: 'Login Error',
                            subTitle: data.message,
                            buttons: ['OK']
                        });
                        this.nav.present(alert);
                    } else {
                        if (data.user.email == this.login.username) {
                            this.nav.setRoot(TabsPage);
                        }
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
    goToSignup()
    {
        this.nav.push(SignupPage);
    }

}
