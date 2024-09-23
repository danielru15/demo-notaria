
import Layout from '@/layout/Layout'
import React from 'react'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { auth, db } from '../../../firebase'
import { collection, query, where,  doc, setDoc, getDocs, getDoc } from "firebase/firestore";
import { Box, Button, Divider, Paper, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

const createUser = () => {
    
  return (

    <Layout title={'Registrar Usuario'}>
        <Box component={"form"} sx={{ m: 1 }} >
            <Grid container spacing={2}>
                <Grid size={{ xs: 6}}>
                    <Paper elevation={1} sx={{p:2}}>
                        <Typography variant='h6' component={"h6"}>Información personal</Typography>
                        <Divider sx={{my:2}}/>
                        <Grid container spacing={2}>
                            <Grid size={{xs:6}}>
                                <TextField 
                                    fullWidth
                                    required
                                    label={"Nombre"}
                                />
                            </Grid>
                            <Grid size={{xs:6}}>
                                <TextField 
                                    fullWidth
                                    required
                                    label={"Apellido"}
                                />
                            </Grid>
                            <Grid size={{xs:12}}>
                                <TextField 
                                    fullWidth
                                    required
                                    label={"Cargo"}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 6}}>
                <Paper elevation={1} sx={{p:2}}>
                        <Typography variant='h6' component={"h6"}>Información de Cuenta</Typography>
                        <Divider sx={{my:2}}/>
                        <Grid container spacing={2}>
                            <Grid size={{xs:6}}>
                                <TextField 
                                    fullWidth
                                    required
                                    label={"email"}
                                />
                            </Grid>
                            <Grid size={{xs:6}}>
                                <TextField 
                                    fullWidth
                                    required
                                    label={"contraseña"}
                                />
                            </Grid>
                            <Grid size={{xs:12}}>
                                <TextField 
                                    fullWidth
                                    required
                                    label={"celular"}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                    
                </Grid>
            </Grid>
          <Button sx={{mt:2}} variant='contained' type="submit">Registrar usuario</Button>
        </Box>
      
    </Layout>
  
  )
}

export default createUser