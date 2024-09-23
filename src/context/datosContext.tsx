import { doc, getDoc } from "firebase/firestore";
import { useEffect, createContext, useState, PropsWithChildren, useRef} from "react";
import { db } from "../../firebase";



export const DatosContext = createContext<any | null>(null)

export const DatosProvider = ({ children }:PropsWithChildren) => {
    const drawerWidth:number = 240;
    const [open, setOpen] = useState<Boolean>(true)
    const [dataLibro, setDataLibro] = useState({})

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


  //traer libro por id

const getLibroid = async (id: string) => {
  if (!id) {
    console.error("El ID proporcionado es inválido o undefined");
    return;
  }
  try {
    const docRef = doc(db, "libros", id); // Asegúrate de que `id` no sea undefined
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No se encontró el documento con este ID");
    }
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};





  
    return(
        <DatosContext.Provider value={{
            getRandomColor,
            drawerWidth,
            open,
            setOpen,
            getLibroid,
            dataLibro, 
            setDataLibro
        }}>
        {children}
        </DatosContext.Provider>
    )

}