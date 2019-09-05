import { animation, animate, style, keyframes } from '@angular/animations';

/* this const describes the params of the animation. This effect would do with CSS but i show something new by this way */

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


