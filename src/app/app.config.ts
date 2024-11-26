import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/add-user/add-user.component';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(),LoginComponent,AddUserComponent]
};
