import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { LocalAuth } from './LocalAuth';
import { LocalStorageAuth } from './LocalStorageAuth';

@Injectable()
export class CustomAuthService {
  mode: 'firebase' | 'local' | 'localStorage';
  uid: string;
  userEmail: string;
  userDisplayName: string;
  userPhotoURL: string;

  constructor( private afAuth: AngularFireAuth,
               private localAuth: LocalAuth,
               private localStorageAuth: LocalStorageAuth ) {
    // Deducir como se inicializa el modo
    this.mode = 'firebase';
  }

  setModeFirebase() {
    this.mode = 'firebase';
  }

  setModeLocal() {
    this.mode = 'local';
  }

  setModeLocalStorage() {
    this.mode = 'localStorage';
  }


  getUser(){
    return {
      uid: this.uid,
      email : this.userEmail,
      displayName : this.userDisplayName,
      photoURL : this.userPhotoURL
    };
  }

  cleanUser(){
    this.uid = null;
    this.userEmail = null;
    this.userDisplayName = null;
    this.userPhotoURL = null;
  }

  async login(email: string, password: string) {
    if (this.mode === 'firebase') {
      const login = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.uid = login.uid;
      this.userEmail = login.email;
      this.userDisplayName = login.displayName;
      this.userPhotoURL = login.photoURL;
      return this;
    }
    else if (this.mode === 'local') {
      const login = this.localAuth.login(email, password);
      // TODO completar en igual que en el caso firebase
    }
    else if (this.mode === 'localStorage') {
      const login = this.localStorageAuth.login(email, password);
      // TODO completar en igual que en el caso firebase
    }
    // TODO Hacer la subscripcion a los cambios tanto en Firebase, como local preguntando cada 5 min
  }

  logout() {
    if (this.mode === 'firebase') {
      this.afAuth.auth.signOut();
    }
    else if (this.mode === 'local') {
      const logout = this.localAuth.logout();
    }
    else if (this.mode === 'localStorage') {
      const logout = this.localStorageAuth.logout();
    }
    this.cleanUser();
  }

  /**
   * TODO Otras Funciones
   * Hacer las funciones mascara que llaman a AngularFireAuth para enmascarar la API:
   * -- crear usuario
   * -- resetear contraseña
   * estas tendrian que no hacer nada en modo "local"
   */
}
