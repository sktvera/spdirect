import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import {Elemento} from './interface'


@Component({
  selector: 'app-modal-ordering',
  templateUrl: 'ordering.component.html',
  styleUrls: ['./ordening.component.scss'],
})
export class OrderingComponent {
    name!: string;
    activeFilters:any=false
    filterActive:any=''
    nameFilterActive:any=''
  constructor(private modalCtrl: ModalController) {}





  public elementos: Elemento[] = [
    {
      nombre: 'Nombre',
      seleccionado: false,
      subselecciones: [
        { nombre: '[A-z]' },
        { nombre: '[Z-a]' },
        
      ],
      desplegado: false, // Indica si las subselecciones están visibles
    },
    {
      nombre: 'Fecha de vencimiento',
      seleccionado: false,
      subselecciones: [
        { nombre: '[Proximo]' },
        { nombre: '[Lejano]'},
       
      ],
      desplegado: false, // Indica si las subselecciones están visibles
    },
    {
      nombre: 'Progreso',
      seleccionado: false,
      subselecciones: [
        { nombre: '[Bajo]' },
        { nombre: '[Alto]' },
       
      ],
      desplegado: false, // Indica si las subselecciones están visibles
    },
    {
      nombre: 'Prioridad',
      seleccionado: false,
      subselecciones: [
        { nombre: '[Mas alta]' },
        { nombre: '[Mas baja]' },
        
      ],
      desplegado: false, // Indica si las subselecciones están visibles
    }
  ];


  openOrCloseFilters(evento:Event){
this.activeFilters = !this.activeFilters
this.nameFilterActive = evento

  }
  saveFilter(evento:Event){
    console.log(evento)
    this.filterActive = evento
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(`${this.nameFilterActive}:${this.filterActive}`);
  }
}