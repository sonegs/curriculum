import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
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
        })
      ])
    ])
    ]
  })

export class AboutComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor( private _AboutService: AboutService,
               private activatedRoute: ActivatedRoute,
               private router: Router) {

                this.activatedRoute.params.subscribe( params => {
                  console.log(params);
                });
}

  currentState = 'normal';
  abouts: About[] = [];
  about: any = {};


/* Here i call the AboutService */

ngOnInit() {
  this.abouts = this._AboutService.getAbouts();
  }

/* this function do that the hobbies icons bounce when the mouse will be over. Then, the currentState var will come back to the original state in 1.5 seconds */

bounce() {

/* -------------------------------------------------------------------------------------
    this.activatedRoute.params.subscribe( params => {
      console.log(params.id);
      this.about = this._AboutService.getAbout( params.id );
    });
    */
    this.currentState = this.currentState === 'normal' ? '*' : 'normal';
    setTimeout(() => {
      this.currentState = 'normal';
    }, 1500);

  }

}
