import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { NavbarComponent } from './utils/navbar/navbar/navbar.component';
import { StoreComponent } from './pages/store/store/store.component';
import { SignupComponent } from './pages/signup/signup/signup.component';
import { LoginComponent } from './pages/login/login/login.component';
import { AboutComponent } from './pages/about/about/about.component';
import { FooterComponent } from './utils/footer/footer/footer.component';
import { SinglegameComponent } from './pages/singlegame/singlegame/singlegame.component';
import { AdventureComponent } from './pages/store/Adventure/adventure/adventure.component';
import { ActionComponent } from './pages/store/Action/action/action.component';
import { RpgComponent } from './pages/store/RPG/rpg/rpg.component';
import { SingleactionComponent } from './pages/singleaction/singleaction/singleaction.component';
import { SinglerpgComponent } from './pages/singlerpg/singlerpg/singlerpg.component';
import { SafePipe } from './safe.pipe';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    StoreComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    FooterComponent,
    SinglegameComponent,
    AdventureComponent,
    ActionComponent,
    RpgComponent,
    SingleactionComponent,
    SinglerpgComponent,
    SafePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideRemoteConfig(() => getRemoteConfig()),
  

   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
