import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import the pages components

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { EducationComponent } from './Components/education/education.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { TechnologyComponent } from './Components/technologies/technologies.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { AboutComponent } from './Components/about/about.component';

// import the routes component

import { APP_ROUTING } from './app.routes';

// import the services

import { EducationService } from './services/education.service';
import { ExperienceService } from './services/experience.service';
import { TechnologyService } from './services/technologies.service';
import { AboutService } from './services/about.service';

// import the directive

import { UnshadowsDirective } from './directives/unshadows.directive';

// import the perfect scrollbar modules

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { DeviceDetectorModule } from 'ngx-device-detector';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    ExperienceComponent,
    TechnologyComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    UnshadowsDirective,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    PerfectScrollbarModule,
    DeviceDetectorModule.forRoot()

  ],
  providers: [
    EducationService,
    ExperienceService,
    TechnologyService,
    AboutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
