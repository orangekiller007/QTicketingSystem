import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: SocialUser;
  private loggedIn: boolean;

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
console.log(this.loggedIn)
if(this.loggedIn)
{
  this.show();
  this.router.navigate(['home']);

}
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

  }

show(){
  console.log(this.user)
}

  signOut(): void {
    this.authService.signOut();
  
  }

}
