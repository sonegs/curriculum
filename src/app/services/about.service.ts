import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
constructor() {}


    private abouts: About [] = [
      {
        nombre: 'Spotify',
        bio: 'Listen music and go to music festival is one of my passions',
        img: 'assets/img/about/spotify.svg',
      },
      {
        nombre: 'Soccer',
        bio: 'I love watch a good soccer match. However, i prefer play it instead!',
        img: 'assets/img/about/soccer.svg'
      },
      {
        nombre: 'Travel',
        bio: 'I love travel because i think it is the best way to meet other cultures and ours',
        img: 'assets/img/about/travel.svg'
       },
       {
         nombre: 'Learn',
         bio: 'Studing something new and learn news skills! I feel this can do me a better professional',
         img: 'assets/img/about/learn.svg'
       }
    ];

      getAbouts() {

        return this.abouts;
    }

    }

export interface About {

        nombre: string;
        bio: string;
        img: string;
    }
