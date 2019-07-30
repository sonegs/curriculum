import { Injectable } from '@angular/core';

@Injectable()
export class EducationService {
constructor() { console.log('La conexión con el servicio funciona correctamente'); }
udemyFormacion = 'Udemy';
udemyImage = 'assets/img/education/udemy.png';

    private educations: Education [] = [
      {
        nombre: 'Curso',
        bio: '',
        img: this.udemyImage,
        fecha: 'Actualidad',
        entidad: this.udemyFormacion
      },
      {
        nombre: 'Curso Angular 5 y TypeScript',
        bio: '',
        img: this.udemyImage,
        fecha: '2019-07-01',
        entidad: this.udemyFormacion
      },
      {
        nombre: 'Curso Básico de Bases de Datos MySQL',
        bio: '',
        img: this.udemyImage,
        fecha: '2019-07-01',
        entidad: this.udemyFormacion
       },
       {
         nombre: 'CFGS Desarrollo de Aplicaciones Web',
         bio: '',
         img: 'assets/img/education/ilerna.jpg',
         fecha: '1939-fecha-01',
         entidad: 'Ilerna'
       },
       {
         nombre: 'CFGM Explotación y mantenimiento de sistemas microinformáticos',
         bio: '',
         img: 'assets/img/education/ies.png',
         fecha: '1940-06-01',
         entidad: 'IES Virgen del Carmen'
       },
       {
         nombre: 'English Level B1 Preliminary',
         bio: '',
         img: 'assets/img/education/cambridge.png',
         fecha: '2015',
         entidad: 'Cambridge Assessment English'
       },
      {
        nombre: 'Master en Psicologías de las Organizaciones y el Trabajo',
        bio: '',
        img: 'assets/img/education/us.png',
        fecha: '1964-01-01',
        entidad: 'Universidad de Sevilla'
      },
      {
        nombre: 'Grado en Psicología',
        bio: '',
        img: 'assets/img/education/uja.png',
        fecha: 'fecha-05-01',
        entidad: 'Universidad de Jaén'
      }
    ];

      getEducations() {

        return this.educations;
    }

    }

export interface Education {

        nombre: string;
        bio: string;
        img: string;
        fecha: string;
        entidad: string;
    }
