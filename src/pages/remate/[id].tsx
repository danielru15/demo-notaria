import React, { FC, useContext, useEffect } from 'react';
import {  Typography, Box, Paper } from '@mui/material';
import { useRouter } from 'next/router';
import { DatosContext } from '@/context/datosContext';
import Grid from '@mui/material/Grid2'
const NotariaDocument :FC= () => {
  const {dataLibro, setDataLibro,getLibroid} = useContext(DatosContext)
  const router = useRouter();
  const { id } = router.query;
 
  useEffect(() => {
    if(id && typeof id === 'string'){
    getLibroid (id as string).then((data:any)=> {
      if (data) {
      setDataLibro(data)
      } 
      else {
        console.log('No se encontraron datos para este ID');
      }
    }).catch((error:any) => {
    console.error('Error al obtener los datos:', error);
    })
    }
    
  }, [id])


  return (
    <Box sx={{ padding: 2 }}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Grid container spacing={0} sx={{ border: '1px solid black' }}>
          {/* Header */}
          <Grid size={{xs:12}} sx={{ borderBottom: '1px solid black' }}>
            <Typography variant="h4" align="center">
              NOTARÍA 15
            </Typography>
            <Typography variant="subtitle1" align="center">
              Fabio Alberto Ortega Márquez
            </Typography>
          </Grid>

          {/* LIBRO NRO, CONSTA DE, FOLIOS */}
          <Grid size={{xs:4}} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>LIBRO NRO</strong></Typography>
            <Typography variant="body2">{dataLibro.libro}</Typography>
          </Grid>
          <Grid size={{xs:4}} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>CONSTA DE</strong></Typography>
            
          </Grid>
          <Grid size={{xs:4}} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>FOLIOS</strong></Typography>
            <Typography variant="body2">{dataLibro.folios}</Typography>
          </Grid>

          {/* COMPRENDE DE LA ESCRITURA */}
          <Grid  size={{xs:8}}  sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>COMPRENDE DE LA ESCRITURA NRO</strong></Typography>
          </Grid>
          <Grid size={{xs:4}} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body2">{dataLibro.escInicial}</Typography>
          </Grid>

          {/* DE FECHA, ACTO, OTORGADO POR, A FAVOR DE */}
          <Grid size={{xs:6}} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>DE FECHA</strong></Typography>
            <Typography variant="body2">{dataLibro?.primer_acto?.fecha}</Typography>
          </Grid>
          <Grid size={{xs:6}} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>ACTO</strong></Typography>
            <Typography variant="body2">{dataLibro?.primer_acto?.acto}</Typography>
          </Grid>

          <Grid size={{xs:6}} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>OTORGADO POR</strong></Typography>
            <Typography variant="body2">{dataLibro?.primer_acto?.otorgado_por}</Typography>
          </Grid>
          <Grid size={{xs:6}} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>A FAVOR DE</strong></Typography>
            <Typography variant="body2">{dataLibro?.primer_acto?.a_favor_de}</Typography>
          </Grid>

          <Grid size={{xs:12}} sx={{ border: '1px solid black', padding: 3 }}>
          
          </Grid>
          {/* Segunda escritura */}
          <Grid size={{xs:6}} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>A LA ESCRITURA NRO</strong></Typography>
            <Typography variant="body2">{dataLibro?.escFinal}</Typography>
          </Grid>
          <Grid size={{xs:6}} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>DE FECHA</strong></Typography>
            <Typography variant="body2">{dataLibro?.segundo_acto?.fecha}</Typography>
          </Grid>

          <Grid size={{xs:6}} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>ACTO</strong></Typography>
            <Typography variant="body2">{dataLibro?.segundo_acto?.acto}</Typography>
          </Grid>
          <Grid size={{xs:6}} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>OTORGADO POR</strong></Typography>
            <Typography variant="body2">{dataLibro?.segundo_acto?.otorgado_por}</Typography>
          </Grid>
          <Grid size={{xs:6}} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>A FAVOR DE</strong></Typography>
            <Typography variant="body2">{dataLibro?.segundo_acto?.a_favor_de}</Typography>
          </Grid>

          {/* TOMO */}
          <Grid size={{xs:12}} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1" align="center"><strong>TOMO</strong></Typography>
            <Typography variant="body2" align="center">{dataLibro?.tomo}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default NotariaDocument;
