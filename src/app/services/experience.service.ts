import { Injectable } from '@angular/core';

@Injectable()
export class ExperienceService {
constructor() { console.log('La conexión con el servicio funciona correctamente'); }

    private experiences: Experience [] = [
      {
        name: 'Recepcionist / Tech Support',
        bio: 'Customer service, advising about the currently legislation about driving, weapons, security, dangerous animals, crane and marine licences. Repair and maintenance of the computers, and solving the network problems',
        date: '12/2018 - Currently',
        company: 'Avenida Medical Center'
      },
      {
        name: 'IT Recruiter',
        bio: 'Asesoramiento gratuito para personas desempleadas: Elaboración de un CV por competencias: Roleplaying en entrevistas de trabajo, revisión de CVs, creación y desarrollo de marca personal, elección de plataforma de empleo idónea para cada sector profesional.',
        date: '04/2018 - 12/2018',
        company: 'HRCS'
      },
      {
        name: 'Co-Founder',
        bio: ' Free advice for unemployed people: Developing to competences CV, job interview roleplaying, CVs review, creating and developing to personal brand, looking to the best platform employment for each professional sector.',
        date: '05/2017 - 04/2018',
        company: 'Nortisur'
      },
      {
        name: 'IT Recruiter',
        bio: 'Asesoramiento gratuito para personas desempleadas: Elaboración de un CV por competencias: Roleplaying en entrevistas de trabajo, revisión de CVs, creación y desarrollo de marca personal, elección de plataforma de empleo idónea para cada sector profesional.',
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
