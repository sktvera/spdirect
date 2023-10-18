interface Subseleccion {
    nombre: string;
    
  }
  
  export interface Elemento {
    nombre: string;
    seleccionado: boolean;
    subselecciones: Subseleccion[];
    desplegado: boolean;
  }