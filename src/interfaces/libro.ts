interface Acto {
  otorgado_por: string;
  fecha: string;
  acto: string;
  a_favor_de: string;
}

 export interface Libro {
  año: string;
  escFinal: string;
  escInicial: string;
  folios: string;
  id: string;
  libro: string;
  mes: string;
  prestado: {
      libro_prestado: boolean;
      prestado_por: string;
  };
  primer_acto: Acto;
  segundo_acto: Acto;
  tomo: string;
}