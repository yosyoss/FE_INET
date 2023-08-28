import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExponentPipe } from './shared/pipes/exponent.pipe';
import { AgePipe } from './shared/pipes/age.pipe';
import { LoginComponent } from './auth/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./shared/auth-interceptor/auth.interceptor";
import {NotFoundComponent} from "./shared/component/not-found/not-found.component";
import {ErrorInterceptor} from "./shared/error-interceptor/error.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RegisterComponent} from "./auth/register/register.component";
import {PagesModule} from "./pages/pages.module";
import { PopupWrongComponent } from './shared/popup-wrong/popup-wrong.component';
import { PopupComponent } from './popup/popup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ExponentPipe,
    AgePipe,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    PopupWrongComponent,
    PopupComponent,
    LandingPageComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        PagesModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
