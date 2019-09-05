import { Component, OnInit, HostListener, Host } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnologyService, Technology } from '../../services/technologies.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologyComponent implements OnInit {


  active = true;
  technologies: Technology[] = [];
  propiedades = {
    unshadows: false
  };

// There are the change device var

  changeText: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktopDevice: boolean;

  // tslint:disable-next-line:variable-name
  constructor( private _technologyService: TechnologyService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private deviceService: DeviceDetectorService) {

                this.deviceFunction();

   }

deviceFunction() {
  this.isMobile = this.deviceService.isMobile(); // identify if the device is a mobile device
  this.isDesktopDevice = this.deviceService.isDesktop(); // identify if the device is a mobile device
  this.isTablet = this.deviceService.isTablet(); // identify if the device is a mobile device
}

   ngOnInit() {

    this.technologies = this._technologyService.getTechnology();

  }

  }




