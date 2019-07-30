import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor( private activatedRoute: ActivatedRoute,
               private router: Router ) { }

  movTop = 10;
  movDown = 0;

  ngOnInit() {
  }

   // Funcion en Jquery para mover los iconos
  public movement() {
console.log('llamada');
if (this.movDown < this.movTop) {
      $('.scroll').animate(
      {
        marginTop: '-20px'
      }, 400);
      this.movDown = this.movTop;
    }
if (this.movDown === this.movTop) {
      $('.scroll').animate(
        {
          marginTop: '0px'
        }, 300);
      this.movDown = 0;
    }

  }
}



