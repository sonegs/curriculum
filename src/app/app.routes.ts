
import { HomeComponent } from './Components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './Components/education/education.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { TechnologyComponent } from './Components/technologies/technologies.component';
import { AboutComponent } from './Components/about/about.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'education', component: EducationComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'technologies', component: TechnologyComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', pathMatch : 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
