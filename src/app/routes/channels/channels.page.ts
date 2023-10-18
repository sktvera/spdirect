import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.page.html',
  styleUrls: ['./channels.page.scss'],
})
export class ChannelsPage implements OnInit {

  

  openOrCloseUserSettings: boolean = false;  //estado del menu desplegar menu usuario
  constructor() { }

  ngOnInit() {
  }

  /* DESPLEGAR MENU HEADER */
  activeMenuUser(){
    this.openOrCloseUserSettings = !this.openOrCloseUserSettings;
  }



}
