import { Injectable } from '@angular/core';

@Injectable()
export class EducationService {
constructor() { }

    private educations: Education [] = [
      {
        name: 'Udemy Courses',
        bio: 'Angular 8 · MySQL Databases',
        date: '2019',
        company: 'Udemy',
        icon: 'assets/img/education/icons/angular.svg'
      },
      {
        name: 'Computers Pills',
        bio: 'JavaScript Course',
        date: '2019',
        company: 'Computer Pills',
        icon: 'assets/img/education/icons/pills.svg'
      },
      {
        name: 'Web Applications Development High Technical Certificate',
        bio: 'Bases of the development in C# and Java',
        date: '2018-Currently',
        company: 'Ilerna',
        icon: 'assets/img/education/icons/web.svg'
      },
      {
        name: 'CFGM Microcomputing Systems',
        bio: 'Repairment of personal computers',
        date: '2008-2010',
        company: 'IES Virgen del Carmen',
        icon: 'assets/img/education/icons/system.svg'
      },
      {
      name: 'Master in Organizations and Job Psychology',
      bio: 'Recruitment, change management and work enviroment',
      date: '2016-2018',
      company: 'Seville University',
      icon: 'assets/img/education/icons/master.svg'
      },
      {
       name: 'Psychology Degree',
       bio: 'Social Psychology special mention',
       date: '2012-2016',
       company: 'Jaén University',
       icon: 'assets/img/education/icons/psico.svg'
      },
      {
        name: 'English Level B1 Preliminary',
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
        bio?: string;
        date: string;
        company: string;
        icon: string;
    }
