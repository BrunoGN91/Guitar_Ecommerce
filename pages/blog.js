import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Entrada from '../components/Entrada'
import styles from '../styles/Blog.module.css'


const Blog = ({entradas}) => {

  return (
    <Layout
    pagina="blog"
    >
        <main className='contenedor'>
          <h2 className='heading'>
        Blog
          </h2>

          <div className={styles.blog}>
        {entradas.map(entrada => (
          <Entrada
          entrada={entrada}
          key={entrada.id}
          />
        ))}
          </div>
        </main>
    </Layout>
  )
}

export async function getStaticProps() {

      const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs`
      const respuesta = await fetch(url);
      const entradas = await respuesta.json()
    
    return {
      props: {
          entradas: entradas
      }
    }
}
export default Blog