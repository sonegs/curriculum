import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})
export class NavbarComponent implements OnInit {
  isMobile: boolean;
isDesktopDevice: boolean;
  deviceFunction() {
    this.isMobile = this.deviceService.isMobile(); // identify if the device is a mobile device
    this.isDesktopDevice = this.deviceService.isDesktop(); // identify if the device is a mobile device
}
  constructor( private router: Router,
               private deviceService: DeviceDetectorService ) {
      this.deviceFunction ();
    }

      ngOnInit() {

      }
  }
