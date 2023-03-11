import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about/about.component';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/login/login/login.component';
import { PaymentComponent } from './pages/payment/payment/payment.component';
import { SignupComponent } from './pages/signup/signup/signup.component';
import { SinglegameComponent } from './pages/singlegame/singlegame/singlegame.component';
import { StoreComponent } from './pages/store/store/store.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'store/:category', component: StoreComponent },
  { path: 'store/:category/:gameId', component: SinglegameComponent },
  { path: 'payment/:gameId', component: PaymentComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
