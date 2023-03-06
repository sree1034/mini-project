import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about/about.component';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/login/login/login.component';
import { SignupComponent } from './pages/signup/signup/signup.component';
import { SingleactionComponent } from './pages/singleaction/singleaction/singleaction.component';
import { SinglegameComponent } from './pages/singlegame/singlegame/singlegame.component';
import { SinglerpgComponent } from './pages/singlerpg/singlerpg/singlerpg.component';
import { ActionComponent } from './pages/store/Action/action/action.component';
import { AdventureComponent } from './pages/store/Adventure/adventure/adventure.component';
import { RpgComponent } from './pages/store/RPG/rpg/rpg.component';
import { StoreComponent } from './pages/store/store/store.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'store', component: StoreComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'adventure', component: AdventureComponent },
  { path: 'action', component: ActionComponent },
  { path: 'rpg', component: RpgComponent },
  { path: 'adventure/:id', component: SinglegameComponent },
  {path:'action/:id', component: SingleactionComponent },
  {path:'rpg/:id',component:SinglerpgComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
