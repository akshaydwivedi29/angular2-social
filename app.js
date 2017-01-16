import {
    Component, ViewChild
}
from '@angular/core';
import {
    ionicBootstrap, Platform
}
from 'ionic-angular';
import {
    StatusBar
}
from 'ionic-native';
import {
    Splashscreen
}
from 'ionic-native';
import {
    LoginPage
}
from './pages/loginpage/loginpage';

@
Component({
    templateUrl: 'build/app.html',
    queries: {
        nav: new ViewChild('content')
    }
})

class MyApp {
    static get parameters() {
        return [[Platform]];
    }

    constructor(platform, fbProvider) {
        this.platform = platform;
        this.initializeApp();
        this.rootPage = LoginPage;
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.hideSplashScreen();
            StatusBar.styleDefault();
        });
    }

    hideSplashScreen() {
        if (Splashscreen) {
            setTimeout(() => {
                Splashscreen.hide();
            }, 100);
        }
    }


}

ionicBootstrap(MyApp);
