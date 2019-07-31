import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
constructor() {}

    private abouts: About [] = [
      {
        nombre: 'Spotify',
        bio: 'Listen music and go to music festival is one of my passions!',
        link: 'fab fa-spotify',
      },
      {
        nombre: 'Soccer',
        bio: 'I love watch a soccer match, but i prefer play it instead',
        link: 'fas fa-futbol',
      },
      {
        nombre: 'Travel',
        bio: '',
        link: 'fas fa-globe-americas',
       },
       {
         nombre: 'Learn',
         bio: 'lalalalala',
         link: 'fas fa-code',
       }
    ];

      getAbouts() {

        return this.abouts;
    }

    }

export interface About {

        nombre: string;
        bio: string;
        link: string;
    }
