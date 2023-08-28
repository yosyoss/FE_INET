import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import {LoginComponent} from "./auth/login/login.component";
import {authGuard} from "./auth/auth.guard";
import {RegisterComponent} from "./auth/register/register.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'home',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
    canActivate: [authGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
