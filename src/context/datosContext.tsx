import { useEffect, createContext, useState, PropsWithChildren, useRef} from "react";



export const DatosContext = createContext<any | null>(null)

export const DatosProvider = ({ children }:PropsWithChildren) => {
    const drawerWidth:number = 240;
    const [open, setOpen] = useState<Boolean>(true)
  

  // Función para generar un color aleatorio en formato hexadecimal basado en una cadena
  const getRandomColor= (nombre: string):string  =>{
    const vibrantColors = ['#a80000', '#1c00a8', '#8d00a3', '#002510', '#005ed1','#bb002c', '#ef6902'];
    let hash = 0;
    for (let i = 0; i < nombre.length; i++) {
      hash = nombre.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colorIndex = Math.abs(hash) % vibrantColors.length;
    return vibrantColors[colorIndex];
  }




  
    return(
        <DatosContext.Provider value={{
            getRandomColor,
            drawerWidth,
            open,
            setOpen,
            
        }}>
        {children}
        </DatosContext.Provider>
    )

}