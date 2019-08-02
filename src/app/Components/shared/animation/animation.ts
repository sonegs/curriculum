import { animation, trigger, animateChild, group, state, transition, animate, style, query, keyframes } from '@angular/animations';

export const transAnimation =
    animation([
    animate('1.5s', keyframes([
    style({ transform: 'translateY(0%)', offset: 0 }),
        style({ transform: 'translateY(-40%)', offset: 0.25}),
        style({ transform: 'translateY(0%)', offset: 0.5}),
        style({ transform: 'translateY(-40%)', offset: 0.75}),
        style({ transform: 'translateY(0%)', offset: 1}),
  ]))
]);


