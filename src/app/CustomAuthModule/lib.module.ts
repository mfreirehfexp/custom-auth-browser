import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MyFirebaseModule } from '../FirebaseModule';
import { CustomAuthService } from './CustomAuth';
import { LocalAuth } from './LocalAuth';
import { LocalStorageAuth } from './LocalStorageAuth';

@NgModule({
  declarations: [],
  imports: [
    HttpModule,
    MyFirebaseModule
  ],
  providers: [CustomAuthService, LocalAuth, LocalStorageAuth]
})
export class CustomAuthModule { }
