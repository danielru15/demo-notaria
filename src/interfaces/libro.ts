// Definir tipos de datos para el formulario
export interface Acto {
    acto: string;
    otorgado_por: string;
    a_favor_de: string;
    fecha: string;
  }
  
 export interface Libro {
    mes: string;
    tomo: string;
    libro: string;
    escInicial: string;
    escFinal: string;
    folios: string;
    primer_acto: Acto;
    segundo_acto: Acto;
  }