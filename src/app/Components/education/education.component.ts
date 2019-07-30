import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducationService, Education } from '../../services/education.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: Education[] = [];

  // tslint:disable-next-line:variable-name
  constructor( private _educationService: EducationService,
               private activatedRoute: ActivatedRoute,
               private router: Router) {

   }

   ngOnInit() {

    this.educations = this._educationService.getEducations();
  }
  }



