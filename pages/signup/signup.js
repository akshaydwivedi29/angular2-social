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
import {
    LoginPage
}
from '../loginpage/loginpage';
import {
    Facebook
}
from 'ionic-native';@
Page({
    templateUrl: 'build/pages/signup/signup.html'
})

export class SignupPage {

    static get parameters() {

        return [[NavController], [Http]];


    }
    constructor(nav, http, fbProvider) {

        this.signup = {};
        this.signup.name = '';
        this.signup.username = '';
        this.signup.password = '';
        this.signup.day = '';
        this.signup.month = '';
        this.signup.year = '';
        this.signup.gender = '';
        this.signup.postal_code = '';

        this.nav = nav;


        // this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');





        this.http = http;
        // this.alertCtrl = alertCtrl;

    }



    onPageWillEnter() {

        // this.tabBarElement.style.display = 'none';

    }

    onPagewillLeave() {

        // this.tabBarElement.style.display = 'block';
    }


    doSignup() {
        let body = new FormData();
        body.append('email', this.signup.username);
        body.append('password', this.signup.password);

        this.http.post('http://demo.muslimhud.com/webservices/registeration?email=' + this.signup.username + '&password=' + this.signup.password + '&name=' + this.signup.name + '&gender=' + this.signup.gender + '&postal_code=' + this.signup.postal_code + '&day=' + this.signup.day + '&month=' + this.signup.month + '&year=' + this.signup.year, body)
            .map(res => res.json())
            .subscribe(
                data => {
                    console.log(data);
                    if (data.response == 'error') {
                        let alert = Alert.create({
                            title: 'Signup Error',
                            subTitle: data.message,
                            buttons: ['OK']
                        });
                        this.nav.present(alert);
                    } else {

                        let alert = Alert.create({
                            title: 'Signup',
                            subTitle: 'Account Created Succesfully! Please Login',
                            buttons: ['OK']
                        });
                        this.nav.present(alert);
                        this.nav.setRoot(LoginPage);

                    }
                },
                err => {
                    console.log("ERROR!: ", err.json());
                    let alert = Alert.create({
                        title: 'Signup Error',
                        subTitle: 'Error trying to register! Try again later',
                        buttons: ['OK']
                    });
                    this.nav.present(alert);
                }
            );


    }

}
