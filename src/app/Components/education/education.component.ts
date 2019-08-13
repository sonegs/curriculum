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
  changeText: boolean;
  // tslint:disable-next-line:variable-name
  constructor( private _EducationService: EducationService,
               private activatedRoute: ActivatedRoute,
               private router: Router) {

                 this.changeText = false; // this var will do that the text change when the mouse will be over

   }

   ngOnInit() {

    this.educations = this._EducationService.getEducations();
  }

  }



