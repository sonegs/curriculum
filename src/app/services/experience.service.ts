import { Injectable } from '@angular/core';

@Injectable()
export class ExperienceService {
constructor() { }

    private experiences: Experience [] = [
      {
        name: 'Recepcionist / Tech Support',
        bio: 'Customer service, advising about the currently legislation about driving, weapons, security, dangerous animals, cranes and marine licences. Repair and maintenance of the computers, and solving the network problems',
        date: '12/2018 - Currently',
        company: 'Avenida Medical Center'
      },
      {
        name: 'IT Recruiter',
        bio: 'Recruitment and selection of candidates for different IT and not IT positions. Search of information of the technologies (languages, tests, frameworks, databases), interviews to the candidates and follow-up of the incorporation.',
        date: '04/2018 - 12/2018',
        company: 'HRCS'
      },
      {
        name: 'Manual QA',
        bio: 'My duties in uTest platform have been executing Test Plans as a manual QA and exploratory notes,  where we are free to explore the app or web in scope, detail in a spreadsheet our steps and document our work. I also perform free exploratory, with no guide, just to look for any issue in the apps or websites in scope.',
        date: '06/2018 - 01/2019',
        company: 'uTest'
      },
      {
        name: 'Co-Founder',
        bio: ' Free advice for unemployed people: Developing to competences CV, job interview roleplaying, CVs review, creating and developing to personal brand, looking to the best platform employment for each professional sector.',
        date: '05/2017 - 04/2018',
        company: 'Nortisur'
      },
      {
        name: 'IT Recruiter',
        bio: 'Recruitment for IT position, specially developers and analyst-developers to big companies. Send the profile to the partner and follow-up of the incorporation.',
        date: '10/2017 - 04/2018',
        company: 'Zemsania Global Group'
       }
    ];

      getExperiences() {
        return this.experiences;
      }

    }

export interface Experience {

        name: string;
        bio: string;
        date: string;
        company: string;
    }
