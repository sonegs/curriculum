import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// importacion de todas las paginas

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { EducationComponent } from './Components/education/education.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { TechnologyComponent } from './Components/technologies/technologies.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';

// importar el archivo de rutas

import { APP_ROUTING } from './app.routes';

// importar los servicios

import { EducationService } from './services/education.service';
import { ExperienceService } from './services/experience.service';
import { TechnologyService } from './services/technologies.service';

// importacion de la directiva

import { UnshadowsDirective } from './directive/unshadows.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    ExperienceComponent,
    TechnologyComponent,
    ContactComponent,
    NavbarComponent,
    AboutComponent,
    UnshadowsDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTING
  ],
  providers: [
    EducationService,
    ExperienceService,
    TechnologyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
