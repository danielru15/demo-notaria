import Layout from '@/layout/Layout'
import React, { FC,  useRef, useState } from 'react'
import { Box, Button, Divider, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { QRCode} from 'react-qrcode-logo';
import { collection, setDoc, doc } from "firebase/firestore"; 
import { db } from '../../../firebase';
import Swal from 'sweetalert2';

const createArchivo:FC = () => {
 
    const qrCodeRef = useRef<any>(null);

     // Función para generar la URL completa
    const generateUrl = (id: string) => {
    const baseUrl = window.location.origin;  // Obtiene el dominio actual
    return `${baseUrl}/remate/${id}`;
  };
    //  Informacion Basica libro
    const [libro, setLibro] = useState('');
    const [escInicial, setEscInicial] = useState('');
    const [escFinal, setEscFinal] = useState('');
    const [folios, setFolios] = useState('');
    const [mes, setMes] = useState('');
    const [tomo, setTomo] = useState('');
    const [año, setAño] = useState('');

  // Informacion Primer Acto
    const [acto1, setActo1] = useState('');
    const [otorgadoPor1, setOtorgadoPor1] = useState('');
    const [aFavorDe1, setAFavorDe1] = useState('');
    const [fecha1, setFecha1] = useState('');
  
    // Informacion Segundo Acto
    const [acto2, setActo2] = useState('');
    const [otorgadoPor2, setOtorgadoPor2] = useState('');
    const [aFavorDe2, setAFavorDe2] = useState('');
    const [fecha2, setFecha2] = useState('');

    // Funcion descargar QR
    const handleDownload = () => {
        if (qrCodeRef.current) {
            qrCodeRef.current.download("png", `libro${libro}`); // Descargar en formato PNG con nombre de archivo
          }
      };

      
    // Agreagr a la base de datos firebase
    const archivo = collection(db, "archivo")
    const RegistrarLibro = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await setDoc(doc(archivo,`libro${libro}`), {
                id:`libro${libro}`,
                año:año,
                mes: mes,
                tomo: tomo,
                libro: libro,
                escInicial: escInicial,
                escFinal: escInicial,
                folios: folios,
                primer_acto: {
                  acto: acto1,
                  otorgado_por: otorgadoPor2,
                  a_favor_de: aFavorDe2,
                  fecha: fecha1
                },
                segundo_acto: {
                  acto: acto2,
                  otorgado_por: otorgadoPor2,
                  a_favor_de:aFavorDe2,
                  fecha: fecha2
                },
                prestado: {
                    libro_prestado:false,
                    prestaso_por:""
                }  
            },{ merge: true })
            Swal.fire({
                icon: 'success',
                title: 'Libro añadido correctamente',
                showConfirmButton: false,
                timer: 1500
              })
              setLibro('')
              setEscInicial('')
              setEscFinal('')
              setFolios('')
              setMes('')
              setTomo('')
              setAño('')
              setActo1('')
              setOtorgadoPor1('')
              setAFavorDe1('')
              setFecha1('')
              setActo2('')
              setFecha2('')
              setOtorgadoPor2('')
              setAFavorDe2('')
            } catch (error) {
                 console.error(error)
            }
        }


  return (
    <Layout   title={'Crear registro'}>
        <Box component={"form"} sx={{ m: 1 }} onSubmit={RegistrarLibro} >
            <Grid container spacing={2}>
                <Grid size={{ xs: 6}}>
                    {/* Infomacion Libro */}
                    <Paper elevation={1} sx={{p:2}}>
                        <Typography variant='h6' component={"h6"}>Registrar Inventario</Typography>
                        <Divider sx={{my:2}}/>
                        <Grid container spacing={2}>
                    

                            
                            <Grid size={{xs:6}}>
                                <TextField 
                                    fullWidth
                                    required
                                    label={"Tomo"}
                                    value={tomo}
                                    onChange={e => setTomo(e.target.value)}
                                />
                            </Grid>
                            <Grid size={{xs:6}}>
                                <TextField 
                                    fullWidth
                                    required
                                    label={"Libro"}
                                    value={libro}
                                    onChange={e => setLibro(e.target.value)}
                                />
                            </Grid>
                            <Grid size={{xs:6}}>
                                <TextField 
                                    fullWidth
                                    required
                                    value={escInicial}
                                    label={"Esc Inicial"}
                                    onChange={e => setEscInicial(e.target.value)}
                                />
                            </Grid>
                            <Grid size={{xs:6}}>
                                <TextField 
                                    fullWidth
                                    required
                                    value={escFinal}
                                    label={"Esc Final"}
                                    onChange={e => setEscFinal(e.target.value)}
                                />
                            </Grid>
                            <Grid size={{xs:6}}>
                                <TextField 
                                    fullWidth
                                    required
                                    label={"Folios"}
                                    value={folios}
                                    onChange={e => setFolios(e.target.value)}
                                />
                            </Grid>
                            <Grid size={{xs:6}}>
                            <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Mes</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={mes}
                            label="Mes"
                            onChange={e => setMes(e.target.value)}
                            >
                                <MenuItem value={"ENERO"}>ENERO</MenuItem>
                                <MenuItem value={"FEBRERO"}>FEBRERO</MenuItem>
                                <MenuItem value={"MARZO"}>MARZO</MenuItem>
                                <MenuItem value={"ABRIL"}>ABRIL</MenuItem>
                                <MenuItem value={"MAYO"}>MAYO</MenuItem>
                                <MenuItem value={"JUNIO"}>JUNIO</MenuItem>
                                <MenuItem value={"JULIO"}>JULIO</MenuItem>
                                <MenuItem value={"AGOSTO"}>AGOSTO</MenuItem>
                                <MenuItem value={"SEPTIEMBRE"}>SEPTIEMBRE</MenuItem>
                                <MenuItem value={"OCTUBRE"}>OCTUBRE</MenuItem>
                                <MenuItem value={"NOVIEMBRE"}>NOVIEMBRE</MenuItem>
                                <MenuItem value={"DICIEMBRE"}>DICIEMBRE</MenuItem>
                            
                            </Select>
                            </FormControl>
                            </Grid>
                            <Grid size={{xs:12}}>
                                <TextField 
                                    fullWidth
                                    required
                                    label={"Año"}
                                    value={año}
                                    onChange={e => setAño(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                    {/* Primer acto */}
                    <Paper elevation={1} sx={{p:2, marginTop:3}}>
                        <Typography variant='h6' component={"h6"}>Primer Acto</Typography>
                        <Divider sx={{my:2}}/>
                        <Grid container spacing={2}>
                            <Grid size={{xs:6}}>
                                <TextField 
                                    fullWidth
                                    required
                                    label={"Acto"}
                                    value={acto1}
                                    onChange={e => setActo1(e.target.value)}
                                />
                            </Grid>
                            <Grid size={{xs:6}}>
                                <TextField 
                                    fullWidth
                                    required
                                    label={"Otorgado por"}
                                    value={otorgadoPor1}
                                    onChange={e => setOtorgadoPor1(e.target.value)}
                                />
                            </Grid>
                            <Grid size={{xs:6}}>
                                <TextField 
                                    fullWidth
                                    required
                                    value={aFavorDe1}
                                    label={"A favor de"}
                                    onChange={e => setAFavorDe1(e.target.value)}
                                
                                />
                            </Grid>
                            <Grid size={{xs:6}}>
                                <TextField 
                                
                                    fullWidth
                                    required
                                    type='date'
                                    value={fecha1}
                                    label={"Fecha"}
                                    onChange={e => setFecha1(e.target.value)}
                                
                                />
                            </Grid>
                            
                        </Grid>
                    </Paper>
                    {/* Segundo acto */}
                    <Paper elevation={1} sx={{p:2, marginTop:3}}>
                        <Typography variant='h6' component={"h6"}>Segundo Acto</Typography>
                        <Divider sx={{my:2}}/>
                        <Grid container spacing={2}>
                            <Grid size={{xs:6}}>
                                <TextField 
                                    fullWidth
                                    required
                                    label={"Acto"}
                                    value={acto2}
                                    onChange={e => setActo2(e.target.value)}
                                />
                            </Grid>
                            <Grid size={{xs:6}}>
                                <TextField 
                                    fullWidth
                                    required
                                    label={"Otorgado por"}
                                    value={otorgadoPor2}
                                    onChange={e => setOtorgadoPor2(e.target.value)}
                                />
                            </Grid>
                            <Grid size={{xs:6}}>
                                <TextField 
                                    fullWidth
                                    required
                                    value={aFavorDe2}
                                    label={"A favor de"}
                                    onChange={e => setAFavorDe2(e.target.value)}
                                
                                />
                            </Grid>
                            <Grid size={{xs:6}}>
                                <TextField 
                                    fullWidth
                                    required
                                    type='date'
                                    value={fecha2}
                                    label={"Fecha"}
                                    onChange={e => setFecha2(e.target.value)}
                                
                                />
                            </Grid>
                            
                        </Grid>
                    </Paper>
                </Grid>
                {/* GENERAR QR */}
                <Grid size={{ xs: 6}}>
                <Paper elevation={1} sx={{p:2}}>
                        <Typography variant='h6' component={"h6"}>QR</Typography>
                        <Divider sx={{my:2}}/>
                        <Typography variant='h6' component={"h6"}>Imprime el QR antes de guardar los datos</Typography>
                        {libro !== '' ?
                        <>
                           
                            <QRCode 
                                value={generateUrl(libro)} 
                                ref={qrCodeRef}  
                                size={100}
                            />
                            <Grid size={{ xs: 12}}>
                                <Button onClick={handleDownload} variant='contained' color="success">Descargar QR</Button>
                            </Grid>
                            
                            </>
                            :
                            null
                        }
                    </Paper>
                    
                </Grid>
            </Grid>
          <Button sx={{mt:2}} variant='contained' type="submit">Guardar Registro</Button>
        </Box>
      
    </Layout>
  )
}

export default createArchivo