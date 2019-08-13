import { Component, OnInit, ElementRef} from '@angular/core';
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
               private router: Router,
               private element: ElementRef) {
}

  currentState = 'normal';
  abouts: About[] = [];



/*Aquí se llama al service de about */
ngOnInit() {
  this.abouts = this._AboutService.getAbouts();
  }

/* esta funcion hace que los iconos de los hobbies boten al poner el raton encima. Además, devuelve la variable currentState a su estado original en 1.5segundos*/
  bounce() {

    this.currentState = this.currentState === 'normal' ? '*' : 'normal';
    setTimeout(() => {
      this.currentState = 'normal';
      console.log('func');
    }, 1500);
  }


}
