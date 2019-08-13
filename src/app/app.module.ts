import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// importacion de todas las paginas

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { EducationComponent } from './Components/education/education.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { TechnologyComponent } from './Components/technologies/technologies.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { AboutComponent } from './Components/about/about.component';

// importar el archivo de rutas

import { APP_ROUTING } from './app.routes';

// importar los servicios

import { EducationService } from './services/education.service';
import { ExperienceService } from './services/experience.service';
import { TechnologyService } from './services/technologies.service';
import { AboutService } from './services/about.service';

// importacion de la directivas

import { UnshadowsDirective } from './directives/unshadows.directive';

// importacion del PerfectScrollbarModule

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { ScrollingModule } from '@angular/cdk/scrolling';




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
    ScrollingModule,
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
