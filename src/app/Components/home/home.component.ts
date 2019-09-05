import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, useAnimation } from '@angular/animations';
import { transAnimation } from '../shared/animation/animation';
import { DeviceDetectorService } from 'ngx-device-detector';

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
  isMobile: boolean;

  constructor(private deviceService: DeviceDetectorService) {
    this.deviceFunction();
   }

  ngOnInit() {
  }

  deviceFunction() {
    this.isMobile = this.deviceService.isMobile(); // identify if the device is a mobile device
  }

  bounce() {
    /* this functions will do that the gps icon bounce */
    this.currentState = this.currentState === 'normal' ? '*' : 'normal';
  }
  out() {
    this.currentState = 'out';
  }

}
