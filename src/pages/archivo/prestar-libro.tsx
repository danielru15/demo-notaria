import React, { FC, useContext, useEffect } from 'react';
import Layout from '@/layout/Layout'
import { DatosContext } from '@/context/datosContext';


const PrestarLibro:FC = () => {
  const {dataAllLibros} = useContext(DatosContext)
  console.log(dataAllLibros)
  return (

    <Layout title={'incio'}>
        <div>d</div>
    </Layout>
  
  )
}

export default PrestarLibro