import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ExperienceService, Experience } from '../../services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience [];

  // tslint:disable-next-line:variable-name
  constructor( private _experienceService: ExperienceService,
               private activatedRoute: ActivatedRoute,
               private router: Router ) { }

  ngOnInit() {

    this.experiences = this._experienceService.getExperiences();

  }

}
