import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { OnInit } from '@angular/core';
import { Item } from '../types';
import { Elemento } from '../types';


@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
  styleUrls: ['./filters.component.scss'],
 
})
export class FiltersComponent implements OnInit {
  @Input() elementos:Elemento[]=[];
  @Input() items: Item[] = [];

  @Input() selectedItemsFilter: string[] = [];
  @Input() selectedItems: string[] = [];

  @Output() selectionFilterChange = new EventEmitter<string[]>();
  @Output() selectionChange = new EventEmitter<string[]>();

  @Input() title = 'TIULO';

  @Output() selectionCancel = new EventEmitter<void>();


  filteredItems: Item[] = [];
  workingSelectedValues: string[] = [];

  /* Filter */
  filteredFilterItems: Elemento[] = [];
  workingSelectedValuesFilter: string[] = [];
  ciudad: string[] = [];

  filterparameters: string[]=[]
  ngOnInit() {
    this.filteredItems = [...this.items];
    this.workingSelectedValues = [...this.selectedItems];

    /* FILTER */
    this.filteredFilterItems = [...this.elementos];
    this.workingSelectedValuesFilter = [...this.selectedItemsFilter];
  }


/* FILTER */
  trackFilterItems(index: number, item: Item) {
    return item.value;
  }

  trackItems(index: number, item: Item) {
    return item.value;
  }

  cancelChanges() {
    this.selectionCancel.emit();
  }

  confirmChanges() {
    this.selectionChange.emit(this.workingSelectedValues);

    /* Filter */
    this.selectionFilterChange.emit(this.workingSelectedValuesFilter);
  }

  searchbarInput(ev:any) {
    this.filterList(ev.target.value);
  }

 
  filterList(searchQuery: string | undefined) {
   
    if (searchQuery === undefined) {
      this.filteredItems = [...this.items];
    } else {
   
      const normalizedQuery = searchQuery.toLowerCase();
      this.filteredItems = this.items.filter((item) => {
        return item.text.toLowerCase().includes(normalizedQuery);
      });
    }
  }

  toggleDesplegado(elemento: any) {

    elemento.desplegado = !elemento.desplegado;
    console.log({elemento})
  }


  /* GUARDA EL VALOR DEL CHECKBOX */

  isChecked(value: string) {
    const frutas = this.workingSelectedValues.find((item) => item === value);

    return this.workingSelectedValues.find((item) => item === value);
  }


  checkboxChange(ev:any) {
    const { checked, value } = ev.detail;

    if (checked) {
      this.workingSelectedValues = [...this.workingSelectedValues, value];
    } else {
      this.workingSelectedValues = this.workingSelectedValues.filter((item) => item !== value);
    }
  }

/* Filter */
  isCheckedFilter(event:any) {



    
/* 
    const valueCheck = this.workingSelectedValuesFilter
    const filter = this.workingSelectedValuesFilter.find((elementos) => elementos === nombre);

   return this.workingSelectedValuesFilter.find((elementos) => elementos === nombre); */
  }



  /* Filter */
  checkboxChangeFilter(ev:any) {
    const { checked, value } = ev.detail;
    const seleccionPerteneciente:any = this.elementos.find(elemento => elemento.subselecciones.some(subseleccion => subseleccion.nombre === value));
  
    this.ciudad = seleccionPerteneciente
    console.log(checked, 'este es el check')
    console.log(seleccionPerteneciente, ' list check desplegado')
    if (checked) {
     
     // si el dato ya exite en el array no lo duplica
      if (!this.workingSelectedValuesFilter.includes(`${seleccionPerteneciente.nombre}__${value}`)) {
        this.workingSelectedValuesFilter.push(`${seleccionPerteneciente.nombre}__${value}`);
        console.log( this.workingSelectedValuesFilter,'en el check filter')
      }
                    
    } else if (seleccionPerteneciente.desplegado === false) {

      if(seleccionPerteneciente.nombre){}

      this.workingSelectedValuesFilter = this.workingSelectedValuesFilter.filter((elementos) => elementos !== value);

    const pepe = this.workingSelectedValuesFilter = this.workingSelectedValuesFilter.filter((elementos) => elementos !== value);
    console.log({pepe})
    }
  }

  
}