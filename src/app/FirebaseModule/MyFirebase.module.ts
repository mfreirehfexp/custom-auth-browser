import * as firebase from 'firebase';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../dependencies';

const status = 'firebase imported ' + !!firebase;

@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AngularFireAuth]
})
export class MyFirebaseModule {
  constructor(auth: AngularFireAuth) {
    console.log(firebase);
    console.log(auth);
  }
}
