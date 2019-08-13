import { Injectable } from '@angular/core';

@Injectable()
export class EducationService {
constructor() { }

    private educations: Education [] = [
      {
        name: 'Udemy Courses',
        bio: 'Angular 5 and TypeScript · MySQL Databases',
        img: 'assets/img/education/udemy.png',
        date: '2019',
        company: 'Udemy',
        icon: 'assets/img/education/icons/angular.svg'
      },
       {
         name: 'CFGS Desarrollo de Aplicaciones Web',
         bio: 'First year learning the bases of the development by C# and Java',
         img: 'assets/img/education/ilerna.jpg',
         date: '2018-Currently',
         company: 'Ilerna',
         icon: 'assets/img/education/icons/web.svg'
       },
       {
         name: 'CFGM Sistemas microinformáticos',
         bio: 'Maintenance and repairment of personal computers',
         img: 'assets/img/education/ies.png',
         date: '2008-2010',
         company: 'IES Virgen del Carmen',
         icon: 'assets/img/education/icons/system.svg'
       },
       {
       name: 'Master Psicología de las Organizaciones y el Trabajo',
       bio: '',
       img: 'assets/img/education/us.png',
       date: '2016-2018',
       company: 'Seville University',
       icon: 'assets/img/education/icons/master.svg'
     },
     {
       name: 'Grado en Psicología',
       bio: '',
       img: 'assets/img/education/uja.png',
       date: '2012-2016',
       company: 'Jaén University',
       icon: 'assets/img/education/icons/psico.svg'
     },
       {
         name: 'English Level B1 Preliminary',
         bio: '',
         img: 'assets/img/education/cambridge.png',
         date: '2015',
         company: 'Cambridge Assessment English',
         icon: 'assets/img/education/icons/english.svg'
       }
    ];

      getEducations() {

        return this.educations;
    }

    }

export interface Education {

        name: string;
        bio: string;
        img: string;
        date: string;
        company: string;
        icon: string;
    }
