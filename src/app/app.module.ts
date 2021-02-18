import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {  GoogleLoginProvider } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { LoginComponent } from './pages/login/login.component';
import { UserState } from './shared/app.state';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([UserState], {
        developmentMode: !environment.production
    }),
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
      {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
                `${environment.googleId}.apps.googleusercontent.com`
              )
            }
          ]
        } as SocialAuthServiceConfig,
      }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
