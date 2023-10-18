import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuItems = [
    { label: 'Gallery', route: '/home-user/gallery' },
    { label: 'Geo-location', route: '/home-user/geolocation' },
    { label: 'Detail', route: '/home-user/detail' }
    // Agrega más elementos si es necesario
  ];

  constructor() {}

  ngOnInit() {}
}
