import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
constructor() { }

    private abouts: About [] = [
      {
        name: 'Spotify',
        bio: 'Listen music and go to music festival is one of my passions. I have gone more that 20 festivals',
        img: 'assets/img/about/spotify.svg',
        idx: 0
      },
      {
        name: 'Soccer',
        bio: 'I like watch a good soccer match. However, i prefer play it instead!',
        img: 'assets/img/about/soccer.svg',
        idx: 1
      },
      {
        name: 'Travel',
        bio: 'I love travel because i think it is the best way to meet other cultures and ours',
        img: 'assets/img/about/travel.svg',
        idx: 2
       },
       {
         name: 'Learn',
         bio: 'Taste something new or learn news skills! I feel this can do me a better professional',
         img: 'assets/img/about/learn.svg',
         idx: 3
       }
    ];

      getAbouts() {

        return this.abouts;
    }
    }

export interface About {

        name: string;
        bio: string;
        img: string;
        idx: number;
    }
