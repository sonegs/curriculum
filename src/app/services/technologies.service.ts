import { Injectable } from '@angular/core';

@Injectable()
export class TechnologyService {

    private Technologies: Technology [] = [
        {
          nombre: 'Java',
          img: 'assets/img/tech/java.png',
          link: 'https://www.java.com/es/',
        },
        {
          nombre: 'Oracle PL-SQL',
          img: 'assets/img/tech/plsql.png',
          link: 'https://www.oracle.com/es/index.html',
        },
        {
          nombre: 'C#',
          img: 'assets/img/tech/c.png',
          link: 'https://docs.microsoft.com/es-es/dotnet/csharp/',
        },
        {
          nombre: 'MySQL',
          img: 'assets/img/tech/mysql.svg',
          link: 'https://www.mysql.com/',
        },
        {
          nombre: 'Angular',
          img: 'assets/img/tech/angular.png',
          link: 'https://angular.io/',
        },
        {
          nombre: 'Jquery',
          img: 'assets/img/tech/jquery.png',
          link: 'https://jquery.com/',
        },
        {
          nombre: 'bootstrap',
          img: 'assets/img/tech/bootstrap.png',
          link: 'https://getbootstrap.com/',
        },
        {
          nombre: 'typescript',
          img: 'assets/img/tech/ts.png',
          link: 'https://www.typescriptlang.org/',
        },
        {
          nombre: 'HTML',
          img: 'assets/img/tech/html.png',
          link: 'https://www.w3.org/html/',
        },
        {
          nombre: 'CSS',
          img: 'assets/img/tech/css.png',
          link: 'https://www.w3.org/Style/CSS/Overview.en.html',
        }
      ];


      getTechnology() {

        return this.Technologies;
    }

    }

export interface Technology {

        nombre: string;
        img: string;
        link: string;
    }
