import { Component } from '@angular/core';
import { CustomAuthService } from './CustomAuthModule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  mail = 'mail';
  password = 'password';

  constructor(public auth: CustomAuthService) {

  }

  doActionLogin(ev){
    this.auth.login(this.mail, this.password)
        .then((status) => {
          console.log('Result', status);
        });
  }

  doActionLogout(ev){
    const aux = this.auth.logout();
    console.log('Result', aux);
  }
}
