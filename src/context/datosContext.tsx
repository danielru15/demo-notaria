import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";
import { useEffect, createContext, useState, PropsWithChildren, useRef} from "react";
import { db } from "../../firebase";
import { Libro } from "@/interfaces/libro";



export const DatosContext = createContext<any | null>(null)

export const DatosProvider = ({ children }:PropsWithChildren) => {
    const drawerWidth:number = 240;
    const [open, setOpen] = useState<Boolean>(true)

    // trae la data de un solo libro por id
    const [dataLibro, setDataLibro] = useState({})
    // trae todos los libros
    const [dataAllLibros, setDataAllLibros] = useState<Libro[]>([])

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
    const docRef = doc(db, "archivo", id); // Asegúrate de que `id` no sea undefined
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

//
useEffect(() => {
  const todosLibros = query(collection(db, 'archivo'));

  // Establecer un observador para recibir actualizaciones en tiempo real
  const unsubscribe = onSnapshot(todosLibros, (querySnapshot) => {
      // Iterar a través de los cambios en los documentos
      querySnapshot.docChanges().forEach((change) => {
          // Crear un objeto newData con el ID y los datos del documento
          const newData: Libro = { id: change.doc.id, ...change.doc.data() } as Libro;

          // Manejar los diferentes tipos de cambios
          if (change.type === 'added') {
              // Verificar si el dato ya existe en el estado antes de agregarlo
              if (!dataAllLibros.some(item => item.id === newData.id)) {
                  setDataAllLibros(prevState => [...prevState, newData]);
              }
          } else if (change.type === 'modified') {
              // Actualizar el dato modificado en el estado
              setDataAllLibros(prevState =>
                  prevState.map(item =>
                      item.id === newData.id ? newData : item
                  )
              );
          } else if (change.type === 'removed') {
              // Eliminar el dato del estado si fue removido
              setDataAllLibros(prevState =>
                  prevState.filter(item => item.id !== newData.id)
              );
          }
      });
  }, (error) => {
      console.log(error);
  });

  // Función de limpieza: desuscribirse cuando el componente se desmonte
  return () => {
      unsubscribe();
  };
}, []);



  
    return(
        <DatosContext.Provider value={{
            getRandomColor,
            drawerWidth,
            open,
            setOpen,
            getLibroid,
            dataLibro, 
            setDataLibro,
            dataAllLibros
        }}>
        {children}
        </DatosContext.Provider>
    )

}