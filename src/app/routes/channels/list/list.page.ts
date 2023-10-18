import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
import { Elemento } from './types'
import { IonModal } from '@ionic/angular';
import { ShareDataService } from '../../../share-data.service';
import { Item } from './types';
import { OrderingComponent } from './ordering/ordering.component'
import { PictureModalComponent } from './pictureModal/pictureModal.component'

import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {


//,  
  constructor( private modalCtrl: ModalController, private shareDataService: ShareDataService) {}
  @ViewChild('modal', { static: true }) modal!: IonModal; 

  openOrCloseUserSettings: boolean = false;  //estado del menu desplegar menu usuario
  openOrCloseMediaMenu: boolean = false;  //estado del menu subir fotos
  public organizado: Record<string, string[]> = {}; //recibe las ciuddades del componenete hijo y las reorganiza 
  public filteredCampaigns: any[] = []; //almacena las referencias filtradas pr ciudad
  public openLocation:any = false
  public message = 'Ordenamiento';
  public selectedSectionPhoto: any;


  async openModalPicture(sectionPhoto: any) {
    const modal = await this.modalCtrl.create({
      component: PictureModalComponent,
      handle: true,
                  
                    mode: 'ios',
                    breakpoints: [0, 0.5],
                    initialBreakpoint: 0.5, 
      componentProps: {
        data: sectionPhoto 
      }
    });
    return await modal.present();
  }


 




  async openModal() {
    const modal = await this.modalCtrl.create({
      component: OrderingComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    console.log({data})
    this.message = data;
    if (role === 'confirm') {
      
    }
  }


  //EJEMPLO DE DATA QUE SE VA FILTRAR
 public campaignFilter:any [] = [
    {
    ciudad:'MEDELLIN',                //FILTRO ESTRICTO
      reference:[
        {
        name:'budweiser verde champions',
        Campaign:'navidad',
        customer_name:'Heineken',
      channelLocation:'estadio central',
      openingHours:'08:30 AM',
      
      location:[
        {
        locationName:'Exito colina',
        priority:[{
         
          medium:true,
          high:false,
          veryHigh:false
        }],
        priorityDays:10,
        section:[
          {
          sectionName:'cajeros',
          closingHours:'7:39',
          openingHours:'6:00',
          daysActivity:[{
            lun:true,
            mar:true,
            mie:true,
            jue:true,
            vie:true,
            sab:false,
            dom:false,
          }],
          picturesSection:[
            {nameSection:'pantalla #1',img:false,coordinatesSection:[{longitude:'-74.064759',latitude:'4.738284'}]},
            {nameSection:'pantalla #2',img:true,coordinatesSection:[{longitude:'-74.036574',latitude:'4.743433'}]},
            {nameSection:'pantalla #3',img:true,coordinatesSection:[{longitude:'-74.064759',latitude:'4.738284'}]},
            {nameSection:'pantalla #4',img:false,coordinatesSection:[{longitude:'-74.036574',latitude:'4.743433'}]},
            {nameSection:'pantalla #5',img:true,coordinatesSection:[{longitude:'-74.064759',latitude:'4.738284'}]},
            {nameSection:'pantalla #6',img:false,coordinatesSection:[{longitude:'-74.036574',latitude:'4.743433'}]},
         ]
        },
        {
          sectionName:'cajeros',
          closingHours:'7:39',
          openingHours:'6:00',
          daysActivity:[{
            lun:true,
            mar:true,
            mie:true,
            jue:true,           
            vie:true,
            sab:false,
            dom:false,
          }],
          picturesSection:[
            {nameSection:'pantalla #1',img:false,coordinatesSection:[{longitude:'-74.064759',latitude:'4.738284'}]},
            {nameSection:'pantalla #2',img:false,coordinatesSection:[{longitude:'-74.036574',latitude:'4.743433'}]},
            {nameSection:'pantalla #3',img:false,coordinatesSection:[{longitude:'-74.064759',latitude:'4.738284'}]},
            {nameSection:'pantalla #4',img:false,coordinatesSection:[{longitude:'-74.036574',latitude:'4.743433'}]},
            {nameSection:'pantalla #5',img:false,coordinatesSection:[{longitude:'-74.064759',latitude:'4.738284'}]},
            {nameSection:'pantalla #6',img:true,coordinatesSection:[{longitude:'-74.036574',latitude:'4.743433'}]},
         ]
        }
      ]
      }]   
      },
     
      







    ]
    },
  ] 

  openLocations(){
    this.openLocation = !this.openLocation
  }

  sendInfo(evento:any) {

    //this.shareDataService.addReference(evento);
  }


//Menu de filtros primarios 
  elementos: Elemento[] = [
    {
      nombre: 'Ciudad',
      seleccionado: false,
      subselecciones: [
        { nombre: 'MEDELLIN', seleccionado: false },
        { nombre: 'BARRANQUILLA', seleccionado: false },
        { nombre: 'CARTAGENA', seleccionado: false },
        { nombre: 'CALI', seleccionado: false },
        { nombre: 'BOGOTA', seleccionado: false },
      ],
      desplegado: false, // Indica si las subselecciones están visibles
    },
    {
      nombre: 'LED Gran Formato',
      seleccionado: false,
      subselecciones: [
        { nombre: 'cc__items__LEDGranFormato', seleccionado: false },
        { nombre: 'cc__items__LEDGranFormato', seleccionado: false },
        { nombre: 'cc__items__LEDGranFormato', seleccionado: false },
        { nombre: 'cc__items__LEDGranFormato', seleccionado: false },
      ],
      desplegado: false, // Indica si las subselecciones están visibles
    },
    {
      nombre: 'Centros Comerciales',
      seleccionado: false,
      subselecciones: [
        { nombre: 'item__CentrosComerciales', seleccionado: false },
        { nombre: 'item__CentrosComerciales', seleccionado: false },
        { nombre: 'item__CentrosComerciales', seleccionado: false },
        { nombre: 'item__CentrosComerciales', seleccionado: false },
        { nombre: 'item__CentrosComerciales', seleccionado: false },
        { nombre: 'item__CentrosComerciales', seleccionado: false },
        { nombre: 'item__CentrosComerciales', seleccionado: false },
        { nombre: 'item__CentrosComerciales', seleccionado: false },
      ],
      desplegado: false, // Indica si las subselecciones están visibles
    },
    {
      nombre: 'Torres Médicas',
      seleccionado: false,
      subselecciones: [
        { nombre: 'item__TorresMédicas', seleccionado: false },
        { nombre: 'item__TorresMédicas', seleccionado: false },
        { nombre: 'item__TorresMédicas', seleccionado: false },
        { nombre: 'item__TorresMédicas', seleccionado: false },
        { nombre: 'item__TorresMédicas', seleccionado: false },
        { nombre: 'item__TorresMédicas', seleccionado: false },
        { nombre: 'item__TorresMédicas', seleccionado: false },
        { nombre: 'item__TorresMédicas', seleccionado: false },
      ],
      desplegado: false, // Indica si las subselecciones están visibles
    },
    {
      nombre: 'Gimnasios',
      seleccionado: false,
      subselecciones: [
        { nombre: 'item__Gimnasios', seleccionado: false },
        { nombre: 'item__Gimnasios', seleccionado: false },
        { nombre: 'item__Gimnasios', seleccionado: false },
        { nombre: 'item__Gimnasios', seleccionado: false },
        { nombre: 'item__Gimnasios', seleccionado: false },
        { nombre: 'item__Gimnasios', seleccionado: false },
        { nombre: 'item__Gimnasios', seleccionado: false },
        { nombre: 'item__Gimnasios', seleccionado: false },
      ],
      desplegado: false, // Indica si las subselecciones están visibles
    },

    {
      nombre: 'Supermercados',
      seleccionado: false,
      subselecciones: [
        { nombre: 'item__Supermercados', seleccionado: false },
        { nombre: 'item__Supermercados', seleccionado: false },
        { nombre: 'item__Supermercados', seleccionado: false },
        { nombre: 'item__Supermercados', seleccionado: false },
        { nombre: 'item__Supermercados', seleccionado: false },
        { nombre: 'item__Supermercados', seleccionado: false },
        { nombre: 'item__Supermercados', seleccionado: false },
        { nombre: 'item__Supermercados', seleccionado: false },
      ],
      desplegado: false, // Indica si las subselecciones están visibles
    },
  ];



/*   FRUTAS EJEMPLO */
  public selectedFruitsText = '0 Items';
  public selectedFruits: string[] = [];

  /* FILTER */
  public selectedFilterText = 'Filtrar';




/*   FRUTAS EJEMPLO */
  fruits: Item[] = [
    { text: 'Apple', value: 'apple' },
    { text: 'Apricot', value: 'apricot' },
    { text: 'Banana', value: 'banana' },
    { text: 'Blackberry', value: 'blackberry' },
    { text: 'Blueberry', value: 'blueberry' },
    { text: 'Cherry', value: 'cherry' },
    { text: 'Cranberry', value: 'cranberry' },
    { text: 'Grape', value: 'grape' },
    { text: 'Grapefruit', value: 'grapefruit' },
    { text: 'Guava', value: 'guava' },
    { text: 'Jackfruit', value: 'jackfruit' },
    { text: 'Lime', value: 'lime' },
    { text: 'Mango', value: 'mango' },
    { text: 'Nectarine', value: 'nectarine' },
    { text: 'Orange', value: 'orange' },
    { text: 'Papaya', value: 'papaya' },
    { text: 'Passionfruit', value: 'passionfruit' },
    { text: 'Peach', value: 'peach' },
    { text: 'Pear', value: 'pear' },
    { text: 'Plantain', value: 'plantain' },
    { text: 'Plum', value: 'plum' },
    { text: 'Pineapple', value: 'pineapple' },
    { text: 'Pomegranate', value: 'pomegranate' },
    { text: 'Raspberry', value: 'raspberry' },
    { text: 'Strawberry', value: 'strawberry' },
  ];


  saveRoute(evento:any){
    
    console.log(evento, 'este es el valor de AGREGAR')
  }

  private formatData(data: string[]) {
    if (data.length === 1) {
      const fruit:any = this.fruits.find((fruit) => fruit.value === data[0]);
      return fruit.text;
    }
    return `${data.length} items`;
  }
  fruitSelectionChanged(fruits: string[]) {
    this.selectedFruits = fruits;
    this.selectedFruitsText = this.formatData(this.selectedFruits);
    this.modal.dismiss();
  }

/* save data filter */
  filterSelectionChanged(elementos: string[]) {

    //RECIBE LOS DATOS DEL COMPONENTE HIJO Y LOS REORGANIZA
    if (elementos.length === 1) {
      const nomenclatura = elementos[0].split("__")[0];
      const valor = elementos[0].split("__")[1];
      this.organizado =  { [nomenclatura]: [valor] }
      //VERIFICA QUE SI ESTE LLEGANDO EL DATO FORMATEADO 
      //const andres = this.organizado =  { [nomenclatura]: [valor] }
      //console.log({andres})

      //COMPARA LA CIUDAD SELECCIONADA Y FILTRA LAS REFRENCIAS 
      this.filteredCampaigns = this.campaignFilter.filter(item => item.ciudad === this.organizado['Ciudad'][0]);
     
      return this.organizado;
    }
 
    //ORGANIZA CUANDO SE SELECCIONA MAS DE UN FILTRO PRIMARIO 
  elementos.forEach(dato => {
    const [nomenclatura, valor] = dato.split("__");
    if (!this.organizado[nomenclatura]) {
      this.organizado[nomenclatura] = [];
    }
    this.organizado[nomenclatura].push(valor);
  });
  console.log(this.organizado,'estos son los datos ')
    return this.organizado;
  }




/* DESPLEGAR MENU HEADER */
  activeMenuUser(){
    this.openOrCloseUserSettings = !this.openOrCloseUserSettings;
  }
  activeMediaMenu(){
    this.openOrCloseMediaMenu = !this.openOrCloseMediaMenu;
  }

  ngOnInit() {
  }


 



  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }


  
  
}
