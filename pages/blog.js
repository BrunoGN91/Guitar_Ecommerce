import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog'


const Blog = ({entradas}) => {

  return (
    <Layout
    pagina="blog"
    >
        <main className='contenedor'>
         <ListadoBlog
         entradas={entradas}
         />
        </main>
    </Layout>
  )
}

export async function getStaticProps() {

      const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs?_sort=published_at:desc`
      const respuesta = await fetch(url);
      const entradas = await respuesta.json()
    
    return {
      props: {
          entradas: entradas
      }
    }
}
export default Blog