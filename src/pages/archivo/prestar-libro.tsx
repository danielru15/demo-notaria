import React, { FC, useContext, useEffect, useState } from 'react';
import Layout from '@/layout/Layout'
import { DatosContext } from '@/context/datosContext';
import { Libro } from '@/interfaces/libro';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';
import { doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from '../../../firebase';
import { AuthContext } from '@/context/authContext';

const PrestarLibro:FC = () => {
  const {dataAllLibros} = useContext(DatosContext)
  const [inputValue, setInputValue] = useState<string>(''); // Tipo explícito string
  const [filteredData, setFilteredData] = useState<Libro[]>([]);
  const {user } = useContext(AuthContext)
  // Función para buscar por número dentro de escInicial y escFinal
  const handleSearch = (): void => {
    const number = parseInt(inputValue);

    const result = dataAllLibros.filter((item:any) => {
      const escInicial = parseInt(item.escInicial);
      const escFinal = parseInt(item.escFinal);
      return number >= escInicial && number <= escFinal;
    });
    setFilteredData(result);
  };

  const LibroPrestar = async (id:any) => {
    const prestar = doc(db, 'archivo', id)
   
        try {
        if(filteredData[0].prestado.libro_prestado === false) {
        await updateDoc(prestar, {
           prestado:{
            prestaso_por:user.nombre,
            libro_prestado:true
           }

        })
        }
        
    } catch (error) {
        console.log(error)
    
        }
   }

  
  return (

    <Layout title={'Prestar libro'}>
      <Paper elevation={1} sx={{p:2}}>
      <TextField
    fullWidth
        label="Buscar Escritura"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Buscar
      </Button>

      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>Prestar Libro</TableCell>
              <TableCell>ID Libro</TableCell>
              <TableCell>Año</TableCell>
              <TableCell>Mes</TableCell>
              <TableCell>EscInicial</TableCell>
              <TableCell>EscFinal</TableCell>
              <TableCell>Libro prestado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.prestado.libro_prestado === false ? <Button variant="contained" onClick={() => LibroPrestar(row.id)} color="success">prestar</Button> :null }</TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.año}</TableCell>
                <TableCell>{row.mes}</TableCell>
                <TableCell>{row.escInicial}</TableCell>
                <TableCell>{row.escFinal}</TableCell>
                <TableCell>{row.prestado.libro_prestado}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
    </Layout>
  
  )
}

export default PrestarLibro