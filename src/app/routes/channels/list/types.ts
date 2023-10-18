export interface Modal {
    text: string;
    value: string;
  }

  interface Subseleccion {
    nombre: string;
    seleccionado: boolean;
  }
  
  export interface Elemento {
    nombre: string;
    seleccionado: boolean;
    subselecciones: Subseleccion[];
    desplegado: boolean;
  }

  export interface Item {
    text: string;
    value: string;
  }