import React, { FC, useContext, useEffect } from 'react';
import Layout from '@/layout/Layout'
import { DatosContext } from '@/context/datosContext';
import { Libro } from '@/interfaces/libro';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Divider } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid2'
const index:FC = () => {
  const {dataAllLibros} = useContext(DatosContext)

// Mapeo de meses a números para ordenación
const mesMap: { [key: string]: number } = {
  ENERO: 1,
  FEBRERO: 2,
  MARZO: 3,
  ABRIL: 4,
  MAYO: 5,
  JUNIO: 6,
  JULIO: 7,
  AGOSTO: 8,
  SEPTIEMBRE: 9,
  OCTUBRE: 10,
  NOVIEMBRE: 11,
  DICIEMBRE: 12,
};
 // Datos para la tabla de libros
 const columns = [
  { field: 'año', headerName: 'año', width: 150 },
  { field: 'mes', headerName: 'mes', width: 150 },
  { field: 'tomo', headerName: 'tomo', width: 150 },
  { field: 'libro', headerName: 'libro', width: 150 },
  { field: 'escInicial', headerName: 'escInicial', width: 200 },
  { field: 'escFinal', headerName: 'escFinal', width: 200 },
  { field: 'folios', headerName: 'folios', width: 200 }
];

// Ordenar los libros por año y mes
const sortedLibros = dataAllLibros.sort((a: Libro, b: Libro) => {
  const yearDiff = parseInt(b.año) - parseInt(a.año);
  const monthDiff = mesMap[b.mes] - mesMap[a.mes];
  return yearDiff !== 0 ? yearDiff : monthDiff;
});

const rows = sortedLibros.map((libro: Libro) => ({
  id: libro.id,
  año: libro.año,
  escInicial: libro.escInicial,
  escFinal: libro.escFinal,
  folios: libro.folios,
  libro: libro.libro,
  mes: libro.mes,
  tomo: libro.tomo,
}));

 // Filtrar libros donde libro_prestado es true
 const filteredLibros = dataAllLibros.filter((libro: Libro) => libro.prestado.libro_prestado);

 console.log(filteredLibros)
  return (

    <Layout title={'INFORME ARCHIVO'}>
      <Grid container spacing={2} sx={{mb:3}}>
      <Grid size={{xs:6}}>
        
      </Grid>
      <Grid size={{xs:6}}>
      <Paper elevation={1} sx={{p:2}}>
        <Typography variant='h6' component={"h6"}>Libros prestados</Typography>
        <Divider sx={{my:2}}/>
        <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Libro</TableCell>
                            <TableCell>Prestado Por</TableCell>
                            <TableCell>Libro prestado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredLibros.map((libro:Libro) => (
                            <TableRow key={libro.id}>
                                <TableCell>{libro.libro}</TableCell>
                                <TableCell>{libro?.prestado?.prestaso_por }</TableCell>
                                <TableCell>{libro?.prestado?.libro_prestado === true ? 'SI' : 'NO' }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        

      </Paper>
      </Grid>
      </Grid>
      <Typography variant='h6' component={"h6"}>Todos los libros</Typography>
      <Divider sx={{my:2}}/>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
          paginationModel: {
          pageSize: 20,
          },},}}
          
        pageSizeOptions={[20,10,20]}/>
    </Layout>
  
  )
}

export default index