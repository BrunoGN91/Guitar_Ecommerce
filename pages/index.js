import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'


export default function Home({guitarras, cursos, entradas}) {
  return (
      <Layout
      pagina='Inicio'
      guitarra={guitarras[3]}
      >
      <main className='contenedor'>
      <h1 className='heading'>Nuestra Colección</h1>
      <Listado 
      guitarras={guitarras}
      />
      </main>
       <Curso
        cursos={cursos}
       />
       <section className='contenedor'>
        <ListadoBlog 
        entradas={entradas}
        />
      </section>
      </Layout>
  )
}


export async function getServerSideProps() {

  const urlGuitarra = `${process.env.API_URL}/guitarras`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=published_at:desc`


  const [resGuitarras, resCursos, resEntradas] = await Promise.all([
    fetch(urlGuitarra),
    fetch(urlCursos),
    fetch(urlBlog)
  ])

  const [guitarras, cursos, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resEntradas.json()
  ])

  console.log(entradas);
  return {
      props: {
          guitarras,
          cursos,
          entradas
      }
  }
}