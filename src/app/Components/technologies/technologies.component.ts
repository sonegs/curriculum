import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnologyService, Technology } from '../../services/technologies.service';



@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologyComponent implements OnInit {

  active = true;
  technologies: Technology[] = [];


  // tslint:disable-next-line:variable-name
  constructor( private _technologyService: TechnologyService,
               private activatedRoute: ActivatedRoute,
               private router: Router) {
   }

   propiedades = {
    unshadows: false,
    transparent: false // gracias a lo escrito en el clases.component, si cambiamos esta variable
    // a true o false, podemos modificar su color
  };

   ngOnInit() {

    this.technologies = this._technologyService.getTechnology();
    console.log(this.technologies);
  }

  }




