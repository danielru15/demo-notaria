import { AuthProvider } from '@/context/authContext' 
import Layout from '@/layout/Layout'
import React from 'react'


const index = () => {
    
  return (
    <AuthProvider>
    <Layout title={'incio'}>
        <div>d</div>
    </Layout>
    </AuthProvider>
  )
}

export default index