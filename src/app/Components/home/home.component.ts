import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, query, useAnimation } from '@angular/animations';
import { transAnimation } from '../shared/animation/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
export class HomeComponent implements OnInit {
  currentState = 'normal';
  constructor() { }

  ngOnInit() {

  }

  bounce() {
    this.currentState = this.currentState === 'normal' ? '*' : 'normal';
    console.log('llamada al salto');
  }
  out() {
    this.currentState = 'normal';
    console.log('');
  }

}
