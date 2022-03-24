import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustominterceptorInterceptor } from './custominterceptor.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { BelsoOldalComponent } from './belso-oldal/belso-oldal.component';
import { NyitoOldalComponent } from './nyito-oldal/nyito-oldal.component';
import { RouterModule } from '@angular/router';
import { AdminUserGuard } from './admin-user.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BelsoOldalComponent,
    NyitoOldalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    RouterModule
  ],
  providers: [
    AdminUserGuard,
    {
      provide: HTTP_INTERCEPTORS, useClass: CustominterceptorInterceptor, multi: true
    },
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
