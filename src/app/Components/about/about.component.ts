import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { trigger, state, style, animate, transition, keyframes, query, useAnimation } from '@angular/animations';
import { AboutService, About } from '../../services/about.service';
import { transAnimation } from '../shared/animation/animation';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('bouncing', [
      state ('normal', style ({
        transform: 'translateY(0%)'
      })),
      state ('bounce', style ({
        transform: 'translateY(-40%)'
      })),
    transition('normal => *', [
        useAnimation(transAnimation, {
          params: {
          }
        })

      ])
    ])
    ]})

export class AboutComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor( private _AboutService: AboutService,
               private activatedRoute: ActivatedRoute,
               private router: Router) {
}

  currentState = 'normal';

  abouts: About[] = [];



ngOnInit() {
  this.abouts = this._AboutService.getAbouts();

  }
/*[
    'Spotify',
    'Soccer',
    'Travel',
    'Learn',
  ];*/

  bounce() {
    this.currentState = this.currentState === 'normal' ? '*' : 'normal';
    console.log('llamada al salto');
  }
  out() {
    this.currentState = 'normal';
    console.log('');
  }

}



