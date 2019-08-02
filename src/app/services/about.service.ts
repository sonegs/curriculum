import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
constructor() {}
isBouncing = true;


    private abouts: About [] = [
      {
        nombre: 'Spotify',
        bio: 'Listen music and go to music festival is one of my passions!',
        img: 'assets/img/about/spotify.svg',
      },
      {
        nombre: 'Soccer',
        bio: 'I love watch a soccer match, but i prefer play it instead',
        img: 'assets/img/about/soccer.svg'
      },
      {
        nombre: 'Travel',
        bio: '',
        img: 'assets/img/about/travel.svg'
       },
       {
         nombre: 'Learn',
         bio: 'lalalalala',
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
