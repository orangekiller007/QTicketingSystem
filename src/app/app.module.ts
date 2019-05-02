import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider} from "angularx-social-login";
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("939103737702-q0fq95vnrrdmrgvgq1hnecjvdcfhk67d.apps.googleusercontent.com")
  }
]);

const appRoutes:Routes=[{
  path:'home',
  component:HomeComponent
},
{
  path:'',
  component:LoginComponent
}
]

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    {    provide: AuthServiceConfig,
      useFactory: provideConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
