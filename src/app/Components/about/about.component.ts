import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { AboutService, About } from '../../services/about.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('bouncing', [
      state('normal', style({
        transform: 'translateY(0%)',
      })),
    transition('normal => *', [
      animate('2s', keyframes([
        style({ transform: 'translateY(0%)', offset: 0}),
        style({ transform: 'translateY(-40%)', offset: 0.25}),
        style({ transform: 'translateY(0%)', offset: 0.5}),
        style({ transform: 'translateY(-40%)', offset: 0.75}),
        style({ transform: 'translateY(0%)', offset: 1}),

      ]))
    ])
  ])
  ]}


)
export class AboutComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor( private _AboutService: AboutService,
               private activatedRoute: ActivatedRoute,
               private router: Router) {
}

  currentState = 'normal';
  abouts: About[] = [];
  propiedades = {
    moving: false // gracias a lo escrito en el clases.component, si cambiamos esta variable
    // a true o false, podemos modificar su color
  };

ngOnInit() {
  this.abouts = this._AboutService.getAbouts();
  }

  bounce() {
    this.currentState = this.currentState === 'normal' ? '*' : 'normal';
  }
  out() {
    this.currentState = 'normal';
  }

}



