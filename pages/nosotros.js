import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'


const Nosotros = () => {
  return (
    <Layout
    pagina="nosotros"
    >
        <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>
        <div className={styles.contenido}>
          <Image alt='imagen nosotros'layout='responsive' width={400} height={300} src='/img/nosotros.jpg'/>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptatibus blanditiis nihil accusamus deserunt harum, dolores, neque sapiente nisi dolorum ipsum quaerat sint sunt officiis repudiandae aut. Est, omnis culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quam corrupti sit, veniam quis, distinctio ex tempore dicta assumenda voluptatem, sequi quos eligendi necessitatibus exercitationem animi. Eaque est iure amet.</p>
          </div>
        </div>
        </main>
    </Layout>
  )
}
export default Nosotros