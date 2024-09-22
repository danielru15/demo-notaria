import React from 'react';
import { Grid, Typography, Box, Paper } from '@mui/material';

const NotariaDocument = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Grid container spacing={0} sx={{ border: '1px solid black' }}>
          {/* Header */}
          <Grid item xs={12} sx={{ borderBottom: '1px solid black' }}>
            <Typography variant="h4" align="center">
              NOTARÍA 15
            </Typography>
            <Typography variant="subtitle1" align="center">
              Fabio Alberto Ortega Márquez
            </Typography>
          </Grid>

          {/* LIBRO NRO, CONSTA DE, FOLIOS */}
          <Grid item xs={4} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>LIBRO NRO</strong></Typography>
            <Typography variant="body2">16294</Typography>
          </Grid>
          <Grid item xs={4} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>CONSTA DE</strong></Typography>
            
          </Grid>
          <Grid item xs={4} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>FOLIOS</strong></Typography>
            <Typography variant="body2">962</Typography>
          </Grid>

          {/* COMPRENDE DE LA ESCRITURA */}
          <Grid item xs={8} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>COMPRENDE DE LA ESCRITURA NRO</strong></Typography>
          </Grid>
          <Grid item xs={4} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body2">962</Typography>
          </Grid>

          {/* DE FECHA, ACTO, OTORGADO POR, A FAVOR DE */}
          <Grid item xs={6} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>DE FECHA</strong></Typography>
            <Typography variant="body2">FEBRERO 13 - 2019</Typography>
          </Grid>
          <Grid item xs={6} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>ACTO</strong></Typography>
            <Typography variant="body2">CANCELACIÓN HIPOTECA</Typography>
          </Grid>

          <Grid item xs={6} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>OTORGADO POR</strong></Typography>
            <Typography variant="body2">GABRIEL DE JESUS ARANGO PUERTA</Typography>
          </Grid>
          <Grid item xs={6} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>A FAVOR DE</strong></Typography>
            <Typography variant="body2">CAROLINA MARTINEZ BANDERA</Typography>
          </Grid>

          <Grid item xs={12} sx={{ border: '1px solid black', padding: 3 }}>
          
          </Grid>
          {/* Segunda escritura */}
          <Grid item xs={6} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>A LA ESCRITURA NRO</strong></Typography>
            <Typography variant="body2">966</Typography>
          </Grid>
          <Grid item xs={6} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>DE FECHA</strong></Typography>
            <Typography variant="body2">ABRIL 13 - 2019</Typography>
          </Grid>

          <Grid item xs={6} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>ACTO</strong></Typography>
            <Typography variant="body2">LIBERACIÓN PARCIAL DE HIPOTECA</Typography>
          </Grid>
          <Grid item xs={6} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>OTORGADO POR</strong></Typography>
            <Typography variant="body2">BANCOLOMBIA SA</Typography>
          </Grid>
          <Grid item xs={6} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1"><strong>A FAVOR DE</strong></Typography>
            <Typography variant="body2">JOAQUIN GUILLERMO SANCHEZ</Typography>
          </Grid>

          {/* TOMO */}
          <Grid item xs={12} sx={{ border: '1px solid black', padding: 1 }}>
            <Typography variant="body1" align="center"><strong>TOMO</strong></Typography>
            <Typography variant="body2" align="center">29</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default NotariaDocument;
