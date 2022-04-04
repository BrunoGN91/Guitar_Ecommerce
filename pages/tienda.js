import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Listado from '../components/Listado'



const Tienda = ({ guitarras }) => {


  return (
    <Layout
    pagina="tienda"
    >
        <h1 className='heading'>Nuestra Coleccion</h1>
        <Listado
        guitarras={guitarras}
        />
       
    </Layout>
  )
}


export async function getServerSideProps () {
  const urlTienda = `${process.env.API_URL}/guitarras?_sort=createdAt:desc`
  const respuesta = await fetch(urlTienda);
  const guitarras = await respuesta.json();

  return {
    props: {
      guitarras
    }
  }
}
export default Tienda