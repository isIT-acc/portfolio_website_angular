import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MyWorksComponent } from './components/my-works/my-works.component';
import { ContactWithMeComponent } from './components/contact-with-me/contact-with-me.component';
import { AboutComponent } from './components/about/about.component';

import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { BgForHorNavbarComponent } from './components/bg-for-hor-navbar/bg-for-hor-navbar.component';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

// import{}

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'my_works', component: MyWorksComponent },
  { path: 'contact_with_me', component: ContactWithMeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    AboutComponent,
    MyWorksComponent,
    ContactWithMeComponent,
    FooterComponent,
    BgForHorNavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
